import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredProjects = [
    {
      title: 'TANK',
      slug: 'tank',
      description: 'As managing editor, I ran the production of the print magazine, contributed written articles, and managed the televisualisation of the magazine for TANKtv.',
      image: 'https://images.squarespace-cdn.com/content/v1/621ce3487a0ce3771b6c490c/1660642438368-51SN3GUJX7PCTTMC7ADX/IMG_4490_edited2.jpg',
    },
    {
      title: 'Michael Asher Foundation',
      slug: 'michael-asher',
      description: 'I began working with Michael Asher Foundation (Los Angeles) on their first book project in 2018. Public Knowledge (MIT Press, 2020) was an ambitious publication.',
      image: 'https://images.squarespace-cdn.com/content/v1/621ce3487a0ce3771b6c490c/1646741727859-Y1UMTCW5WBZELCQI905Y/IMG_4266_edited.jpg',
    },
  ];

  return (
    <div>
      <section className="min-h-screen flex items-center justify-center px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-medium mb-8 leading-tight" data-testid="text-hero-title">
            Editor and Bookmaker
            <br />
            based in London
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-12 leading-relaxed max-w-3xl mx-auto" data-testid="text-hero-subtitle">
            Over 10 years' experience working in editorial positions and creating printed matter within art and culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button size="lg" className="group" data-testid="button-view-projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" data-testid="button-get-in-touch">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6" data-testid="text-recent-projects">
              Recent Projects
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              A selection of editorial work spanning magazines, books, and cultural publications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} featured />
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects">
              <Button variant="outline" size="lg" className="group" data-testid="button-all-projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-serif font-light italic mb-8 leading-relaxed" data-testid="text-testimonial-quote">
            "Poppy is a fantastic collaborator! Extremely professional, efficient, and trustworthy. Her editorial efficiency has ensured Variety's standards are not only maintained but improved across all projects."
          </blockquote>
          <cite className="text-muted-foreground font-light not-italic" data-testid="text-testimonial-author">
            — Holly Dillon, Executive Producer, Variety
          </cite>
        </div>
      </section>
    </div>
  );
}
