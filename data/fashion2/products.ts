import { getRandomFashionImage } from "./imageUtils";
import { Product } from "@/components/ProductCard";

export interface Fashion2Product extends Product {
  // Fashion2 specific extensions if needed
}

// Type alias for consistency
export type { Product } from "@/components/ProductCard";

// Jewelry product data for Fashion2
export const fashion2Products: Fashion2Product[] = [
  {
    id: "jwl-001",
    name: "Diamond Solitaire Ring",
    description: "Elegant diamond solitaire ring in 18k white gold",
    price: 12500,
    originalPrice: 15000,
    image: getRandomFashionImage("Rings", "jwl-001"),
    url: "/fashion2/product/jwl-001",
    currency: "BDT",
    availability: "InStock",
    brand: "Insole",
    category: "Jewelry",
    subcategory: "Rings",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "jwl-002",
    name: "Gold Chain Necklace",
    description: "Classic gold chain necklace, 22k gold",
    price: 8500,
    originalPrice: 10000,
    image: getRandomFashionImage("Necklaces", "jwl-002"),
    url: "/fashion2/product/jwl-002",
    currency: "BDT",
    availability: "InStock",
    brand: "Insole",
    category: "Jewelry",
    subcategory: "Necklaces",
    rating: 4.7,
    reviews: 98,
  },
  {
    id: "jwl-003",
    name: "Pearl Stud Earrings",
    description: "Freshwater pearl earrings with silver studs",
    price: 5500,
    image: getRandomFashionImage("Earrings", "jwl-003"),
    url: "/fashion2/product/jwl-003",
    currency: "BDT",
    availability: "InStock",
    brand: "Insole",
    category: "Jewelry",
    subcategory: "Earrings",
    rating: 4.9,
    reviews: 156,
  },
  {
    id: "jwl-004",
    name: "Tennis Bracelet",
    description: "Diamond tennis bracelet in platinum",
    price: 9800,
    originalPrice: 12000,
    image: getRandomFashionImage("Bracelets", "jwl-004"),
    url: "/fashion2/product/jwl-004",
    currency: "BDT",
    availability: "InStock",
    brand: "Insole",
    category: "Jewelry",
    subcategory: "Bracelets",
    rating: 4.6,
    reviews: 87,
  },
  {
    id: "jwl-005",
    name: "Sapphire Ring",
    description: "Blue sapphire ring with diamond accents",
    price: 14500,
    image: getRandomFashionImage("Rings", "jwl-005"),
    url: "/fashion2/product/jwl-005",
    currency: "BDT",
    availability: "InStock",
    brand: "Insole",
    category: "Jewelry",
    subcategory: "Rings",
    rating: 4.9,
    reviews: 142,
  },
  {
    id: "jwl-006",
    name: "Gold Hoop Earrings",
    description: "Classic gold hoop earrings, 18k gold",
    price: 6500,
    originalPrice: 7500,
    image: getRandomFashionImage("Earrings", "jwl-006"),
    url: "/fashion2/product/jwl-006",
    currency: "BDT",
    availability: "InStock",
    brand: "Insole",
    category: "Jewelry",
    subcategory: "Earrings",
    rating: 4.5,
    reviews: 112,
  },
  {
    id: "jwl-007",
    name: "Emerald Pendant",
    description: "Emerald pendant with gold chain",
    price: 11200,
    image: getRandomFashionImage("Necklaces", "jwl-007"),
    url: "/fashion2/product/jwl-007",
    currency: "BDT",
    availability: "InStock",
    brand: "Insole",
    category: "Jewelry",
    subcategory: "Necklaces",
    rating: 4.8,
    reviews: 95,
  },
  {
    id: "jwl-008",
    name: "Silver Bangle Set",
    description: "Set of 3 sterling silver bangles",
    price: 4500,
    originalPrice: 5500,
    image: getRandomFashionImage("Bracelets", "jwl-008"),
    url: "/fashion2/product/jwl-008",
    currency: "BDT",
    availability: "InStock",
    brand: "Insole",
    category: "Jewelry",
    subcategory: "Bracelets",
    rating: 4.7,
    reviews: 128,
  },
  {
    id: "jwl-009",
    name: "Ruby Cocktail Ring",
    description: "Statement ruby ring in yellow gold",
    price: 16800,
    image: getRandomFashionImage("Rings", "jwl-009"),
    url: "/fashion2/product/jwl-009",
    currency: "BDT",
    availability: "InStock",
    brand: "Insole",
    category: "Jewelry",
    subcategory: "Rings",
    rating: 4.9,
    reviews: 78,
  },
  {
    id: "jwl-010",
    name: "Diamond Stud Earrings",
    description: "Classic diamond stud earrings, 1 carat total",
    price: 13500,
    originalPrice: 16000,
    image: getRandomFashionImage("Earrings", "jwl-010"),
    url: "/fashion2/product/jwl-010",
    currency: "BDT",
    availability: "InStock",
    brand: "Insole",
    category: "Jewelry",
    subcategory: "Earrings",
    rating: 5.0,
    reviews: 203,
  },
  {
    id: "jwl-011",
    name: "Gold Chain Bracelet",
    description: "Delicate gold chain bracelet, 18k",
    price: 7200,
    image: getRandomFashionImage("Bracelets", "jwl-011"),
    url: "/fashion2/product/jwl-011",
    currency: "BDT",
    availability: "InStock",
    brand: "Insole",
    category: "Jewelry",
    subcategory: "Bracelets",
    rating: 4.6,
    reviews: 91,
  },
  {
    id: "jwl-012",
    name: "Amethyst Pendant",
    description: "Purple amethyst pendant with silver chain",
    price: 5800,
    originalPrice: 7000,
    image: getRandomFashionImage("Necklaces", "jwl-012"),
    url: "/fashion2/product/jwl-012",
    currency: "BDT",
    availability: "InStock",
    brand: "Insole",
    category: "Jewelry",
    subcategory: "Necklaces",
    rating: 4.7,
    reviews: 104,
  },
];

