"use client";

import type { Product } from "@/components/ProductCard";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function ProductsPage() {
  const products: Product[] = [
    {
      id: "1",
      name: "Product 1",
      description: "Amazing product description",
      image: "/items/product1.png",
      url: "/products/1",
      price: 99,
      currency: "USD",
    },
    {
      id: "2",
      name: "Product 2",
      description: "Another great product",
      image: "/items/product1.png",
      url: "/products/2",
      price: 149,
      currency: "USD",
    },
    {
      id: "3",
      name: "Product 3",
      description: "Premium quality product",
      image: "/items/product1.png",
      url: "/products/3",
      price: 199,
      currency: "USD",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      <div className="navbar bg-base-200">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            Yep Next
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/landing">Landing</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} variant={4} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
