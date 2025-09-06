import { Card, CardContent } from '@/components/ui/card';
import { Eye, Lightbulb, Rocket } from 'lucide-react';

export default function VisionSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/20" id="vision">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Vision & Mission</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Driving innovation and excellence in robotics education to create the next generation 
            of technology leaders and innovators.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="card-tech group">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Eye className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading hub of robotics innovation, fostering creativity and technical 
                excellence that contributes to solving global challenges through advanced 
                robotics and automation technologies.
              </p>
            </CardContent>
          </Card>

          <Card className="card-tech group">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Lightbulb className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-accent">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide students with hands-on experience in robotics, promote research 
                and innovation, and build a community of passionate engineers committed to 
                advancing the field of robotics and automation.
              </p>
            </CardContent>
          </Card>

          <Card className="card-tech group">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-tech-orange/10 flex items-center justify-center group-hover:bg-tech-orange/20 transition-colors">
                <Rocket className="w-10 h-10 text-tech-orange" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-tech-orange">Goals</h3>
              <p className="text-muted-foreground leading-relaxed">
                To achieve excellence in robotics competitions, develop innovative solutions 
                for industry challenges, and create a pipeline of skilled robotics engineers 
                for the future workforce.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8 text-foreground">Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <h4 className="text-lg font-semibold text-primary mb-2">Innovation</h4>
              <p className="text-muted-foreground text-sm">Pushing boundaries and exploring new possibilities</p>
            </div>
            <div className="p-6 rounded-xl bg-accent/5 border border-accent/20">
              <h4 className="text-lg font-semibold text-accent mb-2">Excellence</h4>
              <p className="text-muted-foreground text-sm">Striving for the highest standards in everything we do</p>
            </div>
            <div className="p-6 rounded-xl bg-tech-green/5 border border-tech-green/20">
              <h4 className="text-lg font-semibold text-tech-green mb-2">Collaboration</h4>
              <p className="text-muted-foreground text-sm">Working together to achieve common goals</p>
            </div>
            <div className="p-6 rounded-xl bg-tech-orange/5 border border-tech-orange/20">
              <h4 className="text-lg font-semibold text-tech-orange mb-2">Impact</h4>
              <p className="text-muted-foreground text-sm">Creating meaningful solutions for real-world problems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}