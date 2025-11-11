import ServicesGrid from '@/components/sections/ServicesGrid';
import CallToAction from '@/components/sections/CallToAction';
import ProcessSection from '@/components/sections/ProcessSection';

export default function Services() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6" data-testid="text-services-title">
            Services
          </h1>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Professional editorial services for art and culture publications, from copy editing to full production management.
          </p>
        </div>

        <ServicesGrid />
        <CallToAction />
        <ProcessSection />
      </div>
    </div>
  );
}
