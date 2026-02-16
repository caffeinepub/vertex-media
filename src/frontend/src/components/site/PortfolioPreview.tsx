export function PortfolioPreview() {
  const portfolioItems = [
    {
      image: '/assets/generated/vertex-portfolio-01.dim_1200x800.png',
      title: 'Sports Media',
      category: 'Action & Athletics',
    },
    {
      image: '/assets/generated/vertex-portfolio-02.dim_1200x800.png',
      title: 'Brand Content',
      category: 'Commercial Production',
    },
    {
      image: '/assets/generated/vertex-portfolio-03.dim_1200x800.png',
      title: 'Event Coverage',
      category: 'Live Events',
    },
    {
      image: '/assets/generated/vertex-portfolio-04.dim_1200x800.png',
      title: 'Athlete Highlights',
      category: 'Performance Capture',
    },
    {
      image: '/assets/generated/vertex-portfolio-05.dim_1200x800.png',
      title: 'Corporate Media',
      category: 'Professional Services',
    },
    {
      image: '/assets/generated/vertex-portfolio-06.dim_1200x800.png',
      title: 'Creative Direction',
      category: 'Visual Storytelling',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4">Our Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cinematic storytelling across every market, every medium, every moment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-card aspect-[3/2] border border-border"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-2">
                    {item.category}
                  </p>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
