import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-medium mb-8 leading-tight" data-testid="text-hero-title">
          Editor and Bookmaker
          <br />
          based in London
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light mb-12 leading-relaxed max-w-3xl mx-auto" data-testid="text-hero-subtitle">
          Over 10 years' experience working in editorial positions and creating printed matter within art and culture.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/projects">
            <Button size="lg" className="group" data-testid="button-view-projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" data-testid="button-get-in-touch">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
