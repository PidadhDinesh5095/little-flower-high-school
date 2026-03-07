import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import headmasterImg from "@/assets/headmaster.jpg";
import correspondentImg from "@/assets/correspondent.jpg";
import heroBg from "@/assets/hero-campus.jpg";

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="relative pt-32 pb-20 bg-hero-gradient">
      <div className="absolute inset-0 opacity-20">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="container-wide relative text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-hero-dark-foreground mb-4">About Us</h1>
        <p className="text-hero-dark-foreground/70 font-body text-lg max-w-2xl mx-auto">Discover the story behind Bright Future Academy's legacy of excellence.</p>
      </div>
    </section>

    {/* Introduction */}
    <section className="section-padding bg-section-light">
      <div className="container-wide max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">Our Story</h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-4">
            Founded in 1998, Bright Future Academy has grown from a small institution with 200 students to one of the most prestigious schools in the region. Our journey is a testament to our unwavering commitment to academic excellence, character development, and holistic education.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed">
            Over the past 25+ years, we have nurtured thousands of young minds who have gone on to become leaders in their respective fields. Our alumni network spans across the globe, serving in medicine, engineering, law, arts, and public service.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-section-dark">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ScrollReveal direction="left">
            <div className="glass-card-dark rounded-2xl p-8">
              <h3 className="text-secondary font-subheading font-semibold text-sm uppercase tracking-widest mb-3">Our Mission</h3>
              <h4 className="font-heading text-2xl font-bold text-hero-dark-foreground mb-4">Educate. Inspire. Transform.</h4>
              <p className="text-hero-dark-foreground/70 font-body leading-relaxed">
                To provide a nurturing and stimulating learning environment that empowers students with knowledge, skills, and values to become responsible global citizens and leaders of tomorrow.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="glass-card-dark rounded-2xl p-8">
              <h3 className="text-secondary font-subheading font-semibold text-sm uppercase tracking-widest mb-3">Our Vision</h3>
              <h4 className="font-heading text-2xl font-bold text-hero-dark-foreground mb-4">Excellence Without Limits</h4>
              <p className="text-hero-dark-foreground/70 font-body leading-relaxed">
                To be a world-class educational institution recognized for academic rigor, innovative teaching, and the holistic development of every student entrusted to our care.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Leadership */}
    <section className="section-padding bg-section-light">
      <div className="container-wide max-w-4xl">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Our Leadership</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { name: "Dr. Rajesh Kumar", role: "Headmaster", img: headmasterImg, msg: "Education is the most powerful weapon you can use to change the world. At Bright Future Academy, we wield this weapon with passion and purpose." },
            { name: "Mr. Suresh Reddy", role: "Correspondent", img: correspondentImg, msg: "We believe every child has the potential to achieve greatness. Our role is to provide the environment and guidance for that potential to flourish." },
          ].map((l, i) => (
            <ScrollReveal key={l.name} delay={i * 200}>
              <div className="glass-card rounded-2xl overflow-hidden hover-lift">
                <img src={l.img} alt={l.name} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="font-subheading font-semibold text-xl text-foreground">{l.name}</h3>
                  <p className="text-secondary font-subheading text-sm font-medium mb-3">{l.role}</p>
                  <p className="text-muted-foreground text-sm font-body italic leading-relaxed">"{l.msg}"</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
