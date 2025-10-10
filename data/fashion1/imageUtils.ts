/**
 * Utility functions for generating dynamic fashion product images
 * Uses Unsplash API for high-quality fashion photography
 */

// Unsplash image categories for fashion products
export const FASHION_IMAGE_CATEGORIES = {
  activewear: ["fitness", "yoga", "sportswear", "athletic"],
  tops: ["blouse", "shirt", "top", "fashion"],
  bags: ["handbag", "purse", "bag", "leather-bag"],
  scarves: ["scarf", "accessories", "fashion-accessories"],
  sweaters: ["sweater", "knitwear", "pullover"],
  outerwear: ["jacket", "coat", "outerwear"],
  sets: ["outfit", "fashion-set", "coordinates"],
  traditional: ["traditional-dress", "ethnic-wear", "saree"],
  dresses: ["dress", "gown", "evening-dress", "fashion"],
} as const;

/**
 * Generate Unsplash image URL with specific parameters
 * @param query - Search query for the image
 * @param width - Image width (default: 600)
 * @param height - Image height (default: 800)
 * @param quality - Image quality (default: 80)
 */
export function generateUnsplashUrl(
  query: string,
  width: number = 600,
  height: number = 800,
  quality: number = 80
): string {
  return `https://images.unsplash.com/photo-${query}?w=${width}&h=${height}&fit=crop&q=${quality}`;
}

/**
 * Get a random fashion image URL for a specific category
 * @param category - Product category/subcategory
 */
export function getRandomFashionImage(category: string): string {
  // Predefined high-quality fashion image IDs from Unsplash
  const imagePool: Record<string, string[]> = {
    activewear: [
      "1506629082955-511b1aa562c8",
      "1434389677669-e08b4cac3105",
      "1518611012118-696072aa579a",
    ],
    tops: [
      "1485968579580-b6d095142e6e",
      "1434389677669-e08b4cac3105",
      "1583743814966-8936f5b7be1a",
    ],
    bags: [
      "1584917865442-de89df76afd3",
      "1590874103328-eac38a683ce7",
      "1548036328-c9fa89d128fa",
    ],
    dresses: [
      "1595777457583-95e059d581b8",
      "1566174053879-31528523f8ae",
      "1572804013309-59a88b7e92f1",
      "1515372039744-b8f02a3ae446",
      "1496747611176-843222e1e57c",
    ],
    outerwear: [
      "1551028719-00167b16eac5",
      "1539533113208-f6df8cc8b543",
      "1576995853123-5a10305d93c0",
    ],
    sweaters: ["1583743814966-8936f5b7be1a", "1434389677669-e08b4cac3105"],
    traditional: ["1610030469983-98e550d6193c", "1583391733956-6c78276477e2"],
    scarves: ["1520903920243-00d872a2d1c9"],
    sets: ["1539533018447-63fcce2678e3"],
  };

  const categoryImages = imagePool[category.toLowerCase()] || imagePool.dresses;
  const randomImage =
    categoryImages[Math.floor(Math.random() * categoryImages.length)];

  return generateUnsplashUrl(randomImage);
}

/**
 * Alternative image sources (in case Unsplash is unavailable)
 */
export const ALTERNATIVE_IMAGE_SOURCES = {
  picsum: (width: number = 600, height: number = 800) =>
    `https://picsum.photos/${width}/${height}?random`,
  placeholder: (
    width: number = 600,
    height: number = 800,
    text: string = "Fashion"
  ) =>
    `https://via.placeholder.com/${width}x${height}/000000/FFFFFF/?text=${encodeURIComponent(
      text
    )}`,
};

/**
 * Validate if an image URL is accessible
 * @param url - Image URL to validate
 */
export async function validateImageUrl(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
}
