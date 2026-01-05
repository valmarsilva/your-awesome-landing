import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Import images
import empilhadeiraManutencao from "@/assets/gallery/empilhadeira-manutencao.jpg";
import controladorClark from "@/assets/gallery/controlador-clark.jpg";
import garfosEmpilhadeira from "@/assets/gallery/garfos-empilhadeira.jpg";
import rodaVermelha from "@/assets/gallery/roda-vermelha.jpg";
import medicaoRolamento from "@/assets/gallery/medicao-rolamento.jpg";
import rodaLaranja from "@/assets/gallery/roda-laranja.jpg";
import mangueiraReparo from "@/assets/gallery/mangueira-reparo.jpg";
import empilhadeiraAzul from "@/assets/gallery/empilhadeira-azul.jpg";
import empilhadeiraClarkGreen from "@/assets/gallery/empilhadeira-clark.jpg";
import painelHeli from "@/assets/gallery/painel-heli.jpg";
import paleteiraLaranja from "@/assets/gallery/paleteira-laranja.jpg";
import empilhadeiraYale from "@/assets/gallery/empilhadeira-yale.jpg";

// Import videos
import video1 from "@/assets/videos/video-1.mp4";
import orbmaqPaisagem from "@/assets/videos/orbmaq-paisagem.mp4";
import video2 from "@/assets/videos/video-2.mp4";
import video3 from "@/assets/videos/video-3.mp4";

// Import logo
import logoOrbmaq from "@/assets/logo-orbmaq.png";


const galleryItems = [
  {
    src: empilhadeiraClarkGreen,
    title: "Empilhadeira Clark ECX 30",
    description: "Equipamento em operação após revisão",
  },
  {
    src: empilhadeiraAzul,
    title: "Empilhadeira Elétrica",
    description: "Manutenção de equipamento moderno",
  },
  {
    src: empilhadeiraYale,
    title: "Empilhadeira Yale",
    description: "Equipamento pronto para entrega",
  },
  {
    src: paleteiraLaranja,
    title: "Paleteira Elétrica",
    description: "Manutenção de paleteira industrial",
  },
  {
    src: empilhadeiraManutencao,
    title: "Manutenção Completa",
    description: "Revisão completa de empilhadeira elétrica",
  },
  {
    src: controladorClark,
    title: "Controlador ZAPI",
    description: "Manutenção de controlador eletrônico Clark",
  },
  {
    src: painelHeli,
    title: "Painel HELI",
    description: "Diagnóstico de painel de instrumentos",
  },
  {
    src: garfosEmpilhadeira,
    title: "Troca de Rodas",
    description: "Substituição de rodas de empilhadeira",
  },
  {
    src: rodaVermelha,
    title: "Roda de Poliuretano",
    description: "Peças de reposição de alta qualidade",
  },
  {
    src: medicaoRolamento,
    title: "Medição de Precisão",
    description: "Análise técnica de componentes",
  },
  {
    src: rodaLaranja,
    title: "Roda Industrial",
    description: "Componentes para paleteiras elétricas",
  },
  {
    src: mangueiraReparo,
    title: "Reparo Hidráulico",
    description: "Manutenção de sistema hidráulico",
  },
];

const videos = [
  { src: orbmaqPaisagem, title: "Apresentação ORBMAQ" },
  { src: video1, title: "Manutenção em Andamento" },
  { src: video2, title: "Serviço Técnico" },
  { src: video3, title: "Equipe em Ação" },
];

const clients = [
  "Brother",
  "Cobasi",
  "Shopee",
  "Impomax",
  "Seatrium",
  "Meireles",
  "Branet",
  "Lucar",
  "Astra Transformadores",
  "Mercado Hasi",
  "Mercado Verde Vale",
];

const Gallery = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/5547988136429?text=Olá! Vi a galeria de trabalhos e gostaria de solicitar um orçamento.",
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

        {/* Image Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {galleryItems.map((item, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="group relative aspect-square bg-muted rounded-xl overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-primary-foreground">
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-primary-foreground/80">{item.description}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>

        {/* Team Section */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            Nossa Equipe
          </h3>
          <div className="flex justify-center">
            <div className="bg-card border border-border rounded-xl p-8 shadow-md">
              <img
                src={logoOrbmaq}
                alt="ORBMAQ - Equipe"
                className="h-32 md:h-40 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Clients Section */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            Empresas que Confiam em Nossos Serviços
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-4xl mx-auto">
            {clients.map((client, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-card border border-border rounded-lg shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300"
              >
                <span className="font-medium text-foreground">{client}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Vídeos dos Nossos Serviços
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {videos.map((video, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-card bg-card">
                <video
                  src={video.src}
                  controls
                  preload="metadata"
                  className="w-full aspect-video object-cover"
                  playsInline
                >
                  Seu navegador não suporta vídeos.
                </video>
                <div className="p-4">
                  <h4 className="font-medium text-foreground">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
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
