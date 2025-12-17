import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Bot, Zap, Building2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams getting started with AI",
    price: "€99",
    period: "/month",
    icon: Bot,
    features: [
      "1 AI Agent",
      "Basic automation workflows",
      "5,000 actions/month",
      "Email support",
      "Standard integrations",
    ],
    cta: "Start with Starter",
    popular: false,
  },
  {
    name: "Growth",
    description: "For growing businesses scaling operations",
    price: "€299",
    period: "/month",
    icon: Zap,
    features: [
      "Up to 3 AI Agents",
      "Advanced workflows",
      "50,000 actions/month",
      "Priority support",
      "CRM & tool integrations",
      "Analytics dashboard",
      "Custom training",
    ],
    cta: "Start with Growth",
    popular: true,
  },
  {
    name: "Scale",
    description: "Enterprise solutions for maximum impact",
    price: "Custom",
    period: "",
    icon: Building2,
    features: [
      "Unlimited AI Agents",
      "Full automation suite",
      "Unlimited actions",
      "Dedicated support",
      "API access",
      "Custom integrations",
      "SLA guarantee",
      "On-premise option",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const oneShot = [
  { title: "Web Development", description: "Custom web applications built to spec" },
  { title: "Mobile Development", description: "Native and cross-platform mobile apps" },
  { title: "Data Solutions", description: "Analytics, pipelines, and dashboards" },
  { title: "Design Solutions", description: "UI/UX design and branding" },
  { title: "AI Integration", description: "Custom AI solutions for your stack" },
];

const Pricing = () => {
  return (
    <Layout>
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
              AI-Powered Solutions{" "}
              <span className="text-gradient">Designed to Scale</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose a flexible pricing model that fits your growth stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Agent Plans */}
      <Section>
        <SectionHeader
          badge="DK Agents"
          title="AI Agent Subscriptions"
          description="Deploy intelligent agents that work for you around the clock."
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
                  Most Popular
                </span>
              )}
              
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <plan.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button
                asChild
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
              >
                <Link to="/contact">{plan.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* One-shot Projects */}
      <Section className="bg-card/50">
        <SectionHeader
          badge="Custom Projects"
          title="One-Shot Solutions"
          description="Fixed-scope projects delivered with precision and excellence."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {oneShot.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">
              Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Economic Model */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            badge="Our Model"
            title="Why This Pricing Works"
          />
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="font-semibold text-primary mb-2">Subscriptions = Recurring Value</h4>
              <p className="text-muted-foreground">AI agents improve over time, delivering continuous optimization and growing ROI month after month.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="font-semibold text-primary mb-2">One-Shot = High-Impact Delivery</h4>
              <p className="text-muted-foreground">Custom projects with clear scope, timeline, and deliverables. Perfect for specific technical needs.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="font-semibold text-primary mb-2">AI Agents = Evolving Products</h4>
              <p className="text-muted-foreground">Unlike traditional software, our AI agents learn and adapt, becoming more valuable as they work with your data.</p>
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
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Create an account to test DK Agents with limited free usage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/dk-agents">
                Try DK Agents Free
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
};

export default Pricing;
