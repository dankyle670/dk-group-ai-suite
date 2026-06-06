import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

const SUPPORT_EMAIL = "danielkomoe78@gmail.com";
const NETLIFY_EMAIL_SUBJECT = "New lead from %{formName} (%{submissionId})";

function encodeForm(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key] ?? "")}`)
    .join("&");
}

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      // Netlify Forms expects a urlencoded POST including "form-name"
      const payload: Record<string, string> = {};
      formData.forEach((value, key) => {
        payload[key] = String(value);
      });

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm(payload),
      });

      toast({
        title: t("pages.contact.toast.successTitle"),
        description: t("pages.contact.toast.successDescription"),
      });

      form.reset();
    } catch {
      toast({
        title: t("pages.contact.toast.errorTitle"),
        description: t("pages.contact.toast.errorDescription"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Contacter DK Group — Paris | Réponse sous 24h</title>
        <meta name="description" content="Parlons de votre projet IA, web, mobile ou data. Réponse sous 24h. Basé à Paris, DK Group intervient partout en France et à l'international." />
        <link rel="canonical" href="https://dkgroupdigital.fr/contact" />
        <meta property="og:title" content="Contacter DK Group | Paris" />
        <meta property="og:description" content="Parlons de votre projet IA, web, mobile ou data. Réponse sous 24h. Basé à Paris." />
        <meta property="og:url" content="https://dkgroupdigital.fr/contact" />
      </Helmet>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("pages.contact.heroTitlePrefix")}{" "}
              <span className="text-gradient">{t("pages.contact.heroTitleEmphasis")}</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {t("pages.contact.heroDescription")}
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-6">{t("pages.contact.infoTitle")}</h2>
            <p className="text-muted-foreground mb-8">
              {t("pages.contact.infoDescription")}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("pages.contact.emailLabel")}</p>
                  <a className="font-medium hover:underline" href={`mailto:${SUPPORT_EMAIL}`}>
                    {SUPPORT_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("pages.contact.locationLabel")}</p>
                  <p className="font-medium">Paris, France</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input
                type="hidden"
                name="subject"
                data-remove-prefix
                value={NETLIFY_EMAIL_SUBJECT}
              />
              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">{t("pages.contact.form.name")}</label>
                  <Input name="name" placeholder={t("pages.contact.form.namePlaceholder")} required className="bg-muted/50 border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">{t("pages.contact.form.email")}</label>
                  <Input name="email" type="email" placeholder={t("pages.contact.form.emailPlaceholder")} required className="bg-muted/50 border-border" />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="text-sm font-medium mb-2 block">{t("pages.contact.form.company")}</label>
                <Input name="company" placeholder={t("pages.contact.form.companyPlaceholder")} className="bg-muted/50 border-border" />
              </div>
              
              <div className="mb-4">
                <label className="text-sm font-medium mb-2 block">{t("pages.contact.form.topic")}</label>
                <Input
                  name="topic"
                  placeholder={t("pages.contact.form.topicPlaceholder")}
                  required
                  className="bg-muted/50 border-border"
                />
              </div>
              
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">{t("pages.contact.form.message")}</label>
                <Textarea name="message" placeholder={t("pages.contact.form.messagePlaceholder")} rows={5} required className="bg-muted/50 border-border resize-none" />
              </div>
              
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? t("pages.contact.form.sending") : t("pages.contact.form.send")}
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
