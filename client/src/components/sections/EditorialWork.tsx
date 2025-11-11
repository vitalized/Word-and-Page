const editorialWork = [
  { publisher: 'MACK', work: 'Ahndraya Parlato: TIME TO KILL (Forthcoming 2026)' },
  { publisher: 'MACK', work: 'Victor Burgin: Returning to Benjamin, 2nd edition (Forthcoming 2025)' },
  { publisher: 'SPBH EDITIONS', work: 'Mari Katayama: Synthesis (2025)' },
  { publisher: 'BARBICAN & SPBH EDITIONS', work: 'Dirty Looks: Desire and Decay in Fashion (2025)' },
  { publisher: 'REDCAT & EAST OF BORNEO', work: 'PST ART: All Watched Over by Machine of Loving Grace (2025)' },
  { publisher: 'X ARTISTS\' BOOKS', work: 'Clara Obligado, all that grows: nature and writing (2025)' },
  { publisher: 'ARTISTS SPACE', work: 'Michael Asher (2024)' },
  { publisher: 'UCLA ART|SCI CENTER', work: 'PST ART: Atmosphere of Sound: Sonic Art in Times of Climate Disruption (2024)' },
  { publisher: 'SPBH EDITIONS', work: 'Charlie Engman, Hello Chaos, a Love Story: The Disorder of Seeing and Being Seen (2024)' },
  { publisher: 'MACK', work: 'Philippa Snow, Trophy Lives: On Celebrity as an Art Object (2024)' },
  { publisher: 'THE RACIAL IMAGINARY INSTITUTE', work: 'Roderick A. Ferguson, An Interruption of Our Cowardice (2024)' },
  { publisher: 'SPBH EDITIONS', work: 'Little Joe: A book about queers and cinema, mostly (2024)' },
  { publisher: 'MACK', work: 'Caruso St John: Collected Works, Vol. 2, 2000–12 (2023)' },
  { publisher: 'ART + CULTURE FOUNDATION', work: 'Abu Rayhon Beruni: Geographical and Intellectual Journeys (2023)' },
  { publisher: 'MACK', work: 'Amber Husain, Meat Love (2023)' },
  { publisher: 'X—TRA', work: 'Issue 25.2 (2023)' },
  { publisher: 'VARIETY', work: 'Various print and online content (2021–2022)' },
  { publisher: 'TANK', work: 'Various print and online content (2022–23)' },
  { publisher: 'OCULA', work: 'Various online content (2022)' },
  { publisher: 'PRIMARY INFORMATION', work: 'Michael Asher: Writings 1973–1983 On Works 1969–1979 (ed. Benjamin H.D. Buchloh, 2021)' },
  { publisher: 'OBSCENE PUBLICATIONS', work: 'One Night in October (2021)' },
  { publisher: 'DAMIANI', work: 'Kristin Bedford: Cruise Night (2021)' },
  { publisher: 'X—TRA', work: 'Issue 19.1–23.2 (2016–21)' },
  { publisher: 'THE MIT PRESS', work: 'Public Knowledge: Selected Writings by Michael Asher (2020)' },
  { publisher: 'ARMORY CENTER FOR THE ARTS', work: 'Sara Kathryn Arledge: Serene for the Moment (ed. Irene Georgia Tsatsos, 2020)' },
  { publisher: 'SIGLIO PRESS', work: 'John Cage, Diary: How To Improve The World (You Will Only Make Matters Worse) (ed. Joe Biel and Richard Kraft, 2nd Edition, 2019)' },
  { publisher: 'POMONA COLLEGE MUSEUM OF ART', work: 'Todd Gray, Euclidean: Gris Gris (ed. Rebecca McGrew, 2019)' },
];

export default function EditorialWork() {
  return (
    <div>
      <h2 className="text-center" data-testid="text-editorial-work-title">
        Editorial Work
      </h2>

      <div className="space-y-8">
        {editorialWork.map((item, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <p className="text-sm uppercase tracking-wider font-medium">{item.publisher}</p>
            </div>
            <div className="md:col-span-3">
              <p className="text-muted-foreground font-light mb-2"><em>{item.work}</em></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
