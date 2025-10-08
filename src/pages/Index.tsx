import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSlideshow from "@/components/HeroSlideshow";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, Award, TrendingUp, Briefcase, Heart, Shield, Leaf, Lightbulb, CheckCircle } from "lucide-react";
import teamWajahat from "@/assets/team-wajahat-updated.jpg";
import teamNizar from "@/assets/team-nizar-updated.jpg";
import teamJohn from "@/assets/team-john-updated.jpg";

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
              <Link to="/services">
                <Button size="lg" variant="secondary" className="group text-lg px-8 py-6">
                  Discover Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our experienced executives bring decades of expertise in mining, energy, and finance 
              to deliver exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-professional transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                  <img src={teamWajahat} alt="Wajahat Siddiqui" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Wajahat Siddiqui</h3>
                <p className="text-primary font-semibold mb-4">Chief Executive Officer</p>
                <p className="text-muted-foreground leading-relaxed">
                  25+ years in mining and mineral sourcing. Former VP at a Fortune 500 mining company, 
                  specializing in lithium and rare earth mineral procurement for the energy sector.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-professional transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                  <img src={teamNizar} alt="Nizar Joober" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Nizar Joober</h3>
                <p className="text-primary font-semibold mb-4">Chief Operating Officer</p>
                <p className="text-muted-foreground leading-relaxed">
                  20+ years managing global supply chains and operations in the clean energy sector. 
                  Expert in sustainable mining practices and international mineral trade compliance.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-professional transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                  <img src={teamJohn} alt="John Snow" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">John Snow</h3>
                <p className="text-primary font-semibold mb-4">Chief Financial Officer</p>
                <p className="text-muted-foreground leading-relaxed">
                  15+ years in financial strategy and risk management in the commodities sector. 
                  Former investment banker specializing in mining and energy infrastructure projects.
                </p>
              </CardContent>
            </Card>
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

      {/* Animated Logo Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <defs>
                <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:"#10b981", stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:"#059669", stopOpacity:1}} />
                </linearGradient>
                <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:"#3b82f6", stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:"#2563eb", stopOpacity:1}} />
                </linearGradient>
                <radialGradient id="glowGrad">
                  <stop offset="0%" style={{stopColor:"#10b981", stopOpacity:0.8}} />
                  <stop offset="100%" style={{stopColor:"#10b981", stopOpacity:0}} />
                </radialGradient>
              </defs>
              
              {/* Outer glow pulse */}
              <circle cx="200" cy="150" r="80" fill="url(#glowGrad)">
                <animate attributeName="r" values="80;90;80" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite"/>
              </circle>
              
              {/* Atomic structure */}
              <g transform="translate(200, 150)">
                {/* Three orbital rings */}
                <ellipse cx="0" cy="0" rx="60" ry="20" fill="none" stroke="url(#blueGrad)" strokeWidth="2" opacity="0.6">
                  <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite"/>
                </ellipse>
                <ellipse cx="0" cy="0" rx="60" ry="20" fill="none" stroke="url(#blueGrad)" strokeWidth="2" opacity="0.6" transform="rotate(60)">
                  <animateTransform attributeName="transform" type="rotate" from="60 0 0" to="420 0 0" dur="8s" repeatCount="indefinite"/>
                </ellipse>
                <ellipse cx="0" cy="0" rx="60" ry="20" fill="none" stroke="url(#blueGrad)" strokeWidth="2" opacity="0.6" transform="rotate(120)">
                  <animateTransform attributeName="transform" type="rotate" from="120 0 0" to="480 0 0" dur="8s" repeatCount="indefinite"/>
                </ellipse>
                
                {/* Central nucleus with pulse */}
                <circle cx="0" cy="0" r="18" fill="url(#greenGrad)">
                  <animate attributeName="r" values="18;20;18" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="0" cy="0" r="14" fill="#059669" opacity="0.8"/>
                <text x="0" y="6" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">Li</text>
                
                {/* Orbiting electrons */}
                <g>
                  <circle cx="60" cy="0" r="5" fill="#3b82f6">
                    <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="4s" repeatCount="indefinite"/>
                  </circle>
                </g>
                <g transform="rotate(60)">
                  <circle cx="60" cy="0" r="5" fill="#10b981">
                    <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="4s" repeatCount="indefinite"/>
                  </circle>
                </g>
                <g transform="rotate(120)">
                  <circle cx="60" cy="0" r="5" fill="#3b82f6">
                    <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="4s" repeatCount="indefinite"/>
                  </circle>
                </g>
              </g>
              
              {/* Energy particles floating up */}
              <g opacity="0.7">
                <circle cx="140" cy="220" r="3" fill="#10b981">
                  <animate attributeName="cy" values="220;180;220" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="170" cy="230" r="2.5" fill="#3b82f6">
                  <animate attributeName="cy" values="230;190;230" dur="3.5s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="230" cy="225" r="2.5" fill="#3b82f6">
                  <animate attributeName="cy" values="225;185;225" dur="3.2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0;1;0" dur="3.2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="260" cy="220" r="3" fill="#10b981">
                  <animate attributeName="cy" values="220;180;220" dur="2.8s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0;1;0" dur="2.8s" repeatCount="indefinite"/>
                </circle>
              </g>
              
              {/* Hexagonal crystal pattern */}
              <g transform="translate(200, 260)" opacity="0.5">
                <polygon points="0,-15 13,-7.5 13,7.5 0,15 -13,7.5 -13,-7.5" fill="none" stroke="#10b981" strokeWidth="1.5">
                  <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
                </polygon>
                <polygon points="0,-10 8.7,-5 8.7,5 0,10 -8.7,5 -8.7,-5" fill="none" stroke="#059669" strokeWidth="1">
                  <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                </polygon>
              </g>
              
              {/* Company name with subtle glow */}
              <text x="200" y="310" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" fill="#1f2937" textAnchor="middle">
                QUANTUM
              </text>
              <text x="200" y="345" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="600" fill="url(#greenGrad)" textAnchor="middle">
                GREEN ENERGY
                <animate attributeName="opacity" values="1;0.8;1" dur="2s" repeatCount="indefinite"/>
              </text>
              
              {/* Tagline */}
              <text x="200" y="370" fontFamily="Arial, sans-serif" fontSize="10" fill="#6b7280" textAnchor="middle" letterSpacing="1.5">
                LITHIUM • SPODUMENE SOLUTIONS
              </text>
            </svg>
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
