import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Get in touch with our team to discuss your spodumene sourcing
              needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Details */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Get In Touch
              </h2>

              <Card className="hover:shadow-professional transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Headquarters
                      </h3>
                      <p className="text-muted-foreground">
                        6e E 39th St Suite 504
                        <br />
                        New York, NY 10016
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-professional transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Phone
                      </h3>
                      <p className="text-muted-foreground">
                        NYC: +1 (347) 877-7765
                        <br />
                        TOR: +1 (647) 292-6433
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-professional transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Email
                      </h3>
                      <p className="text-muted-foreground">
                        contact@quantumgenergy.com
                        <br />
                        sales@quantumgenergy.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-professional transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Business Hours
                      </h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Our Location
              </h2>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.688931463791!2d-73.98346992346072!3d40.74972237139059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259029a6f6f41%3A0x4b3cfb0a41d6c21e!2s6%20E%2039th%20St%20Suite%20504%2C%20New%20York%2C%20NY%2010016%2C%20USA!5e0!3m2!1sen!2sus!4v1726562345678!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Quantum Green Energy Headquarters"
                  />
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

export default Contact;
