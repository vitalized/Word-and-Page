const positions = [
  {
    period: '2018 — Present',
    title: 'Publication Coordinator',
    organization: 'Michael Asher Foundation',
    location: 'Los Angeles',
    testId: 'michael-asher',
  },
  {
    period: '2022 — 2023',
    title: 'Managing Editor',
    organization: 'TANK',
    location: 'London',
    testId: 'tank',
  },
  {
    period: '2016 — 2021',
    title: 'Managing Editor',
    organization: 'X—TRA',
    location: 'Los Angeles',
    testId: 'xtra',
  },
];

export default function SeniorPositions() {
  return (
    <div>
      <h2 className="text-center" data-testid="text-senior-positions-title">
        Senior Positions
      </h2>

      <div className="space-y-12 mb-24">
        {positions.map((position) => (
          <div key={position.testId} className="grid grid-cols-1 md:grid-cols-4 gap-6" data-testid={`section-position-${position.testId}`}>
            <div className="md:col-span-1">
              <p className="caption">{position.period}</p>
            </div>
            <div className="md:col-span-3">
              <h3>{position.title}</h3>
              <p className="organization">{position.organization}</p>
              <p className="metadata">{position.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
