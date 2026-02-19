import { useEffect, useRef, useState, ReactNode } from "react";

interface FadeInSectionProps {
  children: (isVisible: boolean) => ReactNode;
  className?: string;
}

const FadeInSection = ({ children, className = "" }: FadeInSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"} ${className}`}
    >
      {children(isVisible)}
    </div>
  );
};

export default FadeInSection;
