import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import heroImage from "@/assets/hero-food.jpg";

const WHATSAPP_NUMBER = "5491112345678";
const WHATSAPP_MESSAGE = encodeURIComponent("¡Hola! Me gustaría hacer un pedido.");

export const Hero = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Deliciosas pizzas y sandwiches artesanales"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--hero-overlay))]/70 via-[hsl(var(--hero-overlay))]/50 to-[hsl(var(--hero-overlay))]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white px-4 pt-20">
        <h1 
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Sabores que<br />
          <span className="text-primary">enamoran</span>
        </h1>
        
        <p 
          className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 font-body opacity-0 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Pizzas artesanales y sándwiches de miga para tus momentos especiales. 
          Consultá nuestro catálogo y hacé tu pedido por WhatsApp.
        </p>

        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg px-8 py-4"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Consultar por WhatsApp
          </a>
          
          <a
            href="#catalogo"
            className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold 
                       hover:bg-white/10 transition-all duration-300"
          >
            Ver catálogo
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};
