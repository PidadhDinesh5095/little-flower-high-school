import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Users, BookOpen, Calendar, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: 1500, suffix: "+", label: "Students" },
  { icon: BookOpen, value: 80, suffix: "+", label: "Teachers" },
  { icon: Calendar, value: 25, suffix: "+", label: "Years of Excellence" },
  { icon: TrendingUp, value: 100, suffix: "%", label: "Pass Rate" },
];

const StatsSection = () => (
  <section className="py-16 bg-primary relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
    </div>
    <div className="container-wide relative">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 150} direction="scale">
            <div className="text-center text-primary-foreground">
              <s.icon size={32} className="mx-auto mb-4 text-secondary" />
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">
                <AnimatedCounter end={s.value} suffix={s.suffix} />
              </div>
              <p className="font-subheading text-sm text-primary-foreground/80">{s.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
