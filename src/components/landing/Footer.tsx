import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold">ORBMAQ</span>
              <p className="text-sm text-background/60 mt-1">
                Empilhadeiras & Paleteiras Elétricas
              </p>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Especialistas em manutenção de equipamentos industriais, 
              atendendo Itajaí e toda região do Vale do Itajaí.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <nav className="space-y-2">
              {["Serviços", "Galeria", "Sobre", "Contato"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-background/70 hover:text-background transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5547999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4" />
                (47) 98813-6429
              </a>
              <a
                href="mailto:contato@orbmaq.com.br"
                className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4" />
                contato@orbmaq.com.br
              </a>
              <div className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                Rua : Doutor Pedro Ferreira, 155, Sala 1402A BOX 102,Centro - Itajaí/SC-CEP:88301-030.
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-background/10 text-center">
          <p className="text-sm text-background/50">
            © {currentYear} ORBMAQ. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
