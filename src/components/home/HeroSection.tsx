import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-campus.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <div
        className={`pointer-events-none absolute top-0 left-0 h-full w-[90%] z-5 bg-gradient-to-r from-black to-transparent`}
      />
      <img src={heroBg} alt="Bright Future Academy Campus" className="w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-hero-gradient/80" />
      {/* Floating shapes */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
    </div>

    <div className="relative z-10 px-6 sm:px-12 lg:px-24 py-16">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-secondary text-sm font-subheading font-medium">Admissions Open 2026–2027</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-hero-dark-foreground leading-tight mb-6"
        >
          Empowering Young Minds for a{" "}
          <span className="text-gradient-gold">Brighter Future</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-xl text-hero-dark-foreground/80 font-body leading-relaxed mb-10 max-w-2xl"
        >
          Where tradition meets innovation. Our world-class faculty and modern infrastructure
          nurture discipline, confidence, and knowledge in every student.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            to="/admissions"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-secondary font-subheading font-semibold text-secondary-foreground transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(38,92%,50%,0.5)] hover:scale-105"
          >
            Apply for Admission
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/campus-life"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-hero-dark-foreground/30 font-subheading font-semibold text-hero-dark-foreground hover:bg-hero-dark-foreground/10 transition-all duration-300"
          >
            <Play size={18} />
            Explore Campus
          </Link>
        </motion.div>
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="w-6 h-10 rounded-full border-2 border-hero-dark-foreground/30 flex items-start justify-center p-1">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1.5 h-1.5 rounded-full bg-secondary"
        />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
