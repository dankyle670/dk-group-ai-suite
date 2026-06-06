import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Users, Target, Lightbulb, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

const values = [
  { icon: Target, key: "excellence" },
  { icon: Lightbulb, key: "innovation" },
  { icon: Users, key: "partnership" },
  { icon: Heart, key: "impact" },
];

const About = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Helmet>
        <title>À propos de DK Group | Agence IA & Digital Paris</title>
        <meta name="description" content="DK Group est une agence IA & digitale basée à Paris. Nous aidons les startups, PME et scale-ups à accélérer grâce à des systèmes intelligents et des flottes d'agents IA." />
        <link rel="canonical" href="https://dkgroupdigital.fr/about" />
        <meta property="og:title" content="À propos de DK Group | Agence IA & Digital Paris" />
        <meta property="og:description" content="Agence IA & digitale basée à Paris. Nous aidons les startups, PME et scale-ups à accélérer grâce à des systèmes intelligents." />
        <meta property="og:url" content="https://dkgroupdigital.fr/about" />
      </Helmet>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("pages.about.heroTitlePrefix")}{" "}
              <span className="text-gradient">{t("pages.about.heroTitleEmphasis")}</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {t("pages.about.heroDescription")}
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6 text-lg text-muted-foreground">
            <p>{t("pages.about.p1")}</p>
            <p>{t("pages.about.p2")}</p>
            <p>{t("pages.about.p3")}</p>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-card/50">
        <SectionHeader badge={t("pages.about.values.badge")} title={t("pages.about.values.title")} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div key={v.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-xl bg-card border border-border text-center">
              <v.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{t(`pages.about.values.items.${v.key}.title`)}</h3>
              <p className="text-sm text-muted-foreground">{t(`pages.about.values.items.${v.key}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t("pages.about.missionTitle")}</h2>
          <p className="text-xl text-muted-foreground">
            {t("pages.about.missionDescription")}
          </p>
        </div>
      </Section>
    </Layout>
  );
};

export default About;
