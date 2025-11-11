export default function Projects() {
  const projects = [
    {
      id: 'tank',
      title: 'TANK',
      subtitle: 'Managing Editor',
      description: 'TANK was founded in London in 1998. As well as its longstanding quarterly print magazine, it has produced books; podcasts; events; clothing; a weekly supplement with the Observer; and mostly recently, a streaming platform—TANKtv LIVE and Now Showing.\n\nAs managing editor, I ran the production of the print magazine, contributed written articles, and managed the televisualisation of the magazine for TANKtv. I worked with writers such as Lamorna Ash, Maddie Mortimer, Megan Nolan, Selby Wynn Schwartz, Izabella Scott, Asa Seresin, Justin E.H. Smith, Philippa Snow, and Marieke Lucas Rijnveld; and artists Hannah Black, Sidsel Meineche Hansen, Sammy Lee, Olu Ogunnaike, and Gray Wielebinski.',
      images: [
        'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&h=800&fit=crop',
      ],
      link: 'https://tankmagazine.com',
    },
    {
      id: 'michael-asher',
      title: 'Michael Asher Foundation',
      subtitle: 'Book Editor',
      description: 'I began working with Michael Asher Foundation (Los Angeles) on their first book project in 2018. Public Knowledge (MIT Press, 2020) was an ambitious publication that includes 68 previous unpublished writings from the Michael Asher Archive alongside images and ephemera.\n\nAt the end of 2021, I completed a second book with the Foundation after two years in production. Writings 1973–1983 On Works 1969–1979 (Primary Information, 2021) is a facsimile reprint of the seminal publication originally published in 1983 by Nova Scotia College of Art and Design and Museum of Contemporary Art, Los Angeles, and edited by Benjamin H.D. Buchloh.',
      images: [
        'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1200&h=800&fit=crop',
      ],
    },
    {
      id: 'xtra',
      title: 'X—TRA',
      subtitle: 'Managing Editor',
      description: 'Independent and artist-run, X—TRA (Los Angeles) provides platforms for critical discourse about contemporary art through a quarterly journal, x-traonline.org, and public programs.\n\nDuring my time at X—TRA, I produced 17 issues and worked with the executive editor, designer, and over 100 artists and writers to ensure the radical potential of each issue.\n\nArtists and writers include Leslie Dick, Andrea Fraser, Cora Gilroy-Ware, Eliel Jones, Christine Sun Kim, Pope.L, Kang Seung Lee, K-Sue Park, Martine Syms, and Kandis Williams.',
      images: [
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop',
      ],
    },
    {
      id: 'various',
      title: 'Various Publishers',
      subtitle: 'Freelance Editorial',
      description: 'I have worked as a freelance copy editor, proofreader, and fact-checker for a variety of cultural institutions; independent publishers; magazines; artists and writers for both print and online content.\n\nPublishers include Armory Center For the Arts, Michael Asher Foundation, DAMIANI, MIT Press, Obscene Publications, OCULA, Pomona College, Primary Information, Project X Foundation, Siglio Press, TANK, Telegraph Magazine, Variety, and X—TRA.',
      images: [
        'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=800&fit=crop',
      ],
    },
  ];

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

        <div className="space-y-32">
          {projects.map((project, index) => (
            <section key={project.id} id={project.id} className="scroll-mt-24" data-testid={`section-project-${project.id}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div>
                    <h2 className="text-4xl font-serif font-medium mb-3" data-testid={`text-project-title-${project.id}`}>
                      {project.title}
                    </h2>
                    <p className="text-secondary font-light uppercase tracking-wider text-sm" data-testid={`text-project-subtitle-${project.id}`}>
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    {project.description.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-muted-foreground font-light leading-relaxed mb-6" data-testid={`text-project-description-${project.id}-${i}`}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-primary hover:underline font-light"
                      data-testid={`link-project-${project.id}`}
                    >
                      Visit website →
                    </a>
                  )}
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {project.images.map((image, i) => (
                    <div key={i} className="aspect-[3/2] overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`${project.title} ${i + 1}`}
                        className="w-full h-full object-cover"
                        data-testid={`img-project-${project.id}-${i}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
