
import { ProductDetails as ProductDetailsType } from '@/data/gadget1/iphone-14-pro-max';

interface ProductDetailsProps {
  details: ProductDetailsType;
}

export function ProductDetails({ details }: ProductDetailsProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{details.title}</h2>
      <p className="text-gray-600 mb-8">{details.description}</p>
      <div className="space-y-6">
        {Object.entries(details.specs).map(([category, specs]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="border-t border-gray-200">
              {Object.entries(specs).map(([key, value]) => (
                <div key={key} className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-500">{key}</span>
                  <span className="text-gray-800 font-medium text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
