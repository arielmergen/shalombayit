import { Product } from "@/components/ProductCard";

// Import product images
<<<<<<< HEAD
import pizzaMozzarella from "@/assets/pizza-mozzarella.jpg";
import pizzaNapolitana from "@/assets/pizza-napolitana.jpg";
import pizzaFugazzeta from "@/assets/pizza-fugazzeta.jpg";
import pizzaCalabresa from "@/assets/pizza-calabresa.jpg";
import migaJamon from "@/assets/miga-jamon.jpg";
import migaAtun from "@/assets/miga-atun.jpg";
import migaPollo from "@/assets/miga-pollo.jpg";
import migaMixto from "@/assets/miga-mixto.jpg";
=======
import pizzaVariadas from "@/assets/prepizzas-variadas.jpeg";
import pizzaFugazzeta from "@/assets/fugazzeta.jpeg";
import migaJamon from "@/assets/miga-jamon-queso.jpeg";
import migahuevo from "@/assets/miga-huevo.jpeg";
import chips from "@/assets/chips.jpeg";
import fosforitos from "@/assets/fosforito.jpeg";
import matambre from "@/assets/matambre.png";
>>>>>>> upgrade/react-19

/**
 * Catálogo de productos
 * Centralizado en un archivo separado para facilitar mantenimiento
 * y futuras integraciones con APIs
 */
export const products: Product[] = [
  {
    id: "1",
<<<<<<< HEAD
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
=======
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
>>>>>>> upgrade/react-19
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

