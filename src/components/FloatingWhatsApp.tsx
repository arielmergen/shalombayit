import { WhatsAppIcon } from "./icons/WhatsAppIcon";

const WHATSAPP_NUMBER = "5491112345678";
const WHATSAPP_MESSAGE = encodeURIComponent("¡Hola! Tengo una consulta.");

export const FloatingWhatsApp = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
};
