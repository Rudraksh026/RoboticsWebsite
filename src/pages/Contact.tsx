import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Instagram, Users } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from '@/hooks/use-toast';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Contact form submitted:', data);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with The Robotics Club Pantnagar. We'd love to hear from you!
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          {...register('name', { required: 'Name is required' })}
                          placeholder="Your full name"
                          className="bg-background/50"
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive">{errors.name.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          {...register('phone')}
                          placeholder="Your phone number"
                          className="bg-background/50"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        placeholder="your.email@example.com"
                        className="bg-background/50"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        {...register('subject', { required: 'Subject is required' })}
                        placeholder="What's this about?"
                        className="bg-background/50"
                      />
                      {errors.subject && (
                        <p className="text-sm text-destructive">{errors.subject.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        {...register('message', { required: 'Message is required' })}
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        className="bg-background/50"
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">{errors.message.message}</p>
                      )}
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information & Map */}
              <div className="space-y-8">
                
                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-primary/20 p-2 rounded-lg">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg">Phone</h3>
                      </div>
                      <p className="text-muted-foreground">
                        +91 9012967937<br />
                        {/* +91 8765432109 */}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-primary/20 p-2 rounded-lg">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg">Email</h3>
                      </div>
                      <p className="text-muted-foreground">
                        theroboticsclubpantnagar<br />
                        @gmail.com
                      </p>
                    </CardContent>
                  </Card>

                  
                </div>

                {/* Google Maps */}
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center space-x-2">
                      <MapPin className="h-5 w-5" />
                      <span>Find Us</span>
                    </CardTitle>
                    <CardDescription>
                      Visit us at the College of Technology, Pantnagar University
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full h-64 rounded-lg overflow-hidden border border-primary/20">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1498.8245811890974!2d79.49287151729013!3d29.022198729021085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a087423a199fb7%3A0x4826889a43f07995!2sCollege%20of%20Technology%2C%20Pantnagar!5e0!3m2!1sen!2sin!4v1756431108542!5m2!1sen!2sin" width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale hover:grayscale-0 transition-all duration-300"></iframe>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center space-x-2">
                      <Instagram className="h-5 w-5" />
                      <span>Follow Us</span>
                    </CardTitle>
                    <CardDescription>
                      Stay connected with our latest updates and activities
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="outline" asChild className="border-primary/20 hover:bg-primary/10">
                        <a href="https://www.instagram.com/theroboticsclub/" target="_blank" rel="noopener noreferrer">
                          <Instagram className="h-4 w-4 mr-2" />
                          @theroboticsclub
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Common questions about joining and participating in our robotics club
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">How can I join the club?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Contact us during the induction for the robotics club pantnagar
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Do I need prior experience?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No prior experience is required! We provide training and workshops 
                    for beginners and have projects suitable for all skill levels.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">What activities do you organize?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We organize workshops, competitions, lectures, 
                    and hands-on robotics projects throughout the academic year.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;