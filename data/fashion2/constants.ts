// Base route for Fashion UI 2
export const FASHION2_BASE_ROUTE = "/fashion2";

// Navigation routes
export const FASHION2_ROUTES = {
  HOME: FASHION2_BASE_ROUTE,
  SHOP: `${FASHION2_BASE_ROUTE}/shop`,
  PRODUCTS: `${FASHION2_BASE_ROUTE}/products`,
  PRODUCT_BASE: `${FASHION2_BASE_ROUTE}/product`,
  CART: `${FASHION2_BASE_ROUTE}/cart`,
  WISHLIST: `${FASHION2_BASE_ROUTE}/wishlist`,
  CHECKOUT: `${FASHION2_BASE_ROUTE}/checkout`,
  REVIEW_ORDER: `${FASHION2_BASE_ROUTE}/review-order`,
  ORDER_CONFIRMED: `${FASHION2_BASE_ROUTE}/order-confirmed`,
  TRACK_ORDER: `${FASHION2_BASE_ROUTE}/track-order`,
  PROMOTIONS: `${FASHION2_BASE_ROUTE}/promotions`,
  FAQ: `${FASHION2_BASE_ROUTE}#faq`,
} as const;

// Helper function for dynamic routes
export const getFashion2ProductUrl = (id: string) =>
  `${FASHION2_BASE_ROUTE}/product/${id}`;

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
    q: "What is your return policy?",
    a: "We offer a 30-day return policy for all unworn items with original tags. Simply contact our customer service team to initiate a return.",
  },
  {
    q: "How long does shipping take?",
    a: "Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business day delivery.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes, we ship to over 50 countries worldwide. International shipping times vary by location.",
  },
  {
    q: "How can I track my order?",
    a: "Once your order ships, you'll receive a tracking number via email that you can use to monitor your delivery.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, PayPal, and various digital payment methods.",
  },
  {
    q: "Are your products authentic?",
    a: "Yes, all our jewelry is 100% authentic and comes with a certificate of authenticity.",
  },
];

// Payment methods
export const PAYMENT_METHODS = [
  { id: "bkash", name: "bKash", logo: "🅱️", requiresCardDetails: false },
  { id: "nagad", name: "Nagad", logo: "🅽", requiresCardDetails: false },
  { id: "rocket", name: "Rocket", logo: "🚀", requiresCardDetails: false },
  {
    id: "mastercard",
    name: "Mastercard",
    logo: "💳",
    requiresCardDetails: true,
  },
  { id: "maestro", name: "Maestro", logo: "💳", requiresCardDetails: true },
  { id: "visa", name: "Visa", logo: "💳", requiresCardDetails: true },
  {
    id: "cod",
    name: "Cash on Delivery",
    logo: "💵",
    requiresCardDetails: false,
  },
] as const;
