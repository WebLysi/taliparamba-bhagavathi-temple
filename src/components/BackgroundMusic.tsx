import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import audioSrc from '@/assets/background-music.mp3';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isInteracted, setIsInteracted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      audio.muted = true;

      // Listen for any user interaction to start music
      const startMusicOnInteraction = () => {
        if (!isInteracted && audio) {
          audio.muted = false; // Unmute on first interaction
          audio.play().catch((e) => console.log('Play failed:', e));
          setIsMuted(false);
          setIsInteracted(true);
          
          // Remove listeners after first interaction
          ['click', 'keydown', 'touchstart'].forEach((event) =>
            document.removeEventListener(event, startMusicOnInteraction)
          );
        }
      };

      ['click', 'keydown', 'touchstart'].forEach((event) =>
        document.addEventListener(event, startMusicOnInteraction, { once: true })
      );

      return () => {
        ['click', 'keydown', 'touchstart'].forEach((event) =>
          document.removeEventListener(event, startMusicOnInteraction)
        );
      };
    }
  }, [isInteracted]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    audioRef.current.muted = isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="group flex items-center p-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 shadow-lg hover:border-gold/50 transition-all duration-300">
        <audio ref={audioRef} src={audioSrc} loop autoPlay />

        <Button
          variant="ghost"
          size="icon"
          className="rounded-full w-10 h-10 hover:bg-white/20 text-white"
          onClick={toggleMute}
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
