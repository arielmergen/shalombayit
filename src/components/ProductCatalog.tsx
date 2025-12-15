import { useMemo, useEffect, useState } from "react";
import { CategoryFilter } from "./CategoryFilter";
import { Product } from "./ProductCard";
import { ProductCardWrapper } from "./ProductCardWrapper";
import { EmptyState } from "./EmptyState";
import { products, getCategories } from "@/data/products";
import { useCatalog } from "@/contexts/CatalogContext";

const ALL_CATEGORY = "Todos";

interface ProductCatalogProps {
  isLoading?: boolean;
  productsData?: Product[];
}

export const ProductCatalog = ({ 
  isLoading = false,
  productsData = products 
}: ProductCatalogProps) => {
  const { activeCategory, setActiveCategory } = useCatalog();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Simular carga inicial (en producción esto vendría de una API)
  useEffect(() => {
    if (isLoading) {
      setIsInitialLoad(true);
      // Simular tiempo de carga
      const timer = setTimeout(() => {
        setIsInitialLoad(false);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsInitialLoad(false);
    }
  }, [isLoading]);

  const categories = useMemo(() => {
    const uniqueCategories = productsData.length > 0
      ? [...new Set(productsData.map((p) => p.category))]
      : getCategories();
    return [ALL_CATEGORY, ...uniqueCategories];
  }, [productsData]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === ALL_CATEGORY) {
      return productsData;
    }
    return productsData.filter((p) => p.category === activeCategory);
  }, [activeCategory, productsData]);

  const productCount = filteredProducts.length;

  return (
    <section id="catalogo" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nuestro Catálogo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explorá nuestra variedad de productos artesanales. 
            Consultá por WhatsApp para pedidos y consultas.
          </p>
        </div>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Contador de productos */}
        {!isInitialLoad && productCount > 0 && (
          <div className="mb-6 text-center">
            <p className="text-muted-foreground text-sm">
              {productCount} {productCount === 1 ? "producto" : "productos"}
              {activeCategory !== ALL_CATEGORY && ` en ${activeCategory}`}
            </p>
          </div>
        )}

        {/* Estado de carga o vacío */}
        {(isInitialLoad || isLoading) ? (
          <EmptyState isLoading={true} />
        ) : productCount === 0 ? (
          <EmptyState 
            isLoading={false}
            category={activeCategory !== ALL_CATEGORY ? activeCategory : undefined}
            message={
              activeCategory !== ALL_CATEGORY
                ? "Parece que esta categoría aún no tiene productos cargados. Prueba con otra categoría."
                : "Los productos aún no han sido cargados. Por favor, intenta más tarde."
            }
          />
        ) : (
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            id="product-grid"
            role="region"
            aria-label="Lista de productos"
          >
          {filteredProducts.map((product, index) => (
              <ProductCardWrapper
              key={product.id}
                product={product}
                index={index}
              />
          ))}
        </div>
        )}
      </div>
    </section>
  );
};
