import { ComponentRegistry } from "@/lib/variants";

const momKidsRegistry: ComponentRegistry = {
  hero: {
    variant1: {
      component: "MomKidsHero",
      props: { variant: 1 },
      description:
        "Mom & Kids Store hero with product carousel and family theme",
    },
    variant2: {
      component: "MomKidsHero",
      props: { variant: 2 },
      description: "Kids Care hero with image slider and playful design",
    },
  },
  filter: {
    variant1: {
      component: "MomKidsFilter",
      props: { variant: 1 },
      description:
        "Mom & Kids Store filter sidebar with family-friendly categories",
    },
    variant2: {
      component: "MomKidsFilter",
      props: { variant: 2 },
      description:
        "Kids Care filter with playful design and age-based categories",
    },
  },
  footer: {
    variant1: {
      component: "MomKidsFooter",
      props: { variant: 1 },
      description: "Mom & Kids Store footer with family theme and safety info",
    },
    variant2: {
      component: "MomKidsFooter",
      props: { variant: 2 },
      description:
        "Kids Care footer with playful design and parenting resources",
    },
  },
  faq: {
    variant1: {
      component: "MomKidsFAQ",
      props: { variant: 1 },
      description: "Mom & Kids Store FAQ with family support and safety info",
    },
    variant2: {
      component: "MomKidsFAQ",
      props: { variant: 2 },
      description: "Kids Care FAQ with parenting tips and product guidance",
    },
  },
  navbar: {
    variant1: {
      component: "MomKidsNavbar",
      props: { variant: 1 },
      description: "Mom & Kids Store navbar with family categories",
    },
    variant2: {
      component: "MomKidsNavbar",
      props: { variant: 2 },
      description: "Kids Care navbar with playful design",
    },
  },
  productCard: {
    variant1: {
      component: "MomKidsProductCard",
      props: { variant: 1 },
      description: "Mom & Kids Store product card with family-friendly design",
    },
    variant2: {
      component: "MomKidsProductCard",
      props: { variant: 2 },
      description: "Kids Care product card with playful styling",
    },
  },
};

export default momKidsRegistry;
