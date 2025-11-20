import { Ship, Anchor, Waves, Sailboat, Compass, Navigation, Star, Container, Activity, Radio } from "lucide-react";

const clients = [
  { name: "Liwa Marine Services", icon: Ship },
  { name: "Xclusive Yachts", icon: Sailboat },
  { name: "AH Marine", icon: Anchor },
  { name: "Alkous Marine", icon: Waves },
  { name: "Sealight Marine Equipment", icon: Radio },
  { name: "Sea Safari Cruises LLC", icon: Sailboat },
  { name: "Blue Iris Marine Services", icon: Compass },
  { name: "Quest Marine", icon: Navigation },
  { name: "Trio Marine", icon: Ship },
  { name: "Triple Seven Solutions LLC", icon: Star },
  { name: "AGNN Marine Services", icon: Anchor },
  { name: "Xiangyun Ship Management Limited", icon: Container },
  { name: "Algaith Boats", icon: Activity },
  { name: "Clear Water Shipping", icon: Container },
  { name: "Onda Leisure Yachts & Boats Rental L.L.C", icon: Sailboat },
];

const ClientLogos = () => {
  return (
    <section className="py-20 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl font-bold text-center mb-4">Our Valued Clients</h2>
        <p className="text-center text-muted-foreground text-lg">
          Trusted by Leading Maritime Companies
        </p>
      </div>

      {/* Top Row - Scrolling Left */}
      <div className="relative mb-8">
        <div className="flex animate-scroll-left">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`top-${index}`}
              className="flex-shrink-0 w-[200px] mx-4"
            >
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 grayscale hover:grayscale-0 group border border-border">
                <div className="flex flex-col items-center text-center gap-3">
                  <client.icon className="h-12 w-12 text-primary group-hover:text-secondary transition-colors" />
                  <span className="text-sm font-medium text-foreground leading-tight">
                    {client.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row - Scrolling Right */}
      <div className="relative">
        <div className="flex animate-scroll-right">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`bottom-${index}`}
              className="flex-shrink-0 w-[200px] mx-4"
            >
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 grayscale hover:grayscale-0 group border border-border">
                <div className="flex flex-col items-center text-center gap-3">
                  <client.icon className="h-12 w-12 text-primary group-hover:text-secondary transition-colors" />
                  <span className="text-sm font-medium text-foreground leading-tight">
                    {client.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
