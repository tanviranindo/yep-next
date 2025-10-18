
export function RelatedProducts() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Placeholder for related products */}
        <div className="border p-4 rounded-lg">
          <div className="bg-gray-200 h-48 rounded-lg"></div>
          <h3 className="mt-4 text-lg font-semibold">Related Product 1</h3>
          <p className="text-gray-500">$99.99</p>
        </div>
        <div className="border p-4 rounded-lg">
          <div className="bg-gray-200 h-48 rounded-lg"></div>
          <h3 className="mt-4 text-lg font-semibold">Related Product 2</h3>
          <p className="text-gray-500">$129.99</p>
        </div>
        <div className="border p-4 rounded-lg">
          <div className="bg-gray-200 h-48 rounded-lg"></div>
          <h3 className="mt-4 text-lg font-semibold">Related Product 3</h3>
          <p className="text-gray-500">$149.99</p>
        </div>
        <div className="border p-4 rounded-lg">
          <div className="bg-gray-200 h-48 rounded-lg"></div>
          <h3 className="mt-4 text-lg font-semibold">Related Product 4</h3>
          <p className="text-gray-500">$199.99</p>
        </div>
      </div>
    </div>
  );
}
