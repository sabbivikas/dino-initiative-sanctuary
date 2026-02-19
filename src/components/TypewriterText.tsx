import { useState, useEffect, useRef } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  startDelay?: number;
  active?: boolean;
  onComplete?: () => void;
  className?: string;
  as?: "h2" | "p" | "span";
}

const TypewriterText = ({
  text,
  speed = 30,
  startDelay = 0,
  active = false,
  onComplete,
  className = "",
  as: Tag = "span",
}: TypewriterTextProps) => {
  const [displayedCount, setDisplayedCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const timeout = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timeout);
  }, [active, startDelay]);

  useEffect(() => {
    if (!started || done) return;

    intervalRef.current = window.setInterval(() => {
      setDisplayedCount((prev) => {
        if (prev >= text.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setDone(true);
          onComplete?.();
          return prev;
        }
        return prev + 1;
      });
    }, speed);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [started, done, text, speed, onComplete]);

  if (!active && !done) return <Tag className={className}>&nbsp;</Tag>;

  return (
    <Tag className={className}>
      {text.slice(0, displayedCount)}
      {started && !done && <span className="typewriter-cursor">|</span>}
    </Tag>
  );
};

export default TypewriterText;
