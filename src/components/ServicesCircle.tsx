import { useEffect, useRef, useState } from "react";

interface Service {
  name: string;
  color: string;
  position: { x: number; y: number };
}

const services: Service[] = [
  { name: "Project Management", color: "bg-marine-green", position: { x: 50, y: 0 } },
  { name: "Naval Architecture", color: "bg-ocean-blue", position: { x: 93.3, y: 25 } },
  { name: "Surveying & Inspections", color: "bg-yellow-500", position: { x: 93.3, y: 75 } },
  { name: "Green Technology & Sustainable Shipping", color: "bg-marine-green", position: { x: 75, y: 93.3 } },
  { name: "Ballast Water Treatment & Retrofits", color: "bg-ocean-blue", position: { x: 25, y: 93.3 } },
  { name: "Production Drawings", color: "bg-marine-green", position: { x: 6.7, y: 75 } },
  { name: "3D Twins of Ships & Rigs", color: "bg-yellow-500", position: { x: 6.7, y: 25 } },
  { name: "All Regulatory Compliance Documentation", color: "bg-orange-500", position: { x: 25, y: 6.7 } },
  { name: "Modification & Repairs", color: "bg-yellow-500", position: { x: 75, y: 6.7 } },
  { name: "Ship Design & Optimization", color: "bg-ocean-blue", position: { x: 37.5, y: 12.5 } },
];

const ServicesCircle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleServices, setVisibleServices] = useState<number[]>([]);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Center circle appears first
          setTimeout(() => {
            // Then services appear one by one
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleServices((prev) => [...prev, index]);
              }, index * 200);
            });
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Maritime Solutions Tailored to Your Needs
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto" style={{ aspectRatio: '1' }}>
          {/* Center Circle */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          >
            <div className="relative">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-ocean-blue to-primary flex items-center justify-center shadow-2xl animate-pulse-glow">
                <div className="text-center px-4">
                  <p className="text-white font-bold text-xs md:text-base leading-tight">
                    AGILE MARINE
                    <br />
                    CONSULTANCY
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Connection Lines */}
          {isVisible && services.map((service, index) => {
            const isServiceVisible = visibleServices.includes(index);
            const centerX = 50;
            const centerY = 50;
            const angle = Math.atan2(service.position.y - centerY, service.position.x - centerX);
            const length = Math.sqrt(
              Math.pow(service.position.x - centerX, 2) + 
              Math.pow(service.position.y - centerY, 2)
            );

            return (
              <div
                key={`line-${index}`}
                className={`absolute top-1/2 left-1/2 origin-left transition-all duration-700 ${
                  isServiceVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                } ${hoveredService === index ? "opacity-100" : "opacity-40"}`}
                style={{
                  width: `${length}%`,
                  height: '2px',
                  background: 'linear-gradient(90deg, #FF6B35 0%, transparent 100%)',
                  transform: `rotate(${angle}rad)`,
                  transformOrigin: 'left center',
                }}
              />
            );
          })}

          {/* Service Circles */}
          {services.map((service, index) => {
            const isServiceVisible = visibleServices.includes(index);
            
            return (
              <div
                key={index}
                className={`absolute transition-all duration-700 ${
                  isServiceVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0"
                } ${hoveredService === index ? "z-20 scale-110" : "z-10"}`}
                style={{
                  top: `${service.position.y}%`,
                  left: `${service.position.x}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div
                  className={`w-24 h-24 md:w-32 md:h-32 rounded-full ${service.color} flex items-center justify-center shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl animate-float`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-white font-semibold text-xs md:text-sm text-center px-3 leading-tight">
                    {service.name}
                  </p>
                </div>
                
                {hoveredService === index && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap z-30 animate-fade-in">
                    <p className="text-sm font-medium text-foreground">{service.name}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Explore our comprehensive range of maritime consultancy services
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesCircle;
