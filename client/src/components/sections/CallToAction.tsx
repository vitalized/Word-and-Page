import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function CallToAction() {
  return (
    <section className="bg-muted/30 rounded-lg p-12 md:p-16 text-center">
      <h2 className="cta" data-testid="text-cta-title">
        Ready to start a project?
      </h2>
      <p className="section-description max-w-2xl mx-auto">
        I'm available for commissions and collaborations. Let's discuss how I can help bring your editorial project to life.
      </p>
      <Link href="/contact">
        <Button size="lg" data-testid="button-get-in-touch">
          Get in Touch
        </Button>
      </Link>
    </section>
  );
}
