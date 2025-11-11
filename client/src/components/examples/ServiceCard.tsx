import ServiceCard from '../ServiceCard';
import { Edit3, FileText, CheckCircle2 } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          icon={Edit3}
          title="Copy Editing"
          description="Comprehensive copy editing services ensuring clarity, consistency, and precision in your editorial content."
        />
        <ServiceCard
          icon={FileText}
          title="Proofreading"
          description="Meticulous proofreading to catch errors and polish your final manuscripts before publication."
        />
        <ServiceCard
          icon={CheckCircle2}
          title="Fact Checking"
          description="Rigorous fact-checking services to ensure accuracy and credibility in your published work."
        />
      </div>
    </div>
  );
}
