import { motion } from "framer-motion";
import { Search, Lightbulb, Hammer, Cog, Rocket } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { useTranslation } from "react-i18next";

const steps = [
  {
    icon: Search,
    number: "01",
    titleKey: "home.process.steps.discover.title",
    descriptionKey: "home.process.steps.discover.description",
  },
  {
    icon: Lightbulb,
    number: "02",
    titleKey: "home.process.steps.design.title",
    descriptionKey: "home.process.steps.design.description",
  },
  {
    icon: Hammer,
    number: "03",
    titleKey: "home.process.steps.build.title",
    descriptionKey: "home.process.steps.build.description",
  },
  {
    icon: Cog,
    number: "04",
    titleKey: "home.process.steps.automate.title",
    descriptionKey: "home.process.steps.automate.description",
  },
  {
    icon: Rocket,
    number: "05",
    titleKey: "home.process.steps.scale.title",
    descriptionKey: "home.process.steps.scale.description",
  },
];

export const ProcessSection = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <SectionHeader
        badge={t("home.process.badge")}
        title={t("home.process.title")}
        description={t("home.process.description")}
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
              <h3 className="text-lg font-semibold mb-2">{t(step.titleKey)}</h3>
              <p className="text-sm text-muted-foreground">{t(step.descriptionKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
