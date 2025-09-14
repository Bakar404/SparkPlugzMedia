import { Button } from "@/components/ui/button";
import { Play, Camera, Users } from "lucide-react";
import heroImage from "@/assets/Landing-page-picture.png";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Set initial visibility after component mounts
    setIsVisible(true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Calculate parallax effects
  const textTransform = scrollY * 0.5;
  const imageTransform = scrollY * 0.3;
  const opacity = Math.max(0, 1 - scrollY / 500);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${imageTransform}px)`,
          transition: scrollY === 0 ? "transform 0.3s ease-out" : "none",
        }}
      >
        <img
          src={heroImage}
          alt="Professional automotive marketing team filming with drones and equipment"
          className="w-full h-full object-cover scale-110"
        />
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Gradient overlay for enhanced text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Content with parallax */}
      <div
        className="relative z-10 container mx-auto px-6 text-center"
        style={{
          transform: `translateY(${textTransform}px)`,
          opacity: opacity,
          transition:
            scrollY === 0
              ? "transform 0.3s ease-out, opacity 0.3s ease-out"
              : "none",
        }}
      >
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1
            className={`text-3xl md:text-5xl font-bold mb-12 leading-tight text-white drop-shadow-2xl transition-all duration-1200 delay-200 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Make Your Dealership Go{" "}
            <span className="font-black bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">
              Viral
            </span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow-xl font-medium transition-all duration-1200 delay-400 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            We create viral content, skits, and reels that boost your social
            media numbers and make your dealership stand out from the
            competition.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1200 delay-600 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 hover-scale bg-blue-600 hover:bg-blue-500 text-white shadow-2xl backdrop-blur-sm border border-blue-400/30"
              onClick={() => scrollToSection("work")}
            >
              <Play className="mr-2" />
              Watch Our Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 hover-scale bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 backdrop-blur-sm shadow-xl"
              onClick={() => scrollToSection("contact")}
            >
              <Camera className="mr-2" />
              Get Quote
            </Button>
          </div>

          {/* Stats with enhanced visibility */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1200 delay-800 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-xl">
              <div className="text-3xl font-bold text-blue-300 mb-2 drop-shadow-lg">
                500+
              </div>
              <div className="text-gray-200 font-medium">Videos Created</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-xl">
              <div className="text-3xl font-bold text-blue-300 mb-2 drop-shadow-lg">
                50M+
              </div>
              <div className="text-gray-200 font-medium">Views Generated</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-xl">
              <div className="text-3xl font-bold text-blue-300 mb-2 drop-shadow-lg">
                100+
              </div>
              <div className="text-gray-200 font-medium">Happy Dealerships</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-30 translate-y-4"
        }`}
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full p-1">
            <div className="w-1 h-2 bg-white/80 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
