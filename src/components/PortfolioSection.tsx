import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, Star } from "lucide-react";

export const PortfolioSection = () => {
  const projects = [
    {
      title: "Empyrion: Galactic Survival",
      description: "Senior Level Designer responsible for creating immersive environments and compelling gameplay mechanics in this space survival adventure.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=300&fit=crop",
      technologies: ["Level Design", "World Building", "Game Mechanics"],
      status: "Released",
      year: "2023",
      role: "Senior Level Designer at Trick Games"
    },
    {
      title: "Stumble Guys Adventures",
      description: "Contributed to level design and gameplay mechanics for this popular multiplayer party game, focusing on fun and engaging obstacle courses.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=300&fit=crop",
      technologies: ["Level Design", "Multiplayer Systems", "User Experience"],
      status: "Released",
      year: "2022",
      role: "Level Designer"
    },
    {
      title: "Dwarven Halls: The Lost Kingdom",
      description: "Independent RPG project featuring deep underground dwarven cities with intricate mining systems and forge mechanics.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop",
      technologies: ["RPG Systems", "Narrative Design", "Character Development"],
      status: "In Development",
      year: "2024",
      role: "Lead Designer & Creator"
    },
    {
      title: "Elven Realms: Mystic Forest",
      description: "Fantasy adventure focusing on elven magic systems and enchanted forest exploration with branching narrative paths.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=300&fit=crop",
      technologies: ["Magic Systems", "Environmental Storytelling", "Quest Design"],
      status: "Concept",
      year: "2024",
      role: "Game Designer"
    },
    {
      title: "Age of Dragons: Legacy",
      description: "Epic fantasy RPG featuring dragon riders, ancient civilizations, and large-scale battles in a rich fantasy world.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop",
      technologies: ["Combat Systems", "Dragon AI", "Epic Storytelling"],
      status: "Pre-Production",
      year: "2024",
      role: "Creative Director"
    },
    {
      title: "Goldening Fall",
      description: "Atmospheric adventure game set in mystical autumn forests with puzzle-solving and exploration elements.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop",
      technologies: ["Puzzle Design", "Atmospheric Design", "Environmental Art"],
      status: "Released",
      year: "2021",
      role: "Level Designer"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Released": return "bg-secondary text-secondary-foreground";
      case "In Development": return "bg-primary text-primary-foreground";
      case "Concept": return "bg-accent text-accent-foreground";
      case "Pre-Production": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="portfolio" className="py-24 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-fantasy text-4xl md:text-6xl font-bold mb-6">
            <span className="hero-text">Epic Creations</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Explore the worlds I've helped bring to life, from mystical realms to space adventures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="fantasy-card group hover:scale-105 transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="outline" className="bg-background/80">
                    {project.year}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="font-fantasy text-xl flex items-center gap-2">
                  {project.title}
                  {project.status === "Released" && (
                    <Star className="w-4 h-4 text-primary" />
                  )}
                </CardTitle>
                <p className="text-sm text-accent font-medium">
                  {project.role}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  {project.status === "Released" && (
                    <Button size="sm" className="flex-1">
                      <Play className="w-4 h-4 mr-2" />
                      Play
                    </Button>
                  )}
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};