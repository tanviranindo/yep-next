// Base route for Furniture UI 1
export const FURNITURE1_BASE_ROUTE = "/furniture1";

// Navigation routes
export const FURNITURE1_ROUTES = {
  HOME: FURNITURE1_BASE_ROUTE,
  SHOP: `${FURNITURE1_BASE_ROUTE}/shop`,
  PRODUCTS: `${FURNITURE1_BASE_ROUTE}/products`,
  PRODUCT_BASE: `${FURNITURE1_BASE_ROUTE}/product`,
  CART: `${FURNITURE1_BASE_ROUTE}/cart`,
  WISHLIST: `${FURNITURE1_BASE_ROUTE}/wishlist`,
  CHECKOUT: `${FURNITURE1_BASE_ROUTE}/checkout`,
  REVIEW_ORDER: `${FURNITURE1_BASE_ROUTE}/review-order`,
  ORDER_CONFIRMED: `${FURNITURE1_BASE_ROUTE}/order-confirmed`,
  TRACK_ORDER: `${FURNITURE1_BASE_ROUTE}/track-order`,
  PROMOTIONS: `${FURNITURE1_BASE_ROUTE}/promotions`,
  FAQ: `${FURNITURE1_BASE_ROUTE}#faq`,
} as const;

// Helper function for dynamic routes
export const getFurniture1ProductUrl = (id: string) => `${FURNITURE1_BASE_ROUTE}/product/${id}`;

// Coupon codes
export const VALID_COUPONS: Record<string, number> = {
  FURNITURE10: 10,
  FURNITURE20: 20,
  HOME2025: 15,
};

// Delivery charges
export const DELIVERY_CHARGES = {
  INSIDE_DHAKA: 100,
  OUTSIDE_DHAKA: 200,
} as const;

// FAQ items
export const FAQ_ITEMS = [
  {
    q: "The Order",
    a: "Information about placing and modifying orders. You can place orders through our website by adding items to cart and proceeding to checkout. Orders can be modified within 30 minutes of placement."
  },
  {
    q: "Shipping & Delivery",
    a: "Standard delivery takes 5-7 business days within Dhaka and 7-10 business days outside Dhaka. Express delivery is available for urgent orders with additional charges. Large furniture items require special delivery arrangements."
  },
  {
    q: "Returns, Exchanges And Complaints",
    a: "We accept returns and exchanges within 7 days of delivery. Items must be in original condition and packaging. For furniture, we conduct quality inspection before pickup. Submit complaints through our customer service."
  },
  {
    q: "Refund Policy",
    a: "Refunds are processed within 10-14 business days after we receive and inspect the returned item. Refund will be credited to the original payment method."
  },
  {
    q: "Order Cancellation",
    a: "Orders can be cancelled before manufacturing/shipment. Once processing starts, you'll need to follow the return process after delivery. Contact customer service for assistance."
  },
  {
    q: "Delivery Time",
    a: "Inside Dhaka: 5-7 business days. Outside Dhaka: 7-10 business days. Custom-made furniture may take 15-20 business days. Express delivery available with additional charges."
  },
  {
    q: "Delivery Charge",
    a: `Inside Dhaka: BDT ${DELIVERY_CHARGES.INSIDE_DHAKA}. Outside Dhaka: BDT ${DELIVERY_CHARGES.OUTSIDE_DHAKA}. Free shipping on orders above BDT 50,000. Large items may have additional charges.`
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
