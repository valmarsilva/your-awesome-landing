import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#areas", label: "Áreas de Atendimento" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold text-primary tracking-tight">
              ORBMAQ
            </span>
            <span className="text-[10px] md:text-xs text-muted-foreground -mt-1">
              Empilhadeiras & Paleteiras
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+5547999999999"
              className="flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <Phone className="w-4 h-4 text-primary" />
              (47) 99999-9999
            </a>
            <Button
              onClick={() => scrollToSection("#contato")}
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:+5547999999999"
                className="flex items-center gap-2 text-sm font-medium text-foreground py-2"
              >
                <Phone className="w-4 h-4 text-primary" />
                (47) 99999-9999
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
