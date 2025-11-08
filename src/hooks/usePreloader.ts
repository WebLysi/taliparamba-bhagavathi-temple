import { useEffect, useRef } from 'react';

/**
 * Hook to track image loading and signal when all images are loaded
 * This helps the preloader wait for all React-loaded images before hiding
 * It scans the DOM for all img elements and waits for them to load
 */
export const usePreloader = () => {
  const hasDispatchedRef = useRef(false);
  const trackedImagesRef = useRef<Set<HTMLImageElement>>(new Set());
  const loadedCountRef = useRef(0);
  const totalImagesRef = useRef(0);
  const checkIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const checkAllLoaded = () => {
      if (loadedCountRef.current >= totalImagesRef.current && totalImagesRef.current > 0 && !hasDispatchedRef.current) {
        hasDispatchedRef.current = true;
        window.dispatchEvent(new CustomEvent('allImagesLoaded'));
      }
    };

    const trackImage = (img: HTMLImageElement) => {
      // Skip if already tracked
      if (trackedImagesRef.current.has(img)) {
        return;
      }

      trackedImagesRef.current.add(img);
      totalImagesRef.current++;

      // If image is already loaded, verify it's fully decoded
      if (img.complete && img.naturalWidth > 0 && img.naturalHeight > 0) {
        // Use decode() if available to ensure image is fully decoded
        if (img.decode) {
          img.decode()
            .then(() => {
              loadedCountRef.current++;
              checkAllLoaded();
            })
            .catch(() => {
              // If decode fails, still count as loaded if natural dimensions are valid
              if (img.naturalWidth > 0 && img.naturalHeight > 0) {
                loadedCountRef.current++;
                checkAllLoaded();
              }
            });
        } else {
          // Fallback for browsers without decode()
          loadedCountRef.current++;
          checkAllLoaded();
        }
      } else {
        // Wait for image to load
        const onLoad = () => {
          // Ensure image is fully decoded before counting as loaded
          if (img.decode) {
            img.decode()
              .then(() => {
                loadedCountRef.current++;
                checkAllLoaded();
              })
              .catch(() => {
                // If decode fails but image loaded, still count it
                if (img.naturalWidth > 0 && img.naturalHeight > 0) {
                  loadedCountRef.current++;
                  checkAllLoaded();
                }
              });
          } else {
            // Fallback: verify natural dimensions
            if (img.naturalWidth > 0 && img.naturalHeight > 0) {
              loadedCountRef.current++;
              checkAllLoaded();
            }
          }
        };
        const onError = () => {
          // Count errors as loaded to not block preloader
          loadedCountRef.current++;
          checkAllLoaded();
        };

        img.addEventListener('load', onLoad, { once: true });
        img.addEventListener('error', onError, { once: true });
      }
    };

    const checkImages = () => {
      // Find all img elements in the document
      const images = Array.from(document.querySelectorAll('img')) as HTMLImageElement[];
      
      images.forEach(trackImage);

      // If no images found, wait a bit and check again
      if (images.length === 0) {
        setTimeout(() => {
          if (!hasDispatchedRef.current) {
            const newImages = Array.from(document.querySelectorAll('img')) as HTMLImageElement[];
            if (newImages.length === 0 && !hasDispatchedRef.current) {
              hasDispatchedRef.current = true;
              window.dispatchEvent(new CustomEvent('allImagesLoaded'));
            } else {
              newImages.forEach(trackImage);
            }
          }
        }, 300);
      } else {
        checkAllLoaded();
      }
    };

    // Use MutationObserver to watch for new images being added
    let observer: MutationObserver | null = null;
    let bodyCheckInterval: ReturnType<typeof setInterval> | null = null;
    
    const startObserver = () => {
      if (!document.body || observer) return;
      
      observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              // Check if the added node is an img
              if (element.tagName === 'IMG') {
                trackImage(element as HTMLImageElement);
              }
              // Check for img elements within the added node
              const images = element.querySelectorAll?.('img');
              if (images) {
                images.forEach((img) => trackImage(img as HTMLImageElement));
              }
            }
          });
        });
      });

      // Start observing
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    };

    // Start observer when body is available
    if (document.body) {
      startObserver();
    } else {
      // Wait for body to be available
      bodyCheckInterval = setInterval(() => {
        if (document.body) {
          if (bodyCheckInterval) {
            clearInterval(bodyCheckInterval);
            bodyCheckInterval = null;
          }
          startObserver();
        }
      }, 50);
      
      setTimeout(() => {
        if (bodyCheckInterval) {
          clearInterval(bodyCheckInterval);
          bodyCheckInterval = null;
        }
      }, 5000); // Safety timeout
    }

    // Initial check after a delay to allow React to render
    const timeoutId = setTimeout(() => {
      checkImages();
      // Also do periodic checks to catch images that load later
      checkIntervalRef.current = setInterval(() => {
        if (!hasDispatchedRef.current) {
          checkImages();
        } else {
          if (checkIntervalRef.current) {
            clearInterval(checkIntervalRef.current);
            checkIntervalRef.current = null;
          }
        }
      }, 200);
      
      // Clear interval after 15 seconds
      setTimeout(() => {
        if (checkIntervalRef.current) {
          clearInterval(checkIntervalRef.current);
          checkIntervalRef.current = null;
        }
      }, 15000);
    }, 300);

    // Also check when DOM is ready
    if (document.readyState === 'complete') {
      clearTimeout(timeoutId);
      checkImages();
    } else {
      window.addEventListener('load', () => {
        clearTimeout(timeoutId);
        setTimeout(checkImages, 300);
      }, { once: true });
    }

    return () => {
      clearTimeout(timeoutId);
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
        checkIntervalRef.current = null;
      }
      if (bodyCheckInterval) {
        clearInterval(bodyCheckInterval);
      }
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);
};

