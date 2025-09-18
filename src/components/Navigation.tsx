import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">QG</span>
            </div>
            <span className="text-xl font-bold text-foreground">Quantum Green Energy</span>
          </Link>
          
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
              to="/spodumene" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/spodumene') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Spodumene
            </Link>
            <Button variant="default" className="transition-all hover:shadow-professional">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;