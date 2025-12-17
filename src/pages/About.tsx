import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Users, Target, Lightbulb, Heart } from "lucide-react";

const values = [
  { icon: Target, title: "Excellence", description: "We pursue the highest standards in everything we build." },
  { icon: Lightbulb, title: "Innovation", description: "Pushing boundaries with cutting-edge technology." },
  { icon: Users, title: "Partnership", description: "Long-term relationships built on trust and results." },
  { icon: Heart, title: "Impact", description: "Solutions that create real business value." },
];

const About = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Building the Future{" "}<span className="text-gradient">of Business</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              DK Group is a digital & AI solutions company dedicated to helping businesses thrive in the age of automation.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6 text-lg text-muted-foreground">
            <p>
              Founded with a vision to democratize AI and advanced technology, DK Group has become a trusted partner for startups, SMEs, and scale-ups looking to leverage intelligent systems for growth.
            </p>
            <p>
              We're not just another agency. We're a team of engineers, designers, and strategists who believe in building solutions that last. Our AI-first approach means we're constantly pushing the boundaries of what's possible.
            </p>
            <p>
              From custom AI agents that automate sales and support to full-stack web and mobile applications, we deliver end-to-end solutions that scale with your business.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-card/50">
        <SectionHeader badge="Our Values" title="What Drives Us" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-xl bg-card border border-border text-center">
              <v.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground">
            To empower businesses with intelligent technology that drives measurable growth, enabling them to focus on what matters most while AI handles the rest.
          </p>
        </div>
      </Section>
    </Layout>
  );
};

export default About;
