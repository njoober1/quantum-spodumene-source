import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSlideshow from "@/components/HeroSlideshow";
import videoSrc from "@/assets/backgroundVideo.mp4";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, Award, TrendingUp, Briefcase, Heart, Shield, Leaf, Lightbulb, CheckCircle } from "lucide-react";
import spodumeneOre from "@/assets/spodumene-ore.jpg";
import spodumeneMineral from "@/assets/spodumene-mineral.jpg";
import spodumeneCloseup from "@/assets/spodumene-closeup.jpg";
import spodumeneCrystal from "@/assets/spodumene-crystal.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSlideshow />

      {/* Operations Overview with Video Background */}
      <section className="py-20 relative overflow-hidden">
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 60%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 60%, transparent 100%)'
          }}
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
        <div className="container mx-auto px-4 relative z-10">
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
            <Link to="/operations" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Button size="lg" className="group">
                Learn About Our Operations
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Capacity Highlight Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 animate-fade-in">
                <span className="text-white font-bold text-lg">Our Sourcing Power</span>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-scale-in">
                500,000
              </h2>
              <p className="text-3xl md:text-4xl text-white/95 font-bold mb-4">
                Metric Tonnes per Year
              </p>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Industry-leading annual spodumene sourcing capacity, connecting you to the world's
                premier lithium deposits in Australia, Canada, and Africa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <p className="text-white/90 font-semibold mb-1">Verified Sources</p>
                  <p className="text-white/70 text-sm">All mining partners certified and audited</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <p className="text-white/90 font-semibold mb-1">Supply Monitoring</p>
                  <p className="text-white/70 text-sm">Real-time tracking and coordination</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">3</div>
                  <p className="text-white/90 font-semibold mb-1">Continents</p>
                  <p className="text-white/70 text-sm">Global network of mining operations</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Button size="lg" variant="secondary" className="group text-lg px-8 py-6">
                  Discover Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive spodumene sourcing and consulting services tailored to meet the evolving
              demands of the clean energy and electric vehicle industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="group hover:shadow-professional transition-all duration-300 overflow-hidden">
              <div className="relative h-64">
                <img
                  src={spodumeneOre}
                  alt="High-grade spodumene ore"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Spodumene Sourcing</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Direct access to high-grade spodumene from verified mining operations in Australia,
                  Canada, and Africa. With a yearly capacity of 500,000 metric tonnes, we ensure
                  reliable supply chains for battery manufacturers and clean energy companies.
                </p>
                <div className="flex items-start space-x-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Li₂O content: 6-8% guaranteed minimum</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Full traceability and quality certification</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-professional transition-all duration-300 overflow-hidden">
              <div className="relative h-64">
                <img
                  src={spodumeneMineral}
                  alt="Spodumene mineral analysis"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Market Intelligence</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Real-time market analysis and pricing insights for lithium and spodumene markets.
                  Our expert team monitors global supply chains, helping clients make informed
                  procurement decisions.
                </p>
                <div className="flex items-start space-x-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Weekly market reports and forecasts</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Strategic sourcing recommendations</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-professional transition-all duration-300 overflow-hidden">
              <div className="relative h-64">
                <img
                  src={spodumeneCloseup}
                  alt="Spodumene crystal closeup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Quality Assurance</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Comprehensive testing and verification protocols ensure every shipment meets
                  stringent quality standards. Independent laboratory analysis and certification
                  for complete transparency.
                </p>
                <div className="flex items-start space-x-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">ISO-certified testing procedures</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Third-party verification available</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-professional transition-all duration-300 overflow-hidden">
              <div className="relative h-64">
                <img
                  src={spodumeneCrystal}
                  alt="Premium spodumene crystal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Logistics Coordination</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  End-to-end supply chain management from mine to manufacturing facility. We handle
                  international shipping, customs clearance, and delivery coordination to ensure
                  timely arrivals.
                </p>
                <div className="flex items-start space-x-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Global shipping partnerships</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Real-time shipment tracking</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Button size="lg" className="group">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The principles that guide our commitment to excellence in sustainable mining and clean energy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-professional transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Integrity</h3>
                <p className="text-muted-foreground">
                  We conduct business with transparency, honesty, and the highest ethical standards in every transaction
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-professional transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Leaf className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  Environmental responsibility drives our sourcing decisions, promoting sustainable mining practices
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-professional transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Partnership</h3>
                <p className="text-muted-foreground">
                  Building long-term relationships with clients and suppliers based on mutual trust and success
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-professional transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Lightbulb className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Continuously improving our processes and leveraging technology to deliver superior value
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Spodumene Section */}
      <section className="py-20 bg-background">
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
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
};

export default Index;
