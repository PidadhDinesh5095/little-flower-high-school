import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, ClipboardList, CreditCard, CheckCircle } from "lucide-react";

const steps = [
  { icon: FileText, title: "Submit Application", desc: "Fill out the online application form with student and parent details." },
  { icon: ClipboardList, title: "Document Verification", desc: "Submit required documents for verification by the admissions office." },
  { icon: CheckCircle, title: "Entrance Assessment", desc: "Student appears for an age-appropriate entrance assessment." },
  { icon: CreditCard, title: "Fee Payment & Enrollment", desc: "Complete fee payment and confirm enrollment." },
];

const documents = ["Birth Certificate", "Previous School Records", "Transfer Certificate", "Passport-size Photos (4)", "Aadhaar Card (Student & Parent)", "Address Proof"];

const Admissions = () => (
  <Layout>
    <section className="relative pt-32 pb-20 bg-hero-gradient">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-80 h-80 bg-secondary rounded-full blur-3xl animate-float" />
      </div>
      <div className="container-wide relative text-center">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-6">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-secondary text-sm font-subheading font-medium">Admissions Open 2026–2027</span>
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-hero-dark-foreground mb-4">Admissions</h1>
        <p className="text-hero-dark-foreground/70 font-body text-lg max-w-2xl mx-auto">Begin your child's journey towards excellence. Limited seats available.</p>
      </div>
    </section>

    {/* Process */}
    <section className="section-padding bg-section-light">
      <div className="container-wide max-w-4xl">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Admission Process</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 100} direction="scale">
              <div className="glass-card rounded-2xl p-6 hover-lift relative">
                <span className="absolute top-4 right-4 text-4xl font-heading font-bold text-primary/10">{i + 1}</span>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-subheading font-semibold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm font-body">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Documents */}
    <section className="section-padding bg-section-dark">
      <div className="container-wide max-w-4xl">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-hero-dark-foreground">Required Documents</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-4">
          {documents.map((d, i) => (
            <ScrollReveal key={d} delay={i * 80}>
              <div className="glass-card-dark rounded-xl px-6 py-4 flex items-center gap-3">
                <CheckCircle size={18} className="text-secondary shrink-0" />
                <span className="text-hero-dark-foreground/90 font-body text-sm">{d}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary text-center">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">Ready to Join?</h2>
        <p className="text-primary-foreground/80 font-body mb-8 max-w-xl mx-auto">Contact our admissions office for personalized guidance and campus tours.</p>
        <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-secondary font-subheading font-semibold text-secondary-foreground transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(38,92%,50%,0.5)] hover:scale-105">
          Contact Admissions <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Admissions;
