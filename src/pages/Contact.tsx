import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => (
  <Layout>
    <section className="relative pt-32 pb-20 bg-hero-gradient">
      <div className="container-wide relative text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-hero-dark-foreground mb-4">Contact Us</h1>
        <p className="text-hero-dark-foreground/70 font-body text-lg max-w-2xl mx-auto">We'd love to hear from you. Reach out for admissions, inquiries, or campus visits.</p>
      </div>
    </section>

    <section className="section-padding bg-section-light">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Our admissions team is available to answer your questions and schedule campus tours.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: MapPin, label: "Address", value: "Q286+55G, Navipet, Telangana 503245" },
                  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                  { icon: Mail, label: "Email", value: "info@littleflowerhighschool.edu" },
                  { icon: Clock, label: "Office Hours", value: "Mon–Sat: 8:00 AM – 4:00 PM" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <c.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-subheading font-semibold text-foreground text-sm">{c.label}</p>
                      <p className="text-muted-foreground font-body text-sm">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-border h-64">
                <iframe
                  src="https://www.google.com/maps?q=LITTLE+FLOWER+HIGH+SCHOOL+NAVIPET&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  title="Little Flower High School Navipet"
                ></iframe>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-subheading font-semibold text-xl text-foreground mb-6">Send us a Message</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-subheading font-medium text-foreground mb-2">Parent Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-subheading font-medium text-foreground mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-subheading font-medium text-foreground mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-subheading font-medium text-foreground mb-2">Student Grade</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-muted-foreground">
                    <option>Select grade</option>
                    {Array.from({ length: 12 }, (_, i) => <option key={i}>Grade {i + 1}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-subheading font-medium text-foreground mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none" placeholder="Your message..." />
                </div>
                <button type="submit" className="w-full py-3 rounded-xl bg-primary font-subheading font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_20px_-5px_hsl(224,64%,33%,0.4)] hover:scale-[1.02]">
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
