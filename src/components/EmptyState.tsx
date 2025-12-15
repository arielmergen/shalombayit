import { Package, Loader2 } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

interface EmptyStateProps {
  isLoading?: boolean;
  category?: string;
  message?: string;
}

export const EmptyState = ({ 
  isLoading = false, 
  category,
  message 
}: EmptyStateProps) => {
  if (isLoading) {
    return (
      <div className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-8">
            <Loader2 className="w-12 h-12 mx-auto text-primary animate-spin mb-4" />
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Cargando productos...
            </h3>
            <p className="text-muted-foreground">
              Estamos preparando nuestro catálogo para vos
            </p>
          </div>
          
          {/* Skeleton loaders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="product-card">
                <Skeleton className="aspect-square w-full" />
                <div className="p-4 md:p-5 space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <div className="flex items-center justify-between mt-4">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-9 w-24 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-md mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full 
                          bg-muted text-muted-foreground mb-6">
            <Package className="w-10 h-10" />
          </div>
          <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
            {category 
              ? `No hay productos en "${category}"`
              : "No hay productos disponibles"
            }
          </h3>
          <p className="text-muted-foreground mb-6">
            {message || 
              (category 
                ? "Parece que esta categoría aún no tiene productos cargados. Prueba con otra categoría."
                : "Los productos aún no han sido cargados. Por favor, intenta más tarde."
              )
            }
          </p>
        </div>
      </div>
    </div>
  );
};

