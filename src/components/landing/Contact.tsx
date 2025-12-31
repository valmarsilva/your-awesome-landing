import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(47) 99999-9999",
    href: "https://wa.me/5547999999999",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@orbmaq.com.br",
    href: "mailto:contato@orbmaq.com.br",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Rua Exemplo, 123 - Itajaí/SC",
    href: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cidade: "",
    mensagem: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.cidade || !formData.mensagem) {
      toast({
        title: "Preencha todos os campos",
        description: "Por favor, preencha todos os campos do formulário.",
        variant: "destructive",
      });
      return;
    }

    const message = `Olá! Meu nome é ${formData.nome}, sou de ${formData.cidade}.%0A%0A${formData.mensagem}`;
    window.open(`https://wa.me/5547999999999?text=${message}`, "_blank");

    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será direcionado para continuar a conversa no WhatsApp.",
    });

    setFormData({ nome: "", cidade: "", mensagem: "" });
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Fale Conosco
          </h2>
          <p className="text-muted-foreground text-lg">
            Entre em contato para solicitar um orçamento ou tirar suas dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="font-medium text-foreground">
                        {info.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Working Hours */}
            <div className="mt-8 p-6 bg-muted/50 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">
                Horário de Atendimento
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Segunda a Sexta</span>
                  <span className="text-foreground font-medium">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span className="text-foreground font-medium">08:00 - 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Emergências</span>
                  <span className="text-accent font-medium">24 horas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Enviar Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome completo</Label>
                <Input
                  id="nome"
                  placeholder="Seu nome"
                  value={formData.nome}
                  onChange={(e) =>
                    setFormData({ ...formData, nome: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cidade">Cidade</Label>
                <Input
                  id="cidade"
                  placeholder="Sua cidade"
                  value={formData.cidade}
                  onChange={(e) =>
                    setFormData({ ...formData, cidade: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mensagem">Mensagem</Label>
                <Textarea
                  id="mensagem"
                  placeholder="Descreva o serviço que você precisa..."
                  rows={4}
                  value={formData.mensagem}
                  onChange={(e) =>
                    setFormData({ ...formData, mensagem: e.target.value })
                  }
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary hover:opacity-90 gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar pelo WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
