import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import schoolLogo from "@/assets/school-logo.png";

const Footer = () => (
  <footer className="bg-hero-dark text-hero-dark-foreground">
    <div className="container-wide section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src={schoolLogo} alt="Logo" className="h-14 w-14 object-contain" />
            <div>
              <h3 className="font-heading text-xl font-bold">Bright Future</h3>
              <p className="text-secondary font-subheading text-sm">Academy</p>
            </div>
          </div>
          <p className="text-hero-dark-foreground/70 text-sm leading-relaxed font-body">
            Empowering young minds since 1998. A premier institution dedicated to academic excellence and holistic development.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-subheading font-semibold text-lg mb-6 text-secondary">Quick Links</h4>
          <ul className="space-y-3">
            {["About", "Academics", "Admissions", "Gallery", "Contact"].map((l) => (
              <li key={l}>
                <Link to={`/${l.toLowerCase()}`} className="text-hero-dark-foreground/70 hover:text-secondary transition-colors text-sm font-body">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-subheading font-semibold text-lg mb-6 text-secondary">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm text-hero-dark-foreground/70">
              <MapPin size={18} className="mt-0.5 text-secondary shrink-0" />
              123 Education Lane, Knowledge City, State 500001
            </li>
            <li className="flex items-center gap-3 text-sm text-hero-dark-foreground/70">
              <Phone size={18} className="text-secondary shrink-0" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-3 text-sm text-hero-dark-foreground/70">
              <Mail size={18} className="text-secondary shrink-0" />
              info@brightfutureacademy.edu
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-subheading font-semibold text-lg mb-6 text-secondary">Follow Us</h4>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-hero-dark-foreground/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-300 text-hero-dark-foreground/70 hover:text-hero-dark">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-hero-dark-foreground/10 text-center text-sm text-hero-dark-foreground/50 font-body">
        © {new Date().getFullYear()} Bright Future Academy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
