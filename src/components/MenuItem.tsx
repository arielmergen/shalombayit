import { MenuItem as MenuItemType, MenuVariant } from "@/data/menu";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { whatsappUrls } from "@/config/whatsapp";
import { OptimizedImage } from "./OptimizedImage";
import { cn } from "@/lib/utils";

interface MenuItemProps {
  item: MenuItemType;
  showImage?: boolean;
}

export const MenuItem = ({ item, showImage = true }: MenuItemProps) => {
  const buildWhatsAppMessage = (item: MenuItemType, variant?: MenuVariant, priceLabel?: string) => {
    let message = `Hola! Me interesa: ${item.name}`;
    if (item.description) message += ` (${item.description})`;
    if (variant) message += ` - ${variant.name}`;
    if (priceLabel) message += ` - ${priceLabel}`;
    return message;
  };

  const renderPrices = (prices: MenuItemType["prices"], variant?: MenuVariant) => {
    if (!prices || prices.length === 0) return null;

    const hasMultiplePrices = prices.length > 1;

    return (
      <div className="flex flex-col gap-2">
        {prices.map((price, index) => {
          const hasLabel = !!price.label;
          const displayText = price.actionText || "Hacé tu pedido";

          return (
            <div
              key={index}
              className={cn(
                "flex items-center justify-between gap-4 py-2",
                hasMultiplePrices && "border-b border-border/50 last:border-0"
              )}
            >
              {hasLabel ? (
                <div className="flex-1">
                  <span className="text-sm text-muted-foreground font-medium">
                    {price.label}
                  </span>
                </div>
              ) : (
                <div className="flex-1" /> // Espaciador cuando no hay label
              )}
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground italic">
                  {displayText}
                </span>
                <a
                  href={whatsappUrls.custom(buildWhatsAppMessage(item, variant, price.label))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-white text-xs px-3 py-1.5 shrink-0 flex items-center gap-1.5 rounded-full transition-colors"
                  aria-label={`Consultar ${item.name}${price.label ? ` ${price.label}` : ""} por WhatsApp`}
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span className="text-xs font-medium">Consultar</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderVariants = () => {
    if (!item.variants || item.variants.length === 0) return null;

    return (
      <div className="space-y-4">
        {item.variants.map((variant) => (
          <div key={variant.id} className="border-l-2 border-primary/20 pl-4">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="font-semibold text-foreground">{variant.name}</h4>
              {variant.description && (
                <span className="text-xs text-muted-foreground">
                  {variant.description}
                </span>
              )}
            </div>
            {variant.prices && renderPrices(variant.prices, variant)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <article className="menu-item bg-card rounded-lg border border-border/50 p-5 hover:border-primary/50 transition-colors">
      <div className="flex gap-5">
        {/* Imagen */}
        {showImage && item.image && (
          <div className="hidden md:block shrink-0">
            <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted">
              <OptimizedImage
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-full"
                showSkeleton={true}
              />
            </div>
          </div>
        )}

        {/* Contenido */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div className="flex-1">
              <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-1">
                {item.name}
              </h3>
              {item.description && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </div>

          {/* Precios o Variantes */}
          <div className="mt-4">
            {item.variants ? renderVariants() : item.prices ? renderPrices(item.prices) : null}
          </div>
        </div>
      </div>
    </article>
  );
};

