import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { whatsappUrls } from "@/config/whatsapp";
import { OptimizedImage } from "./OptimizedImage";

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  attribute?: string;
  price?: number;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const whatsappUrl = whatsappUrls.product(product.name);

  return (
    <article className="product-card group">
      <div className="aspect-square overflow-hidden bg-muted">
        <OptimizedImage
          src={product.image}
          alt={product.name}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          showSkeleton={true}
        />
      </div>

      <div className="p-4 md:p-5">
        <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-1">
          {product.name}
        </h3>

        {product.attribute && (
          <p className="text-sm text-muted-foreground mb-3">
            {product.attribute}
          </p>
        )}

        <div className="flex items-center justify-between gap-3 mt-4">
          <div className="min-h-[28px]">
            {product.price !== undefined && (
              <span className="font-display text-xl font-bold text-primary">
                ${product.price.toLocaleString('es-AR')}
              </span>
            )}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-outline text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label={`Consultar sobre ${product.name} por WhatsApp`}
          >
            <WhatsAppIcon className="w-4 h-4" />
            Consultar
          </a>
        </div>
      </div>
    </article>
  );
};
