import { WhatsAppIcon } from "./icons/WhatsAppIcon";

const WHATSAPP_NUMBER = "5491112345678";
const WHATSAPP_MESSAGE = encodeURIComponent("¡Hola! Quiero hacer un pedido.");

export const FinalCTA = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          ¿Listo para ordenar?
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10">
          Hacé tu pedido fácil y rápido. Te respondemos al instante.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp text-lg px-10 py-5 inline-flex"
        >
          <WhatsAppIcon className="w-6 h-6" />
          Pedir por WhatsApp
        </a>
      </div>
    </section>
  );
};
