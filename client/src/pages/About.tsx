import profileImage from '@assets/poppy_1762858273395.webp';

export default function About() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-24 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6" data-testid="text-about-title">
            About
          </h1>
        </div>

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
              <p className="text-xl font-light leading-relaxed text-muted-foreground" data-testid="text-about-intro">
                I'm an editor and bookmaker based in London with over 10 years' experience working in editorial positions and creating printed matter within art and culture.
              </p>

              <p className="text-muted-foreground font-light leading-relaxed" data-testid="text-about-paragraph-1">
                My career has been defined by a commitment to excellence in editorial craft, working with some of the most innovative publications and cultural institutions in the contemporary art world. From managing the production of quarterly magazines to shepherding complex book projects from conception to publication, I bring meticulous attention to detail and a deep understanding of the editorial process.
              </p>

              <p className="text-muted-foreground font-light leading-relaxed" data-testid="text-about-paragraph-2">
                Throughout my career, I've had the privilege of collaborating with exceptional writers, artists, and thinkers. Whether contributing written articles, managing production workflows, or ensuring the highest standards of copy editing and fact-checking, I approach each project with professionalism, efficiency, and a genuine passion for the printed word.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-serif font-medium mb-12 text-center" data-testid="text-experience-title">
            Experience
          </h2>

          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6" data-testid="section-experience-tank">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">2018 — Present</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl font-serif mb-2">Managing Editor</h3>
                <p className="text-secondary mb-4">TANK Magazine, London</p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Ran production of the quarterly print magazine, contributed written articles, and managed the televisualisation of the magazine for TANKtv. Collaborated with internationally renowned writers and artists.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6" data-testid="section-experience-michael-asher">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">2018 — 2021</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl font-serif mb-2">Book Editor</h3>
                <p className="text-secondary mb-4">Michael Asher Foundation, Los Angeles</p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Completed two major book projects including Public Knowledge (MIT Press, 2020) and a facsimile reprint of Writings 1973–1983 On Works 1969–1979 (Primary Information, 2021).
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6" data-testid="section-experience-xtra">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">2015 — 2020</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl font-serif mb-2">Managing Editor</h3>
                <p className="text-secondary mb-4">X—TRA, Los Angeles</p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Produced 17 issues of the quarterly journal, working with over 100 artists and writers to ensure editorial excellence and radical potential.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6" data-testid="section-experience-freelance">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">Ongoing</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl font-serif mb-2">Freelance Editorial</h3>
                <p className="text-secondary mb-4">Various Publishers</p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Copy editing, proofreading, and fact-checking for cultural institutions, independent publishers, and magazines including MIT Press, Primary Information, Variety, and Telegraph Magazine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
