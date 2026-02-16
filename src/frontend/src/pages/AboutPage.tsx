import { useNavigate } from '@tanstack/react-router';
import { PrimaryButton } from '../components/site/PrimaryButton';
import { Target, Shield, TrendingUp } from 'lucide-react';

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-24 md:py-32 border-b border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1>About Vertex Media</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Building the future of media production—one market, one creator, one project at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
              <div className="flex justify-center md:justify-start">
                <div className="w-16 h-16 flex items-center justify-center border-2 border-foreground">
                  <Target className="w-8 h-8" />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl">Coast-to-Coast Vision</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Vertex Media is building a national media production agency that operates at scale
                    without sacrificing quality. Our vision is simple: elite creators in every major
                    market, unified by consistent standards and centralized operations.
                  </p>
                  <p>
                    We're not a marketplace. We're not a freelance platform. We're a curated network
                    of the best photographers and videographers in the country, backed by the systems,
                    infrastructure, and support that enable them to do their best work.
                  </p>
                  <p>
                    From New York to Los Angeles, Miami to Seattle, we're establishing presence in
                    every key region—delivering world-class media production with the reliability
                    and consistency clients expect from a national agency.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
              <div className="flex justify-center md:justify-start">
                <div className="w-16 h-16 flex items-center justify-center border-2 border-foreground">
                  <Shield className="w-8 h-8" />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl">Structured Systems & Quality Control</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Quality at scale requires systems. Every contributor in our network is vetted,
                    trained, and held to exacting standards. We provide the equipment, workflows,
                    and support that ensure consistent output across every project, every market,
                    every time.
                  </p>
                  <p>
                    Our centralized operations team manages scheduling, client communications, and
                    project delivery—freeing our creators to focus on what they do best. Clients
                    work with one point of contact, one invoice, one consistent experience, regardless
                    of where their project takes place.
                  </p>
                  <p>
                    We don't compromise. Every deliverable is reviewed, every project is managed,
                    and every client receives the same level of service and quality they'd expect
                    from a boutique agency—at the speed and scale of a national operation.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
              <div className="flex justify-center md:justify-start">
                <div className="w-16 h-16 flex items-center justify-center border-2 border-foreground">
                  <TrendingUp className="w-8 h-8" />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl">Built for Growth</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Vertex Media is designed to scale. Our infrastructure, processes, and team are
                    built to support rapid expansion without sacrificing the quality and consistency
                    that define our brand.
                  </p>
                  <p>
                    We're investing in technology, training, and talent acquisition to ensure we can
                    serve clients of any size, in any market, with the same level of excellence. As
                    we grow, our contributors grow with us—gaining access to more opportunities,
                    better support, and a platform that amplifies their work.
                  </p>
                  <p>
                    This is just the beginning. We're building the future of media production, and
                    we're looking for the best creators, clients, and partners to build it with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2>Join the Movement</h2>
            <p className="text-xl text-muted-foreground">
              Whether you're a client looking for elite media production or a creator ready to join
              a national network, we want to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
    </div>
  );
}
