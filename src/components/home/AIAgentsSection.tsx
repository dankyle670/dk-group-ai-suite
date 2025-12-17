import { motion } from "framer-motion";
import { Zap, Target, Headphones, Settings, TrendingUp } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";

const agents = [
  {
    icon: Target,
    name: "Sales AI Agent",
    problem: "Manual prospecting is slow and inconsistent",
    solution: "Automated lead qualification, CRM updates, and follow-ups",
    outcome: "3x more qualified leads with 70% less effort",
  },
  {
    icon: TrendingUp,
    name: "Lead Generation Agent",
    problem: "Finding quality prospects takes too much time",
    solution: "Intelligent sourcing, enrichment, and scoring",
    outcome: "Continuous pipeline of high-intent leads",
  },
  {
    icon: Headphones,
    name: "Customer Support Agent",
    problem: "Support tickets overwhelming your team",
    solution: "24/7 AI-powered responses across all channels",
    outcome: "80% faster resolution, happier customers",
  },
  {
    icon: Zap,
    name: "Marketing Automation Agent",
    problem: "Campaign management is fragmented",
    solution: "Unified content, ads, and social automation",
    outcome: "2x marketing output, consistent brand voice",
  },
  {
    icon: Settings,
    name: "Internal Ops Agent",
    problem: "Repetitive tasks drain productivity",
    solution: "Workflow automation and intelligent reporting",
    outcome: "Hours saved daily on operational work",
  },
];

export const AIAgentsSection = () => {
  return (
    <Section>
      <SectionHeader
        badge="AI Agent Ecosystem"
        title="Your AI Workforce, Ready to Deploy"
        description="Pre-built AI agents designed to automate your most time-consuming tasks and scale your operations."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {agents.map((agent, index) => (
          <motion.div
            key={agent.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-hover"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <agent.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-4">{agent.name}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <span className="text-destructive font-medium shrink-0">Problem:</span>
                    <span className="text-muted-foreground">{agent.problem}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-medium shrink-0">Solution:</span>
                    <span className="text-muted-foreground">{agent.solution}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-400 font-medium shrink-0">Outcome:</span>
                    <span className="text-foreground font-medium">{agent.outcome}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
