import Link from "next/link";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const productData = {
    1: {
      name: "Product 1",
      price: "$99",
      description: "Amazing product with great features.",
    },
    2: {
      name: "Product 2",
      price: "$149",
      description: "Another great product with premium quality.",
    },
    3: {
      name: "Product 3",
      price: "$199",
      description: "Premium quality product with excellent durability.",
    },
  };

  const product = productData[id as "1" | "2" | "3"] || {
    name: "Product Not Found",
    price: "N/A",
    description: "This product does not exist.",
  };

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
              <Link href="/products">← Back to Products</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full px-4 py-8">
        <div className="card w-full bg-base-200 shadow-xl">
          <div className="card-body">
            <h1 className="card-title text-3xl">{product.name}</h1>
            <p className="text-lg py-4">{product.description}</p>
            <div className="text-4xl font-bold text-primary mb-4">
              {product.price}
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Add to Cart</button>
              <button className="btn btn-secondary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
