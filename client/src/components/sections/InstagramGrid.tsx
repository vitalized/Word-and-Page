import { Instagram as InstagramIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const posts = [
  { id: 1, image: 'https://images.squarespace-cdn.com/content/v1/621ce3487a0ce3771b6c490c/1660642438368-51SN3GUJX7PCTTMC7ADX/IMG_4490_edited2.jpg' },
  { id: 2, image: 'https://images.squarespace-cdn.com/content/v1/621ce3487a0ce3771b6c490c/1646741727859-Y1UMTCW5WBZELCQI905Y/IMG_4266_edited.jpg' },
  { id: 3, image: 'https://images.squarespace-cdn.com/content/v1/621ce3487a0ce3771b6c490c/1646742828451-4U3WWU62NEVHUJKG7XVJ/IMG_4449_2000px.jpg' },
  { id: 4, image: 'https://images.squarespace-cdn.com/content/v1/621ce3487a0ce3771b6c490c/1660642800735-GZ0CUHFV2J4DVE5Z9NEO/IMG_2920_editcrop.jpg' },
  { id: 5, image: 'https://images.squarespace-cdn.com/content/v1/621ce3487a0ce3771b6c490c/1646742060938-UYXM6W9Q02PIM98TDL1V/IMG_4344_2000px.jpg' },
  { id: 6, image: 'https://images.squarespace-cdn.com/content/v1/621ce3487a0ce3771b6c490c/1646742928704-5MANI66U2BX1EAQGX3R6/IMG_4367_2000px.jpg' },
  { id: 7, image: 'https://images.squarespace-cdn.com/content/v1/621ce3487a0ce3771b6c490c/1646743030973-ZW5IE6X9T12RHU4YORXF/Variety_2000px.jpg' },
  { id: 8, image: 'https://images.squarespace-cdn.com/content/v1/621ce3487a0ce3771b6c490c/1646742781644-WPA66U4FFS9REZ461QSN/IMG_4404_2000px.jpg' },
  { id: 9, image: 'https://images.squarespace-cdn.com/content/v1/621ce3487a0ce3771b6c490c/1646743108332-I1CXDWHLKI7T3L075TGE/IMG_4398_2000px.jpg' },
];

export default function InstagramGrid() {
  return (
    <div>
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
  );
}
