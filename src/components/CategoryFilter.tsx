interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: CategoryFilterProps) => {
  return (
    <div 
      className="flex flex-wrap justify-center gap-3 mb-10"
      role="tablist"
      aria-label="Filtros de categorías"
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          role="tab"
          aria-selected={activeCategory === category}
          aria-controls="product-grid"
          className={`filter-pill focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
            activeCategory === category 
              ? "filter-pill-active" 
              : "filter-pill-inactive"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
