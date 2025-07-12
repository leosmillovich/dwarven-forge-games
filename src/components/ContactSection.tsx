import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Youtube, MapPin, Send, Scroll } from "lucide-react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "javier.arganaraz@example.com",
      href: "mailto:javier.arganaraz@example.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Javier Argañaraz",
      href: "https://linkedin.com/in/javier-arganaraz"
    },
    {
      icon: Youtube,
      label: "YouTube",
      value: "Game Design Insights",
      href: "https://youtube.com/@javierarganaraz"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Argentina",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-fantasy text-4xl md:text-6xl font-bold mb-6">
            <span className="hero-text">Begin the Quest</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Ready to embark on an epic adventure together? Let's create the next legendary gaming experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="fantasy-card">
            <CardHeader>
              <CardTitle className="font-fantasy text-2xl text-primary flex items-center gap-3">
                <Scroll className="w-6 h-6" />
                Send a Message
              </CardTitle>
              <p className="text-foreground/70">
                Have a project in mind? Let's discuss how we can bring your vision to life.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project collaboration, consultation, etc."
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or what you'd like to discuss..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-dragon-gradient hover:scale-105 transition-transform">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="fantasy-card">
              <CardHeader>
                <CardTitle className="font-fantasy text-2xl text-primary">
                  Let's Connect
                </CardTitle>
                <p className="text-foreground/70">
                  Feel free to reach out through any of these channels.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-mystical-gradient rounded-full flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-primary hover:text-primary-glow transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="fantasy-card">
              <CardContent className="p-6">
                <h3 className="font-fantasy text-xl text-primary mb-4">
                  Current Availability
                </h3>
                <p className="text-foreground/80 mb-4">
                  I'm currently open to new freelance projects and collaborations. 
                  Whether you need help with level design, world building, or complete game development, 
                  I'm here to help bring your fantasy vision to life.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 rounded-full">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                  <span className="text-sm text-secondary-foreground">Available for projects</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};