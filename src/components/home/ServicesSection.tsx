import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Bot, Code, Smartphone, Database, Palette, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { useTranslation } from "react-i18next";

const services = [
  {
    icon: Bot,
    titleKey: "home.services.items.ai.title",
    descriptionKey: "home.services.items.ai.description",
    path: "/ai-solutions",
    featured: true,
  },
  {
    icon: Code,
    titleKey: "home.services.items.web.title",
    descriptionKey: "home.services.items.web.description",
    path: "/web-development",
  },
  {
    icon: Smartphone,
    titleKey: "home.services.items.mobile.title",
    descriptionKey: "home.services.items.mobile.description",
    path: "/mobile-development",
  },
  {
    icon: Database,
    titleKey: "home.services.items.data.title",
    descriptionKey: "home.services.items.data.description",
    path: "/data-solutions",
  },
  {
    icon: Palette,
    titleKey: "home.services.items.design.title",
    descriptionKey: "home.services.items.design.description",
    path: "/design-solutions",
  },
];

export const ServicesSection = () => {
  const { t } = useTranslation();
  return (
    <Section className="bg-card/50">
      <SectionHeader
        badge={t("home.services.badge")}
        title={t("home.services.title")}
        description={t("home.services.description")}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.path}
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
                {t(service.titleKey)}
              </h3>
              <p className="text-muted-foreground mb-4">{t(service.descriptionKey)}</p>

              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                {t("common.learnMore")} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
