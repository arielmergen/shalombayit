import { useEffect } from "react";

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

const DEFAULT_SEO: Required<SEOData> = {
  title: "Shalom Bayit - Pizzas y Sándwiches Artesanales",
  description: "Pizzas artesanales y sándwiches de miga para tus momentos especiales. Consultá nuestro catálogo y hacé tu pedido por WhatsApp.",
  keywords: "pizzas, sándwiches de miga, comida artesanal, delivery, pedidos por WhatsApp",
  author: "Shalom Bayit",
  ogTitle: "Shalom Bayit - Pizzas y Sándwiches Artesanales",
  ogDescription: "Pizzas artesanales y sándwiches de miga para tus momentos especiales. Consultá nuestro catálogo y hacé tu pedido por WhatsApp.",
  ogImage: "/hero-food.jpg",
  ogType: "website",
  ogUrl: "",
  canonicalUrl: "",
  structuredData: {},
};

/**
 * Hook personalizado para manejar SEO y metadata de forma centralizada
 * 
 * @param seoData - Datos de SEO a aplicar. Solo se actualizan los campos proporcionados.
 * @example
 * ```tsx
 * useSEO({
 *   title: "Catálogo - Sabores",
 *   description: "Explorá nuestro catálogo completo de productos",
 *   ogImage: "/catalogo-preview.jpg"
 * });
 * ```
 */
export const useSEO = (seoData: SEOData = {}) => {
  useEffect(() => {
    const mergedSEO = { ...DEFAULT_SEO, ...seoData };

    // Actualizar title
    if (mergedSEO.title) {
      document.title = mergedSEO.title;
    }

    // Función helper para actualizar o crear meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = "name") => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Meta tags básicos
    if (mergedSEO.description) {
      updateMetaTag("description", mergedSEO.description);
    }
    if (mergedSEO.keywords) {
      updateMetaTag("keywords", mergedSEO.keywords);
    }
    if (mergedSEO.author) {
      updateMetaTag("author", mergedSEO.author);
    }

    // Open Graph tags
    if (mergedSEO.ogTitle) {
      updateMetaTag("og:title", mergedSEO.ogTitle, "property");
    }
    if (mergedSEO.ogDescription) {
      updateMetaTag("og:description", mergedSEO.ogDescription, "property");
    }
    if (mergedSEO.ogImage) {
      const fullImageUrl = mergedSEO.ogImage.startsWith("http")
        ? mergedSEO.ogImage
        : typeof window !== "undefined"
        ? `${window.location.origin}${mergedSEO.ogImage}`
        : mergedSEO.ogImage;
      updateMetaTag("og:image", fullImageUrl, "property");
    }
    if (mergedSEO.ogType) {
      updateMetaTag("og:type", mergedSEO.ogType, "property");
    }
    if (mergedSEO.ogUrl) {
      const fullUrl = mergedSEO.ogUrl.startsWith("http")
        ? mergedSEO.ogUrl
        : typeof window !== "undefined"
        ? `${window.location.origin}${mergedSEO.ogUrl}`
        : mergedSEO.ogUrl;
      updateMetaTag("og:url", fullUrl, "property");
    }

    // Twitter Card tags
    if (mergedSEO.twitterCard) {
      updateMetaTag("twitter:card", mergedSEO.twitterCard);
    }
    if (mergedSEO.twitterSite) {
      updateMetaTag("twitter:site", mergedSEO.twitterSite);
    }
    if (mergedSEO.twitterTitle) {
      updateMetaTag("twitter:title", mergedSEO.twitterTitle);
    }
    if (mergedSEO.twitterDescription) {
      updateMetaTag("twitter:description", mergedSEO.twitterDescription);
    }
    if (mergedSEO.twitterImage) {
      const fullImageUrl = mergedSEO.twitterImage.startsWith("http")
        ? mergedSEO.twitterImage
        : typeof window !== "undefined"
        ? `${window.location.origin}${mergedSEO.twitterImage}`
        : mergedSEO.twitterImage;
      updateMetaTag("twitter:image", fullImageUrl);
    }

    // Canonical URL
    if (mergedSEO.canonicalUrl) {
      let canonicalLink = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
      
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      
      const fullUrl = mergedSEO.canonicalUrl.startsWith("http")
        ? mergedSEO.canonicalUrl
        : typeof window !== "undefined"
        ? `${window.location.origin}${mergedSEO.canonicalUrl}`
        : mergedSEO.canonicalUrl;
      canonicalLink.setAttribute("href", fullUrl);
    }

    // Structured Data (JSON-LD)
    if (mergedSEO.structuredData && Object.keys(mergedSEO.structuredData).length > 0) {
      let scriptTag = document.querySelector("script[type='application/ld+json']") as HTMLScriptElement;
      
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      
      scriptTag.textContent = JSON.stringify(mergedSEO.structuredData);
    }
  }, [seoData]);
};

