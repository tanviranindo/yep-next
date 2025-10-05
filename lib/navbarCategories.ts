import { MenuItem } from "@/components/Navbar/MenuBar";

export const fashionCategories: Record<string, MenuItem> = {
  women: {
    label: "Women",
    children: {
      dresses: {
        label: "Dresses",
        children: {
          "evening-dresses": {
            label: "Evening Dresses",
            children: {
              "cocktail-dresses": {
                label: "Cocktail Dresses",
                href: "/fashion1/women/dresses/cocktail",
              },
              "formal-gowns": {
                label: "Formal Gowns",
                href: "/fashion1/women/dresses/formal",
              },
              "black-tie": {
                label: "Black Tie",
                href: "/fashion1/women/dresses/black-tie",
              },
              "red-carpet": {
                label: "Red Carpet",
                href: "/fashion1/women/dresses/red-carpet",
              },
            },
          },
          "casual-dresses": {
            label: "Casual Dresses",
            children: {
              "day-dresses": {
                label: "Day Dresses",
                href: "/fashion1/women/dresses/day",
              },
              "summer-dresses": {
                label: "Summer Dresses",
                href: "/fashion1/women/dresses/summer",
              },
              "work-dresses": {
                label: "Work Dresses",
                href: "/fashion1/women/dresses/work",
              },
              "weekend-dresses": {
                label: "Weekend Dresses",
                href: "/fashion1/women/dresses/weekend",
              },
            },
          },
          "party-dresses": {
            label: "Party Dresses",
            href: "/fashion1/women/dresses/party",
          },
          "maxi-dresses": {
            label: "Maxi Dresses",
            href: "/fashion1/women/dresses/maxi",
          },
        },
      },
      tops: {
        label: "Tops & Blouses",
        children: {
          "t-shirts": {
            label: "T-Shirts",
            href: "/fashion1/women/tops/t-shirts",
          },
          blouses: { label: "Blouses", href: "/fashion1/women/tops/blouses" },
          "tank-tops": {
            label: "Tank Tops",
            href: "/fashion1/women/tops/tank-tops",
          },
          sweaters: { label: "Sweaters", href: "/fashion1/women/tops/sweaters" },
        },
      },
      "pants-jeans": { label: "Pants & Jeans", href: "/fashion1/women/pants" },
      skirts: { label: "Skirts", href: "/fashion1/women/skirts" },
    },
  },
  men: {
    label: "Men",
    children: {
      shirts: {
        label: "Shirts",
        children: {
          "dress-shirts": {
            label: "Dress Shirts",
            href: "/fashion1/men/shirts/dress",
          },
          "casual-shirts": {
            label: "Casual Shirts",
            href: "/fashion1/men/shirts/casual",
          },
          "polo-shirts": {
            label: "Polo Shirts",
            href: "/fashion1/men/shirts/polo",
          },
          "button-downs": {
            label: "Button Downs",
            href: "/fashion1/men/shirts/button-downs",
          },
        },
      },
      "t-shirts": { label: "T-Shirts", href: "/fashion1/men/t-shirts" },
      "pants-jeans": { label: "Pants & Jeans", href: "/fashion1/men/pants" },
      jackets: { label: "Jackets", href: "/fashion1/men/jackets" },
    },
  },
  accessories: {
    label: "Accessories",
    children: {
      bags: {
        label: "Bags",
        children: {
          handbags: {
            label: "Handbags",
            children: {
              "designer-bags": {
                label: "Designer Bags",
                href: "/fashion1/accessories/bags/designer",
              },
              "leather-bags": {
                label: "Leather Bags",
                href: "/fashion1/accessories/bags/leather",
              },
              "clutch-bags": {
                label: "Clutch Bags",
                href: "/fashion1/accessories/bags/clutch",
              },
              "shoulder-bags": {
                label: "Shoulder Bags",
                href: "/fashion1/accessories/bags/shoulder",
              },
            },
          },
          "tote-bags": {
            label: "Tote Bags",
            href: "/fashion1/accessories/bags/tote",
          },
          "crossbody-bags": {
            label: "Crossbody Bags",
            href: "/fashion1/accessories/bags/crossbody",
          },
          backpacks: {
            label: "Backpacks",
            href: "/fashion1/accessories/bags/backpacks",
          },
        },
      },
      shoes: {
        label: "Shoes",
        children: {
          sneakers: {
            label: "Sneakers",
            children: {
              "running-shoes": {
                label: "Running Shoes",
                href: "/fashion1/accessories/shoes/sneakers/running",
              },
              "basketball-shoes": {
                label: "Basketball Shoes",
                href: "/fashion1/accessories/shoes/sneakers/basketball",
              },
              "lifestyle-sneakers": {
                label: "Lifestyle Sneakers",
                href: "/fashion1/accessories/shoes/sneakers/lifestyle",
              },
              "high-top-sneakers": {
                label: "High-Top Sneakers",
                href: "/fashion1/accessories/shoes/sneakers/high-top",
              },
            },
          },
          heels: { label: "Heels", href: "/fashion1/accessories/shoes/heels" },
          boots: { label: "Boots", href: "/fashion1/accessories/shoes/boots" },
          flats: { label: "Flats", href: "/fashion1/accessories/shoes/flats" },
        },
      },
      jewelry: { label: "Jewelry", href: "/fashion1/accessories/jewelry" },
    },
  },
};

