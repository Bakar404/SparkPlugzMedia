import { Card } from "@/components/ui/card";
import { Users, Camera, Zap } from "lucide-react";
import teamImage from "@/assets/team-image.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We're a passionate team of videographers, content creators, and marketing experts 
              who specialize in automotive dealership marketing. Our mission is simple: make your 
              dealership the talk of the town.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              With years of experience in video production and social media marketing, we know 
              exactly what it takes to create content that goes viral and drives real results 
              for your business.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="p-4 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Expert Team</div>
              </Card>
              <Card className="p-4 text-center">
                <Camera className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Pro Equipment</div>
              </Card>
              <Card className="p-4 text-center">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Viral Content</div>
              </Card>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <img 
              src={teamImage} 
              alt="Creative team of videographers and content creators working together"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;