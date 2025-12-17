import { motion } from "framer-motion";
import { Shield, Zap, Users, TrendingUp } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";

const features = [
  {
    icon: Users,
    title: "Long-Term Partner",
    description: "We don't just build and leave. We grow with your business, iterating and improving over time.",
  },
  {
    icon: Zap,
    title: "Custom-Built Solutions",
    description: "Every system is tailored to your specific needs, workflows, and business objectives.",
  },
  {
    icon: Shield,
    title: "Secure & Scalable",
    description: "Enterprise-grade security and infrastructure designed to scale from startup to enterprise.",
  },
  {
    icon: TrendingUp,
    title: "ROI-Focused AI",
    description: "Our AI solutions are built for measurable business impact, not just technical novelty.",
  },
];

export const WhyUsSection = () => {
  return (
    <Section className="bg-card/50">
      <SectionHeader
        badge="Why DK Group"
        title="Your Strategic Technology Partner"
        description="We combine deep technical expertise with business acumen to deliver solutions that truly matter."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex gap-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <feature.icon className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
