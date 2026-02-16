import { SiInstagram, SiLinkedin, SiYoutube } from 'react-icons/si';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'vertex-media'
  );

  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tighter">VERTEX MEDIA</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              From Coast to Coast, We Capture It All
            </p>
          </div>

          {/* Nationwide Operations */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase">Nationwide Operations</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building a curated network of elite photographers and videographers across the United States.
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <SiLinkedin size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="YouTube"
              >
                <SiYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Vertex Media. All rights reserved.</p>
          <p>
            Built with ❤️ using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
