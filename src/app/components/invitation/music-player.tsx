"use client";
import { Music, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface MusicPlayerProps {
  autoStart: boolean;
}

export const MusicPlayer = ({ autoStart }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (autoStart && audioRef.current) {
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(err => {
            console.error("Error al reproducir audio. Revisá la ruta:", err);
            setIsPlaying(false);
          });
      }
    }
  }, [autoStart]);

  const toggle = () => {
    if (isPlaying) audioRef.current?.pause();
    else audioRef.current?.play().catch(e => console.error("Error manual:", e));
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Probá cambiar el nombre aquí y en el archivo a algo simple si falla */}
 <audio 
  ref={audioRef} 
  src="/images/Wrecking-Ball.mp3" // <--- Agregamos /images/ antes del nombre
  loop 
  preload="auto"
/>
      <button 
        onClick={toggle}
        className="bg-primary text-background p-4 rounded-full shadow-2xl transition-all active:scale-95 flex items-center justify-center"
      >
        {isPlaying ? <Pause size={20} /> : <Music size={20} className="animate-pulse" />}
      </button>
    </div>
  );
};