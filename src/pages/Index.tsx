import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AIAgentsSection } from "@/components/home/AIAgentsSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>DK Group — Flotte d'agents IA pour dirigeants | Paris</title>
        <meta name="description" content="Déployez une flotte d'agents IA (sales, marketing, support, ops) qui travaillent ensemble 24/7. Votre partenaire technologique IA basé à Paris." />
        <link rel="canonical" href="https://dkgroupdigital.fr/" />
        <meta property="og:title" content="DK Group — Flotte d'agents IA pour dirigeants" />
        <meta property="og:description" content="Déployez une flotte d'agents IA spécialisés qui travaillent ensemble 24/7. Sales, marketing, support, ops — vous dirigez, l'IA exécute." />
        <meta property="og:url" content="https://dkgroupdigital.fr/" />
      </Helmet>
      <HeroSection />
      <ServicesSection />
      <AIAgentsSection />
      <WhyUsSection />
      <ProcessSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
