import React from 'react';

const highlights = [
  {
    image: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/highlight/inbotics2025.webp",
    title: "Inbotics 2025"
  },
  {
    image: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/highlight/inbotics2024.webp",
    title: "Inbotics 2023",
  },
  {
    image: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/highlight/inbotics2023.webp",
    title: "Inbotics 2022",
  },  
  {
    image: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/highlight/RcCar.webp",
    title: "RC Car"
  }
];

export default function HighlightsSection() {
  // Duplicate the highlights array for seamless infinite scroll
  const duplicatedHighlights = [...highlights, ...highlights];

  return (
    <section className="py-20 overflow-hidden" id="highlights">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Club <span className="text-gradient">Highlights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our journey of innovation, achievements, and breakthrough projects that 
            define the excellence of Robotics Club Pantnagar.
          </p>
        </div>
      </div>

      {/* Auto-scrolling Image Gallery */}
      <div className="relative">
        <div className="flex scroll-animation space-x-8">
          {duplicatedHighlights.map((highlight, index) => (
            <div
              key={index}
              className="flex-shrink-0 relative group cursor-pointer"
              style={{ width: '400px', height: '250px' }}
            >
              <img
                src={highlight.image}
               alt={highlight.title}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-primary/50 transition-colors duration-300" />
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for smooth edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
      </div>

      {/* Achievement Stats */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">10+</div>
            <div className="text-muted-foreground">Completed Projects</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-accent">15+</div>
            <div className="text-muted-foreground">Competition Awards</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-tech-orange">40+</div>
            <div className="text-muted-foreground">Active Members</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-tech-green">200+</div>
            <div className="text-muted-foreground">Alumni</div>
          </div>
        </div>
      </div>
    </section>
  );
}