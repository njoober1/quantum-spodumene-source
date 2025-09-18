import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSlideshow from "@/components/HeroSlideshow";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, Award, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSlideshow />
      
      {/* Operations Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Professional Spodumene Sourcing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Quantum Green Energy is a specialized consultancy based in New York, dedicated to sourcing 
              high-quality spodumene for clients in the clean energy sector. We bridge the gap between 
              sustainable mining operations and the growing demand for lithium-ion battery materials.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="group hover:shadow-professional transition-all duration-300 text-center">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Expert Team</h3>
                <p className="text-muted-foreground">Specialized consultants with deep industry knowledge</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-professional transition-all duration-300 text-center">
              <CardContent className="p-8">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Global Reach</h3>
                <p className="text-muted-foreground">Worldwide network of mining partners and suppliers</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-professional transition-all duration-300 text-center">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Quality Focus</h3>
                <p className="text-muted-foreground">Rigorous quality standards for all sourced materials</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-professional transition-all duration-300 text-center">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Market Intelligence</h3>
                <p className="text-muted-foreground">Real-time market analysis and pricing insights</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Link to="/operations">
              <Button size="lg" className="group">
                Learn About Our Operations
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Spodumene Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Understanding Spodumene
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Spodumene is the world's most important lithium ore mineral, essential for the production 
                of lithium-ion batteries that power electric vehicles and energy storage systems. As the 
                clean energy transition accelerates, demand for high-quality spodumene continues to grow.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our expertise in spodumene sourcing ensures our clients have access to reliable, 
                high-grade materials necessary for their clean energy initiatives and battery 
                manufacturing operations.
              </p>
              <Link to="/spodumene">
                <Button variant="outline" size="lg" className="group">
                  Learn More About Spodumene
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-2">Chemical Composition</h4>
                  <p className="text-muted-foreground">Lithium Aluminum Silicate (LiAl(SiO₃)₂)</p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-2">Primary Use</h4>
                  <p className="text-muted-foreground">Lithium-ion battery manufacturing</p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-2">Key Markets</h4>
                  <p className="text-muted-foreground">Electric vehicles, energy storage, electronics</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
