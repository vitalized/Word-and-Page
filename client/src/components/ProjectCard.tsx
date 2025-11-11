import { Link } from 'wouter';

interface ProjectCardProps {
  title: string;
  slug: string;
  description: string;
  image: string;
  featured?: boolean;
}

export default function ProjectCard({ title, slug, description, image, featured = false }: ProjectCardProps) {
  return (
    <Link href={`/projects#${slug}`} data-testid={`link-project-${slug}`}>
      <div className="group cursor-pointer">
        <div className="relative aspect-[3/2] overflow-hidden rounded-lg mb-6">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            data-testid={`img-project-${slug}`}
          />
        </div>
        <h3 className={`font-serif mb-3 ${featured ? 'text-3xl' : 'text-2xl'}`} data-testid={`text-project-title-${slug}`}>
          {title}
        </h3>
        <p className="line-clamp-3" data-testid={`text-project-description-${slug}`}>
          {description}
        </p>
      </div>
    </Link>
  );
}