export const beautyCategories: Record<string, MenuItem> = {
  skincare: {
    label: "Skincare",
    children: {
      "face-care": {
        label: "Face Care",
        children: {
          cleansers: {
            label: "Cleansers",
            href: "/beauty/skincare/face/cleansers",
          },
          moisturizers: {
            label: "Moisturizers",
            href: "/beauty/skincare/face/moisturizers",
          },
          serums: { label: "Serums", href: "/beauty/skincare/face/serums" },
          "eye-care": {
            label: "Eye Care",
            href: "/beauty/skincare/face/eye-care",
          },
        },
      },
      "body-care": {
        label: "Body Care",
        children: {
          "body-lotions": {
            label: "Body Lotions",
            href: "/beauty/skincare/body/lotions",
          },
          "body-washes": {
            label: "Body Washes",
            href: "/beauty/skincare/body/washes",
          },
          "hand-care": {
            label: "Hand Care",
            href: "/beauty/skincare/body/hand-care",
          },
          "foot-care": {
            label: "Foot Care",
            href: "/beauty/skincare/body/foot-care",
          },
        },
      },
      "sun-care": { label: "Sun Care", href: "/beauty/skincare/sun-care" },
      "anti-aging": {
        label: "Anti-Aging",
        href: "/beauty/skincare/anti-aging",
      },
    },
  },
  makeup: {
    label: "Makeup",
    children: {
      "face-makeup": {
        label: "Face Makeup",
        children: {
          foundation: {
            label: "Foundation",
            href: "/beauty/makeup/face/foundation",
          },
          concealer: {
            label: "Concealer",
            href: "/beauty/makeup/face/concealer",
          },
          powder: { label: "Powder", href: "/beauty/makeup/face/powder" },
          blush: { label: "Blush", href: "/beauty/makeup/face/blush" },
        },
      },
      "eye-makeup": {
        label: "Eye Makeup",
        children: {
          "eye-shadow": {
            label: "Eye Shadow",
            href: "/beauty/makeup/eyes/shadow",
          },
          mascara: { label: "Mascara", href: "/beauty/makeup/eyes/mascara" },
          eyeliner: { label: "Eyeliner", href: "/beauty/makeup/eyes/eyeliner" },
          "eye-brow": { label: "Eye Brow", href: "/beauty/makeup/eyes/brow" },
        },
      },
      "lip-makeup": {
        label: "Lip Makeup",
        children: {
          lipstick: { label: "Lipstick", href: "/beauty/makeup/lips/lipstick" },
          "lip-gloss": {
            label: "Lip Gloss",
            href: "/beauty/makeup/lips/gloss",
          },
          "lip-liner": {
            label: "Lip Liner",
            href: "/beauty/makeup/lips/liner",
          },
          "lip-balm": { label: "Lip Balm", href: "/beauty/makeup/lips/balm" },
        },
      },
    },
  },
  fragrance: {
    label: "Fragrance",
    children: {
      "women-fragrance": {
        label: "Women's Fragrance",
        href: "/beauty/fragrance/women",
      },
      "men-fragrance": {
        label: "Men's Fragrance",
        href: "/beauty/fragrance/men",
      },
      "unisex-fragrance": {
        label: "Unisex Fragrance",
        href: "/beauty/fragrance/unisex",
      },
      "home-fragrance": {
        label: "Home Fragrance",
        href: "/beauty/fragrance/home",
      },
    },
  },
  "hair-care": {
    label: "Hair Care",
    children: {
      shampoo: { label: "Shampoo", href: "/beauty/hair/shampoo" },
      conditioner: { label: "Conditioner", href: "/beauty/hair/conditioner" },
      "hair-treatments": {
        label: "Hair Treatments",
        href: "/beauty/hair/treatments",
      },
      "styling-products": {
        label: "Styling Products",
        href: "/beauty/hair/styling",
      },
    },
  },
};

