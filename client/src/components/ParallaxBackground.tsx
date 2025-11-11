import { useEffect, useState } from 'react';

export default function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax-background">
      <div
        className="parallax-layer parallax-layer-1"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="absolute top-[10%] left-[15%] w-32 h-96 bg-muted/20 rounded-sm" />
        <div className="absolute top-[45%] left-[70%] w-24 h-80 bg-accent/15 rounded-sm" />
        <div className="absolute top-[75%] left-[40%] w-28 h-72 bg-secondary/10 rounded-sm" />
      </div>
      <div
        className="parallax-layer parallax-layer-2"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute top-[20%] left-[60%] w-20 h-64 bg-primary/15 rounded-sm" />
        <div className="absolute top-[55%] left-[25%] w-36 h-56 bg-muted/25 rounded-sm" />
        <div className="absolute top-[85%] left-[80%] w-24 h-48 bg-accent/20 rounded-sm" />
      </div>
      <div
        className="parallax-layer parallax-layer-3"
        style={{
          transform: `translateY(${scrollY * 0.8}px)`,
        }}
      >
        <div className="absolute top-[30%] left-[45%] w-16 h-72 bg-secondary/15 rounded-sm" />
        <div className="absolute top-[8%] left-[85%] w-20 h-60 bg-muted/30 rounded-sm" />
        <div className="absolute top-[65%] left-[10%] w-24 h-52 bg-primary/10 rounded-sm" />
      </div>
    </div>
  );
}
