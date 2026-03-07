import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Trophy, Medal, Star, Award } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "State Science Olympiad Champions", year: "2024", desc: "First place in the state-level science olympiad for 3 consecutive years." },
  { icon: Medal, title: "National Mathematics Competition", year: "2023", desc: "5 students qualified for the national round, with 2 gold medals." },
  { icon: Star, title: "100% Board Pass Rate", year: "2018–2025", desc: "Consistently achieving 100% pass rate in Class X and XII board exams." },
  { icon: Award, title: "Best School Award", year: "2022", desc: "Recognized as the Best School in the district by the Education Department." },
];

const stats = [
  { value: 50, suffix: "+", label: "Awards Won" },
  { value: 200, suffix: "+", label: "Competition Winners" },
  { value: 100, suffix: "%", label: "Board Pass Rate" },
  { value: 15, suffix: "+", label: "National Qualifiers" },
];

const Achievements = () => (
  <Layout>
    <section className="relative pt-32 pb-20 bg-hero-gradient">
      <div className="container-wide relative text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-hero-dark-foreground mb-4">Achievements</h1>
        <p className="text-hero-dark-foreground/70 font-body text-lg max-w-2xl mx-auto">A legacy of excellence across academics, sports, and co-curricular activities.</p>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 bg-primary">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center text-primary-foreground">
              <div className="text-4xl font-heading font-bold mb-2"><AnimatedCounter end={s.value} suffix={s.suffix} /></div>
              <p className="font-subheading text-sm text-primary-foreground/80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-section-light">
      <div className="container-wide max-w-4xl space-y-6">
        {achievements.map((a, i) => (
          <ScrollReveal key={a.title} delay={i * 100}>
            <div className="glass-card rounded-2xl p-6 hover-lift flex gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
                <a.icon size={24} className="text-secondary" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-subheading font-semibold text-lg text-foreground">{a.title}</h3>
                  <span className="text-xs font-subheading font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">{a.year}</span>
                </div>
                <p className="text-muted-foreground text-sm font-body">{a.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  </Layout>
);

export default Achievements;
