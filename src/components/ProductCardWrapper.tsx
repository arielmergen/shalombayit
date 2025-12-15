import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ProductCard, Product } from "./ProductCard";
import { cn } from "@/lib/utils";

interface ProductCardWrapperProps {
  product: Product;
  index?: number;
}

/**
 * Wrapper para ProductCard que usa Intersection Observer
 * para animaciones más eficientes y mejor rendimiento
 */
export const ProductCardWrapper = ({ product, index = 0 }: ProductCardWrapperProps) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "50px",
    triggerOnce: true,
  });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "transition-all duration-500 ease-out",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      )}
      style={{
        transitionDelay: isVisible ? `${Math.min(index * 50, 500)}ms` : "0ms",
      }}
    >
      <ProductCard product={product} />
    </div>
  );
};

