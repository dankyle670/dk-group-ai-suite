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

const agentCategories = [
  {
    icon: Target,
    title: "Sales AI Agents",
    description: "Automated prospecting, CRM management, follow-up sequences, and objection handling.",
    features: ["Lead qualification", "Meeting scheduling", "Pipeline tracking", "Win rate optimization"],
  },
  {
    icon: Zap,
    title: "Marketing AI Agents",
    description: "Content generation, ad optimization, SEO automation, and social media management.",
    features: ["Content creation", "Campaign optimization", "Audience targeting", "Performance analytics"],
  },
  {
    icon: Headphones,
    title: "Support AI Agents",
    description: "24/7 customer support across chat, voice, email, and omnichannel touchpoints.",
    features: ["Instant responses", "Ticket routing", "Knowledge base", "Sentiment analysis"],
  },
  {
    icon: Settings,
    title: "Operations AI Agents",
    description: "Internal workflow automation, reporting, and process optimization.",
    features: ["Task automation", "Report generation", "Process monitoring", "Resource allocation"],
  },
  {
    icon: Code,
    title: "Custom AI Agents",
    description: "Bespoke AI solutions tailored to your unique business requirements.",
    features: ["Custom integrations", "Industry-specific", "Scalable architecture", "Full ownership"],
  },
];

const industries = [
  { icon: Building2, name: "SaaS", description: "Automate customer lifecycle" },
  { icon: ShoppingCart, name: "E-commerce", description: "Scale support & personalization" },
  { icon: Home, name: "Real Estate", description: "Lead nurturing & property matching" },
  { icon: Briefcase, name: "Agencies", description: "Client management & delivery" },
  { icon: DollarSign, name: "Finance", description: "Compliance & reporting" },
  { icon: Heart, name: "Healthcare", description: "Patient engagement" },
];

const howItWorks = [
  { icon: Database, title: "Data Ingestion", description: "Connect your data sources and knowledge bases" },
  { icon: Brain, title: "Context Understanding", description: "AI learns your business context and goals" },
  { icon: Sparkles, title: "Action Execution", description: "Agents perform tasks autonomously" },
  { icon: RefreshCw, title: "Continuous Learning", description: "Systems improve from feedback and results" },
];

const AISolutions = () => {
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
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              <Bot className="w-4 h-4" />
              AI-First Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI Agents & Intelligent Systems{" "}
              <span className="text-gradient">for Business Growth</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              From automation to decision-making AI, we build systems that work for you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Design My AI Agent
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/dk-agents">
                  Try DK Agents
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agent Categories */}
      <Section className="bg-card/50">
        <SectionHeader
          badge="AI Agent Categories"
          title="Intelligent Agents for Every Function"
          description="Deploy specialized AI agents that handle specific business functions end-to-end."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
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
          badge="Use Cases"
          title="AI Solutions by Industry"
          description="Proven implementations across various sectors and business models."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all text-center card-hover"
            >
              <industry.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-1">{industry.name}</h4>
              <p className="text-xs text-muted-foreground">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-card/50">
        <SectionHeader
          badge="How It Works"
          title="From Data to Action"
          description="Our AI agents follow a proven methodology to deliver consistent results."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
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
            Ready to Deploy Your <span className="text-gradient">AI Workforce?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how AI agents can transform your operations.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </Section>
    </Layout>
  );
};

export default AISolutions;
