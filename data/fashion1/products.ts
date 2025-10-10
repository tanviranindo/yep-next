import { Product } from "@/components/ProductCard";

export const fashionProducts: Product[] = [
  {
    id: "product-1",
    name: "Ravendale Super High Waist Legging",
    description: "Premium quality leggings with super high waist design for ultimate comfort and style",
    image: "/items/product1.jpg",
    url: "/fashion1/product/product-1",
    price: 3500,
    originalPrice: 5000,
    currency: "BDT",
    availability: "InStock",
    brand: "FASHION.",
    category: "Women",
    subcategory: "Activewear",
    rating: 4.5,
    reviews: 128,
  },
  {
    id: "product-2",
    name: "Era Low Performance Tank top",
    description: "Breathable tank top perfect for workouts and casual wear",
    image: "/items/product1.jpg",
    url: "/fashion1/product/product-2",
    price: 4500,
    originalPrice: 6000,
    currency: "BDT",
    availability: "InStock",
    brand: "FASHION.",
    category: "Women",
    subcategory: "Tops",
    rating: 4.2,
    reviews: 95,
  },
  {
    id: "product-3",
    name: "Women Bag",
    description: "Elegant and spacious bag for everyday use",
    image: "/items/product1.jpg",
    url: "/fashion1/product/product-3",
    price: 2500,
    originalPrice: 4000,
    currency: "BDT",
    availability: "InStock",
    brand: "FASHION.",
    category: "Accessories",
    subcategory: "Bags",
    rating: 4.8,
    reviews: 210,
  },
  {
    id: "product-4",
    name: "Ultimate Knots Pullover Crew",
    description: "Cozy pullover with unique knot design",
    image: "/items/product1.jpg",
    url: "/fashion1/product/product-4",
    price: 3200,
    originalPrice: 5000,
    currency: "BDT",
    availability: "InStock",
    brand: "FASHION.",
    category: "Women",
    subcategory: "Sweaters",
    rating: 4.6,
    reviews: 156,
  },
  {
    id: "product-5",
    name: "Bomber Jacket",
    description: "Classic bomber jacket with modern styling",
    image: "/items/product1.jpg",
    url: "/fashion1/product/product-5",
    price: 2500,
    originalPrice: 4500,
    currency: "BDT",
    availability: "InStock",
    brand: "FASHION.",
    category: "Women",
    subcategory: "Outerwear",
    rating: 4.4,
    reviews: 87,
  },
  {
    id: "product-6",
    name: "Anorak Set Blue",
    description: "Complete anorak set in beautiful blue color",
    image: "/items/product1.jpg",
    url: "/fashion1/product/product-6",
    price: 3500,
    originalPrice: 5500,
    currency: "BDT",
    availability: "InStock",
    brand: "FASHION.",
    category: "Women",
    subcategory: "Sets",
    rating: 4.7,
    reviews: 143,
  },
  {
    id: "product-7",
    name: "Fancy Saree",
    description: "Traditional saree with modern embellishments",
    image: "/items/product1.jpg",
    url: "/fashion1/product/product-7",
    price: 4500,
    originalPrice: 7000,
    currency: "BDT",
    availability: "InStock",
    brand: "FASHION.",
    category: "Women",
    subcategory: "Traditional",
    rating: 4.9,
    reviews: 234,
  },
  {
    id: "product-8",
    name: "Kurta",
    description: "Elegant kurta for festive occasions",
    image: "/items/product1.jpg",
    url: "/fashion1/product/product-8",
    price: 2800,
    originalPrice: 4200,
    currency: "BDT",
    availability: "InStock",
    brand: "FASHION.",
    category: "Women",
    subcategory: "Traditional",
    rating: 4.3,
    reviews: 102,
  },
  {
    id: "product-9",
    name: "Black Dress",
    description: "Timeless black dress for any occasion",
    image: "/items/product1.jpg",
    url: "/fashion1/product/product-9",
    price: 2500,
    originalPrice: 3500,
    currency: "BDT",
    availability: "InStock",
    brand: "FASHION.",
    category: "Women",
    subcategory: "Dresses",
    rating: 4.6,
    reviews: 189,
  },
  {
    id: "product-10",
    name: "Evening Gown",
    description: "Stunning evening gown for special events",
    image: "/items/product1.jpg",
    url: "/fashion1/product/product-10",
    price: 3500,
    originalPrice: 4500,
    currency: "BDT",
    availability: "InStock",
    brand: "FASHION.",
    category: "Women",
    subcategory: "Dresses",
    rating: 4.8,
    reviews: 167,
  },
  {
    id: "product-11",
    name: "Cocktail Dress",
    description: "Chic cocktail dress perfect for parties",
    image: "/items/product1.jpg",
    url: "/fashion1/product/product-11",
    price: 4500,
    originalPrice: 5500,
    currency: "BDT",
    availability: "InStock",
    brand: "FASHION.",
    category: "Women",
    subcategory: "Dresses",
    rating: 4.7,
    reviews: 145,
  },
  {
    id: "product-12",
    name: "Party Dress",
    description: "Vibrant party dress to stand out",
    image: "/items/product1.jpg",
    url: "/fashion1/product/product-12",
    price: 3200,
    originalPrice: 4200,
    currency: "BDT",
    availability: "InStock",
    brand: "FASHION.",
    category: "Women",
    subcategory: "Dresses",
    rating: 4.5,
    reviews: 121,
  },
];

export const saleProducts = fashionProducts.slice(0, 8);
export const hotDeals = fashionProducts.slice(4, 8);
export const relatedProducts = fashionProducts.slice(8, 12);

// Product categories for filtering
export const categories = [
  "All",
  "Women",
  "Accessories",
] as const;

export const subcategories = [
  "All",
  "Activewear",
  "Tops",
  "Bags",
  "Sweaters",
  "Outerwear",
  "Sets",
  "Traditional",
  "Dresses",
] as const;

// Sort options
export const sortOptions = [
  { value: "popularity", label: "Popularity" },
  { value: "price-low-high", label: "Price: Low to High" },
  { value: "price-high-low", label: "Price: High to Low" },
  { value: "newest", label: "Newest" },
  { value: "rating", label: "Rating" },
] as const;

// Get product by ID
export function getProductById(id: string): Product | undefined {
  return fashionProducts.find((p) => p.id === id);
}

// Filter products
export function filterProducts(
  products: Product[],
  category?: string,
  subcategory?: string,
  minPrice?: number,
  maxPrice?: number
): Product[] {
  return products.filter((product) => {
    if (category && category !== "All" && product.category !== category) {
      return false;
    }
    if (subcategory && subcategory !== "All" && product.subcategory !== subcategory) {
      return false;
    }
    if (minPrice !== undefined && product.price < minPrice) {
      return false;
    }
    if (maxPrice !== undefined && product.price > maxPrice) {
      return false;
    }
    return true;
  });
}

// Sort products
export function sortProducts(products: Product[], sortBy: string): Product[] {
  const sorted = [...products];

  switch (sortBy) {
    case "price-low-high":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-high-low":
      return sorted.sort((a, b) => b.price - a.price);
    case "rating":
      return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    case "newest":
      return sorted.reverse();
    case "popularity":
    default:
      return sorted.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
  }
}
