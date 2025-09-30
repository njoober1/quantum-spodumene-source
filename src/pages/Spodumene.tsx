import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Battery, Gem, BarChart3, Globe2, Recycle } from "lucide-react";
import spodumeneCrystal from "@/assets/spodumene-crystal.jpg";
import lithiumMine from "@/assets/lithium-mine.jpg";

const Spodumene = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Spodumene
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The essential lithium mineral driving the clean energy revolution. 
              Learn about spodumene's properties, applications, and critical role in sustainable technology.
            </p>
          </div>
        </div>
      </section>

      {/* What is Spodumene */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-lg overflow-hidden shadow-professional">
              <img 
                src={spodumeneCrystal} 
                alt="Spodumene mineral crystals" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                What is Spodumene?
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Spodumene is a pyroxene mineral consisting of lithium aluminum inosilicate (LiAl(SiO₃)₂). 
                It is the most commercially significant lithium ore mineral and the primary source of lithium 
                for battery manufacturing worldwide.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Found in lithium-rich pegmatites, spodumene typically occurs as prismatic crystals that can 
                range from colorless to various shades of white, gray, pink, or green. The mineral's high 
                lithium content makes it invaluable for the growing electric vehicle and energy storage markets.
              </p>
              <div className="bg-secondary/50 p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Chemical Formula:</h4>
                <p className="text-muted-foreground">LiAl(SiO₃)₂ - Lithium Aluminum Silicate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Applications & Uses
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Spodumene's unique properties make it essential for numerous applications 
              in modern technology and sustainable energy solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-professional transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Battery className="h-16 w-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Lithium-Ion Batteries
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Primary source of lithium for electric vehicle batteries, energy storage systems, 
                  and consumer electronics.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-professional transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Zap className="h-16 w-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Electric Vehicles
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Critical component in EV battery production, enabling the transition 
                  to sustainable transportation.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-professional transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Gem className="h-16 w-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Ceramics & Glass
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Used in specialty glass and ceramic applications requiring 
                  low thermal expansion properties.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-professional transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Globe2 className="h-16 w-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Grid Storage
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Essential for large-scale energy storage systems supporting 
                  renewable energy integration.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-professional transition-all duration-300">
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-16 w-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Industrial Applications
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Used in metallurgy, pharmaceuticals, and other industrial 
                  processes requiring high-purity lithium.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-professional transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Recycle className="h-16 w-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Sustainable Technology
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Enabling clean energy technologies that reduce carbon emissions 
                  and environmental impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mining & Processing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Mining & Processing
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Spodumene is primarily extracted from hard rock pegmatite deposits through conventional 
                open-pit mining methods. The mineral requires specialized processing to convert it into 
                lithium compounds suitable for battery manufacturing.
              </p>
              <div className="space-y-4">
                <div className="bg-card border border-border p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Extraction Process</h4>
                  <p className="text-muted-foreground text-sm">
                    Hard rock mining followed by crushing, grinding, and flotation concentration
                  </p>
                </div>
                <div className="bg-card border border-border p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Conversion</h4>
                  <p className="text-muted-foreground text-sm">
                    High-temperature roasting converts spodumene to lithium carbonate or hydroxide
                  </p>
                </div>
                <div className="bg-card border border-border p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Key Locations</h4>
                  <p className="text-muted-foreground text-sm">
                    Major deposits in Australia, Chile, Canada, and parts of Africa
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-professional">
              <img 
                src={lithiumMine} 
                alt="Spodumene mining operation" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Spodumene;