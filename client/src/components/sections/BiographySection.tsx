import profileImage from '@assets/poppy_1762858273395.webp';

export default function BiographySection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-24">
      <div className="lg:col-span-2">
        <div className="aspect-[3/4] overflow-hidden rounded-lg">
          <img
            src={profileImage}
            alt="Poppy - Editor and Bookmaker"
            className="w-full h-full object-cover"
            data-testid="img-about-portrait"
          />
        </div>
      </div>

      <div className="lg:col-span-3 space-y-6">
        <div className="prose prose-lg max-w-none">
          <p className="lead" data-testid="text-about-intro">
            I'm an editor and bookmaker based in London with over 10 years' experience working in editorial positions and creating printed matter within art and culture.
          </p>

          <p data-testid="text-about-paragraph-1">
            My career has been defined by a commitment to excellence in editorial craft, working with some of the most innovative publications and cultural institutions in the contemporary art world. From managing the production of quarterly magazines to shepherding complex book projects from conception to publication, I bring meticulous attention to detail and a deep understanding of the editorial process.
          </p>

          <p data-testid="text-about-paragraph-2">
            Throughout my career, I've had the privilege of collaborating with exceptional writers, artists, and thinkers. Whether contributing written articles, managing production workflows, or ensuring the highest standards of copy editing and fact-checking, I approach each project with professionalism, efficiency, and a genuine passion for the printed word.
          </p>
        </div>
      </div>
    </div>
  );
}
