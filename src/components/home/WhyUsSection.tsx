import { motion } from "framer-motion";
import { Shield, Zap, Users, TrendingUp } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { useTranslation } from "react-i18next";

const features = [
  {
    icon: Users,
    titleKey: "home.whyUs.items.partner.title",
    descriptionKey: "home.whyUs.items.partner.description",
  },
  {
    icon: Zap,
    titleKey: "home.whyUs.items.custom.title",
    descriptionKey: "home.whyUs.items.custom.description",
  },
  {
    icon: Shield,
    titleKey: "home.whyUs.items.secure.title",
    descriptionKey: "home.whyUs.items.secure.description",
  },
  {
    icon: TrendingUp,
    titleKey: "home.whyUs.items.roi.title",
    descriptionKey: "home.whyUs.items.roi.description",
  },
];

export const WhyUsSection = () => {
  const { t } = useTranslation();
  return (
    <Section className="bg-card/50">
      <SectionHeader
        badge={t("home.whyUs.badge")}
        title={t("home.whyUs.title")}
        description={t("home.whyUs.description")}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.titleKey}
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
              <h3 className="text-xl font-semibold mb-2">{t(feature.titleKey)}</h3>
              <p className="text-muted-foreground">{t(feature.descriptionKey)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
