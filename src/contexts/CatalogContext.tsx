import { createContext, useContext, useState, ReactNode } from "react";

interface CatalogContextType {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  scrollToCatalog: (category?: string) => void;
}

const CatalogContext = createContext<CatalogContextType | undefined>(undefined);

const ALL_CATEGORY = "Todos";

export const CatalogProvider = ({ children }: { children: ReactNode }) => {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);

  const scrollToCatalog = (category?: string) => {
    if (category) {
      setActiveCategory(category);
    } else {
      setActiveCategory(ALL_CATEGORY);
    }
    
    // Pequeño delay para asegurar que el estado se actualice antes del scroll
    setTimeout(() => {
      const catalogElement = document.getElementById("catalogo");
      if (catalogElement) {
        const headerHeight = 80; // Altura aproximada del header
        const elementPosition = catalogElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <CatalogContext.Provider value={{ activeCategory, setActiveCategory, scrollToCatalog }}>
      {children}
    </CatalogContext.Provider>
  );
};

export const useCatalog = () => {
  const context = useContext(CatalogContext);
  if (context === undefined) {
    throw new Error("useCatalog must be used within a CatalogProvider");
  }
  return context;
};

