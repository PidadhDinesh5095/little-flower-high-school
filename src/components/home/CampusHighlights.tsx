import ScrollReveal from "@/components/ScrollReveal";
import classroomImg from "@/assets/classroom.jpg";
import scienceLabImg from "@/assets/science-lab.jpg";
import libraryImg from "@/assets/library.jpg";
import computerLabImg from "@/assets/computer-lab.jpg";
import sportsImg from "@/assets/sports.jpg";

const facilities = [
  { title: "Smart Classrooms", img: classroomImg, desc: "Interactive digital learning environments" },
  { title: "Science Laboratories", img: scienceLabImg, desc: "State-of-the-art research facilities" },
  { title: "Modern Library", img: libraryImg, desc: "30,000+ books and digital resources" },
  { title: "Computer Lab", img: computerLabImg, desc: "Latest technology for digital literacy" },
  { title: "Sports Complex", img: sportsImg, desc: "Olympic-standard athletic facilities" },
];

const CampusHighlights = () => (
  <section className="section-padding bg-section-dark">
    <div className="container-wide">
      <ScrollReveal className="text-center mb-16">
        <p className="text-secondary font-subheading font-semibold text-sm uppercase tracking-widest mb-3">World-Class Facilities</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
          Campus Highlights
        </h2>
        <p className="text-hero-dark-foreground/70 font-body max-w-2xl mx-auto">
          Explore our modern campus designed to inspire learning and creativity.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"} className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
              <img src={f.img} alt={f.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-hero-dark/90 via-hero-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-subheading font-semibold text-lg text-hero-dark-foreground mb-1">{f.title}</h3>
                <p className="text-hero-dark-foreground/70 text-sm font-body">{f.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default CampusHighlights;
