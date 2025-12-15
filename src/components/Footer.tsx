import { Instagram, Facebook } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { whatsappUrls } from "@/config/whatsapp";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <span className="font-display text-2xl font-bold">
              Shalom Bayit<span className="text-primary">.</span>
            </span>
            <p className="text-background/70 mt-2">
              Pizzas y sándwiches artesanales
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={whatsappUrls.default}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center 
                         hover:bg-whatsapp transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/sol_sabina"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center 
                         hover:bg-primary transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center text-background/50 text-sm">
          <p>© {new Date().getFullYear()} Shalom BayitTodos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
