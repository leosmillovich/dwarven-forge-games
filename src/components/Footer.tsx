import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <span className="font-fantasy text-2xl font-bold hero-text">
              Javier Argañaraz
            </span>
          </div>

          {/* Tagline */}
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Crafting legendary gaming experiences in mystical realms where every adventure tells an epic story.
          </p>

          {/* Copyright */}
          <div className="flex items-center justify-center gap-2 text-sm text-foreground/60">
            <span>© 2024 Javier Argañaraz. Made with</span>
            <Heart className="w-4 h-4 text-destructive fill-current" />
            <span>for the gaming community.</span>
          </div>

          {/* Quote */}
          <div className="max-w-xl mx-auto">
            <blockquote className="font-fantasy text-lg text-primary/80 italic">
              "In every quest lies the potential for legend, 
              in every character the spark of heroes."
            </blockquote>
          </div>
        </div>
      </div>
    </footer>
  );
};