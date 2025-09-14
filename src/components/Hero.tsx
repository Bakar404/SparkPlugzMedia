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
    <section id="hero" className="min-h-screen relative overflow-hidden pt-16">
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

      {/* Content structure: Top title, Middle (paragraph + buttons), Bottom stats */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 h-full min-h-[calc(100vh-4rem)] flex flex-col">
        {/* Top: Headline at the top */}
        <div
          className={`pt-4 text-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-2xl">
            Make Your Dealership Go{" "}
            <span className="font-black bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">
              Viral
            </span>
          </h1>
        </div>

        {/* Middle: Paragraph + Buttons centered */}
        <div
          className="flex-1 flex flex-col items-center justify-end text-center mb-8 md:mb-12"
          style={{
            transform: `translateY(${textTransform}px)`,
            opacity: opacity,
            transition:
              scrollY === 0
                ? "transform 0.3s ease-out, opacity 0.3s ease-out"
                : "none",
          }}
        >
          <p
            className={`text-lg md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow-xl font-medium transition-all duration-1200 delay-200 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            We create viral content, skits, and reels that boost your social
            media numbers and make your dealership stand out from the
            competition.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1200 delay-300 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            <Button
              variant="hero"
              size="lg"
              className="text-base md:text-lg px-8 hover-scale bg-blue-600 hover:bg-blue-500 text-white shadow-2xl backdrop-blur-sm border border-blue-400/30"
              onClick={() => scrollToSection("work")}
            >
              <Play className="mr-2" />
              Watch Our Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base md:text-lg px-8 hover-scale bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 backdrop-blur-sm shadow-xl"
              onClick={() => scrollToSection("contact")}
            >
              <Camera className="mr-2" />
              Get Quote
            </Button>
          </div>
        </div>

        {/* Bottom: Stats pinned to the bottom */}
        <div
          className={`pb-14 transition-all duration-1200 delay-400 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20 shadow-xl">
              <div className="text-4xl md:text-5xl font-extrabold text-blue-300 mb-1 drop-shadow-lg">
                500+
              </div>
              <div className="text-gray-200 font-medium md:text-lg">
                Videos Created
              </div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20 shadow-xl">
              <div className="text-4xl md:text-5xl font-extrabold text-blue-300 mb-1 drop-shadow-lg">
                50M+
              </div>
              <div className="text-gray-200 font-medium md:text-lg">
                Views Generated
              </div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20 shadow-xl">
              <div className="text-4xl md:text-5xl font-extrabold text-blue-300 mb-1 drop-shadow-lg">
                100+
              </div>
              <div className="text-gray-200 font-medium md:text-lg">
                Happy Dealerships
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-24 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ease-out ${
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
