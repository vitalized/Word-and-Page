import { useEffect, useState } from 'react';
import layer1 from '@assets/generated_images/Parallax_layer_one_patterns_b40ff2f4.png';
import layer2 from '@assets/generated_images/Parallax_layer_two_patterns_57983c94.png';
import layer3 from '@assets/generated_images/Parallax_layer_three_patterns_4b8970d1.png';

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
          backgroundImage: `url(${layer1})`,
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />
      <div
        className="parallax-layer parallax-layer-2"
        style={{
          backgroundImage: `url(${layer2})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div
        className="parallax-layer parallax-layer-3"
        style={{
          backgroundImage: `url(${layer3})`,
          transform: `translateY(${scrollY * 0.8}px)`,
        }}
      />
    </div>
  );
}
