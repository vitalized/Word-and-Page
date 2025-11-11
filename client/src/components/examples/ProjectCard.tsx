import ProjectCard from '../ProjectCard';

export default function ProjectCardExample() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-12">
      <div>
        <h2 className="text-2xl mb-6">Featured Project Card</h2>
        <ProjectCard
          title="TANK Magazine"
          slug="tank"
          description="As managing editor, I ran the production of the print magazine, contributed written articles, and managed the televisualisation of the magazine for TANKtv."
          image="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=600&fit=crop"
          featured={true}
        />
      </div>
      <div>
        <h2 className="text-2xl mb-6">Regular Project Card</h2>
        <ProjectCard
          title="Michael Asher Foundation"
          slug="michael-asher"
          description="I began working with Michael Asher Foundation (Los Angeles) on their first book project in 2018."
          image="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop"
        />
      </div>
    </div>
  );
}
