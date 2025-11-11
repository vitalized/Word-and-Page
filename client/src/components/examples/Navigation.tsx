import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 px-4">
        <h1 className="text-4xl text-center mb-8">Navigation Component</h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Scroll down to see the navigation bar change. Try the mobile menu and dark mode toggle.
        </p>
        <div className="h-[200vh]"></div>
      </div>
    </div>
  );
}
