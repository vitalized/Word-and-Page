import { Instagram as InstagramIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Instagram() {
  const posts = [
    { id: 1, image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600&h=600&fit=crop' },
    { id: 2, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=600&fit=crop' },
    { id: 3, image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=600&fit=crop' },
    { id: 4, image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=600&fit=crop' },
    { id: 5, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=600&fit=crop' },
    { id: 6, image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=600&fit=crop' },
    { id: 7, image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=600&fit=crop' },
    { id: 8, image: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=600&h=600&fit=crop' },
    { id: 9, image: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=600&h=600&fit=crop' },
  ];

  return (
    <div className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6" data-testid="text-instagram-title">
            Instagram
          </h1>
          <p className="text-xl text-muted-foreground font-light mb-8 max-w-3xl mx-auto">
            Behind the scenes glimpses of editorial projects, book production, and the art of publishing.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="gap-2" data-testid="button-follow-instagram">
              <InstagramIcon className="h-5 w-5" />
              Follow on Instagram
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
              data-testid={`card-instagram-${post.id}`}
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                data-testid={`img-instagram-${post.id}`}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" data-testid="button-load-more">
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
}
