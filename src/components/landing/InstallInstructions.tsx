import { useState } from "react";
import { Download, Share, MoreVertical, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const isIOS = () => {
  if (typeof window === "undefined") return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};

interface InstallInstructionsProps {
  variant?: "icon" | "button";
}

const InstallInstructions = ({ variant = "icon" }: InstallInstructionsProps) => {
  const [open, setOpen] = useState(false);
  const ios = isIOS();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {variant === "button" ? (
          <Button className="w-full gap-2 bg-gradient-primary">
            <Download className="w-4 h-4" />
            Como instalar
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            aria-label="Como instalar o app"
            className="lg:hidden"
          >
            <Download className="w-5 h-5" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Download className="w-5 h-5 text-primary" />
            Instalar ORBMAQ
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <p className="text-sm text-muted-foreground">
            Instale nosso app para acesso rápido e experiência offline!
          </p>

          {ios ? (
            <ol className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium">
                  1
                </span>
                <span>
                  Toque no botão <Share className="inline w-4 h-4 mx-1" /> 
                  <strong>Compartilhar</strong> na barra do Safari
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium">
                  2
                </span>
                <span>
                  Role e toque em <Plus className="inline w-4 h-4 mx-1" />
                  <strong>Adicionar à Tela de Início</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium">
                  3
                </span>
                <span>
                  Confirme tocando em <strong>Adicionar</strong>
                </span>
              </li>
            </ol>
          ) : (
            <ol className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium">
                  1
                </span>
                <span>
                  Toque no menu <MoreVertical className="inline w-4 h-4 mx-1" />
                  <strong>(três pontos)</strong> do navegador
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium">
                  2
                </span>
                <span>
                  Toque em <strong>"Instalar app"</strong> ou{" "}
                  <strong>"Adicionar à tela inicial"</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium">
                  3
                </span>
                <span>
                  Confirme a instalação
                </span>
              </li>
            </ol>
          )}

          <Button
            variant="outline"
            className="w-full"
            onClick={() => setOpen(false)}
          >
            Entendi
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InstallInstructions;
