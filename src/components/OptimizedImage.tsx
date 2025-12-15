import { useState, useRef, useEffect } from "react";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  showSkeleton?: boolean;
  priority?: boolean;
}

/**
 * Componente de imagen optimizada con:
 * - Lazy loading automático
 * - Skeleton loader mientras carga
 * - Manejo de errores con fallback
 * - Intersection Observer para carga eficiente
 */
export const OptimizedImage = ({
  src,
  alt,
  className,
  fallbackSrc = "/placeholder.svg",
  showSkeleton = true,
  priority = false,
  ...props
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Si es prioridad, cargar inmediatamente
    if (priority) {
      setShouldLoad(true);
      return;
    }

    // Configurar Intersection Observer para lazy loading
    if (!shouldLoad && containerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setShouldLoad(true);
              observerRef.current?.disconnect();
            }
          });
        },
        {
          rootMargin: "50px", // Cargar 50px antes de que sea visible
        }
      );

      observerRef.current.observe(containerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [shouldLoad, priority]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Separar las props del img de las props del contenedor
  const { className: imgClassName, ...imgProps } = props;

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden w-full h-full"
    >
      {showSkeleton && isLoading && shouldLoad && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      
      {shouldLoad && (
        <img
          src={hasError ? fallbackSrc : src}
          alt={alt}
          className={cn(
            "w-full h-full transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100",
            imgClassName
          )}
          loading={priority ? "eager" : "lazy"}
          onLoad={handleLoad}
          onError={handleError}
          {...imgProps}
        />
      )}
      
      {!shouldLoad && showSkeleton && (
        <Skeleton className="w-full h-full" />
      )}
    </div>
  );
};

