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
          <h2 className="text-3xl font-serif font-medium mb-12 text-center" data-testid="text-senior-positions-title">
            Senior Positions
          </h2>

          <div className="space-y-12 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6" data-testid="section-position-michael-asher">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">2018 — Present</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl font-serif mb-2">Publication Coordinator</h3>
                <p className="text-secondary mb-2">Michael Asher Foundation</p>
                <p className="text-muted-foreground font-light text-sm">Los Angeles</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6" data-testid="section-position-tank">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">2022 — 2023</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl font-serif mb-2">Managing Editor</h3>
                <p className="text-secondary mb-2">TANK</p>
                <p className="text-muted-foreground font-light text-sm">London</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6" data-testid="section-position-xtra">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">2016 — 2021</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl font-serif mb-2">Managing Editor</h3>
                <p className="text-secondary mb-2">X—TRA</p>
                <p className="text-muted-foreground font-light text-sm">Los Angeles</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-serif font-medium mb-12 text-center" data-testid="text-editorial-work-title">
            Editorial Work
          </h2>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">MACK</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2"><em>Ahndraya Parlato: TIME TO KILL</em> (Forthcoming 2026)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">MACK</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2"><em>Victor Burgin: Returning to Benjamin, 2nd edition</em> (Forthcoming 2025)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">SPBH EDITIONS</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2"><em>Mari Katayama: Synthesis</em> (2025)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">BARBICAN & SPBH EDITIONS</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2"><em>Dirty Looks: Desire and Decay in Fashion</em> (2025)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">REDCAT & EAST OF BORNEO</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2">PST ART: <em>All Watched Over by Machine of Loving Grace</em> (2025)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">X ARTISTS' BOOKS</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2">Clara Obligado, <em>all that grows: nature and writing</em> (2025)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">ARTISTS SPACE</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2">Michael Asher (2024)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">UCLA ART|SCI CENTER</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2">PST ART: <em>Atmosphere of Sound: Sonic Art in Times of Climate Disruption</em> (2024)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">SPBH EDITIONS</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2">Charlie Engman, <em>Hello Chaos, a Love Story: The Disorder of Seeing and Being Seen</em> (2024)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">MACK</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2">Philippa Snow, <em>Trophy Lives: On Celebrity as an Art Object</em> (2024)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">THE RACIAL IMAGINARY INSTITUTE</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2">Roderick A. Ferguson, <em>An Interruption of Our Cowardice</em> (2024)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">SPBH EDITIONS</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2"><em>Little Joe: A book about queers and cinema, mostly</em> (2024)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">MACK</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2"><em>Caruso St John: Collected Works, Vol. 2, 2000–12</em> (2023)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">ART + CULTURE FOUNDATION</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2"><em>Abu Rayhon Beruni: Geographical and Intellectual Journeys</em> (2023)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">MACK</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2">Amber Husain, <em>Meat Love</em> (2023)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">X—TRA</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2"><em>Issue 25.2</em> (2023)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">VARIETY</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2">Various print and online content (2021–2022)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">TANK</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2">Various print and online content (2022–23)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">OCULA</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2">Various online content (2022)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">PRIMARY INFORMATION</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2"><em>Michael Asher: Writings 1973–1983 On Works 1969–1979</em> (ed. Benjamin H.D. Buchloh, 2021)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">OBSCENE PUBLICATIONS</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2"><em>One Night in October</em> (2021)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">DAMIANI</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2"><em>Kristin Bedford: Cruise Night</em> (2021)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">X—TRA</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2"><em>Issue 19.1–23.2</em> (2016–21)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">THE MIT PRESS</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2"><em>Public Knowledge: Selected Writings by Michael Asher</em> (2020)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">ARMORY CENTER FOR THE ARTS</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2"><em>Sara Kathryn Arledge: Serene for the Moment</em> (ed. Irene Georgia Tsatsos, 2020)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">SIGLIO PRESS</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2">John Cage, <em>Diary: How To Improve The World (You Will Only Make Matters Worse)</em> (ed. Joe Biel and Richard Kraft, 2nd Edition, 2019)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider font-medium">POMONA COLLEGE MUSEUM OF ART</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-light mb-2"><em>Todd Gray, Euclidean: Gris Gris</em> (ed. Rebecca McGrew, 2019)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
