import { Wrench, Zap, Battery, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Wrench,
    title: "Manutenção Preventiva",
    description: "Inspeções regulares e ajustes para evitar falhas e prolongar a vida útil dos equipamentos.",
  },
  {
    icon: Zap,
    title: "Sistemas Elétricos",
    description: "Diagnóstico e reparo de motores, controladores e toda parte elétrica das empilhadeiras.",
  },
  {
    icon: Battery,
    title: "Baterias e Carregadores",
    description: "Manutenção, recuperação e substituição de baterias tracionárias e carregadores.",
  },
  {
    icon: Settings,
    title: "Peças e Componentes",
    description: "Fornecimento de peças originais e alternativas com garantia de qualidade.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Soluções Completas para sua Operação
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos serviços especializados para manter seus equipamentos 
            funcionando com máxima eficiência e segurança.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group bg-card border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
