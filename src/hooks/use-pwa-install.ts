import { useEffect, useMemo, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

function getIsStandalone() {
  const isStandaloneDisplayMode =
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(display-mode: standalone)").matches;

  const isIosStandalone =
    typeof window !== "undefined" &&
    (window.navigator as unknown as { standalone?: boolean }).standalone === true;

  return Boolean(isStandaloneDisplayMode || isIosStandalone);
}

export function usePwaInstall() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    setIsInstalled(getIsStandalone());

    const handleBeforeInstallPrompt = (e: Event) => {
      // Chrome/Edge: allow us to show our own install button
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt as EventListener
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const isInstallable = useMemo(() => {
    // iOS doesn't fire beforeinstallprompt; there we keep only the instructions section.
    return !isInstalled && Boolean(deferredPrompt);
  }, [deferredPrompt, isInstalled]);

  const promptInstall = async () => {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();
    // userChoice can throw in some browsers; we just clear state either way
    try {
      await deferredPrompt.userChoice;
    } catch {
      // ignore
    }

    setDeferredPrompt(null);
  };

  return { isInstalled, isInstallable, promptInstall };
}
