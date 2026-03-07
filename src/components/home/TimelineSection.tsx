import ScrollReveal from "@/components/ScrollReveal";

const milestones = [
  { year: "1998", event: "School Founded", desc: "Bright Future Academy opens its doors with 200 students." },
  { year: "2005", event: "Campus Expansion", desc: "New building wing with modern laboratories and library." },
  { year: "2012", event: "Science Labs Introduced", desc: "State-of-the-art physics, chemistry, and biology labs." },
  { year: "2018", event: "100% Board Results", desc: "First batch achieves 100% pass rate in board exams." },
  { year: "2024", event: "Smart Classrooms", desc: "Digital transformation with interactive smart boards." },
];

const TimelineSection = () => (
  <section className="section-padding bg-section-dark overflow-hidden">
    <div className="container-wide">
      <ScrollReveal className="text-center mb-16">
        <p className="text-secondary font-subheading font-semibold text-sm uppercase tracking-widest mb-3">Our Journey</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
          School History
        </h2>
      </ScrollReveal>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-hero-dark-foreground/20 md:-translate-x-px" />

        <div className="space-y-12">
          {milestones.map((m, i) => (
            <ScrollReveal key={m.year} delay={i * 150} direction={i % 2 === 0 ? "left" : "right"}>
              <div className={`relative flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                  <span className="font-heading font-bold text-3xl text-secondary">{m.year}</span>
                  <h3 className="font-subheading font-semibold text-lg mt-1">{m.event}</h3>
                  <p className="text-hero-dark-foreground/60 text-sm font-body mt-2">{m.desc}</p>
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-secondary -translate-x-1.5 md:-translate-x-1.5 ring-4 ring-hero-dark z-10" />

                {/* Mobile content */}
                <div className="md:hidden pl-12">
                  <span className="font-heading font-bold text-2xl text-secondary">{m.year}</span>
                  <h3 className="font-subheading font-semibold text-lg mt-1">{m.event}</h3>
                  <p className="text-hero-dark-foreground/60 text-sm font-body mt-2">{m.desc}</p>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TimelineSection;
