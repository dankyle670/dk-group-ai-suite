import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Bot, Zap, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const plans = [
  {
    name: "Starter",
    descriptionKey: "pages.pricing.plans.starter.description",
    price: "€99",
    periodKey: "pages.pricing.plans.periodPerMonth",
    icon: Bot,
    featureKeys: [
      "pages.pricing.plans.starter.features.f1",
      "pages.pricing.plans.starter.features.f2",
      "pages.pricing.plans.starter.features.f3",
      "pages.pricing.plans.starter.features.f4",
      "pages.pricing.plans.starter.features.f5",
    ],
    ctaKey: "pages.pricing.plans.starter.cta",
    popular: false,
  },
  {
    name: "Growth",
    descriptionKey: "pages.pricing.plans.growth.description",
    price: "€299",
    periodKey: "pages.pricing.plans.periodPerMonth",
    icon: Zap,
    featureKeys: [
      "pages.pricing.plans.growth.features.f1",
      "pages.pricing.plans.growth.features.f2",
      "pages.pricing.plans.growth.features.f3",
      "pages.pricing.plans.growth.features.f4",
      "pages.pricing.plans.growth.features.f5",
      "pages.pricing.plans.growth.features.f6",
      "pages.pricing.plans.growth.features.f7",
    ],
    ctaKey: "pages.pricing.plans.growth.cta",
    popular: true,
  },
  {
    name: "Scale",
    descriptionKey: "pages.pricing.plans.scale.description",
    priceKey: "pages.pricing.plans.scale.price",
    period: "",
    icon: Building2,
    featureKeys: [
      "pages.pricing.plans.scale.features.f1",
      "pages.pricing.plans.scale.features.f2",
      "pages.pricing.plans.scale.features.f3",
      "pages.pricing.plans.scale.features.f4",
      "pages.pricing.plans.scale.features.f5",
      "pages.pricing.plans.scale.features.f6",
      "pages.pricing.plans.scale.features.f7",
      "pages.pricing.plans.scale.features.f8",
    ],
    ctaKey: "pages.pricing.plans.scale.cta",
    popular: false,
  },
];

const oneShot = [
  { titleKey: "pages.pricing.oneShot.items.web.title", descriptionKey: "pages.pricing.oneShot.items.web.description" },
  { titleKey: "pages.pricing.oneShot.items.mobile.title", descriptionKey: "pages.pricing.oneShot.items.mobile.description" },
  { titleKey: "pages.pricing.oneShot.items.data.title", descriptionKey: "pages.pricing.oneShot.items.data.description" },
  { titleKey: "pages.pricing.oneShot.items.design.title", descriptionKey: "pages.pricing.oneShot.items.design.description" },
  { titleKey: "pages.pricing.oneShot.items.ai.title", descriptionKey: "pages.pricing.oneShot.items.ai.description" },
];

const Pricing = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Helmet>
        <title>Tarifs Agents IA & Solutions Digitales | DK Group</title>
        <meta name="description" content="Abonnements agents IA à partir de 99€/mois (Starter, Growth, Scale) et projets one-shot web, mobile, data et design. Prix flexibles selon votre croissance." />
        <link rel="canonical" href="https://dkgroupdigital.fr/pricing" />
        <meta property="og:title" content="Tarifs Agents IA & Solutions Digitales | DK Group" />
        <meta property="og:description" content="Abonnements agents IA à partir de 99€/mois et projets one-shot. Des prix flexibles adaptés à votre croissance." />
        <meta property="og:url" content="https://dkgroupdigital.fr/pricing" />
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("pages.pricing.heroTitlePrefix")}{" "}
              <span className="text-gradient">{t("pages.pricing.heroTitleEmphasis")}</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {t("pages.pricing.heroDescription")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Agent Plans */}
      <Section>
        <SectionHeader
          badge={t("pages.pricing.agentPlans.badge")}
          title={t("pages.pricing.agentPlans.title")}
          description={t("pages.pricing.agentPlans.description")}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border ${
                plan.popular
                  ? "bg-gradient-to-br from-primary/10 to-secondary/5 border-primary/30"
                  : "bg-card border-border"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                  {t("pages.pricing.plans.mostPopular")}
                </span>
              )}
              
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <plan.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{t(plan.descriptionKey)}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  {"priceKey" in plan ? t(plan.priceKey) : plan.price}
                </span>
                <span className="text-muted-foreground">
                  {"periodKey" in plan ? t(plan.periodKey) : plan.period}
                </span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.featureKeys.map((featureKey) => (
                  <li key={featureKey} className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    {t(featureKey)}
                  </li>
                ))}
              </ul>
              
              <Button
                asChild
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
              >
                <Link to="/contact">{t(plan.ctaKey)}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* One-shot Projects */}
      <Section className="bg-card/50">
        <SectionHeader
          badge={t("pages.pricing.oneShot.badge")}
          title={t("pages.pricing.oneShot.title")}
          description={t("pages.pricing.oneShot.description")}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {oneShot.map((item, index) => (
            <motion.div
              key={item.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h3 className="font-semibold mb-2">{t(item.titleKey)}</h3>
              <p className="text-sm text-muted-foreground">{t(item.descriptionKey)}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">
              {t("pages.pricing.oneShot.cta")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Economic Model */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            badge={t("pages.pricing.model.badge")}
            title={t("pages.pricing.model.title")}
          />
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="font-semibold text-primary mb-2">{t("pages.pricing.model.cards.subscriptions.title")}</h4>
              <p className="text-muted-foreground">{t("pages.pricing.model.cards.subscriptions.description")}</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="font-semibold text-primary mb-2">{t("pages.pricing.model.cards.oneShot.title")}</h4>
              <p className="text-muted-foreground">{t("pages.pricing.model.cards.oneShot.description")}</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="font-semibold text-primary mb-2">{t("pages.pricing.model.cards.aiAgents.title")}</h4>
              <p className="text-muted-foreground">{t("pages.pricing.model.cards.aiAgents.description")}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-card/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("pages.pricing.cta.title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t("pages.pricing.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/dk-agents">
                {t("pages.pricing.cta.primary")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">{t("pages.pricing.cta.secondary")}</Link>
            </Button>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
};

export default Pricing;
