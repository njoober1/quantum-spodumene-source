import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";
import privacyImage from "@/assets/privacy-policy.jpg";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={privacyImage} 
            alt="Privacy Policy" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-xl text-white/90">
              Your privacy and data security are our top priorities
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">
              <strong>Last Updated:</strong> January 2024
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Quantum Green Energy ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Information We Collect</h2>
                <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Contact us for inquiries or services</li>
                  <li>Register for our newsletter or updates</li>
                  <li>Participate in surveys or feedback requests</li>
                  <li>Apply for employment opportunities</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  This information may include your name, email address, phone number, company name, 
                  job title, and any other information you choose to provide.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Automatically Collected Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you visit our website, we automatically collect certain information about your 
                  device, including information about your web browser, IP address, time zone, and some 
                  of the cookies installed on your device.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect in the following ways:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>To respond to your inquiries and provide customer service</li>
                  <li>To send you technical notices, updates, and support messages</li>
                  <li>To communicate with you about products, services, offers, and events</li>
                  <li>To monitor and analyze trends, usage, and activities</li>
                  <li>To detect, prevent, and address technical issues and security threats</li>
                  <li>To comply with legal obligations and protect our rights</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our website and conducting our business</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger, sale of assets, or acquisition</li>
                  <li><strong>With Your Consent:</strong> When you have given us explicit consent to share your information</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction. 
                  However, no method of transmission over the Internet or electronic storage is 100% secure, 
                  and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict processing of your information</li>
                  <li>Withdraw consent at any time (where processing is based on consent)</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and 
                  hold certain information. You can instruct your browser to refuse all cookies or to 
                  indicate when a cookie is being sent. However, if you do not accept cookies, you may 
                  not be able to use some portions of our website.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and maintained on computers located outside of 
                  your state, province, country, or other governmental jurisdiction where data protection 
                  laws may differ. We take appropriate measures to ensure your data is treated securely 
                  and in accordance with this Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly 
                  collect personal information from children. If you become aware that a child has provided 
                  us with personal information, please contact us.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes 
                  by posting the new Privacy Policy on this page and updating the "Last Updated" date. 
                  You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-secondary/30 p-6 rounded-lg">
                  <p className="text-foreground font-semibold mb-2">Quantum Green Energy</p>
                  <p className="text-muted-foreground">New York, NY</p>
                  <p className="text-muted-foreground">Email: contact@quantumgenergy.com</p>
                  <p className="text-muted-foreground">Phone: +1 (347) 877-7765</p>
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

export default PrivacyPolicy;