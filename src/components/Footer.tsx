import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Instagram, Youtube, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    if (!email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <footer id="contact" className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              SparkPlugzMedia
            </div>
            <p className="text-muted-foreground mb-6">
              Making dealerships go viral with professional video content and social media marketing.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Video Production</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Drone Cinematography</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Social Media Marketing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Content Creation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Photography</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3" />
                <span>hello@sparkplugzmedia.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3" />
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-muted-foreground mb-4">
              Get the latest tips on viral automotive content.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input 
                type="email"
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="transition-all focus:ring-2 focus:ring-primary/50"
              />
              <Button 
                variant="hero" 
                className="w-full hover-scale" 
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 SparkPlugzMedia. All rights reserved. Making dealerships go viral since 2020.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;