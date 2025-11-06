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

      // If image is already loaded
      if (img.complete && img.naturalHeight !== 0) {
        loadedCountRef.current++;
        checkAllLoaded();
      } else {
        // Wait for image to load
        const onLoad = () => {
          loadedCountRef.current++;
          checkAllLoaded();
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

    // Initial check after a short delay to allow React to render
    const timeoutId = setTimeout(checkImages, 100);

    // Also check when DOM is ready
    if (document.readyState === 'complete') {
      clearTimeout(timeoutId);
      checkImages();
    } else {
      window.addEventListener('load', () => {
        clearTimeout(timeoutId);
        setTimeout(checkImages, 100);
      }, { once: true });
    }

    return () => {
      clearTimeout(timeoutId);
      if (bodyCheckInterval) {
        clearInterval(bodyCheckInterval);
      }
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);
};

