// Base route for Fashion UI 1
export const FASHION1_BASE_ROUTE = "/fashion1";

// Navigation routes
export const FASHION1_ROUTES = {
  HOME: FASHION1_BASE_ROUTE,
  PRODUCTS: `${FASHION1_BASE_ROUTE}/products`,
  PRODUCT_DETAIL: (id: string) => `${FASHION1_BASE_ROUTE}/product/${id}`,
  CART: `${FASHION1_BASE_ROUTE}/cart`,
  WISHLIST: `${FASHION1_BASE_ROUTE}/wishlist`,
  CHECKOUT: `${FASHION1_BASE_ROUTE}/checkout`,
  REVIEW_ORDER: `${FASHION1_BASE_ROUTE}/review-order`,
  ORDER_CONFIRMED: `${FASHION1_BASE_ROUTE}/order-confirmed`,
  TRACK_ORDER: `${FASHION1_BASE_ROUTE}/track-order`,
  PROMOTIONS: `${FASHION1_BASE_ROUTE}/promotions`,
  FAQ: `${FASHION1_BASE_ROUTE}#faq`,
} as const;

// Coupon codes
export const VALID_COUPONS: Record<string, number> = {
  FASHION10: 10,
  FASHION20: 20,
  EID2025: 15,
};

// Delivery charges
export const DELIVERY_CHARGES = {
  INSIDE_DHAKA: 60,
  OUTSIDE_DHAKA: 120,
} as const;

// FAQ items
export const FAQ_ITEMS = [
  {
    q: "The Order",
    a: "Information about placing and modifying orders. You can place orders through our website by adding items to cart and proceeding to checkout. Orders can be modified within 30 minutes of placement."
  },
  {
    q: "Shipping",
    a: "Standard shipping takes 3-5 business days within Dhaka and 5-7 business days outside Dhaka. Express shipping is available for urgent deliveries."
  },
  {
    q: "Returns, Exchanges And Complaints",
    a: "We accept returns and exchanges within 7 days of delivery. Items must be in original condition with tags attached. Submit complaints through our customer service.",
  },
  {
    q: "Refund Policy",
    a: "Refunds are processed within 7-14 business days after we receive the returned item. Refund will be credited to the original payment method."
  },
  {
    q: "Order Cancellation",
    a: "Orders can be cancelled before shipment. Once shipped, you'll need to follow the return process. Contact customer service for assistance."
  },
  {
    q: "Delivery Time",
    a: "Inside Dhaka: 3-5 business days. Outside Dhaka: 5-7 business days. Express delivery available in 1-2 business days with additional charges."
  },
  {
    q: "Delivery Charge",
    a: `Inside Dhaka: BDT ${DELIVERY_CHARGES.INSIDE_DHAKA}. Outside Dhaka: BDT ${DELIVERY_CHARGES.OUTSIDE_DHAKA}. Free shipping on orders above BDT 5,000.`
  },
  {
    q: "Track Order",
    a: "Track your order using the tracking number sent to your email. Visit the Track Order page and enter your order ID to see real-time updates."
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

// Product sizes
export const PRODUCT_SIZES = ["XS", "S", "M", "L", "XL", "XXL"] as const;

// Product colors (can be expanded)
export const PRODUCT_COLORS = [
  "Black",
  "White",
  "Navy",
  "Gray",
  "Red",
  "Blue",
  "Green",
] as const;
