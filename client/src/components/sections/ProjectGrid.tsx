const projects = [
  {
    id: 'tank',
    title: 'TANK',
    subtitle: 'Managing Editor',
    description: 'TANK was founded in London in 1998. As well as its longstanding quarterly print magazine, it has produced books; podcasts; events; clothing; a weekly supplement with the Observer; and mostly recently, a streaming platform—TANKtv LIVE and Now Showing.\n\nAs managing editor, I ran the production of the print magazine, contributed written articles, and managed the televisualisation of the magazine for TANKtv. I worked with writers such as Lamorna Ash, Maddie Mortimer, Megan Nolan, Selby Wynn Schwartz, Izabella Scott, Asa Seresin, Justin E.H. Smith, Philippa Snow, and Marieke Lucas Rijnveld; and artists Hannah Black, Sidsel Meineche Hansen, Sammy Lee, Olu Ogunnaike, and Gray Wielebinski.',
    images: [
      'https://images.squarespace-cdn.com/content/v1/621ce3487a0ce3771b6c490c/1660642438368-51SN3GUJX7PCTTMC7ADX/IMG_4490_edited2.jpg',
      'https://images.squarespace-cdn.com/content/v1/621ce3487a0ce3771b6c490c/1660642800735-GZ0CUHFV2J4DVE5Z9NEO/IMG_2920_editcrop.jpg',
    ],
    link: 'https://tankmagazine.com',
  },
  {
    id: 'michael-asher',
    title: 'Michael Asher Foundation',
    subtitle: 'Book Editor',
    description: 'I began working with Michael Asher Foundation (Los Angeles) on their first book project in 2018. Public Knowledge (MIT Press, 2020) was an ambitious publication that includes 68 previous unpublished writings from the Michael Asher Archive alongside images and ephemera.\n\nAt the end of 2021, I completed a second book with the Foundation after two years in production. Writings 1973–1983 On Works 1969–1979 (Primary Information, 2021) is a facsimile reprint of the seminal publication originally published in 1983 by Nova Scotia College of Art and Design and Museum of Contemporary Art, Los Angeles, and edited by Benjamin H.D. Buchloh.',
    images: [
      'https://images.squarespace-cdn.com/content/v1/621ce3487a0ce3771b6c490c/1646741727859-Y1UMTCW5WBZELCQI905Y/IMG_4266_edited.jpg',
      'https://images.squarespace-cdn.com/content/v1/621ce3487a0ce3771b6c490c/1646742060938-UYXM6W9Q02PIM98TDL1V/IMG_4344_2000px.jpg',
      'https://images.squarespace-cdn.com/content/v1/621ce3487a0ce3771b6c490c/1646742781644-WPA66U4FFS9REZ461QSN/IMG_4404_2000px.jpg',
    ],
  },
  {
    id: 'xtra',
    title: 'X—TRA',
    subtitle: 'Managing Editor',
    description: 'Independent and artist-run, X—TRA (Los Angeles) provides platforms for critical discourse about contemporary art through a quarterly journal, x-traonline.org, and public programs.\n\nDuring my time at X—TRA, I produced 17 issues and worked with the executive editor, designer, and over 100 artists and writers to ensure the radical potential of each issue.\n\nArtists and writers include Leslie Dick, Andrea Fraser, Cora Gilroy-Ware, Eliel Jones, Christine Sun Kim, Pope.L, Kang Seung Lee, K-Sue Park, Martine Syms, and Kandis Williams.',
    images: [
      'https://images.squarespace-cdn.com/content/v1/621ce3487a0ce3771b6c490c/1646742828451-4U3WWU62NEVHUJKG7XVJ/IMG_4449_2000px.jpg',
      'https://images.squarespace-cdn.com/content/v1/621ce3487a0ce3771b6c490c/1646742928704-5MANI66U2BX1EAQGX3R6/IMG_4367_2000px.jpg',
    ],
  },
  {
    id: 'various',
    title: 'Various Publishers',
    subtitle: 'Freelance Editorial',
    description: 'I have worked as a freelance copy editor, proofreader, and fact-checker for a variety of cultural institutions; independent publishers; magazines; artists and writers for both print and online content.\n\nPublishers include Armory Center For the Arts, Michael Asher Foundation, DAMIANI, MIT Press, Obscene Publications, OCULA, Pomona College, Primary Information, Project X Foundation, Siglio Press, TANK, Telegraph Magazine, Variety, and X—TRA.',
    images: [
      'https://images.squarespace-cdn.com/content/v1/621ce3487a0ce3771b6c490c/1646743030973-ZW5IE6X9T12RHU4YORXF/Variety_2000px.jpg',
      'https://images.squarespace-cdn.com/content/v1/621ce3487a0ce3771b6c490c/1646743108332-I1CXDWHLKI7T3L075TGE/IMG_4398_2000px.jpg',
      'https://images.squarespace-cdn.com/content/v1/621ce3487a0ce3771b6c490c/1646928456411-TY7ZQAGFPL3SVAKY3LLT/IMG_4327_2000px.jpg',
    ],
  },
];

export default function ProjectGrid() {
  return (
    <div className="space-y-32">
      {projects.map((project, index) => (
        <section key={project.id} id={project.id} className="scroll-mt-24" data-testid={`section-project-${project.id}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div>
                <h2 className="project-title" data-testid={`text-project-title-${project.id}`}>
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
  );
}
