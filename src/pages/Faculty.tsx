import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Mail, BookOpen, Award } from "lucide-react";

import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";
import faculty4 from "@/assets/faculty-4.jpg";

const facultyMembers = [
  {
    name: "Mr. Rajesh Kumar",
    designation: "Head of Mathematics",
    qualification: "M.Sc., B.Ed.",
    experience: "18 Years",
    image: faculty1,
    quote: "Mathematics is not about numbers, it's about understanding the universe.",
  },
  {
    name: "Mrs. Lakshmi Devi",
    designation: "Head of Science",
    qualification: "M.Sc. Physics, B.Ed.",
    experience: "15 Years",
    image: faculty2,
    quote: "Every experiment is a step closer to discovery.",
  },
  {
    name: "Mr. Anil Verma",
    designation: "Head of English",
    qualification: "M.A. English, B.Ed.",
    experience: "12 Years",
    image: faculty3,
    quote: "Language is the bridge between cultures and minds.",
  },
  {
    name: "Mrs. Sunita Rao",
    designation: "Head of Social Studies",
    qualification: "M.A. History, B.Ed.",
    experience: "14 Years",
    image: faculty4,
    quote: "Understanding the past empowers us to shape the future.",
  },
  {
    name: "Mr. Praveen Nair",
    designation: "Computer Science Teacher",
    qualification: "M.Tech, B.Ed.",
    experience: "10 Years",
    image: faculty1,
    quote: "Technology is the tool, creativity is the skill.",
  },
  {
    name: "Mrs. Meena Sharma",
    designation: "Biology Teacher",
    qualification: "M.Sc. Biology, B.Ed.",
    experience: "11 Years",
    image: faculty4,
    quote: "Life is the most fascinating subject to study.",
  },
  {
    name: "Mr. Suresh Reddy",
    designation: "Physical Education",
    qualification: "M.P.Ed.",
    experience: "16 Years",
    image: faculty3,
    quote: "A healthy body nurtures a healthy mind.",
  },
  {
    name: "Mrs. Kavitha Iyer",
    designation: "Chemistry Teacher",
    qualification: "M.Sc. Chemistry, B.Ed.",
    experience: "13 Years",
    image: faculty2,
    quote: "Chemistry is the art of transformation.",
  },
];

const Faculty = () => (
  <Layout>
    {/* Hero */}
    <section className="relative pt-32 pb-20 bg-section-dark overflow-hidden">
      <div className="absolute top-10 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" />
      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-secondary font-subheading font-semibold text-sm uppercase tracking-widest mb-3">
            Our Team
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-hero-dark-foreground mb-6">
            Meet Our <span className="text-gradient-gold">Faculty</span>
          </h1>
          <p className="text-hero-dark-foreground/80 font-body text-lg">
            Dedicated educators who inspire excellence and shape the future leaders of tomorrow.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Faculty Grid */}
    <section className="section-padding bg-section-light">
      <div className="container-wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((member, i) => (
            <ScrollReveal key={member.name + i} delay={i * 80} direction="scale">
              <div className="glass-card rounded-2xl overflow-hidden hover-lift group cursor-default">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-hero-dark-foreground text-sm font-body italic">"{member.quote}"</p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-subheading font-semibold text-lg text-foreground mb-1">{member.name}</h3>
                  <p className="text-secondary font-subheading text-sm font-medium mb-3">{member.designation}</p>
                  <div className="space-y-2 text-sm text-muted-foreground font-body">
                    <div className="flex items-center gap-2">
                      <BookOpen size={14} className="text-primary" />
                      <span>{member.qualification}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={14} className="text-primary" />
                      <span>{member.experience} Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 bg-section-dark">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Faculty Members", value: "80+" },
            { label: "PhD Holders", value: "12" },
            { label: "Avg. Experience", value: "14 Yrs" },
            { label: "Awards Won", value: "35+" },
          ].map((stat) => (
            <ScrollReveal key={stat.label} direction="scale">
              <div className="font-heading font-bold text-3xl md:text-4xl text-secondary mb-2">{stat.value}</div>
              <div className="text-hero-dark-foreground/70 font-body text-sm">{stat.label}</div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Faculty;
