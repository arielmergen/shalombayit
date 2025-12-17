import { useMemo } from "react";
import { MenuSection } from "./MenuSection";
import { getMenuSections, MenuSection as MenuSectionType } from "@/data/menu";
import { useCatalog } from "@/contexts/CatalogContext";

interface MenuProps {
  sections?: MenuSectionType[];
  showImages?: boolean;
}

export const Menu = ({ sections, showImages = true }: MenuProps) => {
  const menuData = useMemo(() => sections || getMenuSections(), [sections]);

  return (
    <section id="menu" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nuestro Menú
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubrí nuestra variedad de platos artesanales. 
            Consultá precios y hacé tu pedido por WhatsApp.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {menuData.map((section) => (
            <MenuSection
              key={section.id}
              section={section}
              showImages={showImages}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

