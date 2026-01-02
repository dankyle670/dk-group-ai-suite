import { Link } from "react-router-dom";
import Logo from "@/assets/logo.svg";
import { useTranslation } from "react-i18next";
import { Instagram, Linkedin } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/dkgroup_fr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
const LINKEDIN_URL = ""; // Compte LinkedIn pas encore créé

export const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = {
    solutions: [
      { name: t("nav.aiSolutions"), path: "/ai-solutions" },
      { name: t("solutions.webDevelopment"), path: "/web-development" },
      { name: t("solutions.mobileDevelopment"), path: "/mobile-development" },
      { name: t("solutions.dataSolutions"), path: "/data-solutions" },
      { name: t("solutions.designSolutions"), path: "/design-solutions" },
    ],
    company: [
      { name: t("nav.about"), path: "/about" },
      { name: t("nav.pricing"), path: "/pricing" },
      { name: t("nav.dkAgents"), path: "/dk-agents" },
      { name: t("nav.contact"), path: "/contact" },
    ],
    legal: [
      { name: t("footer.privacyPolicy"), path: "/privacy" },
      { name: t("footer.termsOfService"), path: "/terms" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={Logo} alt="DK Group" className="h-8 w-auto invert" />
              <span className="text-xl font-semibold">GROUP</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("footer.brandBlurb")}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/40 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              {LINKEDIN_URL && (
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/40 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t("footer.solutions")}</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t("footer.company")}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t("footer.getInTouch")}</h4>
            <p className="text-sm text-muted-foreground mb-4">
              {t("footer.getInTouchBlurb")}
            </p>
            <Link
              to="/contact"
              className="inline-flex px-5 py-2.5 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              {t("footer.contactUs")}
            </Link>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DK Group. {t("footer.allRightsReserved")}
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
