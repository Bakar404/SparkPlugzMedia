import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Eye, Heart, Share } from "lucide-react";

const Work = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolioItems = [
    {
      title: "Luxury Dealership Showcase",
      description: "Cinematic video featuring premium vehicles with drone footage",
      views: "2.3M",
      engagement: "45K",
      platform: "Instagram",
      type: "Video Campaign"
    },
    {
      title: "Viral Car Reveal Skit",
      description: "Comedy skit featuring surprise car reveals that went viral",
      views: "5.7M",
      engagement: "128K",
      platform: "TikTok",
      type: "Viral Content"
    },
    {
      title: "Customer Testimonial Series",
      description: "Authentic customer stories showcasing dealership experience",
      views: "890K",
      engagement: "23K",
      platform: "YouTube",
      type: "Testimonials"
    },
    {
      title: "Behind-the-Scenes Content",
      description: "Day-in-the-life content showing dealership operations",
      views: "1.2M",
      engagement: "67K",
      platform: "Instagram",
      type: "BTS Content"
    }
  ];

  const stats = [
    { number: "500+", label: "Videos Produced", icon: Play },
    { number: "50M+", label: "Total Views", icon: Eye },
    { number: "2M+", label: "Engagements", icon: Heart },
    { number: "10K+", label: "Shares", icon: Share }
  ];

  return (
    <section id="work" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Work & Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we've helped dealerships across the country dominate social media 
            and drive real business results through viral content.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-glow transition-all duration-300">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 animate-fade-in">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="secondary">{item.type}</Badge>
                  <Badge variant="outline">{item.platform}</Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
                <CardDescription>
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1 text-muted-foreground" />
                      <span className="text-sm font-medium">{item.views}</span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-4 h-4 mr-1 text-muted-foreground" />
                      <span className="text-sm font-medium">{item.engagement}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Play className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-secondary rounded-lg p-12">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Make Your Dealership Go Viral?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join over 100 dealerships who trust us to create content that drives 
            real results. Let's discuss your next viral campaign.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              className="hover-scale"
              onClick={() => scrollToSection('contact')}
            >
              Start Your Campaign
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hover-scale"
            >
              View Full Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;