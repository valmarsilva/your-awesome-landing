import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import Gallery from "@/components/landing/Gallery";
import ServiceAreas from "@/components/landing/ServiceAreas";
import About from "@/components/landing/About";
import Contact from "@/components/landing/Contact";
import InstallApp from "@/components/landing/InstallApp";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <ServiceAreas />
      <About />
      <Contact />
      <InstallApp />
      <WhatsAppButton />
      <Footer />
    </main>
  );
};

export default Index;
