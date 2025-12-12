import { useState, useMemo } from "react";
import { CategoryFilter } from "./CategoryFilter";
import { ProductCard, Product } from "./ProductCard";

// Import product images
import pizzaMozzarella from "@/assets/pizza-mozzarella.jpg";
import pizzaNapolitana from "@/assets/pizza-napolitana.jpg";
import pizzaFugazzeta from "@/assets/pizza-fugazzeta.jpg";
import pizzaCalabresa from "@/assets/pizza-calabresa.jpg";
import migaJamon from "@/assets/miga-jamon.jpg";
import migaAtun from "@/assets/miga-atun.jpg";
import migaPollo from "@/assets/miga-pollo.jpg";
import migaMixto from "@/assets/miga-mixto.jpg";

const products: Product[] = [
  {
    id: "1",
    name: "Pizza Mozzarella",
    category: "Pizzas",
    image: pizzaMozzarella,
    attribute: "Clásica • Grande",
    price: 4500,
  },
  {
    id: "2",
    name: "Pizza Napolitana",
    category: "Pizzas",
    image: pizzaNapolitana,
    attribute: "Tomate y ajo • Grande",
    price: 5200,
  },
  {
    id: "3",
    name: "Pizza Fugazzeta",
    category: "Pizzas",
    image: pizzaFugazzeta,
    attribute: "Cebolla gratinada • Grande",
    price: 5500,
  },
  {
    id: "4",
    name: "Pizza Calabresa",
    category: "Pizzas",
    image: pizzaCalabresa,
    attribute: "Longaniza picante • Grande",
    price: 5800,
  },
  {
    id: "5",
    name: "Sándwiches de Jamón y Queso",
    category: "Miga",
    image: migaJamon,
    attribute: "Docena • Clásicos",
    price: 3800,
  },
  {
    id: "6",
    name: "Sándwiches de Atún",
    category: "Miga",
    image: migaAtun,
    attribute: "Docena • Premium",
    price: 4200,
  },
  {
    id: "7",
    name: "Sándwiches de Pollo",
    category: "Miga",
    image: migaPollo,
    attribute: "Docena • Especiales",
    price: 4000,
  },
  {
    id: "8",
    name: "Bandeja Mixta",
    category: "Miga",
    image: migaMixto,
    attribute: "24 unidades • Variados",
  },
];

const ALL_CATEGORY = "Todos";

export const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map((p) => p.category))];
    return [ALL_CATEGORY, ...uniqueCategories];
  }, []);

  const filteredProducts = useMemo(() => {
    if (activeCategory === ALL_CATEGORY) {
      return products;
    }
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="catalogo" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nuestro Catálogo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explorá nuestra variedad de productos artesanales. 
            Consultá por WhatsApp para pedidos y consultas.
          </p>
        </div>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
