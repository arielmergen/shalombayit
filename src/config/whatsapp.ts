/**
 * Configuración centralizada de WhatsApp
 * Centraliza todos los números y mensajes para evitar duplicación
 */

export const WHATSAPP_CONFIG = {
  number: "5491140560164",
  messages: {
    default: "¡Hola! Me gustaría consultar sobre sus productos.",
    order: "¡Hola! Me gustaría hacer un pedido.",
    product: (productName: string) => `¡Hola! Me interesa consultar sobre: ${productName}`,
    inquiry: "¡Hola! Tengo una consulta.",
  },
} as const;

/**
 * Genera la URL de WhatsApp con el mensaje codificado
 * @param message - Mensaje a enviar
 * @returns URL completa de WhatsApp
 */
export const getWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(message)}`;
};

/**
 * Helpers para obtener URLs predefinidas
 */
export const whatsappUrls = {
  default: getWhatsAppUrl(WHATSAPP_CONFIG.messages.default),
  order: getWhatsAppUrl(WHATSAPP_CONFIG.messages.order),
  inquiry: getWhatsAppUrl(WHATSAPP_CONFIG.messages.inquiry),
  product: (productName: string) => 
    getWhatsAppUrl(WHATSAPP_CONFIG.messages.product(productName)),
  custom: (message: string) => getWhatsAppUrl(message),
};

