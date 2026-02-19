import { useState, useRef } from "react";

const VideoIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [fading, setFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnd = () => {
    setFading(true);
    setTimeout(onComplete, 800);
  };

  const handleSkip = () => {
    if (videoRef.current) videoRef.current.pause();
    handleEnd();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 ${fading ? "opacity-0" : "opacity-100"}`}
    >
      <video
        ref={videoRef}
        src="/intro-video.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleEnd}
        className="h-full w-full object-cover"
      />
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 text-sm text-white/60 hover:text-white transition-colors"
      >
        Skip
      </button>
    </div>
  );
};

export default VideoIntro;
