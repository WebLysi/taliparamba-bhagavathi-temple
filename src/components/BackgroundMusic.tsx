import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import audioSrc from '@/assets/background-music.mp3';

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;
    let hasStarted = false;
    let listenersAttached = false;
    let userGestureHandler: ((e: Event) => void) | null = null;

    // Function to start playing audio - must be called synchronously from user gesture
    const startAudio = () => {
      // Prevent multiple calls
      if (hasStarted || !audio.paused) {
        removeListeners();
        return;
      }
      
      // Call play() synchronously to maintain user gesture context
      try {
        audio.muted = false;
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              hasStarted = true;
              setIsPlaying(true);
              setIsMuted(false);
              // Remove all listeners once audio starts successfully
              removeListeners();
            })
            .catch((error) => {
              // Silently fail and keep listeners attached to allow retry on next interaction
              // Don't log errors to avoid console spam
            });
        }
      } catch (error) {
        // Silently handle errors
      }
    };

    // Function to remove all event listeners
    const removeListeners = () => {
      if (!listenersAttached || !userGestureHandler) return;
      listenersAttached = false;
      document.removeEventListener('touchend', userGestureHandler);
      document.removeEventListener('touchstart', userGestureHandler);
      document.removeEventListener('click', userGestureHandler);
      document.removeEventListener('keydown', userGestureHandler);
      userGestureHandler = null;
    };

    // Function to attach listeners
    const attachListeners = () => {
      if (listenersAttached || hasStarted) return;
      listenersAttached = true;
      
      // Create handler that calls startAudio immediately to maintain user gesture context
      userGestureHandler = () => {
        startAudio();
      };
      
      // Touch events (mobile - primary method)
      document.addEventListener('touchend', userGestureHandler);
      document.addEventListener('touchstart', userGestureHandler);
      // Click events (desktop/mobile)
      document.addEventListener('click', userGestureHandler);
      // Keyboard events
      document.addEventListener('keydown', userGestureHandler);
    };

    // Try autoplay first (muted to bypass restrictions)
    audio.muted = true;
    const autoplayPromise = audio.play();

    if (autoplayPromise !== undefined) {
      autoplayPromise
        .then(() => {
          // Successfully started playing (muted)
          hasStarted = true;
          setIsPlaying(true);
          // Unmute after a short delay
          setTimeout(() => {
            if (audio) {
              audio.muted = false;
              setIsMuted(false);
            }
          }, 100);
        })
        .catch((error) => {
          // Autoplay blocked, attach listeners for user interaction
          setIsPlaying(false);
          attachListeners();
        });
    } else {
      // If play() returns undefined, attach listeners
      attachListeners();
    }

    // Cleanup function
    return () => {
      removeListeners();
    };
  }, []);

  const toggleMute = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!audioRef.current) return;
    
    const audio = audioRef.current;
    
    // If audio is paused or not playing, try to start it first
    if (audio.paused || !isPlaying) {
      audio.muted = false;
      audio.play()
        .then(() => {
          setIsPlaying(true);
          setIsMuted(false);
        })
        .catch((error) => {
          // Silently handle error - user can try again
        });
    } else {
      // Toggle mute state
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="group flex items-center p-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 shadow-lg hover:border-gold/50 transition-all duration-300">
        <audio ref={audioRef} src={audioSrc} loop autoPlay />

        <Button
          variant="ghost"
          size="icon"
          className="rounded-full w-11 h-11 sm:w-10 sm:h-10 hover:bg-white/20 active:bg-white/30 text-white touch-manipulation"
          onClick={toggleMute}
          onTouchEnd={(e) => {
            e.preventDefault();
            toggleMute(e);
          }}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5" />
          ) : (
            <Volume2 className="h-5 w-5" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default BackgroundMusic;
