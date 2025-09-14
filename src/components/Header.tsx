import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div 
            className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer hover-scale"
            onClick={() => scrollToSection('hero')}
          >
            SparkPlugzMedia
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors story-link"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors story-link"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('work')}
              className="text-foreground hover:text-primary transition-colors story-link"
            >
              Our Work
            </button>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button>
          </div>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border animate-fade-in z-50">
              <div className="flex flex-col space-y-4 p-6">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-left text-foreground hover:text-primary transition-colors"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-left text-foreground hover:text-primary transition-colors"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('work')}
                  className="text-left text-foreground hover:text-primary transition-colors"
                >
                  Our Work
                </button>
                <Button 
                  variant="hero" 
                  onClick={() => scrollToSection('contact')} 
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;