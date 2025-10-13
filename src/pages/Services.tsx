import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Package,
  Users,
  TruckIcon,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Spodumene Sourcing",
      description:
        "Our core service focuses on identifying and securing high-quality spodumene sources for the clean energy sector. With a yearly capacity of 500,000 metric tonnes, we leverage our extensive global network to connect clients with reliable mining operations that meet stringent quality standards.",
      features: [
        "Direct access to premium spodumene deposits in Australia, Canada, and Africa",
        "Quality assessment and grade verification from certified laboratories",
        "Long-term supply agreements with established mining operations",
        "Competitive pricing through strategic partnerships",
        "Real-time availability tracking and inventory management",
        "Flexible contract terms tailored to client needs",
      ],
    },
    {
      icon: Users,
      title: "Mining Connection",
      description:
        "We maintain continuous, direct communication with mining operations worldwide. Our team is actively engaged with mine operators, staying updated on production schedules, extraction processes, and operational developments to ensure seamless coordination and reliable supply chains.",
      features: [
        "Daily communication with active mining operations",
        "Real-time updates on production status and output",
        "Direct coordination with mine site managers and operators",
        "On-site visits and operational assessments",
        "Continuous monitoring of extraction quality and grades",
        "Proactive problem-solving for operational challenges",
        "Regular briefings on mining developments and expansions",
      ],
    },
    {
      icon: TruckIcon,
      title: "Supply Chain Management",
      description:
        "End-to-end supply chain coordination ensures seamless delivery from mine to processing facility. We handle all logistics, documentation, and quality control checkpoints to guarantee reliable and timely delivery of spodumene concentrates.",
      features: [
        "Complete logistics coordination from extraction to delivery",
        "Multi-modal transportation planning (sea, rail, road)",
        "Customs clearance and international trade documentation",
        "Quality control inspections at key checkpoints",
        "Real-time shipment tracking and status updates",
        "Risk management and insurance coordination",
        "Storage and warehousing solutions",
      ],
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description:
        "Stay ahead of market trends with our comprehensive intelligence services. We provide detailed analysis of spodumene pricing, supply-demand dynamics, and industry developments to help clients make informed procurement decisions.",
      features: [
        "Daily market price updates and trend analysis",
        "Supply and demand forecasting for global lithium markets",
        "Competitive intelligence on major producers and suppliers",
        "Geopolitical risk assessments affecting supply chains",
        "Technology and industry development monitoring",
        "Quarterly market reports and strategic recommendations",
        "Custom research on specific regions or suppliers",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive spodumene sourcing and mining consultancy solutions
              designed to support the clean energy revolution with sustainable,
              reliable mineral supply chains.
            </p>
          </div>
        </div>
      </section>

      {/* Capacity Highlight Banner */}
      <section className="py-12 bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                  <span className="text-white font-semibold text-sm">
                    Sourcing Capacity
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  500,000
                </h2>
                <p className="text-2xl md:text-3xl text-white/90 font-semibold mb-2">
                  Metric Tonnes
                </p>
                <p className="text-lg text-white/80">
                  Annual Spodumene Sourcing Capacity
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">
                  What This Means for You
                </h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                    <span>Reliable, large-scale supply agreements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                    <span>Consistent quality across all shipments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                    <span>Competitive pricing through volume</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                    <span>Direct mine-to-client delivery coordination</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-professional transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <service.icon className="h-16 w-16 text-primary mb-4" />
                      <h2 className="text-3xl font-bold text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to discuss how our services can support your
              spodumene sourcing needs.
            </p>
            <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Button size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
};

export default Services;
