import { MapPin, Phone, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">QG</span>
              </div>
              <span className="text-xl font-bold">Quantum Green Energy</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Professional spodumene sourcing consultancy based in New York, 
              connecting sustainable mining operations with clean energy initiatives.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span className="text-primary-foreground/80">New York, NY</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80">NYC: +1 (347) 877-7765</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80">TOR: +1 (647) 292-6433</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80">contact@quantumgenergy.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Spodumene Sourcing</li>
              <li>Mining Consultancy</li>
              <li>Supply Chain Management</li>
              <li>Market Analysis</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60">
              © 2024 Quantum Green Energy. All rights reserved.
            </p>
            <a 
              href="https://www.linkedin.com/company/quantum-green-energy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-primary-foreground hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>Follow us on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;