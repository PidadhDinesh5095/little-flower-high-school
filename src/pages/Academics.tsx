import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { BookOpen, FlaskConical, Calculator, Globe, Palette, Dumbbell } from "lucide-react";

const levels = [
  {
    title: "Primary School (Grades 1–5)",
    desc: "Building strong foundations in literacy, numeracy, and curiosity-driven learning through play-based and interactive methodologies.",
    subjects: ["English", "Mathematics", "Science", "Social Studies", "Hindi", "Art & Craft"],
  },
  {
    title: "Secondary School (Grades 6–10)",
    desc: "Rigorous academic program preparing students for board examinations with focus on conceptual understanding and analytical thinking.",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Social Sciences", "Computer Science"],
  },
  {
    title: "Higher Secondary (Grades 11–12)",
    desc: "Specialized streams in Science, Commerce, and Arts with expert faculty and competitive exam preparation.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Accountancy", "Economics", "Computer Science"],
  },
];

const icons = [BookOpen, FlaskConical, Calculator, Globe, Palette, Dumbbell];

const Academics = () => (
  <Layout>
    <section className="relative pt-32 pb-20 bg-hero-gradient">
      <div className="container-wide relative text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-hero-dark-foreground mb-4">Academics</h1>
        <p className="text-hero-dark-foreground/70 font-body text-lg max-w-2xl mx-auto">A comprehensive curriculum designed for academic excellence and real-world readiness.</p>
      </div>
    </section>

    <section className="section-padding bg-section-light">
      <div className="container-wide max-w-4xl space-y-12">
        {levels.map((l, i) => (
          <ScrollReveal key={l.title} delay={i * 150}>
            <div className="glass-card rounded-2xl p-8 hover-lift">
              <div className="flex items-center gap-4 mb-4">
                {(() => { const Icon = icons[i]; return <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><Icon size={24} className="text-primary" /></div>; })()}
                <h2 className="font-subheading font-semibold text-xl text-foreground">{l.title}</h2>
              </div>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">{l.desc}</p>
              <div className="flex flex-wrap gap-2">
                {l.subjects.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full text-xs font-subheading font-medium bg-primary/10 text-primary">{s}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  </Layout>
);

export default Academics;
