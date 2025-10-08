import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Battery, Gem, BarChart3, Globe2, Recycle } from "lucide-react";
import spodumeneCrystal from "@/assets/spodumene-crystal.jpg";
import lithiumMine from "@/assets/lithium-mine.jpg";
import spodumeneCloseup from "@/assets/spodumene-closeup.jpg";
import lithiumProcessing from "@/assets/lithium-processing.jpg";
import spodumeneOre from "@/assets/spodumene-ore.jpg";
import lithiumSamples from "@/assets/lithium-samples.jpg";

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
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Mining & Processing
            </h2>
            
            <div className="mb-8 rounded-lg overflow-hidden">
              <img 
                src={lithiumMine} 
                alt="Lithium mine operation" 
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Extraction Process</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Spodumene is typically extracted through open-pit mining operations. The ore is then crushed 
                  and processed through flotation methods to concentrate the spodumene mineral. Advanced 
                  processing techniques have made extraction more efficient and environmentally sustainable.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Conversion to Lithium Compounds</h3>
                <p className="text-muted-foreground leading-relaxed">
                  After extraction, spodumene concentrate undergoes a conversion process to produce lithium 
                  hydroxide or lithium carbonate. These compounds are the key materials used in battery 
                  manufacturing. The conversion involves heating the concentrate to high temperatures (decrepitation) 
                  followed by acid leaching and purification.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Global Mining Locations</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Major spodumene mining operations are located in Australia, which accounts for over 50% of 
                  global production. Other significant producers include China, Zimbabwe, and Brazil. The growing 
                  demand for lithium has led to the development of new mining projects worldwide, with particular 
                  focus on sustainable and responsible mining practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Spodumene & Lithium Gallery
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={spodumeneCloseup} 
                  alt="Spodumene crystal close-up" 
                  className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4 bg-card">
                  <h3 className="font-semibold text-foreground">Spodumene Crystal Structure</h3>
                  <p className="text-sm text-muted-foreground">Natural crystalline formation</p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={lithiumProcessing} 
                  alt="Lithium processing facility" 
                  className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4 bg-card">
                  <h3 className="font-semibold text-foreground">Lithium Processing Plant</h3>
                  <p className="text-sm text-muted-foreground">Modern extraction facility</p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={spodumeneOre} 
                  alt="Raw spodumene ore" 
                  className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4 bg-card">
                  <h3 className="font-semibold text-foreground">Raw Spodumene Ore</h3>
                  <p className="text-sm text-muted-foreground">Natural mineral specimen</p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={lithiumSamples} 
                  alt="Pure lithium samples" 
                  className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4 bg-card">
                  <h3 className="font-semibold text-foreground">Pure Lithium Metal</h3>
                  <p className="text-sm text-muted-foreground">Refined lithium samples</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
};

export default Spodumene;