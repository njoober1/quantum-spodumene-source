import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Recycle, Shield, Users, Target, Globe, CheckCircle } from "lucide-react";
import sustainabilityImage from "@/assets/sustainability.jpg";

const Sustainability = () => {
  const commitments = [
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description: "We prioritize partnerships with mining operations that implement sustainable extraction practices and minimize environmental impact."
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "Supporting the transition to renewable energy by ensuring responsible lithium supply chains for battery production and recycling."
    },
    {
      icon: Shield,
      title: "Ethical Sourcing",
      description: "All our spodumene sources meet strict ethical standards, ensuring fair labor practices and community respect."
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "We work with mining partners who invest in local communities through education, healthcare, and infrastructure development."
    }
  ];

  const initiatives = [
    {
      title: "Carbon Footprint Reduction",
      points: [
        "Optimizing logistics routes to minimize transportation emissions",
        "Partnering with carriers committed to carbon-neutral shipping",
        "Supporting mines that utilize renewable energy in their operations",
        "Implementing digital documentation to reduce paper consumption"
      ]
    },
    {
      title: "Water Conservation",
      points: [
        "Prioritizing mines with water recycling systems",
        "Supporting dry processing technologies where applicable",
        "Ensuring compliance with water quality standards",
        "Monitoring water usage metrics across supply chains"
      ]
    },
    {
      title: "Biodiversity Protection",
      points: [
        "Conducting environmental impact assessments for all mining partners",
        "Supporting habitat restoration programs",
        "Avoiding operations in protected or sensitive ecosystems",
        "Promoting reforestation initiatives in mining areas"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={sustainabilityImage} 
            alt="Sustainable Green Energy" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">Our Commitment to Sustainability</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Building a sustainable future through responsible spodumene sourcing and ethical mining partnerships
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Sustainability Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Quantum Green Energy, we recognize that sustainable practices are not just an option—they're 
              a necessity. As a key player in the clean energy supply chain, we are committed to ensuring that 
              every ton of spodumene we source contributes to a greener future, from mine to market.
            </p>
          </div>
        </div>
      </section>

      {/* Core Commitments */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            Our Core Sustainability Commitments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {commitments.map((commitment, index) => (
              <Card key={index} className="hover:shadow-professional transition-all duration-300">
                <CardContent className="p-8">
                  <commitment.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {commitment.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {commitment.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              Key Sustainability Initiatives
            </h2>
            <div className="space-y-8">
              {initiatives.map((initiative, index) => (
                <Card key={index} className="hover:shadow-professional transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6">
                      {initiative.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {initiative.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                          <span className="text-muted-foreground">{point}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Impact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Globe className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Supporting the Clean Energy Transition
              </h2>
            </div>
            
            <div className="space-y-6">
              <Card className="hover:shadow-professional transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    The Role of Sustainable Lithium
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Lithium extracted from spodumene is crucial for manufacturing batteries that power 
                    electric vehicles and store renewable energy. By ensuring sustainable sourcing practices, 
                    we help close the loop between clean energy production and responsible resource extraction.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    With our yearly capacity of sourcing 500,000 metric tonnes of high-quality spodumene, 
                    we have the scale to make a significant positive impact on the global transition to 
                    renewable energy.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-professional transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Transparency and Accountability
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We maintain complete transparency in our supply chain operations:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Target className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Regular third-party audits of mining partners for environmental compliance
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Target className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Comprehensive reporting on sustainability metrics and progress
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Target className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Full traceability from mine to delivery for all our spodumene sources
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Target className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Annual sustainability reports shared with clients and stakeholders
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our 2030 Sustainability Goals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="bg-background">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground">
                    Carbon-neutral supply chain operations
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50%</div>
                  <p className="text-muted-foreground">
                    Reduction in water usage across partner mines
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">Zero</div>
                  <p className="text-muted-foreground">
                    Operations in protected ecosystems
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Partner with Us for Sustainable Sourcing
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join us in building a more sustainable future through responsible spodumene sourcing practices.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Sustainability;