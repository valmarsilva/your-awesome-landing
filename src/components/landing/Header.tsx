import { useState } from "react";
import { BadgeCheck, Download, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoOrbmaq from "@/assets/logo-orbmaq.png";
import { usePwaInstall } from "@/hooks/use-pwa-install";
import InstallInstructions from "./InstallInstructions";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#equipe", label: "Equipe" },
  { href: "#areas", label: "Áreas de Atendimento" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isInstalled, isInstallable, promptInstall } = usePwaInstall();

  const scrollToSection = (href: string) => {
    // Update URL hash so the "tag" appears and can be shared
    if (href.startsWith("#")) {
      window.location.hash = href;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logoOrbmaq} 
              alt="ORBMAQ Logo" 
              className="h-8 md:h-10 w-auto object-contain rounded-lg"
            />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                ORBMAQ
              </span>
              <span className="text-[10px] md:text-xs text-muted-foreground -mt-1">
                Empilhadeiras & Paleteiras
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center gap-4">
            {(isInstallable || isInstalled) && (
              <Button
                variant="outline"
                size="sm"
                onClick={isInstallable ? promptInstall : undefined}
                disabled={!isInstallable}
                className="gap-2"
                aria-label={isInstalled ? "App instalado" : "Instalar app"}
              >
                {isInstalled ? (
                  <BadgeCheck className="w-4 h-4" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
                {isInstalled ? "App instalado" : "Instalar"}
              </Button>
            )}
            <a
              href="tel:+5547988136429"
              className="flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <Phone className="w-4 h-4 text-primary" />
              (47) 98813-6429
            </a>
            <Button
              onClick={() => scrollToSection("#contato")}
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile actions */}
          <div className="lg:hidden flex items-center gap-1">
            {isInstalled ? (
              <Button
                variant="ghost"
                size="icon"
                disabled
                aria-label="App instalado"
              >
                <BadgeCheck className="w-5 h-5 text-primary" />
              </Button>
            ) : isInstallable ? (
              <Button
                variant="ghost"
                size="icon"
                onClick={promptInstall}
                aria-label="Instalar app"
              >
                <Download className="w-5 h-5" />
              </Button>
            ) : (
              <InstallInstructions />
            )}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-left text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+5547988136429"
                className="flex items-center gap-2 text-sm font-medium text-foreground py-2"
              >
                <Phone className="w-4 h-4 text-primary" />
                (47) 98813-6429
              </a>
              <Button
                onClick={() => scrollToSection("#contato")}
                className="bg-gradient-primary w-full mt-2"
              >
                Solicitar Orçamento
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
