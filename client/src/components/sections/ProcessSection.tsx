const steps = [
  { number: '01', title: 'Consultation', description: 'Initial discussion to understand your project needs and goals.' },
  { number: '02', title: 'Proposal', description: 'Detailed proposal outlining scope, timeline, and pricing.' },
  { number: '03', title: 'Execution', description: 'Careful editorial work with regular updates and communication.' },
  { number: '04', title: 'Delivery', description: 'Final review and delivery of polished, publication-ready content.' },
];

export default function ProcessSection() {
  return (
    <section className="mt-24">
      <h2 className="text-center" data-testid="text-process-title">
        Process
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div key={step.number} data-testid={`section-process-${step.number}`}>
            <div className="text-5xl font-serif text-secondary mb-4">{step.number}</div>
            <h3 className="process-title">{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
