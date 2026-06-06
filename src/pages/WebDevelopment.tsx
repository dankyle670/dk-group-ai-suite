import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Code, ArrowRight, Globe, Zap, Shield, Gauge } from "lucide-react";
import { useTranslation } from "react-i18next";

const features = [
  { icon: Zap, title: "Modern Stack", description: "React, Next.js, TypeScript, and cutting-edge technologies." },
  { icon: Gauge, title: "Performance First", description: "Optimized for speed, SEO, and conversion." },
  { icon: Shield, title: "Secure & Scalable", description: "Enterprise-grade security and cloud infrastructure." },
  { icon: Globe, title: "Global Reach", description: "Multi-language, CDN-powered, worldwide delivery." },
];

const services = [
  "Custom Web Applications",
  "E-commerce Platforms",
  "SaaS Products",
  "Progressive Web Apps",
  "API Development",
  "CMS Solutions",
];

const WebDevelopment = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Helmet>
        <title>Développement Web sur mesure — React & Next.js | DK Group</title>
        <meta name="description" content="Applications web performantes avec React, Next.js et TypeScript. Optimisées pour la vitesse, le SEO et la conversion. Projets sur mesure, Paris." />
        <link rel="canonical" href="https://dkgroupdigital.fr/web-development" />
        <meta property="og:title" content="Développement Web sur mesure | DK Group" />
        <meta property="og:description" content="Applications web performantes avec React, Next.js et TypeScript. Optimisées pour la vitesse, le SEO et la conversion." />
        <meta property="og:url" content="https://dkgroupdigital.fr/web-development" />
      </Helmet>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              <Code className="w-4 h-4" />
              {t("pages.web.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("pages.web.heroTitlePrefix")}{" "}
              <span className="text-gradient">{t("pages.web.heroTitleEmphasis")}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              {t("pages.web.heroDescription")}
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                {t("pages.web.heroCta")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Section className="bg-card/50">
        <SectionHeader badge={t("pages.web.capabilities.badge")} title={t("pages.web.capabilities.title")} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-xl bg-card border border-border text-center">
              <f.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{t(`pages.web.features.${i}.title`)}</h3>
              <p className="text-sm text-muted-foreground">{t(`pages.web.features.${i}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader badge={t("pages.web.services.badge")} title={t("pages.web.services.title")} />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {services.map((s, i) => (
            <motion.div key={s} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-4 rounded-lg bg-card border border-border text-center">
              <span className="text-sm font-medium">{t(`pages.web.services.items.${i}`)}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-card/50">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t("pages.web.bottomCta.title")}</h2>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">
              {t("pages.web.bottomCta.button")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </Section>
    </Layout>
  );
};

export default WebDevelopment;
