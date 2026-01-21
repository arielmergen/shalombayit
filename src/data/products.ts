import { Product } from "@/components/ProductCard";

// Import product images
import pizzaVariadas from "@/assets/prepizzas-variadas.jpeg";
import pizzaFugazzeta from "@/assets/fugazzeta.jpeg";
import migahuevo from "@/assets/miga-huevo.jpeg";
import especialesTriple from "@/assets/shanwich-de-miga-especiales.png";
import miganegro from "@/assets/sandwich-de-miga-negro.png";
import chips from "@/assets/chips.jpeg";
import fosforitos from "@/assets/fosforito.jpeg";
import matambre from "@/assets/matambre.png";
import empanadas from "@/assets/empanadas.png";
import tortasalada from "@/assets/torta-salada.jpeg";
import bruschetta from "@/assets/bruschetta.jpeg";
import panchurri from "@/assets/panchurri.jpeg";
import figazzasconcarne from "@/assets/figazzas-con-carne-mechada.jpeg";
import tortasalada2 from "@/assets/torta-salada2.jpeg";
import empanadasalhorno from "@/assets/empanadas-horno.jpeg";
import figazzas2 from "@/assets/figazzas.jpeg";
import migaespeciales from "@/assets/miga-especial-lechuga.jpeg";
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
    attribute: ["Grande", "Pizzetas"],
  },
  {
    id: "2",
    name: "Prepizza de Fugazzeta",
    category: "Pizzas",
    image: pizzaFugazzeta,
    attribute: ["Grande, Pizzetas"],
  },
  {
    id: "3",
    name: "Sándwiches de miga triples clásicos:",
    category: "Miga",
    image: migahuevo,
    attribute: [
      "jamón y huevo",
      "jamón y tomate",
      "jamón y lechuga",
      "jamón y queso",
    ],
  },
  {
    id: "4",
    name: "Sándwiches de miga especiales:",
    category: "Miga",
    image: especialesTriple,
    attribute: [
      "jamón y morron",
      "jamón y aceitunas",
      "jamón y roquefort",
      "jamón y palmitos",
      "jamón y pavita",
      "jamón y primavera",
      "jamón y atun",
    ],
  },
  {
    id: "5",
    name: "Sandwich de miga pan negro:",
    category: "Miga",
    image: miganegro,
    attribute: ["crudo y queso", "curdo y rucula"],
  },
  {
    id: "6",
    name: "Chips",
    category: "chips",
    image: chips,
    attribute: ["Chips"],
  },
  {
    id: "7",
    name: "Fosforito",
    category: "fosforito",
    image: fosforitos,
    attribute: ["Fosforito"],
  },
  {
    id: "8",
    name: "Matambre",
    category: "matambre",
    image: matambre,
    attribute: ["matambre"],
  },
  {
    id: "9",
    name: "Empanadas cortadas a cuchillo: (Fritas o al horno)",
    category: "empanadas",
    image: empanadas,
    attribute: ["carne", "pollo", "jamón y queso"],
  },
  {
    id: "10",
    name: "Torta salada",
    category: "tortas",
    image: tortasalada,
  },
  {
    id: "11",
    name: "Torta salada",
    category: "tortas",
    image: tortasalada2,
  },
  {
    id: "12",
    name: "Bruschettas",
    category: "bruschettas",
    image: bruschetta,
  },
  {
    id: "13",
    name: "Panchurris",
    category: "panchurri",
    image: panchurri
  },
  {
    id: "14",
    name: "Figazzas con carne mechada",
    category: "figazzas",
    image: figazzasconcarne,
    attribute: ["bondiola", "pollo al verdeo"],
  },
  {
    id: "15",
    name: "Empanadas al horno:",
    category: "empanadas",
    image: empanadasalhorno,
    attribute: ["carne", "pollo", "jamón y queso"],
  },
  {
    id: "16",
    name: "Figazzas con carne mechada:",
    category: "figazzas",
    image: figazzas2,
    attribute: ["bondiola", "pollo al verdeo"],
  },
  {
    id: "17",
    name: "Sandwich de miga especiales:",
    category: "miga",
    image: migaespeciales,
    attribute: ["lechuga", "tomate", "huevo"],
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

