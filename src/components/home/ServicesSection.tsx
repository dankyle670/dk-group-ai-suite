import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Bot, Code, Smartphone, Database, Palette, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";

const services = [
  {
    icon: Bot,
    title: "AI Solutions",
    description: "Custom AI agents, automation workflows, and intelligent systems that transform your operations.",
    path: "/ai-solutions",
    featured: true,
  },
  {
    icon: Code,
    title: "Web Development",
    description: "High-performance web applications built with modern technologies and best practices.",
    path: "/web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    path: "/mobile-development",
  },
  {
    icon: Database,
    title: "Data Solutions",
    description: "Data engineering, analytics, and visualization to unlock actionable insights.",
    path: "/data-solutions",
  },
  {
    icon: Palette,
    title: "Design Solutions",
    description: "User-centered design and branding that elevates your digital presence.",
    path: "/design-solutions",
  },
];

export const ServicesSection = () => {
  return (
    <Section className="bg-card/50">
      <SectionHeader
        badge="What We Do"
        title="End-to-End Digital Solutions"
        description="From AI-powered automation to beautiful interfaces, we build products that drive results."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              to={service.path}
              className={`group block h-full p-8 rounded-2xl border transition-all duration-300 ${
                service.featured
                  ? "bg-gradient-to-br from-primary/10 to-secondary/5 border-primary/30 hover:border-primary/50"
                  : "bg-card border-border hover:border-primary/30"
              } card-hover`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  service.featured
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-primary"
                }`}
              >
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>

              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