export const gadgetsCategories: Record<string, MenuItem> = {
  phones: {
    label: "Phones",
    children: {
      smartphones: {
        label: "Smartphones",
        children: {
          iphone: {
            label: "iPhone",
            href: "/gadgets/phones/smartphones/iphone",
          },
          samsung: {
            label: "Samsung",
            href: "/gadgets/phones/smartphones/samsung",
          },
          "google-pixel": {
            label: "Google Pixel",
            href: "/gadgets/phones/smartphones/google-pixel",
          },
          oneplus: {
            label: "OnePlus",
            href: "/gadgets/phones/smartphones/oneplus",
          },
        },
      },
      "basic-phones": { label: "Basic Phones", href: "/gadgets/phones/basic" },
      accessories: {
        label: "Phone Accessories",
        href: "/gadgets/phones/accessories",
      },
    },
  },
  laptops: {
    label: "Laptops",
    children: {
      "business-laptops": {
        label: "Business Laptops",
        href: "/gadgets/laptops/business",
      },
      "gaming-laptops": {
        label: "Gaming Laptops",
        href: "/gadgets/laptops/gaming",
      },
      ultrabooks: { label: "Ultrabooks", href: "/gadgets/laptops/ultrabooks" },
      chromebooks: {
        label: "Chromebooks",
        href: "/gadgets/laptops/chromebooks",
      },
    },
  },
  audio: {
    label: "Audio",
    children: {
      headphones: {
        label: "Headphones",
        children: {
          "over-ear": {
            label: "Over-Ear",
            href: "/gadgets/audio/headphones/over-ear",
          },
          "on-ear": {
            label: "On-Ear",
            href: "/gadgets/audio/headphones/on-ear",
          },
          "in-ear": {
            label: "In-Ear",
            href: "/gadgets/audio/headphones/in-ear",
          },
          wireless: {
            label: "Wireless",
            href: "/gadgets/audio/headphones/wireless",
          },
        },
      },
      speakers: { label: "Speakers", href: "/gadgets/audio/speakers" },
      earbuds: { label: "Earbuds", href: "/gadgets/audio/earbuds" },
    },
  },
  gaming: {
    label: "Gaming",
    children: {
      "gaming-consoles": {
        label: "Gaming Consoles",
        href: "/gadgets/gaming/consoles",
      },
      "gaming-accessories": {
        label: "Gaming Accessories",
        href: "/gadgets/gaming/accessories",
      },
      "pc-gaming": { label: "PC Gaming", href: "/gadgets/gaming/pc" },
      "mobile-gaming": {
        label: "Mobile Gaming",
        href: "/gadgets/gaming/mobile",
      },
    },
  },
};

