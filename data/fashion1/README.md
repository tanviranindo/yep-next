# Fashion1 Data Structure

This directory contains all the mock data for the Fashion1 e-commerce template.

## Files

### `products.ts`

Contains the main product catalog with 20 diverse fashion items. Each product includes:

- Unique ID
- Name and description
- High-quality image from Unsplash
- Pricing (current and original)
- Category and subcategory
- Rating and review count
- Availability status

### `constants.ts`

Contains all the constants used throughout the Fashion1 template:

- Routes and navigation
- Coupon codes
- Delivery charges
- FAQ items
- Payment methods
- Product sizes and colors

### `imageUtils.ts`

Utility functions for working with dynamic images:

- Generate Unsplash URLs
- Get random fashion images by category
- Alternative image sources
- Image validation

## Dynamic Images

All product images are sourced from **Unsplash**, a free high-quality image service. The images are:

- Dynamically loaded from the internet
- High resolution (600x800px)
- Optimized for web performance
- Diverse and realistic fashion photography

### Image URLs Format

```
https://images.unsplash.com/photo-{ID}?w=600&h=800&fit=crop&q=80
```

### Benefits

- No need to store images locally
- Always fresh, high-quality content
- Reduces repository size
- Easy to update or change

## Product Categories

### Main Categories

- **Women**: Clothing items for women
- **Accessories**: Bags, scarves, and other accessories

### Subcategories

- Activewear (leggings, yoga pants, tank tops)
- Tops (blouses, shirts)
- Bags (handbags, crossbody bags)
- Scarves (cashmere, silk)
- Sweaters (pullovers, knitwear)
- Outerwear (jackets, coats)
- Sets (coordinated outfits)
- Traditional (sarees, kurtas)
- Dresses (evening gowns, cocktail dresses, casual dresses)

## Adding New Products

To add new products, follow this structure:

```typescript
{
  id: "product-XX",
  name: "Product Name",
  description: "Detailed product description",
  image: "https://images.unsplash.com/photo-{ID}?w=600&h=800&fit=crop",
  url: "/fashion1/product/product-XX",
  price: 3500,
  originalPrice: 5000,
  currency: "BDT",
  availability: "InStock",
  brand: "FASHION.",
  category: "Women",
  subcategory: "Dresses",
  rating: 4.5,
  reviews: 128,
}
```

### Finding Unsplash Images

1. Visit [Unsplash.com](https://unsplash.com)
2. Search for fashion-related terms (e.g., "dress", "jacket", "handbag")
3. Click on an image you like
4. Copy the photo ID from the URL (e.g., `1595777457583-95e059d581b8`)
5. Use the format: `https://images.unsplash.com/photo-{ID}?w=600&h=800&fit=crop`

## Customization

### Changing Currency

Update the `currency` field in each product and adjust prices accordingly.

### Adding Coupons

Add new coupon codes in `constants.ts`:

```typescript
export const VALID_COUPONS: Record<string, number> = {
  NEWCODE: 25, // 25% discount
};
```

### Modifying Delivery Charges

Update in `constants.ts`:

```typescript
export const DELIVERY_CHARGES = {
  INSIDE_DHAKA: 60,
  OUTSIDE_DHAKA: 120,
} as const;
```

## Performance Tips

- Images are loaded lazily by default in Next.js
- Use Next.js Image component for automatic optimization
- Unsplash CDN provides fast global delivery
- Consider adding image caching strategies for production

## Alternative Image Sources

If Unsplash is unavailable, you can use:

- **Pexels**: `https://images.pexels.com/photos/{ID}/...`
- **Pixabay**: `https://pixabay.com/get/{ID}/...`
- **Local images**: Store in `/public/items/` directory

## License

Product data is for demonstration purposes only. Unsplash images are free to use under the [Unsplash License](https://unsplash.com/license).
