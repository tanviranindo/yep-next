"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity?: number;
  image: string;
}

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  stockStatus: string;
}

interface GadgetStoreContextType {
  cart: CartItem[];
  wishlist: WishlistItem[];
  cartCount: number;
  wishlistCount: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateCartQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
}

const GadgetStoreContext = createContext<GadgetStoreContextType | undefined>(
  undefined
);

export function GadgetStoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: (i.quantity || 1) + (item.quantity || 1) }
            : i
        );
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const addToWishlist = (item: WishlistItem) => {
    setWishlist((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const isInWishlist = (id: string) => {
    return wishlist.some((item) => item.id === id);
  };

  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const wishlistCount = wishlist.length;

  return (
    <GadgetStoreContext.Provider
      value={{
        cart,
        wishlist,
        cartCount,
        wishlistCount,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </GadgetStoreContext.Provider>
  );
}

export function useGadgetStore() {
  const context = useContext(GadgetStoreContext);
  if (context === undefined) {
    throw new Error("useGadgetStore must be used within a GadgetStoreProvider");
  }
  return context;
}
