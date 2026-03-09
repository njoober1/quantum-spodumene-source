import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Briefcase, Network, Cpu } from "lucide-react";
import heroImage from "@/assets/green-energy.jpg";

const CCUS = () => {
    return (
        <div className="min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <section className="relative h-[400px] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroImage}
                        alt="Carbon Capture, Utilization, and Storage"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
                </div>
                <div className="relative container mx-auto px-4 h-full flex items-center">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold text-white mb-4">
                            Carbon Capture, Utilization, and Storage (CCUS)
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            Empowering a sustainable future through advanced carbon
                            clean deals, strategic engineering, and global partnerships.
                        </p>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-6">
                        Pioneering the Path to Net-Zero
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Quantum Green Energy provides rigorous analysis and comprehensive
                        expertise in Carbon clean deals engineering. We leverage our deep
                        connections with the industrial sector, forward-thinking
                        technological partners, and our network of international experts in
                        green energies to deliver impactful and sustainable solutions for
                        carbon management.
                    </p>
                </div>
            </section>

            {/* Core Competencies */}
            <section className="py-16 bg-secondary/30">
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-3xl font-bold text-foreground text-center mb-12">
                        Our CCUS Capabilities
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="hover:shadow-professional transition-all duration-300">
                            <CardContent className="p-8">
                                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <Briefcase className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    Analysis & Engineering Expertise
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    We provide end-to-end engineering analysis for Carbon clean
                                    deals. Our team ensures that each project is technically
                                    viable, economically sound, and aligned with cutting-edge
                                    carbon reduction methodologies.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-professional transition-all duration-300">
                            <CardContent className="p-8">
                                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <Network className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    Industrial Sector Connectivity
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Through established connections across heavy industries, we
                                    facilitate strategic partnerships that integrate CCUS
                                    technologies directly into existing operational frameworks,
                                    accelerating the decarbonization of traditional sectors.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-professional transition-all duration-300">
                            <CardContent className="p-8">
                                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <Cpu className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    Technological Partnerships
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    We collaborate with premier technology partners to deploy
                                    state-of-the-art carbon capture and utilization solutions.
                                    Our focus is on scalable, innovative technologies that offer
                                    long-term environmental returns.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-professional transition-all duration-300">
                            <CardContent className="p-8">
                                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <Globe className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    International Green Energy Experts
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our network extends globally, tapping into the insights of
                                    renowned international experts in green energies. This
                                    global perspective ensures our strategies remain at the
                                    forefront of global climate initiatives.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-6">
                        Partner with Us for a Cleaner Tomorrow
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Let's discuss how our CCUS expertise can integrate with your
                        sustainability goals.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-professional"
                    >
                        Contact Our Experts
                    </a>
                </div>
            </section>

            <Footer />
            <ScrollToTop />
            <CookieConsent />
        </div>
    );
};

export default CCUS;
