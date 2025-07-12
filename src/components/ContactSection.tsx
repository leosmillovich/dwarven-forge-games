import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Youtube, MapPin, Gamepad2, Sparkles } from "lucide-react";

export const ContactSection = () => {

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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          {contactInfo.map((info, index) => (
            <Card key={info.label} className="fantasy-card group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-mystical-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-fantasy text-xl text-primary mb-2">{info.label}</h3>
                {info.href ? (
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors inline-block"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-foreground/80">{info.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Central CTA Section */}
        <div className="mt-16 text-center">
          <Card className="fantasy-card bg-dragon-gradient/10 border-primary/30">
            <CardContent className="p-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Gamepad2 className="w-8 h-8 text-primary" />
                <h3 className="font-fantasy text-3xl text-primary">Ready to Create Magic?</h3>
                <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              </div>
              <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
                I'm currently open to new freelance projects and collaborations. 
                Whether you need help with level design, world building, or complete game development, 
                I'm here to help bring your fantasy vision to life.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full border border-secondary/30">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
                  <span className="text-secondary-foreground font-medium">Available for projects</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-primary font-medium">Fantasy Specialist</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};