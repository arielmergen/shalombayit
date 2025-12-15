import { Product } from "@/components/ProductCard";

// Import product images
import pizzaVariadas from "@/assets/prepizzas-variadas.jpeg";
import pizzaFugazzeta from "@/assets/fugazzeta.jpeg";
import migaJamon from "@/assets/miga-jamon-queso.jpeg";
import migahuevo from "@/assets/miga-huevo.jpeg";
import chips from "@/assets/chips.jpeg";
import fosforitos from "@/assets/fosforito.jpeg";
import matambre from "@/assets/matambre.png";

/**
 * Catálogo de productos
 * Centralizado en un archivo separado para facilitar mantenimiento
 * y futuras integraciones con APIs
 */
export const products: Product[] = [
  {
    id: "1",
    name: "Prepizzas Variadas",
    category: "Pizzas",
    image: pizzaVariadas,
    attribute: "Clásica • Grande • Chicas",
  },
  {
    id: "2",
    name: "Pizza Fugazzeta",
    category: "Pizzas",
    image: pizzaFugazzeta,
    attribute: "Grande",
  },
  {
    id: "3",
    name: "Sándwiches de jamón y queso",
    category: "Miga",
    image: migaJamon,
    attribute: "Docena • Clásicos",
  },
  {
    id: "4",
    name: "Sándwiches de jamón y huevo",
    category: "Miga",
    image: migahuevo,
    attribute: "Docena • Jamón y Huevo",
  },
  {
    id: "5",
    name: "Chips",
    category: "chips",
    image: chips,
    attribute: "Chips",
  },
  {
    id: "6",
    name: "Fosforito",
    category: "fosforito",
    image: fosforitos,
    attribute: "Fosforito",
  },
  {
    id: "7",
    name: "Matambre",
    category: "matambre",
    image: matambre,
    attribute: "matambre",
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

