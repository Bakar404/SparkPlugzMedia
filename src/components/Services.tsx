import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Plane, Share2, Users, Camera, Megaphone } from "lucide-react";
import equipmentImage from "@/assets/equipment-image.jpg";

const Services = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: Video,
      title: "Video Production",
      description: "High-quality video content that showcases your inventory and dealership in the best light.",
      features: ["Professional filming", "Cinematic editing", "Brand storytelling"]
    },
    {
      icon: Plane,
      title: "Drone Cinematography",
      description: "Stunning aerial shots that give your dealership a premium, cinematic feel.",
      features: ["4K aerial footage", "Dynamic transitions", "Unique perspectives"]
    },
    {
      icon: Share2,
      title: "Viral Content Creation",
      description: "Skits, reels, and trending content designed to go viral and boost engagement.",
      features: ["Trending formats", "Platform optimization", "Viral strategies"]
    },
    {
      icon: Users,
      title: "Social Media Marketing",
      description: "Complete social media management to maximize your reach and engagement.",
      features: ["Content scheduling", "Community management", "Analytics tracking"]
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional automotive photography that makes your cars irresistible.",
      features: ["Studio quality", "Detail shots", "Lifestyle photography"]
    },
    {
      icon: Megaphone,
      title: "Campaign Strategy",
      description: "Data-driven marketing campaigns that deliver measurable results.",
      features: ["Target audience analysis", "Campaign optimization", "ROI tracking"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need to dominate social media and stand out 
            in the competitive automotive market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 animate-fade-in">
              <CardHeader>
                <service.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={equipmentImage} 
              alt="Professional video production equipment including cameras, lighting, and drones"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Professional Equipment, 
              <span className="text-primary"> Viral Results</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              We use state-of-the-art equipment including professional cameras, 
              lighting systems, and high-end drones to ensure your content looks 
              absolutely stunning and stands out from the competition.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              className="hover-scale"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;