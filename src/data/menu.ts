/**
 * Estructura de datos para el menú del restaurante
 * Diseñada para soportar:
 * - Múltiples precios por producto
 * - Variantes y opciones
 * - Descripciones detalladas
 * - Grupos de productos
 * - Cantidades (individual, media docena, docena)
 */

export interface MenuPrice {
  label?: string; // Opcional: "Sin papas", "Con papas", "Cada una", "Media docena", "Docena"
  actionText?: string; // Texto a mostrar (ej: "Hacé tu pedido")
}

export interface MenuVariant {
  id: string;
  name: string; // "Carne", "Pollo", "Frita", "Al horno"
  prices: MenuPrice[];
  description?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string; // Descripción detallada del producto
  category: string; // "SANDWICHES DE MILANESA", "OTROS PLATOS", "EMPANADAS"
  image?: string;
  
  // Si tiene variantes (ej: Carne/Pollo, Frita/Horno)
  variants?: MenuVariant[];
  
  // Si no tiene variantes, precio directo
  prices?: MenuPrice[];
  
  // Para agrupar productos relacionados (ej: "Tortillas Individuales")
  groupName?: string;
  
  // Orden dentro de la categoría
  order?: number;
}

export interface MenuSection {
  id: string;
  name: string; // "SANDWICHES DE MILANESA"
  description?: string;
  order: number;
  items: MenuItem[];
}

// Ejemplo de datos del menú
export const menuSections: MenuSection[] = [
  {
    id: "sandwiches-milanesa",
    name: "SANDWICHES DE MILANESA",
    order: 1,
    items: [
      {
        id: "mila-sola",
        name: "SANDW. MILA SOLA",
        description: "Pan y carne",
        category: "SANDWICHES DE MILANESA",
        prices: [
          { label: "Sin papas", actionText: "Hacé tu pedido" },
          { label: "Con papas", actionText: "Hacé tu pedido" },
        ],
        order: 1,
      },
      {
        id: "mila-l-t",
        name: "SANDW. MILA L Y T",
        description: "Pan, Carne, Lechuga y Tomate",
        category: "SANDWICHES DE MILANESA",
        prices: [
          { label: "Sin papas", actionText: "Hacé tu pedido" },
          { label: "Con papas", actionText: "Hacé tu pedido" },
        ],
        order: 2,
      },
      {
        id: "mila-completa",
        name: "SANDW. MILA COMPLETA",
        description: "Pan, Carne, Lechuga, Tomate, Jamón y queso",
        category: "SANDWICHES DE MILANESA",
        prices: [
          { label: "Sin papas", actionText: "Hacé tu pedido" },
          { label: "Con papas", actionText: "Hacé tu pedido" },
        ],
        order: 3,
      },
      {
        id: "mila-pollo",
        name: "SANDW. MILA SOLA POLLO",
        description: "Pan y Pollo",
        category: "SANDWICHES DE MILANESA",
        prices: [
          { label: "Sin papas", actionText: "Hacé tu pedido" },
          { label: "Con papas", actionText: "Hacé tu pedido" },
        ],
        order: 4,
      },
      {
        id: "mila-pollo-l-t",
        name: "SANDW. MILA POLLO L Y T",
        description: "Pan, Pollo, Lechuga y Tomate",
        category: "SANDWICHES DE MILANESA",
        prices: [
          { label: "Sin papas", actionText: "Hacé tu pedido" },
          { label: "Con papas", actionText: "Hacé tu pedido" },
        ],
        order: 5,
      },
      {
        id: "mila-pollo-completa",
        name: "SANDW. MILA COMPLETA",
        description: "Pan, Pollo, Lechuga, Tomate, Jamón y queso",
        category: "SANDWICHES DE MILANESA",
        prices: [
          { label: "Sin papas", actionText: "Hacé tu pedido" },
          { label: "Con papas", actionText: "Hacé tu pedido" },
        ],
        order: 6,
      },
    ],
  },
  {
    id: "otros-platos",
    name: "OTROS PLATOS",
    order: 2,
    items: [
      {
        id: "tortilla-papas",
        name: "TORTILLA DE PAPAS",
        category: "OTROS PLATOS",
        groupName: "TORTILLAS INDIVIDUALES",
        prices: [{ actionText: "Hacé tu pedido" }],
        order: 1,
      },
      {
        id: "tortilla-verduras",
        name: "TORTILLA DE VERDURAS",
        category: "OTROS PLATOS",
        groupName: "TORTILLAS INDIVIDUALES",
        prices: [{ actionText: "Hacé tu pedido" }],
        order: 2,
      },
      {
        id: "papas-chicas",
        name: "PORCIONES DE PAPAS",
        category: "OTROS PLATOS",
        groupName: "PORCIONES DE PAPAS",
        variants: [
          {
            id: "chicas",
            name: "CHICAS",
            prices: [{ actionText: "Hacé tu pedido" }],
          },
          {
            id: "grandes",
            name: "GRANDES",
            prices: [{ actionText: "Hacé tu pedido" }],
          },
        ],
        order: 3,
      },
      {
        id: "pizza-muzzarella",
        name: "PIZZA MUZZARELLA",
        category: "OTROS PLATOS",
        prices: [{ actionText: "Hacé tu pedido" }],
        order: 4,
      },
      {
        id: "pizza-jamon",
        name: "PIZZA JAMON",
        category: "OTROS PLATOS",
        prices: [{ actionText: "Hacé tu pedido" }],
        order: 5,
      },
    ],
  },
  {
    id: "empanadas",
    name: "EMPANADAS",
    description: "Frita o al Horno",
    order: 3,
    items: [
      {
        id: "empanadas",
        name: "EMPANADAS",
        category: "EMPANADAS",
        variants: [
          {
            id: "carne",
            name: "Carne",
            prices: [
              { label: "Cada una", actionText: "Hacé tu pedido" },
              { label: "Media docena", actionText: "Hacé tu pedido" },
              { label: "Docena", actionText: "Hacé tu pedido" },
            ],
          },
          {
            id: "pollo",
            name: "Pollo",
            prices: [
              { label: "Cada una", actionText: "Hacé tu pedido" },
              { label: "Media docena", actionText: "Hacé tu pedido" },
              { label: "Docena", actionText: "Hacé tu pedido" },
            ],
          },
          {
            id: "j-y-queso",
            name: "J y Queso",
            prices: [
              { label: "Cada una", actionText: "Hacé tu pedido" },
              { label: "Media docena", actionText: "Hacé tu pedido" },
              { label: "Docena", actionText: "Hacé tu pedido" },
            ],
          },
        ],
        order: 1,
      },
    ],
  },
];

/**
 * Obtiene todas las secciones del menú ordenadas
 */
export const getMenuSections = (): MenuSection[] => {
  return [...menuSections].sort((a, b) => a.order - b.order);
};

/**
 * Obtiene una sección del menú por ID
 */
export const getMenuSectionById = (id: string): MenuSection | undefined => {
  return menuSections.find((section) => section.id === id);
};

/**
 * Obtiene todos los items del menú
 */
export const getAllMenuItems = (): MenuItem[] => {
  return menuSections.flatMap((section) => section.items);
};

