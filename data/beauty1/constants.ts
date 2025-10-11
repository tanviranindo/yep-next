// Base route for Beauty UI 1 (GLAMOUR - Purple Theme)
export const BEAUTY1_BASE_ROUTE = "/beauty1";

// Navigation routes
export const BEAUTY1_ROUTES = {
  HOME: BEAUTY1_BASE_ROUTE,
  SHOP: `${BEAUTY1_BASE_ROUTE}/shop`,
  PRODUCTS: `${BEAUTY1_BASE_ROUTE}/products`,
  PRODUCT_BASE: `${BEAUTY1_BASE_ROUTE}/product`,
  CART: `${BEAUTY1_BASE_ROUTE}/cart`,
  WISHLIST: `${BEAUTY1_BASE_ROUTE}/wishlist`,
  CHECKOUT: `${BEAUTY1_BASE_ROUTE}/checkout`,
  REVIEW_ORDER: `${BEAUTY1_BASE_ROUTE}/review-order`,
  ORDER_CONFIRMED: `${BEAUTY1_BASE_ROUTE}/order-confirmed`,
  TRACK_ORDER: `${BEAUTY1_BASE_ROUTE}/track-order`,
  PROMOTIONS: `${BEAUTY1_BASE_ROUTE}/promotions`,
  FAQ: `${BEAUTY1_BASE_ROUTE}#faq`,
} as const;

// Helper function for dynamic routes
export const getBeauty1ProductUrl = (id: string) => `${BEAUTY1_BASE_ROUTE}/product/${id}`;

// Coupon codes
export const VALID_COUPONS: Record<string, number> = {
  BEAUTY10: 10,
  BEAUTY20: 20,
  GLAMOUR15: 15,
  GLOW2025: 20,
};

// Delivery charges
export const DELIVERY_CHARGES = {
  INSIDE_DHAKA: 60,
  OUTSIDE_DHAKA: 120,
} as const;

// FAQ items for beauty products
export const FAQ_ITEMS = [
  {
    q: "How do I place an order?",
    a: "Browse our beauty collection, add items to your cart, and proceed to checkout. You can track your order status through our Track Order page after placing your order."
  },
  {
    q: "What are the shipping options?",
    a: "We offer standard shipping within Dhaka (3-5 business days) and outside Dhaka (5-7 business days). Express delivery is available for urgent orders with additional charges."
  },
  {
    q: "What is your return policy?",
    a: "We accept returns within 7 days of delivery for unopened beauty products. Items must be in original condition with seals intact. Contact customer service to initiate a return."
  },
  {
    q: "How do refunds work?",
    a: "Refunds are processed within 7-14 business days after we receive and inspect the returned item. The amount will be credited to your original payment method."
  },
  {
    q: "Can I cancel my order?",
    a: "Orders can be cancelled before shipment. Once your order has been shipped, you'll need to follow the return process. Contact our customer service team for assistance."
  },
  {
    q: "How long does delivery take?",
    a: "Inside Dhaka: 3-5 business days. Outside Dhaka: 5-7 business days. Express delivery available in 1-2 business days with additional charges."
  },
  {
    q: "What are the delivery charges?",
    a: `Inside Dhaka: BDT ${DELIVERY_CHARGES.INSIDE_DHAKA}. Outside Dhaka: BDT ${DELIVERY_CHARGES.OUTSIDE_DHAKA}. Free shipping on orders above BDT 3,000.`
  },
  {
    q: "How can I track my order?",
    a: "Visit the Track Order page and enter your order ID and email address. You'll receive a tracking number via email once your order ships."
  },
];

// Payment methods
export const PAYMENT_METHODS = [
  { id: "bkash", name: "bKash", logo: "🅱️", requiresCardDetails: false },
  { id: "nagad", name: "Nagad", logo: "🅽", requiresCardDetails: false },
  { id: "rocket", name: "Rocket", logo: "🚀", requiresCardDetails: false },
  { id: "mastercard", name: "Mastercard", logo: "💳", requiresCardDetails: true },
  { id: "maestro", name: "Maestro", logo: "💳", requiresCardDetails: true },
  { id: "visa", name: "Visa", logo: "💳", requiresCardDetails: true },
  { id: "cod", name: "Cash on Delivery", logo: "💵", requiresCardDetails: false },
] as const;

// Product sizes for beauty (volume/weight)
export const PRODUCT_SIZES = ["30ml", "50ml", "100ml", "150ml", "200ml", "250ml"] as const;

// Product types
export const PRODUCT_TYPES = [
  "Cream",
  "Serum",
  "Lotion",
  "Oil",
  "Powder",
  "Liquid",
  "Gel",
  "Foam",
] as const;

// Brand theme color
export const BRAND_COLOR = "#842898"; // Purple for GLAMOUR
