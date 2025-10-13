import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Users,
  Globe,
  TrendingUp,
  CheckCircle,
  Target,
} from "lucide-react";
import consultingOffice from "@/assets/consulting-office.jpg";

const Operations = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Our Operations
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Quantum Green Energy provides comprehensive spodumene sourcing and
              mining consultancy services, connecting sustainable mining
              operations with clean energy initiatives worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Main Operations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                What We Do
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                As a specialized consultancy, we focus exclusively on spodumene
                sourcing for clients in the clean energy sector. Our expertise
                lies in identifying, evaluating, and securing reliable sources
                of high-grade spodumene to support lithium-ion battery
                production and sustainable energy storage solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Direct Mine Access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Quality Assurance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Global Network</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Market Analysis</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-professional">
              <img
                src={consultingOffice}
                alt="Professional consulting office"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-professional transition-all duration-300">
              <CardContent className="p-6">
                <Building2 className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Strategic Sourcing
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Direct partnerships with mining operations to secure reliable
                  spodumene supply chains for our clients' long-term needs.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-professional transition-all duration-300">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Expert Consultation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Professional guidance on spodumene quality assessment, market
                  trends, and optimal procurement strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-professional transition-all duration-300">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Global Network
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Extensive connections with spodumene producers across
                  Australia, Chile, and other key mining regions worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-professional transition-all duration-300">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Market Intelligence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Real-time market analysis and pricing insights to help clients
                  make informed procurement decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-professional transition-all duration-300">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Supply Chain Management
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  End-to-end logistics coordination from mine to processing
                  facility, ensuring timely and secure delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-professional transition-all duration-300">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Sustainability Focus
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Emphasis on environmentally responsible mining practices and
                  sustainable supply chain development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
};

export default Operations;
