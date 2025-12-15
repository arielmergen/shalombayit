import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Hook personalizado para Intersection Observer
 * Útil para animaciones y lazy loading
 * 
 * @param options - Opciones del Intersection Observer
 * @returns [ref, isIntersecting] - Ref para el elemento y estado de intersección
 * 
 * @example
 * ```tsx
 * const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true });
 * 
 * return (
 *   <div ref={ref} className={isVisible ? "animate-fade-in" : "opacity-0"}>
 *     Contenido
 *   </div>
 * );
 * ```
 */
export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<HTMLElement>, boolean] => {
  const {
    threshold = 0.1,
    rootMargin = "0px",
    triggerOnce = false,
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setIsIntersecting(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [elementRef, isIntersecting];
};

