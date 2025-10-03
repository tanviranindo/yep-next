import Link from "next/link";

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$99",
      description: "Amazing product description",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$149",
      description: "Another great product",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$199",
      description: "Premium quality product",
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
          {products.map((product) => (
            <div key={product.id} className="card w-full bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.description}</p>
                <div className="text-2xl font-bold text-primary">
                  {product.price}
                </div>
                <div className="card-actions justify-end">
                  <Link
                    href={`/products/${product.id}`}
                    className="btn btn-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
