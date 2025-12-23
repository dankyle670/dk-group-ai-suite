import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const CTASection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-secondary/20 blur-[120px]" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t("home.ctaSection.titlePrefix")}{" "}
            <span className="text-gradient">{t("home.ctaSection.titleEmphasis")}</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            {t("home.ctaSection.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                {t("home.ctaSection.primary")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/dk-agents">
                {t("home.ctaSection.secondary")}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
