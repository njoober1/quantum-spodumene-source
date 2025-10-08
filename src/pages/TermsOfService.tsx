import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";
import termsImage from "@/assets/terms-of-service.jpg";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={termsImage} 
            alt="Terms of Service" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-xl text-white/90">
              Please read these terms carefully before using our services
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
                <h2 className="text-3xl font-bold text-foreground mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and 
                  Quantum Green Energy ("Company," "we," "us," or "our") concerning your access to and use 
                  of our website and services. By accessing or using our services, you agree to be bound by 
                  these Terms. If you disagree with any part of these terms, you may not access our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Services Description</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Quantum Green Energy provides professional spodumene sourcing consultancy services, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Spodumene sourcing and procurement advisory</li>
                  <li>Mining operation connections and coordination</li>
                  <li>Supply chain management consulting</li>
                  <li>Market analysis and intelligence services</li>
                  <li>Quality assessment and verification services</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at 
                  any time without prior notice.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By using our services, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not use our services for any unlawful or prohibited purpose</li>
                  <li>Not interfere with or disrupt the integrity of our services</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Intellectual Property Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All content, materials, and intellectual property on our website and in our services, 
                  including but not limited to text, graphics, logos, images, data compilations, and 
                  software, are the property of Quantum Green Energy or its content suppliers and are 
                  protected by international copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, 
                  republish, download, store, or transmit any of our content without our prior written 
                  consent, except as permitted by applicable law.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Service Agreements and Contracts</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Specific services provided by Quantum Green Energy are subject to separate written 
                  agreements and contracts. These Terms of Service govern your general use of our website 
                  and preliminary services. Detailed service engagements require execution of separate 
                  service agreements that will contain additional terms specific to those services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Both parties agree to maintain the confidentiality of any proprietary or confidential 
                  information disclosed during the course of our business relationship. This includes, but 
                  is not limited to, trade secrets, business plans, pricing information, client lists, and 
                  technical data. Confidential information shall not be disclosed to third parties without 
                  prior written consent.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To the fullest extent permitted by applicable law, Quantum Green Energy shall not be 
                  liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Loss of profits, revenue, data, or use</li>
                  <li>Business interruption or loss of goodwill</li>
                  <li>Any damages arising from your use or inability to use our services</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Our total liability shall not exceed the amount paid by you to us in the twelve months 
                  preceding the event giving rise to the liability.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify, defend, and hold harmless Quantum Green Energy, its officers, 
                  directors, employees, agents, and affiliates from any claims, liabilities, damages, 
                  losses, costs, or expenses (including reasonable attorneys' fees) arising out of or 
                  related to your violation of these Terms or your use of our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Disclaimers</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our services are provided "as is" and "as available" without warranties of any kind, 
                  either express or implied. We disclaim all warranties, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Warranties of merchantability and fitness for a particular purpose</li>
                  <li>Warranties regarding accuracy, reliability, or completeness of information</li>
                  <li>Warranties that the services will be uninterrupted, secure, or error-free</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Market information and analysis provided are for informational purposes only and should 
                  not be construed as financial, legal, or investment advice.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Governing Law and Dispute Resolution</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the State 
                  of New York, United States, without regard to its conflict of law provisions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Any dispute arising out of or relating to these Terms or our services shall be resolved 
                  through binding arbitration in accordance with the rules of the American Arbitration 
                  Association, conducted in New York, NY. Each party shall bear its own costs and expenses.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to terminate or suspend your access to our services immediately, 
                  without prior notice or liability, for any reason, including breach of these Terms. 
                  Upon termination, your right to use our services will immediately cease. All provisions 
                  that by their nature should survive termination shall survive, including ownership 
                  provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify or replace these Terms at any time at our sole discretion. 
                  Material changes will be notified through our website or via email. Your continued use 
                  of our services after such modifications constitutes acceptance of the updated Terms.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Severability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision 
                  shall be limited or eliminated to the minimum extent necessary so that these Terms shall 
                  otherwise remain in full force and effect and enforceable.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For questions about these Terms of Service, please contact us:
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

export default TermsOfService;