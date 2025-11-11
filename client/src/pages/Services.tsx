import ServiceCard from '@/components/ServiceCard';
import { Edit3, FileText, CheckCircle2, BookOpen, Layout, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function Services() {
  const services = [
    {
      icon: Edit3,
      title: 'Copy Editing',
      description: 'Comprehensive copy editing services ensuring clarity, consistency, and precision in your editorial content. From grammar and style to structural improvements.',
    },
    {
      icon: FileText,
      title: 'Proofreading',
      description: 'Meticulous proofreading to catch errors and polish your final manuscripts before publication. Final quality control for print and digital publications.',
    },
    {
      icon: CheckCircle2,
      title: 'Fact Checking',
      description: 'Rigorous fact-checking services to ensure accuracy and credibility in your published work. Verification of sources, quotes, and technical details.',
    },
    {
      icon: BookOpen,
      title: 'Book Production',
      description: 'End-to-end book production management from manuscript to final publication. Coordinating design, editing, printing, and distribution.',
    },
    {
      icon: Layout,
      title: 'Managing Editor',
      description: 'Full editorial management services for magazines and journals. Production workflow, team coordination, and quality oversight.',
    },
    {
      icon: Users,
      title: 'Editorial Consultation',
      description: 'Strategic editorial guidance for publishers and cultural institutions. Process development, standards implementation, and team training.',
    },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <section className="bg-muted/30 rounded-lg p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6" data-testid="text-cta-title">
            Ready to start a project?
          </h2>
          <p className="text-lg text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
            I'm available for commissions and collaborations. Let's discuss how I can help bring your editorial project to life.
          </p>
          <Link href="/contact">
            <Button size="lg" data-testid="button-get-in-touch">
              Get in Touch
            </Button>
          </Link>
        </section>

        <section className="mt-24">
          <h2 className="text-3xl font-serif font-medium mb-12 text-center" data-testid="text-process-title">
            Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Consultation', description: 'Initial discussion to understand your project needs and goals.' },
              { number: '02', title: 'Proposal', description: 'Detailed proposal outlining scope, timeline, and pricing.' },
              { number: '03', title: 'Execution', description: 'Careful editorial work with regular updates and communication.' },
              { number: '04', title: 'Delivery', description: 'Final review and delivery of polished, publication-ready content.' },
            ].map((step) => (
              <div key={step.number} data-testid={`section-process-${step.number}`}>
                <div className="text-5xl font-serif text-secondary mb-4">{step.number}</div>
                <h3 className="text-xl font-serif mb-3">{step.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
