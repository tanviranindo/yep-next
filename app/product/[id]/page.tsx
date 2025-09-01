// "use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProductCarousel } from "@/components/product-carousel";
import { ProductImageGallery } from "@/components/product-image-gallery";
import { ProductInfo } from "@/components/product-info";
import { ProductTabs } from "@/components/product-tabs";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const mockProduct = {
  id: "1",
  title: "Drawstring-detail dress",
  price: 3500.0,
  originalPrice: 4000.0,
  rating: 4.5,
  reviewCount: 26,
  description:
    "A beautifully tailored dress that flatters every figure. Perfect for both special occasions and relaxed everyday wear.",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  colors: ["#000000", "#8B4513", "#228B22"],
  inStock: true,
  images: [
    "/woman-in-black-dress-posing.png",
    "/woman-in-black-dress-side-view.png",
    "/woman-in-black-dress-back-view.png",
    "/woman-in-black-dress-detail.png",
  ],
};

const recentlyViewedProducts = [
  {
    id: "2",
    name: "Double-breasted blazer",
    price: 2500.0,
    originalPrice: 3000.0,
    image: "/woman-in-black-blazer.png",
    rating: 4.0,
    reviewCount: 18,
  },
  {
    id: "3",
    name: "Double-breasted blazer",
    price: 2500.0,
    image: "/woman-in-black-dress-elegant.png",
    rating: 4.2,
    reviewCount: 32,
  },
  {
    id: "4",
    name: "Double-breasted blazer",
    price: 2500.0,
    originalPrice: 3000.0,
    image: "/woman-in-black-outfit-posing.png",
    rating: 4.8,
    reviewCount: 45,
  },
  {
    id: "5",
    name: "Double-breasted blazer",
    price: 4000.0,
    image: "/woman-in-colorful-dress.png",
    rating: 4.6,
    reviewCount: 21,
  },
];

const peopleBoughtProducts = [
  {
    id: "6",
    name: "Double-breasted blazer",
    price: 2500.0,
    originalPrice: 3000.0,
    image: "/woman-in-black-blazer.png",
    rating: 4.3,
    reviewCount: 67,
  },
  {
    id: "7",
    name: "Double-breasted blazer",
    price: 2500.0,
    image: "/woman-in-black-dress-elegant.png",
    rating: 4.4,
    reviewCount: 29,
  },
  {
    id: "8",
    name: "Double-breasted blazer",
    price: 2500.0,
    originalPrice: 3000.0,
    image: "/woman-in-black-outfit-posing.png",
    rating: 4.7,
    reviewCount: 84,
  },
  {
    id: "9",
    name: "Double-breasted blazer",
    price: 4000.0,
    image: "/woman-in-colorful-dress.png",
    rating: 4.1,
    reviewCount: 56,
  },
];

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="text-center pt-6 pb-4">
        <nav className="text-sm text-gray-500">
          <span>Home</span> / <span>Activewear</span> /{" "}
          <span>Printed knitwear</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Product Images */}
          <ProductImageGallery
            images={mockProduct.images}
            productName={mockProduct.title}
          />

          {/* Right: Product Info */}
          <ProductInfo
            title={mockProduct.title}
            price={mockProduct.price}
            originalPrice={mockProduct.originalPrice}
            rating={mockProduct.rating}
            reviewCount={mockProduct.reviewCount}
            description={mockProduct.description}
            sizes={mockProduct.sizes}
            colors={mockProduct.colors}
            inStock={mockProduct.inStock}
          />
        </div>
      </div>

      {/* Product Tabs */}
      <div className="border-t border-gray-200">
        <ProductTabs />
      </div>

      {/* Recently Viewed Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductCarousel
          title="Recently Viewed Products"
          products={recentlyViewedProducts}
        />
      </div>

      {/* People Also Bought */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductCarousel
          title="People Also Bought"
          products={peopleBoughtProducts}
        />
      </div>

      <Footer />
    </main>
  );
}
