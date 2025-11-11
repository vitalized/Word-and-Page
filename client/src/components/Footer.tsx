import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card mt-32 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-medium mb-4">Word and Page</h3>
            <p className="metadata">
              Editorial services and book making for art and culture publications.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Navigation</h4>
            <nav className="space-y-2">
              {['Projects', 'About', 'Services', 'Instagram', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  data-testid={`link-footer-${item.toLowerCase()}`}
                >
                  <span className="block text-muted-foreground hover:text-foreground transition-colors cursor-pointer text-sm font-light">
                    {item}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-2 text-sm font-light text-muted-foreground">
              <p>London, UK</p>
              <p>Available for commissions</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <p className="metadata">
            © {currentYear} Word and Page. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
