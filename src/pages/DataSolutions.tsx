import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Database, ArrowRight, BarChart3, Workflow, Brain, Lock } from "lucide-react";
import { useTranslation } from "react-i18next";

const features = [
  { icon: Workflow, title: "Data Pipelines", description: "Automated data ingestion and transformation." },
  { icon: BarChart3, title: "Analytics", description: "Real-time dashboards and business intelligence." },
  { icon: Brain, title: "ML/AI Integration", description: "Machine learning models for predictions." },
  { icon: Lock, title: "Data Governance", description: "Security, compliance, and quality." },
];

const services = ["Data Engineering", "BI Dashboards", "ETL Pipelines", "Data Warehousing", "ML Models", "Data Strategy"];

const DataSolutions = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Helmet>
        <title>Solutions Data & Analytics — ETL, BI, ML | DK Group</title>
        <meta name="description" content="Data engineering, dashboards analytics et pipelines ETL pour transformer vos données en avantage business. Machine learning et BI sur mesure, Paris." />
        <link rel="canonical" href="https://dkgroupdigital.fr/data-solutions" />
        <meta property="og:title" content="Solutions Data & Analytics | DK Group" />
        <meta property="og:description" content="Data engineering, dashboards analytics et pipelines ETL pour transformer vos données en avantage business." />
        <meta property="og:url" content="https://dkgroupdigital.fr/data-solutions" />
      </Helmet>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              <Database className="w-4 h-4" />
              {t("pages.data.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("pages.data.heroTitlePrefix")}{" "}
              <span className="text-gradient">{t("pages.data.heroTitleEmphasis")}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              {t("pages.data.heroDescription")}
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                {t("pages.data.heroCta")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Section className="bg-card/50">
        <SectionHeader badge={t("pages.data.capabilities.badge")} title={t("pages.data.capabilities.title")} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-xl bg-card border border-border text-center">
              <f.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{t(`pages.data.features.${i}.title`)}</h3>
              <p className="text-sm text-muted-foreground">{t(`pages.data.features.${i}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader badge={t("pages.data.services.badge")} title={t("pages.data.services.title")} />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {services.map((s, i) => (
            <motion.div key={s} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-4 rounded-lg bg-card border border-border text-center">
              <span className="text-sm font-medium">{t(`pages.data.services.items.${i}`)}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-card/50">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t("pages.data.bottomCta.title")}</h2>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">
              {t("pages.data.bottomCta.button")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </Section>
    </Layout>
  );
};

export default DataSolutions;
