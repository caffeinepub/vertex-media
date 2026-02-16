import { useNavigate } from '@tanstack/react-router';
import { PrimaryButton } from '../components/site/PrimaryButton';
import { Camera, Film, Video, Briefcase, Calendar, Repeat, Network } from 'lucide-react';

export function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Camera,
      title: 'Sports Photography',
      description: 'High-impact photography for athletes, teams, and programs.',
    },
    {
      icon: Video,
      title: 'Sports Videography',
      description: 'High-impact videography for athletes, teams, and programs.',
    },
    {
      icon: Film,
      title: 'Athlete Highlight Packages',
      description:
        'Performance-driven highlight reels designed for recruitment, exposure, and branding.',
    },
    {
      icon: Briefcase,
      title: 'Brand Content Creation',
      description:
        'Strategic photo and video content built to grow brand authority and engagement.',
    },
    {
      icon: Calendar,
      title: 'Event Coverage',
      description:
        'Professional media coverage for tournaments, showcases, and corporate events.',
    },
    {
      icon: Repeat,
      title: 'Monthly Media Retainers',
      description:
        'Ongoing content production for businesses and organizations that need consistent, high-quality media.',
    },
    {
      icon: Network,
      title: 'Nationwide Contributor Network',
      description:
        'A curated network of elite photographers and videographers deployed coast to coast under Vertex Media quality standards.',
    },
  ];

  const pricingCategories = [
    {
      title: 'Sports Media Production',
      subtitle: 'High-impact photography & cinematic video for athletes, teams, and programs',
      items: [
        { name: 'Game Coverage', price: '$35' },
        { name: 'Half-Day Shoot (up to 4 hours)', price: '$70' },
        { name: 'Full-Day Shoot (up to 8 hours)', price: '$180' },
      ],
    },
    {
      title: 'Athlete mixtape Packages',
      subtitle: 'Reels & videos for recruitment, exposure, and branding',
      items: [{ name: 'Starter Reel', price: '$40' }],
    },
    {
      title: 'Brand Content Creation',
      subtitle: 'Strategic photo/video content for businesses and organizations',
      items: [
        { name: 'Social Media Package (5 posts)', price: '$500' },
        { name: 'Monthly Content Retainer (20 posts)', price: '$1,500–$2,000' },
        { name: 'Custom Campaign (branding + production)', price: '$3,000+' },
      ],
    },
    {
      title: 'Event Coverage',
      subtitle: 'Professional media for tournaments, showcases, or corporate events',
      items: [
        { name: 'Single Event (up to 4 hours)', price: '$200' },
        { name: 'Full Event Coverage (8+ hours)', price: '$500' },
        { name: 'Multi-Day Event', price: 'Custom quote ($1,000+)' },
      ],
    },
    {
      title: 'Monthly Media Retainers',
      subtitle: 'Ongoing, predictable media production for clients',
      items: [
        { name: 'Small Package', price: '$600/month (10–15 clips/posts)' },
        { name: 'Medium Package', price: '$1,500/month (20–30 clips/posts)' },
        {
          name: 'Premium Package',
          price: '$3,000/month (40+ clips/posts + full support)',
        },
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
      <section className="py-24 md:py-32 border-b border-border">
        <div className="container">
          <div className="grid gap-12 max-w-5xl mx-auto">
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

                  <div className="space-y-3">
                    <h2 className="text-3xl md:text-4xl">{service.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pricing Section */}
          <div className="max-w-5xl mx-auto mt-24 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl">
                Vertex Media – Service Pricing (Expanding Nationwide)
              </h2>
            </div>

            <div className="space-y-12">
              {pricingCategories.map((category, index) => (
                <div key={index} className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl">{category.title}</h3>
                    <p className="text-muted-foreground">{category.subtitle}</p>
                  </div>

                  <div className="border border-border">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`flex justify-between items-start gap-4 p-4 md:p-6 ${
                          itemIndex !== category.items.length - 1
                            ? 'border-b border-border'
                            : ''
                        }`}
                      >
                        <span className="text-foreground">{item.name}</span>
                        <span className="text-foreground font-medium whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 text-center">
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                All retainers include revisions per SOP, structured delivery, and
                agent-managed client communication.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto text-center space-y-8 mt-24">
            <h2 className="text-3xl md:text-4xl">Ready to Scale Your Media?</h2>
            <p className="text-xl text-muted-foreground">
              Partner with a media operation built for national growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <PrimaryButton onClick={() => navigate({ to: '/contact' })}>
                Book a Shoot
              </PrimaryButton>
              <PrimaryButton
                variant="secondary"
                onClick={() => navigate({ to: '/contact' })}
              >
                Partner With Vertex
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
