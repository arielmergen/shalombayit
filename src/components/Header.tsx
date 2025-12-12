import { WhatsAppIcon } from "./icons/WhatsAppIcon";

const WHATSAPP_NUMBER = "5491112345678"; // Replace with actual number
const WHATSAPP_MESSAGE = encodeURIComponent("¡Hola! Me gustaría consultar sobre sus productos.");

export const Header = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display text-2xl md:text-3xl font-bold text-foreground">
          Sabores<span className="text-primary">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#catalogo" 
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Catálogo
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Consultar
          </a>
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden btn-whatsapp text-sm px-4 py-2"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </header>
  );
};
