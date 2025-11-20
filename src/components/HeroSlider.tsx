import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const slides = [
  { image: hero1, title: "Navigating Excellence", subtitle: "Engineering Innovation" },
  { image: hero2, title: "Expert Maritime Solutions", subtitle: "Trusted Worldwide" },
  { image: hero3, title: "Naval Architecture", subtitle: "Precision & Excellence" },
  { image: hero4, title: "Offshore Engineering", subtitle: "Comprehensive Services" },
  { image: hero5, title: "Yacht & Vessel Design", subtitle: "Luxury Meets Engineering" },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-primary/70 to-transparent" />
          </div>

          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-2xl text-white animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-2xl md:text-3xl mb-8 animate-fade-in opacity-90">
                {slide.subtitle}
              </p>
              {index === 0 && (
                <>
                  <p className="text-xl mb-8 max-w-xl">
                    Expert Maritime Solutions & Consultancy Services
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/services">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Explore Services
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
