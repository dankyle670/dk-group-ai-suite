import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/assets/logo.svg";
import { useTranslation } from "react-i18next";

const navLinks = [
  { key: "nav.home", path: "/" },
  { key: "nav.aiSolutions", path: "/ai-solutions" },
  { key: "nav.web", path: "/web-development" },
  { key: "nav.mobile", path: "/mobile-development" },
  { key: "nav.data", path: "/data-solutions" },
  { key: "nav.design", path: "/design-solutions" },
  { key: "nav.pricing", path: "/pricing" },
  { key: "nav.about", path: "/about" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const currentLng = i18n.resolvedLanguage ?? i18n.language;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={Logo} alt="DK Group" className="h-8 w-auto invert" />
            <span className="text-xl font-semibold text-foreground">GROUP</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1 rounded-lg border border-border/60 bg-background/40 p-1">
              <button
                type="button"
                onClick={() => i18n.changeLanguage("fr")}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                  currentLng?.startsWith("fr")
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => i18n.changeLanguage("en")}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                  currentLng?.startsWith("en")
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
            </div>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25"
            >
              {t("cta.talkToExpert")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container-custom py-4 space-y-2">
              <div className="flex items-center justify-between px-4 pb-2">
                <span className="text-xs font-semibold text-muted-foreground">{t("language.label")}</span>
                <div className="flex items-center gap-1 rounded-lg border border-border/60 bg-background/40 p-1">
                  <button
                    type="button"
                    onClick={() => i18n.changeLanguage("fr")}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                      currentLng?.startsWith("fr")
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    FR
                  </button>
                  <button
                    type="button"
                    onClick={() => i18n.changeLanguage("en")}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                      currentLng?.startsWith("en")
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {t(link.key)}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block mt-4 px-4 py-3 rounded-lg text-sm font-medium bg-primary text-primary-foreground text-center"
              >
                {t("cta.talkToExpert")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
