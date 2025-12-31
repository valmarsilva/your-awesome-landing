import { CheckCircle, Clock, Award, Shield, Gift } from "lucide-react";

const features = [
  { icon: Clock, text: "Atendimento 24 horas para emergências" },
  { icon: Award, text: "Técnicos certificados e experientes" },
  { icon: Shield, text: "Peças originais com garantia" },
  { icon: Gift, text: "Orçamento gratuito e sem compromisso" },
];

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/40 rounded-2xl flex items-center justify-center">
              <span className="text-primary-foreground/60 font-medium">
                Foto da Equipe / Oficina
              </span>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-card shadow-elevated rounded-xl p-4 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-bold text-foreground">Qualidade</div>
                  <div className="text-sm text-muted-foreground">Garantida</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Quem Somos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Especialistas em Manutenção Industrial
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A <strong className="text-foreground">ORBMAQ</strong> é uma empresa especializada em 
              manutenção de empilhadeiras e paleteiras elétricas, atendendo 
              indústrias, centros de distribuição e comércios em Itajaí e toda 
              região do Vale do Itajaí.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Com mais de 10 anos de experiência no mercado, nossa equipe de 
              técnicos qualificados está preparada para oferecer soluções 
              rápidas e eficientes, minimizando o tempo de parada dos seus 
              equipamentos.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <feature.icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
