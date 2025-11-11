import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="p-8 hover-elevate transition-all duration-300" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="mb-6">
        <Icon className="h-10 w-10 text-secondary" />
      </div>
      <h3 className="text-2xl font-serif mb-4" data-testid={`text-service-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        {title}
      </h3>
      <p className="text-muted-foreground font-light leading-relaxed" data-testid={`text-service-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        {description}
      </p>
    </Card>
  );
}
