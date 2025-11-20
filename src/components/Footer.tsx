import { Link } from "react-router-dom";
import { Phone, Mail, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-accent text-accent-foreground pt-16 pb-8">
      {/* Wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-16 -translate-y-full">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M0 48h1440V0c-198.667 16-397.333 24-596 24C558.667 24 280 16 0 0v48z"
            fill="hsl(var(--accent))"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Column */}
          <div>
            <img src={logo} alt="Agile Marine Consultancy" className="h-16 mb-4 brightness-0 invert" />
            <p className="text-sm opacity-90 leading-relaxed">
              Expert Maritime Solutions & Consultancy Services. Navigating Excellence, Engineering Innovation.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+971528707320" className="opacity-90 hover:opacity-100 transition-opacity">
                  +971 52 870 7320
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+971581178856" className="opacity-90 hover:opacity-100 transition-opacity">
                  +971 58 117 8856
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+971581178869" className="opacity-90 hover:opacity-100 transition-opacity">
                  +971 58 117 8869
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary mt-0.5" />
                <div className="space-y-1">
                  <a
                    href="mailto:operations@agilemarineconsultancy.ae"
                    className="opacity-90 hover:opacity-100 transition-opacity block"
                  >
                    operations@agilemarineconsultancy.ae
                  </a>
                  <a
                    href="mailto:projects@agilemarineconsultancy.ae"
                    className="opacity-90 hover:opacity-100 transition-opacity block"
                  >
                    projects@agilemarineconsultancy.ae
                  </a>
                  <a
                    href="mailto:accounts@agilemarineconsultancy.ae"
                    className="opacity-90 hover:opacity-100 transition-opacity block"
                  >
                    accounts@agilemarineconsultancy.ae
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-90">
              © 2025 Agile Marine Consultancy. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 hover:text-primary transition-all hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 hover:text-primary transition-all hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 hover:text-primary transition-all hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 hover:text-primary transition-all hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
