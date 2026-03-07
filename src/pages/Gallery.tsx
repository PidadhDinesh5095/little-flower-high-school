import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import classroomImg from "@/assets/classroom.jpg";
import scienceLabImg from "@/assets/science-lab.jpg";
import libraryImg from "@/assets/library.jpg";
import computerLabImg from "@/assets/computer-lab.jpg";
import sportsImg from "@/assets/sports.jpg";
import heroBg from "@/assets/hero-campus.jpg";

const images = [
  { src: heroBg, title: "Campus View", category: "Campus" },
  { src: classroomImg, title: "Smart Classroom", category: "Classrooms" },
  { src: scienceLabImg, title: "Science Laboratory", category: "Labs" },
  { src: libraryImg, title: "Library", category: "Campus" },
  { src: computerLabImg, title: "Computer Lab", category: "Labs" },
  { src: sportsImg, title: "Sports Ground", category: "Sports" },
];

const categories = ["All", "Campus", "Classrooms", "Labs", "Sports"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = filter === "All" ? images : images.filter((i) => i.category === filter);

  return (
    <Layout>
      <section className="relative pt-32 pb-20 bg-hero-gradient">
        <div className="container-wide relative text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-hero-dark-foreground mb-4">Gallery</h1>
          <p className="text-hero-dark-foreground/70 font-body text-lg max-w-2xl mx-auto">A visual tour of our campus and school life.</p>
        </div>
      </section>

      <section className="section-padding bg-section-light">
        <div className="container-wide">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full font-subheading text-sm font-medium transition-all duration-300 ${
                  filter === c ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <ScrollReveal key={img.title + filter} delay={i * 80} direction="scale">
                <div
                  className="break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer relative"
                  onClick={() => setLightbox(i)}
                >
                  <img src={img.src} alt={img.title} className="w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-hero-dark/0 group-hover:bg-hero-dark/50 transition-colors duration-300 flex items-end">
                    <p className="p-4 text-hero-dark-foreground font-subheading font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.title}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-hero-dark/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <img src={filtered[lightbox].src} alt={filtered[lightbox].title} className="max-w-full max-h-[85vh] rounded-2xl object-contain" />
          <button className="absolute top-6 right-6 text-hero-dark-foreground font-body text-lg" onClick={() => setLightbox(null)}>✕ Close</button>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
