import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import schoolLogo from "@/assets/school-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Academics", path: "/academics" },
  { label: "Campus Life", path: "/campus-life" },
  { label: "Achievements", path: "/achievements" },
  { label: "Admissions", path: "/admissions" },
  { label: "Gallery", path: "/gallery" },
  { label: "Faculty", path: "/faculty" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const navBg = scrolled || !isHome
    ? "bg-card/95 backdrop-blur-xl shadow-lg border-b border-border/50"
    : "bg-transparent";

  const textColor = scrolled || !isHome ? "text-foreground" : "text-hero-dark-foreground";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0  right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="sm:px-24 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={schoolLogo} alt="Bright Future Academy Logo" className="h-12 w-12 object-contain" />
          <div className={`font-heading font-bold text-xl leading-tight ${textColor}`}>
            Little Flower High School<br />
           
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-4 py-2 text-sm font-subheading font-medium transition-colors duration-300 rounded-lg
                ${location.pathname === link.path
                  ? "text-secondary"
                  : `${textColor} hover:text-secondary`
                }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-secondary rounded-full"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg ${textColor}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card/98 backdrop-blur-xl border-t border-border/50 overflow-hidden"
          >
            <div className="container-wide py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg font-subheading text-sm font-medium transition-colors
                    ${location.pathname === link.path
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
