import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import sportsImg from "@/assets/sports.jpg";
import libraryImg from "@/assets/library.jpg";
import scienceLabImg from "@/assets/science-lab.jpg";
import classroomImg from "@/assets/classroom.jpg";
import computerLabImg from "@/assets/computer-lab.jpg";

const sections = [
  { title: "Sports & Athletics", img: sportsImg, desc: "From cricket to athletics, our sports program builds teamwork, discipline, and physical fitness. Olympic-standard facilities and professional coaching." },
  { title: "Clubs & Societies", img: libraryImg, desc: "Debate club, robotics, eco club, literary society, and more. Students explore passions beyond the classroom." },
  { title: "Science & Innovation", img: scienceLabImg, desc: "Hands-on experiments, science fairs, and innovation challenges that spark curiosity and scientific thinking." },
  { title: "Smart Learning", img: classroomImg, desc: "Interactive smart classrooms with digital tools that make learning engaging and effective." },
  { title: "Technology Hub", img: computerLabImg, desc: "Modern computer labs teaching coding, digital literacy, and emerging technologies." },
];

const CampusLife = () => (
  <Layout>
    <section className="relative pt-32 pb-20 bg-hero-gradient">
      <div className="container-wide relative text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-hero-dark-foreground mb-4">Campus Life</h1>
        <p className="text-hero-dark-foreground/70 font-body text-lg max-w-2xl mx-auto">Experience the vibrant student life at Bright Future Academy.</p>
      </div>
    </section>

    <section className="section-padding bg-section-light">
      <div className="container-wide space-y-20">
        {sections.map((s, i) => (
          <ScrollReveal key={s.title} direction={i % 2 === 0 ? "left" : "right"}>
            <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}>
              <div className="md:w-1/2">
                <div className="rounded-2xl overflow-hidden group">
                  <img src={s.img} alt={s.title} className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">{s.title}</h2>
                <p className="text-muted-foreground font-body leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  </Layout>
);

export default CampusLife;
