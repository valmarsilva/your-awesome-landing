import { QRCodeSVG } from "qrcode.react";
import { Smartphone, Download } from "lucide-react";

const InstallApp = () => {
  const appUrl = "https://7c87b3b2-ff9d-4385-a2bf-5c57a1c6a668.lovableproject.com";

  return (
    <section id="instalar" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Smartphone className="w-4 h-4" />
            Instale nosso App
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tenha a ORBMAQ no seu celular
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Escaneie o QR Code abaixo com a câmera do seu celular para acessar nosso site e instalá-lo como um aplicativo.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* QR Code */}
          <div className="bg-white p-6 rounded-2xl shadow-card">
            <QRCodeSVG
              value={appUrl}
              size={200}
              level="H"
              includeMargin
              bgColor="#ffffff"
              fgColor="#000000"
            />
          </div>

          {/* Instructions */}
          <div className="max-w-sm text-center md:text-left">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Como instalar:
            </h3>
            <ol className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                  1
                </span>
                <span>Aponte a câmera do celular para o QR Code</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                  2
                </span>
                <span>Toque no link que aparecer na tela</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                  3
                </span>
                <span>
                  <strong>iPhone:</strong> Toque em "Compartilhar" → "Adicionar à Tela de Início"
                  <br />
                  <strong>Android:</strong> Toque nos 3 pontinhos → "Instalar app"
                </span>
              </li>
            </ol>

            <div className="mt-6 flex items-center gap-2 text-sm text-accent font-medium">
              <Download className="w-4 h-4" />
              Funciona offline após instalado!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallApp;
