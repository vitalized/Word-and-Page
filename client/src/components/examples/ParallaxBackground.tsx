import ParallaxBackground from '../ParallaxBackground';

export default function ParallaxBackgroundExample() {
  return (
    <div className="relative min-h-screen">
      <ParallaxBackground />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl mb-4">Scroll to see parallax</h1>
          <p className="text-muted-foreground">Notice the subtle background movement</p>
        </div>
      </div>
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <p className="text-2xl">Keep scrolling...</p>
      </div>
    </div>
  );
}
