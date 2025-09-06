import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Cpu, Zap, Users, Target } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: "Advanced Technology",
    description: "Working with cutting-edge robotics, AI, and automation technologies to solve real-world problems."
  },
  {
    icon: Zap,
    title: "Innovation Hub", 
    description: "Fostering creativity and innovation through hands-on projects and collaborative research initiatives."
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a strong community of passionate robotics enthusiasts, engineers, and technology leaders."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Committed to achieving excellence in robotics competitions, research, and technological advancement."
  }
];

export default function AboutSection() {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Our Club</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The Robotics Club Pantnagar promotes student learning and innovation in robotics and automation.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Shaping Tomorrow's <span className="text-primary">Engineers</span>
            </h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            The Robotics Club Pantnagar provides a platform for students to explore robotics through hands-on projects, expert mentorship, and participation in competitions.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
            From autonomous vehicles to humanoids, members drive innovation and push the limits of robotics and automation.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="card-tech">
              <h4 className="text-xl font-semibold mb-2 text-primary">Established</h4>
              <p className="text-muted-foreground">2012 - Building excellence for over 13 years</p>
            </div>
            <div className="card-tech">
              <h4 className="text-xl font-semibold mb-2 text-accent">Focus Areas</h4>
              <p className="text-muted-foreground">Autonomous Systems, AI/ML, IoT, Mechatronics</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-tech group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}