import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSlider from "@/components/HeroSlider";
import ClientLogos from "@/components/ClientLogos";
import {
  Ship,
  ClipboardCheck,
  Shield,
  Compass,
  Wrench,
  Search,
  Droplet,
  Box,
  Ruler,
  Leaf,
  Award,
  Lightbulb,
  Users,
  TrendingUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Ship,
    title: "Naval Architecture & Design",
    description: "Complete naval architecture services for all vessel types",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description: "Streamlined processes ensuring timely delivery",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "All Flag & IMO documentation and compliance",
  },
  {
    icon: Compass,
    title: "Ship Design Optimization",
    description: "Performance optimization and fuel efficiency",
  },
  {
    icon: Wrench,
    title: "Modification & Repair",
    description: "Expert technical support for vessel modifications",
  },
  {
    icon: Search,
    title: "Marine Surveying",
    description: "Comprehensive vessel inspection services",
  },
];

const stats = [
  { icon: Users, number: 15, label: "Happy Clients", suffix: "+" },
  { icon: Ship, number: 40, label: "Vessels Handled", suffix: "+" },
  { icon: Award, number: 10, label: "Service Types", suffix: "+" },
  { icon: Shield, number: 3, label: "ISO Certifications", suffix: "" },
];

const values = [
  { icon: Award, title: "Excellence", description: "Delivering high-quality services that exceed expectations" },
  { icon: Lightbulb, title: "Innovation", description: "Embracing cutting-edge solutions for maritime challenges" },
  { icon: TrendingUp, title: "Expertise", description: "Deep industry knowledge and technical proficiency" },
  { icon: Users, title: "Client-Centric", description: "Your success is our priority" },
];

const Home = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            let current = 0;
            const increment = stat.number / 60;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.number) {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = stat.number;
                  return newCounts;
                });
                clearInterval(timer);
              } else {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(current);
                  return newCounts;
                });
              }
            }, 30);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div className="min-h-screen">
      <HeroSlider />

      {/* About Snippet */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Welcome to Agile Marine Consultancy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We specialize in delivering innovative solutions and expert consultancy services tailored to the maritime
              industry. With a deep commitment to excellence and a passion for maritime engineering, we are dedicated to
              helping our clients navigate challenges and optimize their operations efficiently.
            </p>
            <Link to="/about">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive maritime solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="card-hover border-none shadow-md"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button size="lg" variant="outline">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Agile Marine Consultancy</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner in maritime excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-hover border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Counter */}
      <section ref={statsRef} className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-10 w-10 text-primary" />
                </div>
                <div className="text-5xl font-bold mb-2">
                  {counts[index]}
                  {stat.suffix}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Carousel */}
      <ClientLogos />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 wave-animation" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Navigate Your Maritime Challenges?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help optimize your maritime operations
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
