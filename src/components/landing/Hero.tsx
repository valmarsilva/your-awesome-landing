import { MessageCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/5547988136429?text=Olá! Gostaria de solicitar um orçamento para manutenção.",
      "_blank"
    );
  };

  const scrollToServices = () => {
    const element = document.querySelector("#servicos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Atendimento em Itajaí e Região
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Manutenção Especializada em{" "}
            <span className="text-gradient">Empilhadeiras</span> e{" "}
            <span className="text-gradient">Paleteiras Elétricas</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Técnicos certificados, atendimento ágil e peças originais. 
            Garantimos o funcionamento contínuo do seu equipamento.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              onClick={openWhatsApp}
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 px-8 py-6 text-lg shadow-elevated"
            >
              <MessageCircle className="w-5 h-5" />
              Fale pelo WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="gap-2 px-8 py-6 text-lg border-2"
            >
              Ver Serviços
              <ArrowDown className="w-5 h-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-2xl md:text-3xl font-bold text-primary">10+</span>
                <span className="text-sm">Anos de<br/>Experiência</span>
              </div>
              <div className="w-px h-10 bg-border hidden md:block" />
              <div className="flex items-center gap-2">
                <span className="text-2xl md:text-3xl font-bold text-primary">500+</span>
                <span className="text-sm">Clientes<br/>Atendidos</span>
              </div>
              <div className="w-px h-10 bg-border hidden md:block" />
              <div className="flex items-center gap-2">
                <span className="text-2xl md:text-3xl font-bold text-primary">24h</span>
                <span className="text-sm">Atendimento<br/>Emergencial</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
