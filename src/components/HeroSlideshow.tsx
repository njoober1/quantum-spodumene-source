import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import miningOperation from "@/assets/mining-operation.jpg";
import greenEnergy from "@/assets/green-energy.jpg";
import spodumeneMineral from "@/assets/spodumene-mineral.jpg";
import consultingOffice from "@/assets/consulting-office.jpg";
import lithiumSpodumeneMine from "@/assets/lithium-spodumene-mine.jpg";

const slides = [
  {
    image: miningOperation,
    title: "Expert Spodumene Sourcing",
    subtitle: "Professional mining consultancy services for sustainable lithium sourcing",
    cta: "Learn More"
  },
  {
    image: greenEnergy,
    title: "Sustainable Energy Solutions",
    subtitle: "Connecting green energy initiatives with reliable mineral resources",
    cta: "Our Operations"
  },
  {
    image: spodumeneMineral,
    title: "Premium Spodumene Quality",
    subtitle: "Direct access to high-grade spodumene deposits worldwide",
    cta: "About Spodumene"
  },
  {
    image: consultingOffice,
    title: "New York Based Expertise",
    subtitle: "Professional consultancy with global reach and local knowledge",
    cta: "Contact Us"
  },
  {
    image: lithiumSpodumeneMine,
    title: "Lithium & Spodumene Mining Excellence",
    subtitle: "Direct access to world-class lithium extraction operations",
    cta: "View Operations"
  }
];

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
                {slide.subtitle}
              </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg transition-all hover:shadow-professional"
              onClick={() => {
                if (slide.cta === "Our Operations") window.location.href = "/operations";
                else if (slide.cta === "About Spodumene") window.location.href = "/spodumene";
              }}
            >
              {slide.cta}
            </Button>
            </div>
          </div>
        </div>
      ))}
      
      <Button
        variant="ghost"
        size="lg"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 transition-all"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="lg"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 transition-all"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlideshow;