import { MenuSection as MenuSectionType } from "@/data/menu";
import { MenuItem } from "./MenuItem";
import { OptimizedImage } from "./OptimizedImage";

interface MenuSectionProps {
  section: MenuSectionType;
  showImages?: boolean;
}

export const MenuSection = ({ section, showImages = true }: MenuSectionProps) => {
  // Agrupar items por groupName si existe
  const groupedItems = section.items.reduce((acc, item) => {
    const groupKey = item.groupName || "ungrouped";
    if (!acc[groupKey]) {
      acc[groupKey] = {
        groupName: item.groupName,
        items: [],
      };
    }
    acc[groupKey].items.push(item);
    return acc;
  }, {} as Record<string, { groupName?: string; items: MenuSectionType["items"] }>);

  const renderGroup = (groupName: string | undefined, items: MenuSectionType["items"]) => {
    return (
      <div key={groupName || "ungrouped"} className="space-y-4">
        {groupName && (
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            {groupName}
          </h4>
        )}
        <div className="space-y-4">
          {items
            .sort((a, b) => (a.order || 0) - (b.order || 0))
            .map((item) => (
              <MenuItem key={item.id} item={item} showImage={showImages} />
            ))}
        </div>
      </div>
    );
  };

  return (
    <section className="menu-section mb-12 last:mb-0">
      <div className="mb-6">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
          {section.name}
        </h2>
        {section.description && (
          <p className="text-muted-foreground text-sm italic">
            {section.description}
          </p>
        )}
      </div>

      <div className="space-y-6">
        {Object.entries(groupedItems).map(([key, group]) =>
          renderGroup(group.groupName, group.items)
        )}
      </div>
    </section>
  );
};

