import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-background/20" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[15%] hidden lg:block"
      >
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur border border-primary/20 flex items-center justify-center">
          <Bot className="w-10 h-10 text-primary" />
        </div>
      </motion.div>
      
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-[10%] hidden lg:block"
      >
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 backdrop-blur border border-secondary/20 flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-secondary" />
        </div>
      </motion.div>

      <div className="container-custom relative z-10 min-h-[calc(100svh-5rem)]">
        <div className="max-w-4xl mx-auto text-center w-full min-h-[calc(100svh-5rem)] relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-10 sm:pt-12 -translate-y-6 sm:-translate-y-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-8">
              <Sparkles className="w-4 h-4" />
              AI-First Digital Solutions
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute inset-x-0 bottom-1 sm:bottom-2 md:bottom-4 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Talk to an AI Expert
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/ai-solutions">
                Explore AI Solutions
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
