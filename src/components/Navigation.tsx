import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Quantum Green Energy" className="h-10 w-auto" />
            <span className="text-xl font-bold text-foreground hidden sm:inline">Quantum Green Energy</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/operations" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/operations') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Operations
            </Link>
            <Link 
              to="/services" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/services') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/spodumene" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/spodumene') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Spodumene
            </Link>
            <Link 
              to="/team" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/team') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Our Team
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            <Link 
              to="/" 
              className={`block text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/operations" 
              className={`block text-sm font-medium transition-colors hover:text-primary ${
                isActive('/operations') ? 'text-primary' : 'text-muted-foreground'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Operations
            </Link>
            <Link 
              to="/services" 
              className={`block text-sm font-medium transition-colors hover:text-primary ${
                isActive('/services') ? 'text-primary' : 'text-muted-foreground'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/spodumene" 
              className={`block text-sm font-medium transition-colors hover:text-primary ${
                isActive('/spodumene') ? 'text-primary' : 'text-muted-foreground'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Spodumene
            </Link>
            <Link 
              to="/team" 
              className={`block text-sm font-medium transition-colors hover:text-primary ${
                isActive('/team') ? 'text-primary' : 'text-muted-foreground'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Our Team
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;