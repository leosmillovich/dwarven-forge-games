// import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { Gamepad2 } from "lucide-react";
import profileImage from "@/assets/javier-profile.jpg";

export const AboutSection = () => {
  // const stats = [
  //   { icon: Gamepad2, label: "Games Created", value: "15+" },
  // ];

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
            {/* <div className="absolute -top-4 -right-4 w-20 h-20 bg-mystical-gradient rounded-full flex items-center justify-center animate-glow">
              <Gamepad2 className="w-10 h-10 text-white" />
            </div> */}
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

        {/* Stats
        <div className="grid grid-cols-1 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="fantasy-card p-8 hover:scale-105 transition-transform duration-300">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-mystical-gradient">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-primary font-fantasy mb-2 group-hover:text-accent transition-colors">
                  {stat.value}
                </div>
                <div className="text-lg text-foreground/80 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div> */}

      </div>
    </section>
  );
};