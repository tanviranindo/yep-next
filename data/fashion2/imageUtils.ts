/**
 * Generate Unsplash image URLs for jewelry products
 * Using high-quality jewelry images from Unsplash
 */
export function getUnsplashImageUrl(
  category: string,
  index: number,
  width: number = 800,
  height: number = 1000
): string {
  // Seed based on category and index for consistent images
  const seed = `${category}-${index}`;

  // Different query terms for different jewelry categories
  const queries: Record<string, string> = {
    ring: "diamond-ring",
    necklace: "gold-necklace",
    earrings: "jewelry-earrings",
    bracelet: "gold-bracelet",
    pendant: "jewelry-pendant",
  };

  const query = queries[category] || "luxury-jewelry";

  // Use Unsplash Source API with specific query
  return `https://source.unsplash.com/${width}x${height}/?${query}&sig=${seed}`;
}

/**
 * Get jewelry hero image
 */
export function getJewelryHeroImage(): string {
  return "https://source.unsplash.com/1920x1080/?luxury-jewelry,diamonds";
}

/**
 * Get category-specific images
 */
export function getCategoryImage(category: string): string {
  const categoryQueries: Record<string, string> = {
    Rings: "diamond-rings",
    Necklaces: "gold-necklace",
    Earrings: "diamond-earrings",
    Bracelets: "luxury-bracelet",
    Pendants: "jewelry-pendant",
  };

  const query = categoryQueries[category] || "jewelry";
  return `https://source.unsplash.com/800x600/?${query}`;
}