export const furnitureCategories: Record<string, MenuItem> = {
  "living-room": {
    label: "Living Room",
    children: {
      sofas: {
        label: "Sofas",
        children: {
          "sectional-sofas": {
            label: "Sectional Sofas",
            href: "/furniture/living-room/sofas/sectional",
          },
          loveseats: {
            label: "Loveseats",
            href: "/furniture/living-room/sofas/loveseats",
          },
          recliners: {
            label: "Recliners",
            href: "/furniture/living-room/sofas/recliners",
          },
          futons: {
            label: "Futons",
            href: "/furniture/living-room/sofas/futons",
          },
        },
      },
      "coffee-tables": {
        label: "Coffee Tables",
        href: "/furniture/living-room/coffee-tables",
      },
      "tv-stands": {
        label: "TV Stands",
        href: "/furniture/living-room/tv-stands",
      },
      bookshelves: {
        label: "Bookshelves",
        href: "/furniture/living-room/bookshelves",
      },
    },
  },
  bedroom: {
    label: "Bedroom",
    children: {
      beds: {
        label: "Beds",
        children: {
          "platform-beds": {
            label: "Platform Beds",
            href: "/furniture/bedroom/beds/platform",
          },
          "storage-beds": {
            label: "Storage Beds",
            href: "/furniture/bedroom/beds/storage",
          },
          "upholstered-beds": {
            label: "Upholstered Beds",
            href: "/furniture/bedroom/beds/upholstered",
          },
          "metal-beds": {
            label: "Metal Beds",
            href: "/furniture/bedroom/beds/metal",
          },
        },
      },
      dressers: { label: "Dressers", href: "/furniture/bedroom/dressers" },
      nightstands: {
        label: "Nightstands",
        href: "/furniture/bedroom/nightstands",
      },
      wardrobes: { label: "Wardrobes", href: "/furniture/bedroom/wardrobes" },
    },
  },
  kitchen: {
    label: "Kitchen",
    children: {
      "dining-tables": {
        label: "Dining Tables",
        href: "/furniture/kitchen/dining-tables",
      },
      "dining-chairs": {
        label: "Dining Chairs",
        href: "/furniture/kitchen/dining-chairs",
      },
      "kitchen-islands": {
        label: "Kitchen Islands",
        href: "/furniture/kitchen/islands",
      },
      "bar-stools": {
        label: "Bar Stools",
        href: "/furniture/kitchen/bar-stools",
      },
    },
  },
  office: {
    label: "Office",
    children: {
      desks: { label: "Desks", href: "/furniture/office/desks" },
      "office-chairs": {
        label: "Office Chairs",
        href: "/furniture/office/chairs",
      },
      "filing-cabinets": {
        label: "Filing Cabinets",
        href: "/furniture/office/filing-cabinets",
      },
      bookcases: { label: "Bookcases", href: "/furniture/office/bookcases" },
    },
  },
};

export const kidsMomCategories: Record<string, MenuItem> = {
  "baby-care": {
    label: "Baby Care",
    children: {
      feeding: {
        label: "Feeding",
        children: {
          "baby-bottles": {
            label: "Baby Bottles",
            href: "/kids-mom/baby-care/feeding/bottles",
          },
          "sippy-cups": {
            label: "Sippy Cups",
            href: "/kids-mom/baby-care/feeding/sippy-cups",
          },
          "high-chairs": {
            label: "High Chairs",
            href: "/kids-mom/baby-care/feeding/high-chairs",
          },
          bibs: { label: "Bibs", href: "/kids-mom/baby-care/feeding/bibs" },
        },
      },
      diapering: { label: "Diapering", href: "/kids-mom/baby-care/diapering" },
      bathing: { label: "Bathing", href: "/kids-mom/baby-care/bathing" },
      sleeping: { label: "Sleeping", href: "/kids-mom/baby-care/sleeping" },
    },
  },
  "kids-clothing": {
    label: "Kids Clothing",
    children: {
      "boys-clothing": {
        label: "Boys Clothing",
        href: "/kids-mom/kids-clothing/boys",
      },
      "girls-clothing": {
        label: "Girls Clothing",
        href: "/kids-mom/kids-clothing/girls",
      },
      "baby-clothing": {
        label: "Baby Clothing",
        href: "/kids-mom/kids-clothing/baby",
      },
      "unisex-clothing": {
        label: "Unisex Clothing",
        href: "/kids-mom/kids-clothing/unisex",
      },
    },
  },
  toys: {
    label: "Toys",
    children: {
      "educational-toys": {
        label: "Educational Toys",
        href: "/kids-mom/toys/educational",
      },
      "outdoor-toys": { label: "Outdoor Toys", href: "/kids-mom/toys/outdoor" },
      "building-toys": {
        label: "Building Toys",
        href: "/kids-mom/toys/building",
      },
      dolls: { label: "Dolls", href: "/kids-mom/toys/dolls" },
    },
  },
  maternity: {
    label: "Maternity",
    children: {
      "maternity-clothing": {
        label: "Maternity Clothing",
        href: "/kids-mom/maternity/clothing",
      },
      "nursing-bras": {
        label: "Nursing Bras",
        href: "/kids-mom/maternity/nursing-bras",
      },
      "maternity-accessories": {
        label: "Maternity Accessories",
        href: "/kids-mom/maternity/accessories",
      },
      "pregnancy-care": {
        label: "Pregnancy Care",
        href: "/kids-mom/maternity/care",
      },
    },
  },
};

export const getCategoriesByTheme = (
  theme: string
): Record<string, MenuItem> => {
  switch (theme) {
    case "fashion":
      return fashionCategories;
    case "beauty":
      return beautyCategories;
    case "gadgets":
      return gadgetsCategories;
    case "furniture":
      return furnitureCategories;
    case "kids-mom":
      return kidsMomCategories;
    default:
      return fashionCategories;
  }
};
