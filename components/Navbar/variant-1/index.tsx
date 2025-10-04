"use client";

// Fashion Navbar - Responsive design matching mobile and desktop references
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FiChevronDown,
  FiChevronRight,
  FiHeart,
  FiMenu,
  FiSearch,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";

export default function FashionNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false);
  const [isWomenOpen, setIsWomenOpen] = useState(false);
  const [isMenOpen, setIsMenOpen] = useState(false);
  const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false);
  const [isMobileWomenOpen, setIsMobileWomenOpen] = useState(false);
  const [isMobileMenOpen, setIsMobileMenOpen] = useState(false);
  const [isMobileAccessoriesOpen, setIsMobileAccessoriesOpen] = useState(false);

  // Dynamic menu state management
  const [openMenus, setOpenMenus] = useState<Set<string>>(new Set());

  // Helper functions for dynamic menu management
  const toggleMenu = (menuId: string) => {
    setOpenMenus((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(menuId)) {
        newSet.delete(menuId);
        // Close all child menus when parent is closed
        const childMenus = Array.from(prev).filter((id) =>
          id.startsWith(menuId + "-")
        );
        childMenus.forEach((childId) => newSet.delete(childId));
      } else {
        newSet.add(menuId);
      }
      return newSet;
    });
  };

  const isMenuOpen = (menuId: string) => openMenus.has(menuId);

  const closeAllMenus = () => {
    setOpenMenus(new Set());
  };

  // Dynamic menu data structure
  const menuData = {
    women: {
      label: "Women",
      children: {
        dresses: {
          label: "Dresses",
          children: {
            "evening-dresses": {
              label: "Evening Dresses",
              children: {
                "cocktail-dresses": { label: "Cocktail Dresses", href: "#" },
                "formal-gowns": { label: "Formal Gowns", href: "#" },
                "black-tie": { label: "Black Tie", href: "#" },
                "red-carpet": { label: "Red Carpet", href: "#" },
              },
            },
            "casual-dresses": {
              label: "Casual Dresses",
              children: {
                "day-dresses": { label: "Day Dresses", href: "#" },
                "summer-dresses": { label: "Summer Dresses", href: "#" },
                "work-dresses": { label: "Work Dresses", href: "#" },
                "weekend-dresses": { label: "Weekend Dresses", href: "#" },
              },
            },
            "party-dresses": { label: "Party Dresses", href: "#" },
            "maxi-dresses": { label: "Maxi Dresses", href: "#" },
          },
        },
        tops: {
          label: "Tops & Blouses",
          children: {
            "t-shirts": { label: "T-Shirts", href: "#" },
            blouses: { label: "Blouses", href: "#" },
            "tank-tops": { label: "Tank Tops", href: "#" },
            sweaters: { label: "Sweaters", href: "#" },
          },
        },
        "pants-jeans": { label: "Pants & Jeans", href: "#" },
        skirts: { label: "Skirts", href: "#" },
      },
    },
    men: {
      label: "Men",
      children: {
        shirts: {
          label: "Shirts",
          children: {
            "dress-shirts": { label: "Dress Shirts", href: "#" },
            "casual-shirts": { label: "Casual Shirts", href: "#" },
            "polo-shirts": { label: "Polo Shirts", href: "#" },
            "button-downs": { label: "Button Downs", href: "#" },
          },
        },
        "t-shirts": { label: "T-Shirts", href: "#" },
        "pants-jeans-men": { label: "Pants & Jeans", href: "#" },
        jackets: { label: "Jackets", href: "#" },
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
                "designer-bags": { label: "Designer Bags", href: "#" },
                "leather-bags": { label: "Leather Bags", href: "#" },
                "clutch-bags": { label: "Clutch Bags", href: "#" },
                "shoulder-bags": { label: "Shoulder Bags", href: "#" },
              },
            },
            "tote-bags": { label: "Tote Bags", href: "#" },
            "crossbody-bags": { label: "Crossbody Bags", href: "#" },
            backpacks: { label: "Backpacks", href: "#" },
          },
        },
        shoes: {
          label: "Shoes",
          children: {
            sneakers: {
              label: "Sneakers",
              children: {
                "running-shoes": { label: "Running Shoes", href: "#" },
                "basketball-shoes": { label: "Basketball Shoes", href: "#" },
                "lifestyle-sneakers": {
                  label: "Lifestyle Sneakers",
                  href: "#",
                },
                "high-top-sneakers": { label: "High-Top Sneakers", href: "#" },
              },
            },
            heels: { label: "Heels", href: "#" },
            boots: { label: "Boots", href: "#" },
            sandals: { label: "Sandals", href: "#" },
          },
        },
        jewelry: {
          label: "Jewelry",
          children: {
            necklaces: { label: "Necklaces", href: "#" },
            earrings: { label: "Earrings", href: "#" },
            rings: { label: "Rings", href: "#" },
            bracelets: { label: "Bracelets", href: "#" },
          },
        },
        watches: { label: "Watches", href: "#" },
      },
    },
  };

  // Render submenu panels for open menus
  const renderSubmenuPanels = () => {
    const panels = [];

    // Check each main category for open submenus
    Object.entries(menuData).forEach(([categoryKey, category]) => {
      if (category.children) {
        Object.entries(category.children).forEach(([subKey, subItem]) => {
          const subPath = `${categoryKey}-${subKey}`;
          if (isMenuOpen(subPath) && subItem.children) {
            // Check if this submenu has any children to display
            const hasChildrenToShow = Object.values(subItem.children).some(
              (child: any) => child.href || child.children
            );

            if (hasChildrenToShow) {
              panels.push(
                <div key={subPath} className="w-48 border-r border-gray-200">
                  <div className="py-2">
                    <div className="px-4 py-2">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        {subItem.label}
                      </h4>
                      <div className="space-y-1">
                        {Object.entries(subItem.children).map(
                          ([childKey, childItem]: [string, any]) => {
                            const childPath = `${subPath}-${childKey}`;
                            const childIsOpen = isMenuOpen(childPath);

                            if (childItem.href) {
                              return (
                                <Link
                                  key={childKey}
                                  href={childItem.href}
                                  className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 transition-colors rounded"
                                >
                                  {childItem.label}
                                </Link>
                              );
                            } else if (childItem.children) {
                              return (
                                <button
                                  key={childKey}
                                  onClick={() => toggleMenu(childPath)}
                                  className="w-full text-left px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 transition-colors rounded flex items-center justify-between"
                                >
                                  <span>{childItem.label}</span>
                                  <FiChevronRight
                                    className={`w-3 h-3 transition-transform duration-200 ${
                                      childIsOpen ? "rotate-90" : ""
                                    }`}
                                  />
                                </button>
                              );
                            }
                            return null;
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          }
        });
      }
    });

    // Check for third level panels (sub-submenus)
    Object.entries(menuData).forEach(([categoryKey, category]) => {
      if (category.children) {
        Object.entries(category.children).forEach(([subKey, subItem]) => {
          const subPath = `${categoryKey}-${subKey}`;
          if (subItem.children) {
            Object.entries(subItem.children).forEach(
              ([childKey, childItem]: [string, any]) => {
                const childPath = `${subPath}-${childKey}`;
                if (isMenuOpen(childPath) && childItem.children) {
                  // Check if this third level has any children to display
                  const hasChildrenToShow = Object.values(
                    childItem.children
                  ).some(
                    (grandChild: any) => grandChild.href || grandChild.children
                  );

                  if (hasChildrenToShow) {
                    panels.push(
                      <div
                        key={childPath}
                        className="w-48 border-r border-gray-200"
                      >
                        <div className="py-2">
                          <div className="px-4 py-2">
                            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                              {childItem.label}
                            </h4>
                            <div className="space-y-1">
                              {Object.entries(childItem.children).map(
                                ([grandChildKey, grandChildItem]: [
                                  string,
                                  any
                                ]) => {
                                  const grandChildPath = `${childPath}-${grandChildKey}`;
                                  const grandChildIsOpen =
                                    isMenuOpen(grandChildPath);

                                  if (grandChildItem.href) {
                                    return (
                                      <Link
                                        key={grandChildKey}
                                        href={grandChildItem.href}
                                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 transition-colors rounded"
                                      >
                                        {grandChildItem.label}
                                      </Link>
                                    );
                                  } else if (grandChildItem.children) {
                                    return (
                                      <button
                                        key={grandChildKey}
                                        onClick={() =>
                                          toggleMenu(grandChildPath)
                                        }
                                        className="w-full text-left px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 transition-colors rounded flex items-center justify-between"
                                      >
                                        <span>{grandChildItem.label}</span>
                                        <FiChevronRight
                                          className={`w-3 h-3 transition-transform duration-200 ${
                                            grandChildIsOpen ? "rotate-90" : ""
                                          }`}
                                        />
                                      </button>
                                    );
                                  }
                                  return null;
                                }
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                }
              }
            );
          }
        });
      }
    });

    return panels;
  };

  // Sub-dropdown states for mobile
  const [isMobileDressesOpen, setIsMobileDressesOpen] = useState(false);
  const [isMobileTopsOpen, setIsMobileTopsOpen] = useState(false);
  const [isMobileShirtsOpen, setIsMobileShirtsOpen] = useState(false);
  const [isMobileBagsOpen, setIsMobileBagsOpen] = useState(false);
  const [isMobileShoesOpen, setIsMobileShoesOpen] = useState(false);
  const [isMobileJewelryOpen, setIsMobileJewelryOpen] = useState(false);

  const categoriesRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target as Node)
      ) {
        setIsCategoriesOpen(false);
        setIsWomenOpen(false);
        setIsMenOpen(false);
        setIsAccessoriesOpen(false);
        closeAllMenus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="flex items-center justify-between px-4 py-4 h-16">
          {/* Logo */}
          <div className="border border-gray-800 p-2 w-fit">
            <div className="text-lg font-bold text-gray-800">FASHION</div>
            <div className="text-xs text-center text-gray-800">STUDIO</div>
          </div>

          {/* Right Section - Icons and Menu */}
          <div className="flex items-center space-x-2">
            {/* Search Icon */}
            <button className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md">
              <FiSearch className="w-5 h-5" />
            </button>

            {/* Wishlist Icon */}
            <button className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md relative">
              <FiHeart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            {/* Shopping Cart Icon */}
            <button className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md relative">
              <FiShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md"
            >
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              <Link
                href="#"
                className="block px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-inset rounded-md"
              >
                HOME
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-inset rounded-md"
              >
                SHOP
              </Link>

              {/* Mobile Categories Dropdown */}
              <div>
                <button
                  onClick={() =>
                    setIsMobileCategoriesOpen(!isMobileCategoriesOpen)
                  }
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-inset rounded-md"
                >
                  <span>CATEGORIES</span>
                  <FiChevronRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileCategoriesOpen ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {isMobileCategoriesOpen && (
                  <div className="ml-4 space-y-1">
                    {/* Women Section */}
                    <div>
                      <button
                        onClick={() => setIsMobileWomenOpen(!isMobileWomenOpen)}
                        className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-inset rounded-md"
                      >
                        <span>Women</span>
                        <FiChevronRight
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isMobileWomenOpen ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      {isMobileWomenOpen && (
                        <div className="ml-4 space-y-1">
                          {/* Dresses with sub-dropdown */}
                          <div>
                            <button
                              onClick={() =>
                                setIsMobileDressesOpen(!isMobileDressesOpen)
                              }
                              className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                              <span>Dresses</span>
                              <FiChevronRight
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  isMobileDressesOpen ? "rotate-90" : ""
                                }`}
                              />
                            </button>
                            {isMobileDressesOpen && (
                              <div className="ml-4 space-y-1">
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Evening Dresses
                                </Link>
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Casual Dresses
                                </Link>
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Party Dresses
                                </Link>
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Maxi Dresses
                                </Link>
                              </div>
                            )}
                          </div>

                          {/* Tops & Blouses with sub-dropdown */}
                          <div>
                            <button
                              onClick={() =>
                                setIsMobileTopsOpen(!isMobileTopsOpen)
                              }
                              className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                              <span>Tops & Blouses</span>
                              <FiChevronRight
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  isMobileTopsOpen ? "rotate-90" : ""
                                }`}
                              />
                            </button>
                            {isMobileTopsOpen && (
                              <div className="ml-4 space-y-1">
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  T-Shirts
                                </Link>
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Blouses
                                </Link>
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Tank Tops
                                </Link>
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Sweaters
                                </Link>
                              </div>
                            )}
                          </div>

                          {/* Simple links for other items */}
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Pants & Jeans
                          </Link>
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Skirts
                          </Link>
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Outerwear
                          </Link>
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Activewear
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Men Section */}
                    <div>
                      <button
                        onClick={() => setIsMobileMenOpen(!isMobileMenOpen)}
                        className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-inset rounded-md"
                      >
                        <span>Men</span>
                        <FiChevronRight
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isMobileMenOpen ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      {isMobileMenOpen && (
                        <div className="ml-4 space-y-1">
                          {/* Shirts with sub-dropdown */}
                          <div>
                            <button
                              onClick={() =>
                                setIsMobileShirtsOpen(!isMobileShirtsOpen)
                              }
                              className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                              <span>Shirts</span>
                              <FiChevronRight
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  isMobileShirtsOpen ? "rotate-90" : ""
                                }`}
                              />
                            </button>
                            {isMobileShirtsOpen && (
                              <div className="ml-4 space-y-1">
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Dress Shirts
                                </Link>
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Casual Shirts
                                </Link>
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Polo Shirts
                                </Link>
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Button Downs
                                </Link>
                              </div>
                            )}
                          </div>

                          {/* Simple links for other items */}
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            T-Shirts
                          </Link>
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Pants & Jeans
                          </Link>
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Jackets
                          </Link>
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Suits
                          </Link>
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Activewear
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Accessories Section */}
                    <div>
                      <button
                        onClick={() =>
                          setIsMobileAccessoriesOpen(!isMobileAccessoriesOpen)
                        }
                        className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-inset rounded-md"
                      >
                        <span>Accessories</span>
                        <FiChevronRight
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isMobileAccessoriesOpen ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      {isMobileAccessoriesOpen && (
                        <div className="ml-4 space-y-1">
                          {/* Bags with sub-dropdown */}
                          <div>
                            <button
                              onClick={() =>
                                setIsMobileBagsOpen(!isMobileBagsOpen)
                              }
                              className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                              <span>Bags</span>
                              <FiChevronRight
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  isMobileBagsOpen ? "rotate-90" : ""
                                }`}
                              />
                            </button>
                            {isMobileBagsOpen && (
                              <div className="ml-4 space-y-1">
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Handbags
                                </Link>
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Tote Bags
                                </Link>
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Crossbody Bags
                                </Link>
                                <Link
                                  href="#"
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                >
                                  Backpacks
                                </Link>
                              </div>
                            )}
                          </div>

                          {/* Simple links for other items */}
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Shoes
                          </Link>
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Jewelry
                          </Link>
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Watches
                          </Link>
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Belts
                          </Link>
                          <Link
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            Hats
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between px-6 py-4 h-16 w-full">
          {/* Logo */}
          <div className="border border-gray-800 p-2 w-fit">
            <div className="text-lg font-bold text-gray-800">FASHION</div>
            <div className="text-xs text-center text-gray-800">STUDIO</div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link
              href="#"
              className="text-sm font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 px-3 py-2 rounded-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            >
              HOME
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 px-3 py-2 rounded-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            >
              SHOP
            </Link>

            {/* Categories Dropdown */}
            <div className="relative" ref={categoriesRef}>
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="text-sm font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 px-3 py-2 rounded-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex items-center space-x-1"
              >
                <span>CATEGORIES</span>
                <FiChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${
                    isCategoriesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isCategoriesOpen && (
                <div
                  className={`absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 ${
                    renderSubmenuPanels().length > 0 ? "w-[800px]" : "w-48"
                  }`}
                >
                  <div className="flex">
                    {/* Left Panel - Main Categories */}
                    <div
                      className={`${
                        renderSubmenuPanels().length > 0
                          ? "w-48 border-r border-gray-200"
                          : "w-full"
                      }`}
                    >
                      <div className="py-2">
                        {Object.entries(menuData).map(
                          ([key, item]: [string, any], index) => (
                            <div key={key}>
                              <div className="px-4 py-2">
                                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                  {item.label}
                                </h3>
                                <div className="space-y-1">
                                  {Object.entries(item.children).map(
                                    ([childKey, childItem]: [string, any]) => {
                                      const childPath = `${key}-${childKey}`;
                                      const childIsOpen = isMenuOpen(childPath);

                                      if (childItem.href) {
                                        // Leaf node
                                        return (
                                          <Link
                                            key={childKey}
                                            href={childItem.href}
                                            className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 transition-colors rounded"
                                          >
                                            {childItem.label}
                                          </Link>
                                        );
                                      } else if (childItem.children) {
                                        // Parent node
                                        return (
                                          <button
                                            key={childKey}
                                            onClick={() =>
                                              toggleMenu(childPath)
                                            }
                                            className="w-full text-left px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 transition-colors rounded flex items-center justify-between"
                                          >
                                            <span>{childItem.label}</span>
                                            <FiChevronRight
                                              className={`w-3 h-3 transition-transform duration-200 ${
                                                childIsOpen ? "rotate-90" : ""
                                              }`}
                                            />
                                          </button>
                                        );
                                      }
                                      return null;
                                    }
                                  )}
                                </div>
                              </div>
                              {index < Object.keys(menuData).length - 1 && (
                                <div className="border-t border-gray-100"></div>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Dynamic Multi-Panel System */}
                    {renderSubmenuPanels().length > 0 && (
                      <div className="flex">{renderSubmenuPanels()}</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Section - Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md">
              <FiSearch className="w-5 h-5" />
            </button>

            {/* Wishlist Icon */}
            <button className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md relative">
              <FiHeart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            {/* Shopping Cart Icon */}
            <button className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md relative">
              <FiShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* User Account Icon */}
            <button className="p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md">
              <FiUser className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