// Helper functions
export const getProductById = (id: string): Fashion2Product | undefined => {
  return fashion2Products.find((p) => p.id === id);
};

export const getFashion2ProductUrl = (id: string) => `/fashion2/product/${id}`;

// Sort options
export const sortOptions = [
  { value: "popularity", label: "Most Popular" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "newest", label: "Newest First" },
  { value: "rating", label: "Highest Rated" },
];

// Sorting function
export const sortProducts = (
  products: Fashion2Product[],
  sortBy: string
): Fashion2Product[] => {
  const sorted = [...products];

  switch (sortBy) {
    case "price-low":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-high":
      return sorted.sort((a, b) => b.price - a.price);
    case "rating":
      return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    case "newest":
      return sorted.reverse();
    case "popularity":
    default:
      return sorted.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
  }
};

// Filter function
export const filterProducts = (
  products: Fashion2Product[],
  category: string,
  subcategory: string,
  minPrice: number,
  maxPrice: number
): Fashion2Product[] => {
  return products.filter((product) => {
    const categoryMatch =
      category === "All" || product.category === category;
    const subcategoryMatch =
      subcategory === "All" || product.subcategory === subcategory;
    const priceMatch = product.price >= minPrice && product.price <= maxPrice;

    return categoryMatch && subcategoryMatch && priceMatch;
  });
};

// Related products (for product detail page)
export const relatedProducts = fashion2Products.slice(0, 4);

// Sale products (for promotions page)
export const saleProducts = fashion2Products.filter(
  (p) => p.originalPrice !== undefined
);

// Hot deals (for promotions page)
export const hotDeals = fashion2Products.slice(0, 4);

// Product categories for filtering
export const categories = ["All", "Jewelry"] as const;

export const subcategories = [
  "All",
  "Rings",
  "Necklaces",
  "Earrings",
  "Bracelets",
] as const;