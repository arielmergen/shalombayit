import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductCatalog } from "@/components/ProductCatalog";
import { Menu } from "@/components/Menu";
import { TrustBlock } from "@/components/TrustBlock";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SkipToContent } from "@/components/SkipToContent";
import { CatalogProvider } from "@/contexts/CatalogContext";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  // Configurar SEO para la página principal
  useSEO({
    title: "Shalom Bayit - Pizzas y Sándwiches Artesanales",
    description: "Pizzas artesanales y sándwiches de miga para tus momentos especiales. Consultá nuestro catálogo y hacé tu pedido por WhatsApp.",
    keywords: "pizzas, sándwiches de miga, comida artesanal, delivery, pedidos por WhatsApp, pizzas a domicilio",
    ogTitle: "Shalom Bayit - Pizzas y Sándwiches Artesanales",
    ogDescription: "Pizzas artesanales y sándwiches de miga para tus momentos especiales. Consultá nuestro catálogo y hacé tu pedido por WhatsApp.",
    ogImage: "https://www.shalombayit.shifrastudio.com.ar/hero-food.png",
    ogType: "website",
    ogUrl: typeof window !== "undefined" ? window.location.href : "https://www.shalombayit.shifrastudio.com.ar/",
    canonicalUrl: typeof window !== "undefined" ? window.location.href : "https://www.shalombayit.shifrastudio.com.ar/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FoodEstablishment",
      "name": "Shalom Bayit",
      "description": "Pizzas artesanales y sándwiches de miga para tus momentos especiales",
      "servesCuisine": "Pizza, Sándwiches",
      "priceRange": "$$",
      "url": "https://www.shalombayit.shifrastudio.com.ar/",
    },
  });

  return (
    <CatalogProvider>
      <div className="min-h-screen">
        <SkipToContent />
        <Header />
        <main id="main-content">
          <Hero />
          <ProductCatalog />
          <Menu />
          <TrustBlock />
          <FinalCTA />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </CatalogProvider>
  );
};

export default Index;
