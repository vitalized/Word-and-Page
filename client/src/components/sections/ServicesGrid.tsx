import ServiceCard from '@/components/ServiceCard';
import { Edit3, FileText, CheckCircle2, BookOpen, Layout, Users } from 'lucide-react';

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

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  );
}
