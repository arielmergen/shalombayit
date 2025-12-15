/**
 * Componente Skip to Content para accesibilidad
 * Permite a los usuarios de teclado saltar directamente al contenido principal
 */
export const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 
                 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground 
                 focus:rounded-md focus:font-semibold focus:shadow-lg focus:outline-none 
                 focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label="Saltar al contenido principal"
    >
      Saltar al contenido
    </a>
  );
};

