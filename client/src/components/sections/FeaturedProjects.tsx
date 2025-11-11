import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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

export default function FeaturedProjects() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="featured" data-testid="text-recent-projects">
            Recent Projects
          </h2>
          <p className="section-description max-w-2xl mx-auto">
            A selection of editorial work spanning magazines, books, and cultural publications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {featuredProjects.map((project) => (
            <Link key={project.slug} href={`/projects#${project.slug}`} data-testid={`link-project-${project.slug}`}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-testid={`img-project-${project.slug}`}
                  />
                </div>
                <h3 className="font-serif mb-3 text-3xl" data-testid={`text-project-title-${project.slug}`}>
                  {project.title}
                </h3>
                <p className="line-clamp-3" data-testid={`text-project-description-${project.slug}`}>
                  {project.description}
                </p>
              </div>
            </Link>
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
  );
}
