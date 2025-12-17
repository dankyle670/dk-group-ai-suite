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
