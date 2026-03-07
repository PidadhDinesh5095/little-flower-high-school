import ScrollReveal from "@/components/ScrollReveal";
import { Calendar } from "lucide-react";

const events = [
  { title: "Annual Day Celebration", date: "March 2026", desc: "Grand cultural performances and prize distribution ceremony." },
  { title: "Inter-School Sports Meet", date: "January 2026", desc: "Competitive athletics, cricket, basketball, and more." },
  { title: "Science & Innovation Fair", date: "November 2025", desc: "Student projects showcasing creativity and scientific inquiry." },
  { title: "Cultural Festival", date: "December 2025", desc: "A vibrant celebration of art, music, dance, and drama." },
];

const EventsSection = () => (
  <section className="section-padding bg-section-light">
    <div className="container-wide">
      <ScrollReveal className="text-center mb-16">
        <p className="text-secondary font-subheading font-semibold text-sm uppercase tracking-widest mb-3">School Life</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
          Events & Activities
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {events.map((e, i) => (
          <ScrollReveal key={e.title} delay={i * 100}>
            <div className="glass-card rounded-2xl p-6 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Calendar size={18} className="text-secondary" />
                </div>
                <span className="text-sm font-subheading font-medium text-secondary">{e.date}</span>
              </div>
              <h3 className="font-subheading font-semibold text-lg text-foreground mb-2">{e.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{e.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default EventsSection;
