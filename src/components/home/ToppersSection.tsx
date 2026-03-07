import ScrollReveal from "@/components/ScrollReveal";
import { Trophy } from "lucide-react";

const toppers = [
  { name: "Rahul Sharma", marks: "589 / 600", badge: "School Topper" },
  { name: "Priya Reddy", marks: "582 / 600", badge: "2nd Rank" },
  { name: "Arjun Patel", marks: "578 / 600", badge: "3rd Rank" },
  { name: "Sneha Iyer", marks: "575 / 600", badge: "4th Rank" },
  { name: "Vikram Singh", marks: "571 / 600", badge: "5th Rank" },
  { name: "Ananya Gupta", marks: "568 / 600", badge: "6th Rank" },
];

const ToppersSection = () => (
  <section className="section-padding bg-section-light">
    <div className="container-wide">
      <ScrollReveal className="text-center mb-16">
        <p className="text-secondary font-subheading font-semibold text-sm uppercase tracking-widest mb-3">Academic Excellence</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
          Our Top Achievers
        </h2>
        <p className="text-muted-foreground font-body max-w-2xl mx-auto">
          Celebrating the outstanding results of our Class X students who have made us proud.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {toppers.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 100} direction="scale">
            <div className="glass-card rounded-2xl p-6 hover-lift group cursor-default">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center font-heading font-bold text-primary text-lg">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                {i === 0 && <Trophy className="text-secondary" size={24} />}
              </div>
              <h3 className="font-subheading font-semibold text-lg text-foreground mb-1">{t.name}</h3>
              <p className="text-muted-foreground text-sm font-body mb-3">10th Grade</p>
              <div className="flex items-center justify-between">
                <span className="font-heading font-bold text-xl text-primary">{t.marks}</span>
                <span className="text-xs font-subheading font-medium px-3 py-1 rounded-full bg-secondary/10 text-secondary">
                  {t.badge}
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ToppersSection;
