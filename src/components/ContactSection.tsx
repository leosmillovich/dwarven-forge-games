import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Youtube, Gamepad2, Sparkles, Sword, Shield, Crown } from "lucide-react";
import dwarfWarrior from "@/assets/dwarf-warrior.jpg";

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

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={info.label} className="fantasy-card group hover:scale-105 transition-all duration-500 hover:shadow-mystical animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-14 h-14 bg-mystical-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-fantasy text-lg text-primary mb-1">{info.label}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors inline-block hover:translate-x-1 transform duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground/80">{info.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Dwarf Warrior Section */}
          <div className="relative">
            <Card className="fantasy-card bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30 overflow-hidden group">
              <CardContent className="p-8 text-center relative">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <Sword className="w-8 h-8 text-primary animate-pulse" />
                </div>
                <div className="absolute top-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <Shield className="w-8 h-8 text-secondary animate-pulse" style={{animationDelay: '0.5s'}} />
                </div>
                
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/50 group-hover:border-primary group-hover:scale-110 transition-all duration-500 shadow-xl">
                  <img 
                    src={dwarfWarrior} 
                    alt="Dwarf Warrior" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <h3 className="font-fantasy text-2xl text-primary mb-3 group-hover:text-primary-bright transition-colors">
                  Guardian of the Forge
                </h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  "In the halls of legend, where hammers ring and axes sing, every great quest begins with a single step into the unknown."
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-secondary">
                  <Crown className="w-4 h-4 animate-pulse" />
                  <span className="font-fantasy">Master of Ancient Lore</span>
                  <Crown className="w-4 h-4 animate-pulse" style={{animationDelay: '1s'}} />
                </div>
              </CardContent>
            </Card>
          </div>
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