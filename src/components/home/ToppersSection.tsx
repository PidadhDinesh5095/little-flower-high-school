import ScrollReveal from "@/components/ScrollReveal";
import { Trophy, Star } from "lucide-react";

import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";
import student4 from "@/assets/student-4.jpg";
import student5 from "@/assets/student-5.jpg";
import student6 from "@/assets/student-6.jpg";

const toppers = [
  { name: "Rahul Sharma", gpa: "10.00", badge: "School Topper", image: student1 },
  { name: "Priya Reddy", gpa: "9.95", badge: "2nd Rank", image: student2 },
  { name: "Arjun Patel", gpa: "9.90", badge: "3rd Rank", image: student3 },
  { name: "Sneha Iyer", gpa: "9.85", badge: "4th Rank", image: student4 },
  { name: "Vikram Singh", gpa: "9.80", badge: "5th Rank", image: student5 },
  { name: "Ananya Gupta", gpa: "9.78", badge: "6th Rank", image: student6 },
];

// Duplicate for seamless infinite scroll
const marqueeItems = [...toppers, ...toppers];

const ToppersSection = () => (
  <section className="section-padding bg-section-light overflow-hidden">
    <div className="container-wide mb-12">
      <ScrollReveal className="text-center">
        <p className="text-secondary font-subheading font-semibold text-sm uppercase tracking-widest mb-3">Academic Excellence</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
          Our Top Achievers
        </h2>
        <p className="text-muted-foreground font-body max-w-2xl mx-auto">
          Celebrating the outstanding results of our Class X students who have made us proud.
        </p>
      </ScrollReveal>
    </div>

    {/* Infinite marquee */}
    <div className="relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      <div className="flex animate-marquee hover:[animation-play-state:paused]">
        {marqueeItems.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className="flex-shrink-0 w-72 mx-4"
          >
            <div className="glass-card rounded-2xl p-5 hover-lift group cursor-default h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary/30 flex-shrink-0">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-subheading font-semibold text-foreground truncate">{t.name}</h3>
                  <p className="text-muted-foreground text-sm font-body">10th Grade</p>
                </div>
                {i % toppers.length === 0 && <Trophy className="text-secondary flex-shrink-0" size={22} />}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Star size={16} className="text-secondary fill-secondary" />
                  <span className="font-heading font-bold text-2xl text-primary">{t.gpa}</span>
                  <span className="text-muted-foreground text-sm font-body">GPA</span>
                </div>
                <span className="text-xs font-subheading font-medium px-3 py-1 rounded-full bg-secondary/10 text-secondary">
                  {t.badge}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ToppersSection;
