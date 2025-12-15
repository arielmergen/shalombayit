import { Product } from "@/components/ProductCard";

// Import product images
import pizzaMozzarella from "@/assets/pizza-mozzarella.jpg";
import pizzaNapolitana from "@/assets/pizza-napolitana.jpg";
import pizzaFugazzeta from "@/assets/pizza-fugazzeta.jpg";
import pizzaCalabresa from "@/assets/pizza-calabresa.jpg";
import migaJamon from "@/assets/miga-jamon.jpg";
import migaAtun from "@/assets/miga-atun.jpg";
import migaPollo from "@/assets/miga-pollo.jpg";
import migaMixto from "@/assets/miga-mixto.jpg";

/**
 * Catálogo de productos
 * Centralizado en un archivo separado para facilitar mantenimiento
 * y futuras integraciones con APIs
 */
export const products: Product[] = [
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

/**
 * Obtiene todas las categorías únicas de productos
 */
export const getCategories = (): string[] => {
  return [...new Set(products.map((p) => p.category))];
};

/**
 * Filtra productos por categoría
 */
export const getProductsByCategory = (category: string): Product[] => {
  if (category === "Todos") {
    return products;
  }
  return products.filter((p) => p.category === category);
};

