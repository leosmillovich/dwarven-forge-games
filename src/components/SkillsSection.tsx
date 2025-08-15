import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Sword, Shield, Crown, Wand2, Hammer, Scroll } from "lucide-react";
import dwarfImage from "@/assets/dwarf-character.jpg";
import elfImage from "@/assets/elf-character.jpg";
import dragonImage from "@/assets/dragon-character.jpg";

export const SkillsSection = () => {
  const skills = [
    { name: "Level Design", level: 95, category: "Design" },
    { name: "Game Mechanics", level: 90, category: "Systems" },
    { name: "World Building", level: 92, category: "Creative" },
    { name: "Narrative Design", level: 85, category: "Storytelling" },
    { name: "RPG Systems", level: 88, category: "Gameplay" },
    { name: "Team Leadership", level: 80, category: "Management" },
    { name: "Unity Engine", level: 85, category: "Technical" },
    { name: "Character Development", level: 87, category: "Creative" }
  ];

  const categories = [
    {
      title: "The Forge Master",
      subtitle: "Technical & Systems Design",
      description: "Like the master smiths of dwarven halls, I craft robust game systems and mechanics that stand the test of time.",
      icon: Hammer,
      image: dwarfImage,
      skills: skills.filter(s => ["Systems", "Technical", "Gameplay"].includes(s.category))
    },
    {
      title: "The Lore Keeper",
      subtitle: "Creative & Narrative Design",
      description: "Drawing wisdom from elven traditions, I weave stories and create worlds that captivate and inspire.",
      icon: Scroll,
      image: elfImage,
      skills: skills.filter(s => ["Creative", "Storytelling"].includes(s.category))
    },
    {
      title: "The Dragon Lord",
      subtitle: "Leadership & Vision",
      description: "With the commanding presence of an ancient dragon, I lead teams and shape the vision of epic adventures.",
      icon: Crown,
      image: dragonImage,
      skills: skills.filter(s => ["Design", "Management"].includes(s.category))
    }
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-fantasy text-4xl md:text-6xl font-bold mb-6">
            <span className="hero-text">Mastery & Skills</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Each skill honed through years of crafting legendary experiences, 
            guided by the wisdom of fantasy's greatest masters.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.title} 
              className="fantasy-card group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-6">
                <div className="relative mx-auto mb-4">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-24 h-24 rounded-full object-cover mx-auto dragon-glow"
                  />
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-mystical-gradient rounded-full flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardTitle className="font-fantasy text-2xl text-primary mb-2">
                  {category.title}
                </CardTitle>
                <p className="text-accent font-medium mb-3">
                  {category.subtitle}
                </p>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {category.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="mt-16">
          <Card className="fantasy-card">
            <CardHeader className="text-center">
              <CardTitle className="font-fantasy text-3xl text-primary flex items-center justify-center gap-3">
                <Wand2 className="w-8 h-8" />
                Tools of the Trade
              </CardTitle>
              <p className="text-foreground/70">
                The magical instruments I wield to bring fantasy worlds to life
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  "Unity Engine", "Unreal Engine",
                  "Git", "C#", "Visual studio",
                  "Jira", "Confluence", "Trello"
                ].map((tool) => (
                  <div 
                    key={tool}
                    className="p-4 bg-muted rounded-lg hover:bg-primary/20 transition-colors duration-200"
                  >
                    <span className="font-medium">{tool}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};