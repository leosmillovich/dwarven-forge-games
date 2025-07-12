import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Users, Trophy, Clock } from "lucide-react";
import profileImage from "@/assets/javier-profile.jpg";

export const AboutSection = () => {
  const stats = [
    { icon: Clock, label: "Years Experience", value: "5+" },
    { icon: Gamepad2, label: "Games Created", value: "15+" },
    { icon: Users, label: "Team Projects", value: "8+" },
    { icon: Trophy, label: "Awards Won", value: "3" },
  ];

  const specialties = [
    "Level Design & World Building",
    "RPG Mechanics & Systems",
    "Narrative Design",
    "Character Development",
    "Fantasy Lore Creation",
    "Game Balance & Testing"
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-fantasy text-4xl md:text-6xl font-bold mb-6">
            <span className="hero-text">About the Designer</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Crafting immersive fantasy worlds where every quest tells a story and every character has a purpose.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="relative">
            <div className="fantasy-card p-8">
              <img
                src={profileImage}
                alt="Javier Argañaraz"
                className="w-full h-96 object-cover rounded-lg dragon-glow"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-mystical-gradient rounded-full flex items-center justify-center animate-glow">
              <Gamepad2 className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="font-fantasy text-3xl font-semibold text-primary">
              Bringing Fantasy to Life
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              As a Senior Level Designer at Trick Games, I specialize in creating immersive RPG experiences 
              that transport players to realms of wonder and adventure. My passion lies in crafting worlds 
              where ancient dwarven halls echo with the sounds of forges, elven forests shimmer with mystical 
              energy, and mighty dragons guard treasures beyond imagination.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Currently working on indie team projects that focus on role-playing game adventures, 
              bringing the spirit of classic fantasy literature to interactive entertainment.
            </p>

            {/* Specialties */}
            <div className="space-y-4">
              <h4 className="font-fantasy text-xl font-semibold text-accent">
                Design Specialties
              </h4>
              <div className="flex flex-wrap gap-2">
                {specialties.map((specialty) => (
                  <Badge key={specialty} variant="secondary" className="text-sm">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="fantasy-card border-border/50">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <stat.icon className="w-8 h-8 text-primary mb-3" />
                <div className="text-3xl font-bold text-primary font-fantasy mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/70">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};