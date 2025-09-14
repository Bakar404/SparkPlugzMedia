import { Button } from "@/components/ui/button";
import { Play, Camera, Users } from "lucide-react";
import heroImage from "@/assets/Landing-page-picture.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background image (no colored tint/overlay so the image remains natural) */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional automotive marketing team filming with drones and equipment"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Make Your
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}
              Dealership{" "}
            </span>
            Go Viral
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We create viral content, skits, and reels that boost your social
            media numbers and make your dealership stand out from the
            competition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 hover-scale"
              onClick={() => scrollToSection("work")}
            >
              <Play className="mr-2" />
              Watch Our Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 hover-scale"
              onClick={() => scrollToSection("contact")}
            >
              <Camera className="mr-2" />
              Get Quote
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Videos Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50M+</div>
              <div className="text-muted-foreground">Views Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Happy Dealerships</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
