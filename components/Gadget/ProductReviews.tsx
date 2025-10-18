
import { ProductReview, ProductReviews as ProductReviewsType } from '@/data/gadget1/iphone-14-pro-max';

interface ProductReviewsProps {
  reviews: ProductReviewsType;
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.561-.955L10 0l2.95 5.955 6.561.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
      {halfStar && (
        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.561-.955L10 0l2.95 5.955 6.561.955-4.756 4.635 1.123 6.545z" />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.561-.955L10 0l2.95 5.955 6.561.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
}

export function ProductReviews({ reviews }: ProductReviewsProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <div className="flex items-center gap-4 mb-8">
        <div className="text-5xl font-bold">{reviews.average.toFixed(1)}</div>
        <div>
          <StarRating rating={reviews.average} />
          <p className="text-gray-500">of {reviews.total} reviews</p>
        </div>
      </div>
      <div className="space-y-8">
        {reviews.items.map((review) => (
          <div key={review.id} className="flex gap-4">
            <img src={review.user.avatar} alt={review.user.name} className="w-12 h-12 rounded-full" />
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">{review.user.name}</h4>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-gray-500 text-sm">{review.date}</p>
              <p className="mt-2 text-gray-700">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="btn btn-outline">View More</button>
      </div>
    </div>
  );
}
