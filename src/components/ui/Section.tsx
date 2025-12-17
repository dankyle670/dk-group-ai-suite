import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section id={id} className={cn("section-padding", className)}>
      <div className="container-custom">{children}</div>
    </section>
  );
};

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export const SectionHeader = ({ badge, title, description, centered = true }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("max-w-3xl mb-16", centered && "mx-auto text-center")}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
      {description && (
        <p className="text-lg text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
};
