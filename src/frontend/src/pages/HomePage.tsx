import { useNavigate } from '@tanstack/react-router';
import { PrimaryButton } from '../components/site/PrimaryButton';
import { ArrowRight, Globe, Users, Zap } from 'lucide-react';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{
            backgroundImage: 'url(/assets/generated/vertex-hero-bg.dim_2400x1350.png)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        <div className="container relative z-10 text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            <h1 className="text-balance">
              Elite Media Production, Coast to Coast
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light tracking-wide">
              From Coast to Coast, We Capture It All
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <PrimaryButton onClick={() => navigate({ to: '/contact' })}>
                Book a Shoot
              </PrimaryButton>
              <PrimaryButton
                variant="secondary"
                onClick={() => navigate({ to: '/join-network' })}
              >
                Join the Network
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-balance">Building a National Network</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Vertex Media is expanding nationwide, assembling a curated network of elite
                photographers and videographers across the United States. We deliver
                world-class media production with the consistency of a national agency and
                the precision of local expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-4">
                <div className="flex justify-center">
                  <Globe className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold">Nationwide Coverage</h3>
                <p className="text-muted-foreground">
                  From major metros to emerging markets, we're building presence in every key region.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-center">
                  <Users className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold">Curated Network</h3>
                <p className="text-muted-foreground">
                  Every contributor is vetted, trained, and held to our exacting standards.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-center">
                  <Zap className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold">Rapid Deployment</h3>
                <p className="text-muted-foreground">
                  Book today, shoot tomorrow. Our network enables fast turnaround anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2>What We Do</h2>
              <p className="text-xl text-muted-foreground">
                Full-spectrum media production for brands, athletes, and organizations that demand excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left pt-8">
              {[
                {
                  title: 'Sports Media Production',
                  description: 'Game coverage, training footage, and performance analysis for teams and leagues.',
                },
                {
                  title: 'Athlete Highlights',
                  description: 'Recruiting reels, social content, and personal brand development for athletes.',
                },
                {
                  title: 'Brand Content',
                  description: 'Commercial photography and video for products, campaigns, and digital platforms.',
                },
                {
                  title: 'Event Coverage',
                  description: 'Conferences, galas, tournaments, and corporate events captured with cinematic quality.',
                },
                {
                  title: 'Monthly Retainers',
                  description: 'Ongoing content partnerships for consistent, high-volume production needs.',
                },
                {
                  title: 'Nationwide Contributor Network',
                  description: 'Access our vetted network of creators in markets across the country.',
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="p-8 bg-card border border-border hover:border-foreground transition-colors"
                >
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <PrimaryButton onClick={() => navigate({ to: '/services' })}>
                View All Services <ArrowRight className="ml-2 w-5 h-5" />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
