import { useState, useMemo } from "react";
import { Menu } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { whatsappUrls } from "@/config/whatsapp";
import { getCategories } from "@/data/products";
import { useCatalog } from "@/contexts/CatalogContext";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = useMemo(() => getCategories(), []);
  const { scrollToCatalog } = useCatalog();

  const handleLinkClick = (category?: string) => {
    setIsOpen(false);
    if (category) {
      scrollToCatalog(category);
    } else {
      scrollToCatalog("Todos");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a 
          href="#" 
          className="font-display text-2xl md:text-3xl font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
          aria-label="Sabores - Ir al inicio"
        >
          Sabores<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          <a 
            href="#catalogo" 
            className="text-muted-foreground hover:text-foreground transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
          >
            Catálogo
          </a>
          <a
            href={whatsappUrls.default}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            aria-label="Consultar por WhatsApp"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Consultar
          </a>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-3">
        <a
            href={whatsappUrls.default}
          target="_blank"
          rel="noopener noreferrer"
            className="btn-whatsapp text-sm px-4 py-2"
            aria-label="Consultar por WhatsApp"
        >
          <WhatsAppIcon className="w-4 h-4" />
            <span className="sr-only">WhatsApp</span>
        </a>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 rounded-md text-foreground hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
                aria-label="Abrir menú de navegación"
                aria-expanded={isOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                {/* Título */}
                <h2 className="text-2xl font-display font-bold text-foreground mb-6 mt-4">
                  Catálogo
                </h2>
                
                {/* Items del catálogo */}
                <nav className="flex flex-col gap-2 flex-1 mb-6" aria-label="Navegación móvil">
                  <SheetClose asChild>
                    <button
                      onClick={() => handleLinkClick("Todos")}
                      className="text-base font-medium text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm py-2 px-2 text-left"
                    >
                      Ver todos
                    </button>
                  </SheetClose>
                  {categories.map((category) => (
                    <SheetClose key={category} asChild>
                      <button
                        onClick={() => handleLinkClick(category)}
                        className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm py-2 px-2 text-left"
                      >
                        {category}
                      </button>
                    </SheetClose>
                  ))}
                </nav>

                {/* Botón de WhatsApp (outline blanco) */}
                <SheetClose asChild>
                  <a
                    href={whatsappUrls.default}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="btn-whatsapp-outline text-base justify-center w-full"
                    aria-label="Consultar por WhatsApp"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    Consultar por WhatsApp
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
