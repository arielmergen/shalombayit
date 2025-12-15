import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductCatalog } from "@/components/ProductCatalog";
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
    title: "Sabores - Pizzas y Sándwiches Artesanales",
    description: "Pizzas artesanales y sándwiches de miga para tus momentos especiales. Consultá nuestro catálogo y hacé tu pedido por WhatsApp.",
    keywords: "pizzas, sándwiches de miga, comida artesanal, delivery, pedidos por WhatsApp, pizzas a domicilio",
    ogTitle: "Sabores - Pizzas y Sándwiches Artesanales",
    ogDescription: "Pizzas artesanales y sándwiches de miga para tus momentos especiales. Consultá nuestro catálogo y hacé tu pedido por WhatsApp.",
    ogImage: "/hero-food.jpg",
    ogType: "website",
    ogUrl: typeof window !== "undefined" ? window.location.href : "",
    canonicalUrl: typeof window !== "undefined" ? window.location.href : "",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FoodEstablishment",
      "name": "Sabores",
      "description": "Pizzas artesanales y sándwiches de miga",
      "servesCuisine": "Pizza, Sándwiches",
      "priceRange": "$$",
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
