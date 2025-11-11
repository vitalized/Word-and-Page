import ProjectGrid from '@/components/sections/ProjectGrid';

export default function Projects() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6" data-testid="text-projects-title">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            A comprehensive portfolio of editorial work across magazines, books, and cultural publications.
          </p>
        </div>

        <ProjectGrid />
      </div>
    </div>
  );
}
