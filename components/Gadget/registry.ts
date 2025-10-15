import { ComponentRegistry } from "@/lib/variants";

const gadgetRegistry: ComponentRegistry = {
  hero: {
    variant1: {
      component: "GadgetHero",
      props: { variant: 1 },
      description: "Gadget Store hero with product carousel and social icons",
    },
    variant2: {
      component: "GadgetHero",
      props: { variant: 2 },
      description: "TechHub hero with image slider and modern design",
    },
  },
  filter: {
    variant1: {
      component: "GadgetFilter",
      props: { variant: 1 },
      description: "Gadget Store filter sidebar with collapsible sections",
    },
    variant2: {
      component: "GadgetFilter",
      props: { variant: 2 },
      description: "TechHub filter with modern card-based design",
    },
  },
  footer: {
    variant1: {
      component: "GadgetFooter",
      props: { variant: 1 },
      description: "Gadget Store footer with tech theme and brand showcase",
    },
    variant2: {
      component: "GadgetFooter",
      props: { variant: 2 },
      description: "TechHub footer with modern design and tech updates",
    },
  },
  faq: {
    variant1: {
      component: "GadgetFAQ",
      props: { variant: 1 },
      description:
        "Gadget Store FAQ with collapsible list and tech support CTA",
    },
    variant2: {
      component: "GadgetFAQ",
      props: { variant: 2 },
      description: "TechHub FAQ with tech support methods sidebar",
    },
  },
  navbar: {
    variant1: {
      component: "GadgetNavbar",
      props: { variant: 1 },
      description: "Gadget Store navbar with tech categories",
    },
    variant2: {
      component: "GadgetNavbar",
      props: { variant: 2 },
      description: "TechHub navbar with modern design",
    },
  },
  productCard: {
    variant1: {
      component: "GadgetProductCard",
      props: { variant: 1 },
      description: "Gadget Store product card with clean design",
    },
    variant2: {
      component: "GadgetProductCard",
      props: { variant: 2 },
      description: "TechHub product card with modern styling",
    },
  },
};

export default gadgetRegistry;
