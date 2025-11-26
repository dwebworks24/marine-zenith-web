import { Link } from "react-router-dom";
import { Phone, Mail, Linkedin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#001F3F] text-white w-full max-w-[100vw] overflow-x-hidden">
      {/* Wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-16 -translate-y-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#1572B9"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* ONE SECTION: All columns + Social + Copyright */}
      <div className="w-full max-w-[100vw] py-16 px-4 overflow-x-hidden">
        <div className="container mx-auto max-w-7xl overflow-x-hidden">
          {/* 4 Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 overflow-x-hidden">
            {/* Column 1 - Logo, About & Social Media */}
            <div className="min-w-0">
              <div className="bg-white p-4 rounded-lg shadow-lg inline-block mb-5">
                <img src={logo} alt="Agile Marine Consultancy" className="w-36 h-auto" />
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                Expert Maritime Solutions & Consultancy Services. Navigating Excellence, Engineering Innovation.
              </p>
              <p className="text-base font-semibold mb-6 bg-gradient-to-r from-[#1572B9] to-[#6BB700] bg-clip-text text-transparent">
                Your Trusted Maritime Partner
              </p>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-300 hover:bg-gradient-to-br hover:from-[#1572B9] hover:to-[#6BB700] hover:border-transparent hover:text-white hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-300 hover:bg-gradient-to-br hover:from-[#1572B9] hover:to-[#6BB700] hover:border-transparent hover:text-white hover:scale-110 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-300 hover:bg-gradient-to-br hover:from-[#1572B9] hover:to-[#6BB700] hover:border-transparent hover:text-white hover:scale-110 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-300 hover:bg-gradient-to-br hover:from-[#1572B9] hover:to-[#6BB700] hover:border-transparent hover:text-white hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-300 hover:bg-gradient-to-br hover:from-[#1572B9] hover:to-[#6BB700] hover:border-transparent hover:text-white hover:scale-110 transition-all duration-300"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="min-w-0">
              <h3 className="text-lg font-semibold mb-6 pb-2 border-b-2 border-[#1572B9] inline-block">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-sm text-gray-300 hover:text-[#6BB700] hover:pl-1 transition-all duration-300 inline-block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm text-gray-300 hover:text-[#6BB700] hover:pl-1 transition-all duration-300 inline-block">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-sm text-gray-300 hover:text-[#6BB700] hover:pl-1 transition-all duration-300 inline-block">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-sm text-gray-300 hover:text-[#6BB700] hover:pl-1 transition-all duration-300 inline-block">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-gray-300 hover:text-[#6BB700] hover:pl-1 transition-all duration-300 inline-block">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Our Services (2 columns) */}
            <div className="min-w-0">
              <h3 className="text-lg font-semibold mb-6 pb-2 border-b-2 border-[#1572B9] inline-block">Our Services</h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                <ul className="space-y-3">
                  <li>
                    <Link to="/services/naval-architecture" className="text-sm text-gray-300 hover:text-[#6BB700] hover:pl-1 transition-all duration-300 inline-block">
                      Naval Architecture
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/project-management" className="text-sm text-gray-300 hover:text-[#6BB700] hover:pl-1 transition-all duration-300 inline-block">
                      Project Management
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/regulatory-compliance" className="text-sm text-gray-300 hover:text-[#6BB700] hover:pl-1 transition-all duration-300 inline-block">
                      Regulatory Compliance
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/ship-design-optimization" className="text-sm text-gray-300 hover:text-[#6BB700] hover:pl-1 transition-all duration-300 inline-block">
                      Ship Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/modification-repair" className="text-sm text-gray-300 hover:text-[#6BB700] hover:pl-1 transition-all duration-300 inline-block">
                      Modification & Repairs
                    </Link>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li>
                    <Link to="/services/marine-surveying" className="text-sm text-gray-300 hover:text-[#6BB700] hover:pl-1 transition-all duration-300 inline-block">
                      Marine Surveying
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/ballast-water-treatment" className="text-sm text-gray-300 hover:text-[#6BB700] hover:pl-1 transition-all duration-300 inline-block">
                      Ballast Water Treatment
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/3d-twins" className="text-sm text-gray-300 hover:text-[#6BB700] hover:pl-1 transition-all duration-300 inline-block">
                      3D Digital Twins
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/production-drawings" className="text-sm text-gray-300 hover:text-[#6BB700] hover:pl-1 transition-all duration-300 inline-block">
                      Production Drawings
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/green-technology" className="text-sm text-gray-300 hover:text-[#6BB700] hover:pl-1 transition-all duration-300 inline-block">
                      Green Technology
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 4 - Contact Info */}
            <div className="min-w-0">
              <h3 className="text-lg font-semibold mb-6 pb-2 border-b-2 border-[#1572B9] inline-block">Contact Info</h3>
              
              {/* Phone Numbers */}
              <div className="flex flex-col gap-2 mb-6">
                <a href="tel:+971528707320" className="text-sm text-gray-300 hover:text-white hover:underline transition-all">
                  +971 52 870 7320
                </a>
                <a href="tel:+971581178856" className="text-sm text-gray-300 hover:text-white hover:underline transition-all">
                  +971 58 117 8856
                </a>
                <a href="tel:+971581178869" className="text-sm text-gray-300 hover:text-white hover:underline transition-all">
                  +971 58 117 8869
                </a>
              </div>
              
              {/* Email Addresses */}
              <div className="flex flex-col gap-4">
                <div>
                  <a
                    href="mailto:operations@agilemarineconsultancy.ae"
                    className="text-xs text-gray-300 hover:text-white hover:underline transition-all block break-all"
                  >
                    operations@agilemarineconsultancy.ae
                  </a>
                  <span className="text-xs text-gray-500 block mt-1">(General Operations)</span>
                </div>
                <div>
                  <a
                    href="mailto:projects@agilemarineconsultancy.ae"
                    className="text-xs text-gray-300 hover:text-white hover:underline transition-all block break-all"
                  >
                    projects@agilemarineconsultancy.ae
                  </a>
                  <span className="text-xs text-gray-500 block mt-1">(Project Inquiries)</span>
                </div>
                <div>
                  <a
                    href="mailto:accounts@agilemarineconsultancy.ae"
                    className="text-xs text-gray-300 hover:text-white hover:underline transition-all block break-all"
                  >
                    accounts@agilemarineconsultancy.ae
                  </a>
                  <span className="text-xs text-gray-500 block mt-1">(Billing & Accounts)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright - Inside Same Section */}
          <div className="border-t border-white/10 pt-8 mt-4">
            <div className="text-center">
              <p className="text-sm text-gray-500">
                © 2025 Agile Marine Consultancy. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
