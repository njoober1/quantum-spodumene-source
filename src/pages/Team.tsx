import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, TrendingUp, Zap, Shield } from "lucide-react";
import wajahatImage from "@/assets/team-wajahat-new.jpg";
import nizarImage from "@/assets/team-nizar-new.jpg";
import sandraImage from "@/assets/team-sandra.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Wajahat Siddiqui",
      role: "Chief Executive Officer",
      bio: "Wajahat brings over 20 years of experience in the petrochemical, mining, and energy sectors. An expert in Asian and global markets, he possesses deep knowledge in petrochemical and mineral sourcing, and has positioned Quantum Green Energy as a trusted leader in sustainable spodumene procurement. Wajahat's commitment to ethical practices and market expertise drive our company's mission forward in delivering responsible energy solutions.",
      email: "wajahat@quantumgenergy.com",
      image: wajahatImage,
    },
    {
      name: "Nizar Joober",
      role: "Chief Operating Officer",
      bio: "With 15 years of operational excellence in mining consultancy, Nizar oversees all day-to-day operations and client relationships. His hands-on approach and extensive expertise in mine site evaluation, logistics optimization, and supply chain management ensure seamless operations. Nizar's ability to build strong partnerships and deliver results has been instrumental in our client success stories.",
      email: "nizar@quantumgenergy.com",
      image: nizarImage,
    },
    {
      name: "Sandra Stèphanie Chastagnol",
      role: "Chief Financial Officer",
      bio: "Sandra is a seasoned financial strategist with extensive expertise in commodities trading and international finance. Having worked with leading investment firms specializing in critical minerals, she brings exceptional analytical skills and strategic insight to our financial operations. Sandra's ability to navigate complex markets and structure optimal contracts ensures our clients receive competitive pricing and superior value.",
      email: "sandrastephanie@quantumgenergy.com",
      image: sandraImage,
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
              Our Leadership Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Meet the experienced professionals guiding Quantum Green Energy's
              mission to connect sustainable mining operations with clean energy
              initiatives worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-professional transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-primary/20">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground text-center mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold text-center mb-4">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  <div className="flex justify-center">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="text-sm">Contact</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Insights */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Industry Facts & Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="group hover:shadow-professional transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Spodumene Trading
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The global spodumene market is projected to grow at 15%
                    annually, with demand driven by electric vehicle battery
                    production. Quality 6% Li2O spodumene concentrate commands
                    premium pricing in international markets.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-professional transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Critical Mineral
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Spodumene is the primary lithium-bearing ore, containing
                    6-8% lithium oxide. As the world transitions to clean
                    energy, strategic sourcing of spodumene has become essential
                    for securing supply chains in battery manufacturing.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-professional transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Our Commitment
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We ensure responsible sourcing through direct mine
                    partnerships, rigorous quality control, and transparent
                    supply chain practices. Our commitment to sustainability and
                    ethical operations sets industry standards.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/30 rounded-lg p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
                Our Core Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Integrity First
                    </h4>
                    <p className="text-muted-foreground">
                      Transparent operations and honest communication with all
                      stakeholders
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Sustainable Practices
                    </h4>
                    <p className="text-muted-foreground">
                      Environmental responsibility and ethical mining
                      partnerships
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Excellence in Service
                    </h4>
                    <p className="text-muted-foreground">
                      Consistent quality and reliability in every delivery
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Innovation & Growth
                    </h4>
                    <p className="text-muted-foreground">
                      Continuous improvement and adaptation to market needs
                    </p>
                  </div>
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

export default Team;
