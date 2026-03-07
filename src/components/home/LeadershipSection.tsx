import ScrollReveal from "@/components/ScrollReveal";
import headmasterImg from "@/assets/headmaster.jpg";
import correspondentImg from "@/assets/correspondent.jpg";

const leaders = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Headmaster",
    img: headmasterImg,
    quote: "Our vision is to nurture disciplined, confident, and knowledgeable future leaders.",
  },
  {
    name: "Mr. Suresh Reddy",
    role: "Correspondent",
    img: correspondentImg,
    quote: "We believe every child has the potential to achieve greatness with the right guidance.",
  },
];

const LeadershipSection = () => (
  <section className="section-padding bg-section-light">
    <div className="container-wide">
      <ScrollReveal className="text-center mb-16">
        <p className="text-secondary font-subheading font-semibold text-sm uppercase tracking-widest mb-3">Visionary Leaders</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
          Our Leadership
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {leaders.map((l, i) => (
          <ScrollReveal key={l.name} delay={i * 200} direction={i === 0 ? "left" : "right"}>
            <div className="glass-card rounded-2xl overflow-hidden hover-lift">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={l.img} alt={l.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="font-subheading font-semibold text-xl text-foreground">{l.name}</h3>
                <p className="text-secondary font-subheading text-sm font-medium mb-4">{l.role}</p>
                <blockquote className="text-muted-foreground text-sm font-body italic leading-relaxed border-l-2 border-secondary pl-4">
                  "{l.quote}"
                </blockquote>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default LeadershipSection;
