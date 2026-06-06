import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Bot, Target, Zap, Headphones, Settings, ArrowRight, Lock } from "lucide-react";
import { useTranslation } from "react-i18next";

const agents = [
  {
    icon: Target,
    nameKey: "pages.dkAgents.agents.sales.name",
    roleKey: "pages.dkAgents.agents.sales.role",
    descriptionKey: "pages.dkAgents.agents.sales.description",
    capabilitiesKeys: [
      "pages.dkAgents.agents.sales.capabilities.0",
      "pages.dkAgents.agents.sales.capabilities.1",
      "pages.dkAgents.agents.sales.capabilities.2",
      "pages.dkAgents.agents.sales.capabilities.3"
    ],
  },
  {
    icon: Zap,
    nameKey: "pages.dkAgents.agents.marketing.name",
    roleKey: "pages.dkAgents.agents.marketing.role",
    descriptionKey: "pages.dkAgents.agents.marketing.description",
    capabilitiesKeys: [
      "pages.dkAgents.agents.marketing.capabilities.0",
      "pages.dkAgents.agents.marketing.capabilities.1",
      "pages.dkAgents.agents.marketing.capabilities.2",
      "pages.dkAgents.agents.marketing.capabilities.3"
    ],
  },
  {
    icon: Headphones,
    nameKey: "pages.dkAgents.agents.support.name",
    roleKey: "pages.dkAgents.agents.support.role",
    descriptionKey: "pages.dkAgents.agents.support.description",
    capabilitiesKeys: [
      "pages.dkAgents.agents.support.capabilities.0",
      "pages.dkAgents.agents.support.capabilities.1",
      "pages.dkAgents.agents.support.capabilities.2",
      "pages.dkAgents.agents.support.capabilities.3"
    ],
  },
  {
    icon: Settings,
    nameKey: "pages.dkAgents.agents.ops.name",
    roleKey: "pages.dkAgents.agents.ops.role",
    descriptionKey: "pages.dkAgents.agents.ops.description",
    capabilitiesKeys: [
      "pages.dkAgents.agents.ops.capabilities.0",
      "pages.dkAgents.agents.ops.capabilities.1",
      "pages.dkAgents.agents.ops.capabilities.2",
      "pages.dkAgents.agents.ops.capabilities.3"
    ],
  },
];

const DKAgents = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Helmet>
        <title>DK Agents — Votre Workforce IA | Plateforme d'agents</title>
        <meta name="description" content="Découvrez la plateforme DK Agents : agents IA spécialisés (sales, marketing, support, ops) prêts à déployer pour automatiser vos opérations 24/7." />
        <link rel="canonical" href="https://dkgroupdigital.fr/dk-agents" />
        <meta property="og:title" content="DK Agents — Votre Workforce IA" />
        <meta property="og:description" content="Agents IA spécialisés prêts à déployer : sales, marketing, support, ops. Automatisez vos opérations 24/7." />
        <meta property="og:url" content="https://dkgroupdigital.fr/dk-agents" />
      </Helmet>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              <Bot className="w-4 h-4" />
              {t("pages.dkAgents.heroBadge")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("pages.dkAgents.heroTitlePrefix")}{" "}
              <span className="text-gradient">{t("pages.dkAgents.heroTitleEmphasis")}</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {t("pages.dkAgents.heroDescription")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Agent Cards */}
      <Section>
        <SectionHeader
          badge={t("pages.dkAgents.cards.badge")}
          title={t("pages.dkAgents.cards.title")}
          description={t("pages.dkAgents.cards.description")}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.nameKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <agent.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{t(agent.nameKey)}</h3>
                  <span className="text-sm text-primary">{t(agent.roleKey)}</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">{t(agent.descriptionKey)}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">{t("pages.dkAgents.cards.capabilitiesLabel")}</h4>
                <div className="flex flex-wrap gap-2">
                  {agent.capabilitiesKeys.map((capKey) => (
                    <span
                      key={capKey}
                      className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground"
                    >
                      {t(capKey)}
                    </span>
                  ))}
                </div>
              </div>
              
              <Button asChild variant="outline" className="w-full">
                <Link to="/contact">
                  <Lock className="w-4 h-4" />
                  {t("pages.dkAgents.cards.tryAgent")}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Demo Access */}
      <Section className="bg-card/50">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold mb-4">{t("pages.dkAgents.auth.title")}</h2>
          <p className="text-muted-foreground mb-8">
            {t("pages.dkAgents.auth.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                {t("pages.dkAgents.auth.primary")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">{t("pages.dkAgents.auth.secondary")}</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Demo Mode Info */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            badge={t("pages.dkAgents.demo.badge")}
            title={t("pages.dkAgents.demo.title")}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="font-semibold mb-2">{t("pages.dkAgents.demo.items.0.title")}</h4>
              <p className="text-sm text-muted-foreground">{t("pages.dkAgents.demo.items.0.description")}</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="font-semibold mb-2">{t("pages.dkAgents.demo.items.1.title")}</h4>
              <p className="text-sm text-muted-foreground">{t("pages.dkAgents.demo.items.1.description")}</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="font-semibold mb-2">{t("pages.dkAgents.demo.items.2.title")}</h4>
              <p className="text-sm text-muted-foreground">{t("pages.dkAgents.demo.items.2.description")}</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="font-semibold mb-2">{t("pages.dkAgents.demo.items.3.title")}</h4>
              <p className="text-sm text-muted-foreground">{t("pages.dkAgents.demo.items.3.description")}</p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default DKAgents;
