import ScrollReveal from "@/components/ScrollReveal";
import { GraduationCap, Building2, Award, Shield, Heart } from "lucide-react";

const features = [
  { icon: GraduationCap, title: "Experienced Faculty", desc: "80+ highly qualified and dedicated teachers with decades of experience." },
  { icon: Building2, title: "Modern Infrastructure", desc: "Smart classrooms, labs, library, and sports complex on a sprawling campus." },
  { icon: Award, title: "Academic Excellence", desc: "Consistently achieving 100% pass rate with top board exam results." },
  { icon: Shield, title: "Safe & Secure Campus", desc: "24/7 CCTV surveillance, trained security, and child-safe environment." },
  { icon: Heart, title: "Holistic Development", desc: "Focus on sports, arts, cultural programs, and character building." },
];

const WhyChooseUs = () => (
  <section className="section-padding bg-section-light">
    <div className="container-wide">
      <ScrollReveal className="text-center mb-16">
        <p className="text-secondary font-subheading font-semibold text-sm uppercase tracking-widest mb-3">Why Parents Trust Us</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
          Why Choose Our School
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 100} direction="scale">
            <div className="glass-card rounded-2xl p-8 hover-lift group text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <f.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-subheading font-semibold text-lg text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{f.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
