
import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  stagger?: boolean;
  delay?: number;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = '',
  threshold = 0.15,
  stagger = false,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add delay if needed
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          } else {
            setIsVisible(true);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  const baseClass = stagger ? 'reveal-stagger' : 'reveal';
  const visibilityClass = isVisible ? 'active' : '';

  return (
    <div 
      ref={ref} 
      className={`${baseClass} ${visibilityClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
