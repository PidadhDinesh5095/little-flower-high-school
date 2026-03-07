import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const AdmissionCTA = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-hero-gradient" />
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-10 left-10 w-80 h-80 bg-secondary rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
    </div>

    <div className="container-wide relative text-center">
      <ScrollReveal>
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-secondary font-subheading font-semibold text-sm uppercase tracking-widest mb-4">Limited Seats Available</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-hero-dark-foreground mb-6">
            Admissions Open for 2026–2027
          </h2>
          <p className="text-hero-dark-foreground/70 font-body text-lg max-w-2xl mx-auto mb-10">
            Give your child the gift of world-class education. Join the Bright Future Academy family today.
          </p>
          <Link
            to="/admissions"
            className="group inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-secondary font-subheading font-semibold text-secondary-foreground text-lg transition-all duration-300 hover:shadow-[0_0_40px_-5px_hsl(38,92%,50%,0.6)] hover:scale-105"
          >
            Apply Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </ScrollReveal>
    </div>
  </section>
);

export default AdmissionCTA;
