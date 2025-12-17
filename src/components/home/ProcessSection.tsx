import { motion } from "framer-motion";
import { Search, Lightbulb, Hammer, Cog, Rocket } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    description: "Deep dive into your business challenges, goals, and technical requirements.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Design",
    description: "Architect solutions with clear roadmaps, prototypes, and technical specifications.",
  },
  {
    icon: Hammer,
    number: "03",
    title: "Build",
    description: "Develop with agile methodology, continuous integration, and quality assurance.",
  },
  {
    icon: Cog,
    number: "04",
    title: "Automate",
    description: "Deploy AI agents and automation systems that handle repetitive tasks.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Scale",
    description: "Optimize, monitor, and scale your systems as your business grows.",
  },
];

export const ProcessSection = () => {
  return (
    <Section>
      <SectionHeader
        badge="Our Process"
        title="From Idea to Impact"
        description="A proven methodology that transforms complex challenges into elegant solutions."
      />

      <div className="relative">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border hidden lg:block -translate-y-1/2" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center"
            >
              <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl bg-card border border-border flex items-center justify-center group hover:border-primary/50 transition-all">
                <step.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
