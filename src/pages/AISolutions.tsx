import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import {
  Bot, Target, Headphones, Zap, Settings, Code, ArrowRight,
  Database, Brain, RefreshCw, Sparkles, Building2, ShoppingCart,
  Home, Briefcase, DollarSign, Heart
} from "lucide-react";
import { useTranslation } from "react-i18next";

const agentCategories = [
  {
    icon: Target,
    titleKey: "pages.aiSolutions.categories.sales.title",
    descriptionKey: "pages.aiSolutions.categories.sales.description",
    featureKeys: [
      "pages.aiSolutions.categories.sales.features.0",
      "pages.aiSolutions.categories.sales.features.1",
      "pages.aiSolutions.categories.sales.features.2",
      "pages.aiSolutions.categories.sales.features.3"
    ],
  },
  {
    icon: Zap,
    titleKey: "pages.aiSolutions.categories.marketing.title",
    descriptionKey: "pages.aiSolutions.categories.marketing.description",
    featureKeys: [
      "pages.aiSolutions.categories.marketing.features.0",
      "pages.aiSolutions.categories.marketing.features.1",
      "pages.aiSolutions.categories.marketing.features.2",
      "pages.aiSolutions.categories.marketing.features.3"
    ],
  },
  {
    icon: Headphones,
    titleKey: "pages.aiSolutions.categories.support.title",
    descriptionKey: "pages.aiSolutions.categories.support.description",
    featureKeys: [
      "pages.aiSolutions.categories.support.features.0",
      "pages.aiSolutions.categories.support.features.1",
      "pages.aiSolutions.categories.support.features.2",
      "pages.aiSolutions.categories.support.features.3"
    ],
  },
  {
    icon: Settings,
    titleKey: "pages.aiSolutions.categories.ops.title",
    descriptionKey: "pages.aiSolutions.categories.ops.description",
    featureKeys: [
      "pages.aiSolutions.categories.ops.features.0",
      "pages.aiSolutions.categories.ops.features.1",
      "pages.aiSolutions.categories.ops.features.2",
      "pages.aiSolutions.categories.ops.features.3"
    ],
  },
  {
    icon: Code,
    titleKey: "pages.aiSolutions.categories.custom.title",
    descriptionKey: "pages.aiSolutions.categories.custom.description",
    featureKeys: [
      "pages.aiSolutions.categories.custom.features.0",
      "pages.aiSolutions.categories.custom.features.1",
      "pages.aiSolutions.categories.custom.features.2",
      "pages.aiSolutions.categories.custom.features.3"
    ],
  },
];

const industries = [
  { icon: Building2, nameKey: "pages.aiSolutions.industries.0.name", descriptionKey: "pages.aiSolutions.industries.0.description" },
  { icon: ShoppingCart, nameKey: "pages.aiSolutions.industries.1.name", descriptionKey: "pages.aiSolutions.industries.1.description" },
  { icon: Home, nameKey: "pages.aiSolutions.industries.2.name", descriptionKey: "pages.aiSolutions.industries.2.description" },
  { icon: Briefcase, nameKey: "pages.aiSolutions.industries.3.name", descriptionKey: "pages.aiSolutions.industries.3.description" },
  { icon: DollarSign, nameKey: "pages.aiSolutions.industries.4.name", descriptionKey: "pages.aiSolutions.industries.4.description" },
  { icon: Heart, nameKey: "pages.aiSolutions.industries.5.name", descriptionKey: "pages.aiSolutions.industries.5.description" },
];

const howItWorks = [
  { icon: Database, titleKey: "pages.aiSolutions.howItWorks.0.title", descriptionKey: "pages.aiSolutions.howItWorks.0.description" },
  { icon: Brain, titleKey: "pages.aiSolutions.howItWorks.1.title", descriptionKey: "pages.aiSolutions.howItWorks.1.description" },
  { icon: Sparkles, titleKey: "pages.aiSolutions.howItWorks.2.title", descriptionKey: "pages.aiSolutions.howItWorks.2.description" },
  { icon: RefreshCw, titleKey: "pages.aiSolutions.howItWorks.3.title", descriptionKey: "pages.aiSolutions.howItWorks.3.description" },
];

const AISolutions = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Helmet>
        <title>Solutions IA & Agents Intelligents | DK Group</title>
        <meta name="description" content="Agents IA sur mesure pour automatiser vos ventes, marketing, support et ops. Systèmes intelligents qui travaillent 24/7 pour scaler vos opérations." />
        <link rel="canonical" href="https://dkgroupdigital.fr/ai-solutions" />
        <meta property="og:title" content="Solutions IA & Agents Intelligents | DK Group" />
        <meta property="og:description" content="Agents IA sur mesure pour automatiser vos ventes, marketing, support et ops. Systèmes intelligents qui travaillent 24/7." />
        <meta property="og:url" content="https://dkgroupdigital.fr/ai-solutions" />
      </Helmet>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              <Bot className="w-4 h-4" />
              {t("pages.aiSolutions.heroBadge")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("pages.aiSolutions.heroTitlePrefix")}{" "}
              <span className="text-gradient">{t("pages.aiSolutions.heroTitleEmphasis")}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              {t("pages.aiSolutions.heroDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  {t("pages.aiSolutions.heroPrimary")}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/dk-agents">
                  {t("pages.aiSolutions.heroSecondary")}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agent Categories */}
      <Section className="bg-card/50">
        <SectionHeader
          badge={t("pages.aiSolutions.categoriesSection.badge")}
          title={t("pages.aiSolutions.categoriesSection.title")}
          description={t("pages.aiSolutions.categoriesSection.description")}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentCategories.map((category, index) => (
            <motion.div
              key={category.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t(category.titleKey)}</h3>
              <p className="text-muted-foreground text-sm mb-4">{t(category.descriptionKey)}</p>
              <ul className="space-y-2">
                {category.featureKeys.map((featureKey) => (
                  <li key={featureKey} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {t(featureKey)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section>
        <SectionHeader
          badge={t("pages.aiSolutions.industriesSection.badge")}
          title={t("pages.aiSolutions.industriesSection.title")}
          description={t("pages.aiSolutions.industriesSection.description")}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.nameKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all text-center card-hover"
            >
              <industry.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-1">{t(industry.nameKey)}</h4>
              <p className="text-xs text-muted-foreground">{t(industry.descriptionKey)}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-card/50">
        <SectionHeader
          badge={t("pages.aiSolutions.howItWorksSection.badge")}
          title={t("pages.aiSolutions.howItWorksSection.title")}
          description={t("pages.aiSolutions.howItWorksSection.description")}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.map((step, index) => (
            <motion.div
              key={step.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">{t(step.titleKey)}</h3>
              <p className="text-sm text-muted-foreground">{t(step.descriptionKey)}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("pages.aiSolutions.cta.titlePrefix")} <span className="text-gradient">{t("pages.aiSolutions.cta.titleEmphasis")}</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t("pages.aiSolutions.cta.description")}
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              {t("pages.aiSolutions.cta.button")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </Section>
    </Layout>
  );
};

export default AISolutions;
