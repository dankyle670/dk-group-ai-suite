import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Smartphone, ArrowRight, Zap, Shield, Users, Layers } from "lucide-react";
import { useTranslation } from "react-i18next";

const features = [
  { icon: Zap, title: "Native Performance", description: "iOS and Android apps that feel truly native." },
  { icon: Layers, title: "Cross-Platform", description: "React Native and Flutter for efficient development." },
  { icon: Users, title: "User-Centric", description: "Intuitive interfaces designed for engagement." },
  { icon: Shield, title: "Enterprise Ready", description: "Secure, scalable, and maintainable." },
];

const services = ["iOS Apps", "Android Apps", "Cross-Platform", "App Redesign", "Backend Integration", "Maintenance"];

const MobileDevelopment = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[120px]" />
        
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              <Smartphone className="w-4 h-4" />
              {t("pages.mobile.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("pages.mobile.heroTitlePrefix")}{" "}
              <span className="text-gradient">{t("pages.mobile.heroTitleEmphasis")}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              {t("pages.mobile.heroDescription")}
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                {t("pages.mobile.heroCta")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Section className="bg-card/50">
        <SectionHeader badge={t("pages.mobile.capabilities.badge")} title={t("pages.mobile.capabilities.title")} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-xl bg-card border border-border text-center">
              <f.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{t(`pages.mobile.features.${i}.title`)}</h3>
              <p className="text-sm text-muted-foreground">{t(`pages.mobile.features.${i}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader badge={t("pages.mobile.services.badge")} title={t("pages.mobile.services.title")} />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {services.map((s, i) => (
            <motion.div key={s} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-4 rounded-lg bg-card border border-border text-center">
              <span className="text-sm font-medium">{t(`pages.mobile.services.items.${i}`)}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-card/50">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t("pages.mobile.bottomCta.title")}</h2>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">
              {t("pages.mobile.bottomCta.button")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </Section>
    </Layout>
  );
};

export default MobileDevelopment;
