import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const galleryItems = [
  {
    title: "Manutenção Preventiva",
    description: "Inspeção completa de empilhadeira elétrica",
  },
  {
    title: "Reparo de Motor",
    description: "Substituição de motor elétrico industrial",
  },
  {
    title: "Sistema de Baterias",
    description: "Manutenção de bateria tracionária",
  },
  {
    title: "Revisão Completa",
    description: "Entrega de equipamento revisado",
  },
];

const Gallery = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/5547999999999?text=Olá! Vi a galeria de trabalhos e gostaria de solicitar um orçamento.",
      "_blank"
    );
  };

  return (
    <section id="galeria" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Galeria
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Nossos Trabalhos
          </h2>
          <p className="text-muted-foreground text-lg">
            Veja alguns exemplos de manutenções e reparos realizados pela nossa equipe.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square bg-muted rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Placeholder Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                <span className="text-primary-foreground/60 text-sm font-medium">
                  Imagem {index + 1}
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-primary-foreground">
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-primary-foreground/80">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button
            size="lg"
            onClick={openWhatsApp}
            className="bg-gradient-primary hover:opacity-90 gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
