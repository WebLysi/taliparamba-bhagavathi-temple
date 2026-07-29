import React, { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import audioSrc from '@/assets/background-music.mp3';

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (!hasStarted) {
      audio.volume = 0.1;
      audio.muted = false;
      audio.play()
        .then(() => {
          setHasStarted(true);
          setIsMuted(false);
        })
        .catch(() => {
          setIsMuted(true);
        });
    } else {
      const nextMuteState = !isMuted;
      audio.muted = nextMuteState;
      setIsMuted(nextMuteState);
    }
  };

  return (
    <div className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 z-50">
      <div className="bg-black/40 backdrop-blur-md rounded-full border border-white/10 shadow-lg p-1">
        <audio ref={audioRef} src={audioSrc} loop />

        <Button
          variant="ghost"
          onClick={toggleMute}
          aria-label={isMuted ? "Tap for music" : "Mute background music"}
          className="flex items-center gap-2 rounded-full px-3 py-2 hover:bg-white/20 active:bg-white/30 text-white touch-manipulation"
        >
          {!hasStarted && (
            <span className="text-xs whitespace-nowrap text-white">
              🎵 Tap for Music
            </span>
          )}

          {isMuted ? (
            <VolumeX className="h-5 w-5 text-white" />
          ) : (
            <Volume2 className="h-5 w-5 text-white" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default BackgroundMusic;