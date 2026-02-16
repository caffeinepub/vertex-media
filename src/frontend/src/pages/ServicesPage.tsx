import { useNavigate } from '@tanstack/react-router';
import { PrimaryButton } from '../components/site/PrimaryButton';
import { Camera, Film, Briefcase, Calendar, Repeat, Network } from 'lucide-react';

export function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Camera,
      title: 'Sports Media Production',
      description:
        'Comprehensive game coverage, training documentation, and performance analysis for teams, leagues, and athletic programs. We deliver broadcast-quality footage with fast turnaround times, enabling coaches and athletes to review, analyze, and share their best moments.',
      features: [
        'Multi-camera game coverage',
        'Training session documentation',
        'Performance analysis footage',
        'Highlight reel production',
      ],
    },
    {
      icon: Film,
      title: 'Athlete Highlights',
      description:
        'Recruiting reels, social media content, and personal brand development for athletes at every level. From high school prospects to professional competitors, we craft compelling visual narratives that showcase talent, work ethic, and personality.',
      features: [
        'Recruiting highlight reels',
        'Social media content packages',
        'Personal brand photography',
        'Behind-the-scenes storytelling',
      ],
    },
    {
      icon: Briefcase,
      title: 'Brand Content',
      description:
        'Commercial photography and video production for products, campaigns, and digital platforms. We partner with brands to create scroll-stopping content that drives engagement, builds awareness, and converts audiences into customers.',
      features: [
        'Product photography & video',
        'Campaign creative production',
        'Social media content creation',
        'E-commerce visual assets',
      ],
    },
    {
      icon: Calendar,
      title: 'Event Coverage',
      description:
        'Cinematic documentation of conferences, galas, tournaments, and corporate events. Our teams capture the energy, emotion, and key moments that define your event, delivering polished deliverables for marketing, recap videos, and stakeholder communications.',
      features: [
        'Conference & summit coverage',
        'Tournament documentation',
        'Corporate event photography',
        'Gala & fundraiser media',
      ],
    },
    {
      icon: Repeat,
      title: 'Monthly Retainers',
      description:
        'Ongoing content partnerships for organizations with consistent, high-volume production needs. Retainer clients receive priority scheduling, dedicated account management, and volume pricing for predictable, scalable content creation.',
      features: [
        'Priority scheduling & booking',
        'Dedicated account management',
        'Volume pricing discounts',
        'Consistent creative direction',
      ],
    },
    {
      icon: Network,
      title: 'Nationwide Contributor Network',
      description:
        'Access our vetted network of elite photographers and videographers in markets across the United States. Whether you need coverage in one city or fifty, our contributor network delivers consistent quality and reliable execution nationwide.',
      features: [
        'Coverage in 50+ markets',
        'Vetted, trained contributors',
        'Consistent quality standards',
        'Centralized project management',
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-24 md:py-32 border-b border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1>Services</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Full-spectrum media production for brands, athletes, and organizations that demand excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid gap-16 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="grid md:grid-cols-[auto_1fr] gap-8 items-start"
                >
                  <div className="flex justify-center md:justify-start">
                    <div className="w-16 h-16 flex items-center justify-center border-2 border-foreground">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h2 className="text-3xl md:text-4xl">{service.title}</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start text-muted-foreground"
                        >
                          <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-foreground flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2>Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground">
              Book a shoot or join our nationwide network of elite creators.
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
