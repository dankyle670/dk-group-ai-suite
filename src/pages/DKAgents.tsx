import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Bot, Target, Zap, Headphones, Settings, ArrowRight, Lock } from "lucide-react";

const agents = [
  {
    icon: Target,
    name: "Sales Agent",
    role: "Sales Automation",
    description: "Automates prospecting, lead qualification, follow-ups, and CRM updates.",
    capabilities: ["Email sequences", "Lead scoring", "Meeting scheduling", "Pipeline reports"],
  },
  {
    icon: Zap,
    name: "Marketing Agent",
    role: "Marketing Automation",
    description: "Manages content creation, ad optimization, and social media posting.",
    capabilities: ["Content generation", "Ad copy", "Social scheduling", "Performance tracking"],
  },
  {
    icon: Headphones,
    name: "Support Agent",
    role: "Customer Support",
    description: "Provides 24/7 customer support across chat, email, and voice channels.",
    capabilities: ["Instant responses", "Ticket routing", "FAQ handling", "Escalation rules"],
  },
  {
    icon: Settings,
    name: "Operations Agent",
    role: "Internal Operations",
    description: "Automates internal workflows, reporting, and process optimization.",
    capabilities: ["Task automation", "Report generation", "Data sync", "Notifications"],
  },
];

const DKAgents = () => {
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              <Bot className="w-4 h-4" />
              DK Agents Platform
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Meet DK Agents{" "}
              <span className="text-gradient">— Your AI Workforce</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Pre-built AI agents ready to deploy and automate your business operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Agent Cards */}
      <Section>
        <SectionHeader
          badge="Available Agents"
          title="Choose Your AI Workforce"
          description="Each agent is specialized for a specific function and ready to work."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
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
                  <h3 className="text-xl font-bold">{agent.name}</h3>
                  <span className="text-sm text-primary">{agent.role}</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">{agent.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">Capabilities:</h4>
                <div className="flex flex-wrap gap-2">
                  {agent.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
              
              <Button asChild variant="outline" className="w-full">
                <Link to="/contact">
                  <Lock className="w-4 h-4" />
                  Try This Agent
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
          <h2 className="text-3xl font-bold mb-4">Authentication Required</h2>
          <p className="text-muted-foreground mb-8">
            Create an account or sign in to access demo mode. You'll get limited free usage to experience what our AI agents can do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Create Account
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Sign In</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Demo Mode Info */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            badge="Demo Mode"
            title="What You Can Do in Demo"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="font-semibold mb-2">✓ Test Core Features</h4>
              <p className="text-sm text-muted-foreground">Experience the agent's primary capabilities with sample data.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="font-semibold mb-2">✓ Limited Actions</h4>
              <p className="text-sm text-muted-foreground">Run a set number of actions to see results firsthand.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="font-semibold mb-2">✓ Sandbox Environment</h4>
              <p className="text-sm text-muted-foreground">Safe testing space with no impact on production systems.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="font-semibold mb-2">✓ Easy Upgrade</h4>
              <p className="text-sm text-muted-foreground">Seamlessly transition to full access when ready.</p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default DKAgents;
