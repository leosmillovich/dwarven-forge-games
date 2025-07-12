import { Button } from "@/components/ui/button";
import { ArrowDown, Sword, Shield, Crown } from "lucide-react";
import heroImage from "@/assets/hero-fantasy-landscape.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="font-fantasy text-6xl md:text-8xl font-bold mb-6">
            <span className="hero-text">Javier Argañaraz</span>
          </h1>
          <h2 className="font-fantasy text-2xl md:text-4xl text-foreground/80 mb-8">
            Fantasy RPG Game Designer
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            With 5 years of experience crafting epic adventures in mystical realms. 
            Specializing in immersive worlds where dwarfs forge legends, elves weave magic, 
            and dragons guard ancient secrets.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
          <Button 
            size="lg" 
            className="bg-dragon-gradient hover:scale-105 transition-transform dragon-glow px-8 py-4 text-lg font-semibold"
          >
            <Sword className="mr-2" />
            Explore My Worlds
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
          >
            <Shield className="mr-2" />
            View Portfolio
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 opacity-20">
        <Crown className="w-16 h-16 text-primary animate-glow" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-20">
        <Sword className="w-12 h-12 text-accent animate-float" />
      </div>
    </section>
  );
};