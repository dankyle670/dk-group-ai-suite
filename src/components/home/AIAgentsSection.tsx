import { motion } from "framer-motion";
import { Zap, Target, Headphones, Settings, TrendingUp } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { useTranslation } from "react-i18next";

const agents = [
  {
    icon: Target,
    nameKey: "home.aiAgents.agents.sales.name",
    problemKey: "home.aiAgents.agents.sales.problem",
    solutionKey: "home.aiAgents.agents.sales.solution",
    outcomeKey: "home.aiAgents.agents.sales.outcome",
  },
  {
    icon: TrendingUp,
    nameKey: "home.aiAgents.agents.leadgen.name",
    problemKey: "home.aiAgents.agents.leadgen.problem",
    solutionKey: "home.aiAgents.agents.leadgen.solution",
    outcomeKey: "home.aiAgents.agents.leadgen.outcome",
  },
  {
    icon: Headphones,
    nameKey: "home.aiAgents.agents.support.name",
    problemKey: "home.aiAgents.agents.support.problem",
    solutionKey: "home.aiAgents.agents.support.solution",
    outcomeKey: "home.aiAgents.agents.support.outcome",
  },
  {
    icon: Zap,
    nameKey: "home.aiAgents.agents.marketing.name",
    problemKey: "home.aiAgents.agents.marketing.problem",
    solutionKey: "home.aiAgents.agents.marketing.solution",
    outcomeKey: "home.aiAgents.agents.marketing.outcome",
  },
  {
    icon: Settings,
    nameKey: "home.aiAgents.agents.ops.name",
    problemKey: "home.aiAgents.agents.ops.problem",
    solutionKey: "home.aiAgents.agents.ops.solution",
    outcomeKey: "home.aiAgents.agents.ops.outcome",
  },
];

export const AIAgentsSection = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <SectionHeader
        badge={t("home.aiAgents.badge")}
        title={t("home.aiAgents.title")}
        description={t("home.aiAgents.description")}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {agents.map((agent, index) => (
          <motion.div
              key={agent.nameKey}
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
                <h3 className="text-lg font-semibold mb-4">{t(agent.nameKey)}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <span className="text-destructive font-medium shrink-0">{t("labels.problem")}</span>
                    <span className="text-muted-foreground">{t(agent.problemKey)}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-medium shrink-0">{t("labels.solution")}</span>
                    <span className="text-muted-foreground">{t(agent.solutionKey)}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-400 font-medium shrink-0">{t("labels.outcome")}</span>
                    <span className="text-foreground font-medium">{t(agent.outcomeKey)}</span>
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
