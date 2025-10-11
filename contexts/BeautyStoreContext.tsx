"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { VALID_COUPONS } from "@/data/beauty1/constants";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  stockStatus: "In Stock" | "Out of Stock";
}

export interface CheckoutFormData {
  firstName: string;
  lastName: string;
  companyName: string;
  country: string;
  streetAddress: string;
  apartment: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
  createAccount: boolean;
  orderNotes: string;
  usePersonalAsBilling: boolean;
  billingAddress: string;
  billingCity: string;
  billingState: string;
  billingPostalCode: string;
  deliveryArea: "inside" | "outside";
  paymentMethod: string;
  cardholderName?: string;
  cardNumber?: string;
  cardExpiry?: string;
  cardCvc?: string;
}

export interface Order {
  orderNumber: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  deliveryCharge: number;
  total: number;
  paymentMethod: string;
  customerInfo: CheckoutFormData;
}

interface BeautyStoreContextType {
  cart: CartItem[];
  wishlist: WishlistItem[];
  addToCart: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  isInCart: (id: string) => boolean;
  cartTotal: number;
  cartCount: number;
  wishlistCount: number;
  currentOrder: Order | null;
  setCurrentOrder: (order: Order | null) => void;
  applyCoupon: (code: string) => { success: boolean; discount: number; message: string };
}

const BeautyStoreContext = createContext<BeautyStoreContextType | undefined>(undefined);

export function BeautyStoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("beauty-cart");
    const savedWishlist = localStorage.getItem("beauty-wishlist");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Save to localStorage when cart changes
  useEffect(() => {
    localStorage.setItem("beauty-cart", JSON.stringify(cart));
  }, [cart]);

  // Save to localStorage when wishlist changes
  useEffect(() => {
    localStorage.setItem("beauty-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (item: Omit<CartItem, "quantity">, quantity: number = 1) => {
    setCart((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
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
        return prev;
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

  const isInCart = (id: string) => {
    return cart.some((item) => item.id === id);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlist.length;

  const applyCoupon = (code: string) => {
    const discount = VALID_COUPONS[code.toUpperCase()];
    if (discount) {
      return {
        success: true,
        discount,
        message: `Coupon applied! You saved ${discount}%`,
      };
    }
    return {
      success: false,
      discount: 0,
      message: "Invalid coupon code",
    };
  };

  return (
    <BeautyStoreContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        isInCart,
        cartTotal,
        cartCount,
        wishlistCount,
        currentOrder,
        setCurrentOrder,
        applyCoupon,
      }}
    >
      {children}
    </BeautyStoreContext.Provider>
  );
}

export function useBeautyStore() {
  const context = useContext(BeautyStoreContext);
  if (context === undefined) {
    throw new Error("useBeautyStore must be used within a BeautyStoreProvider");
  }
  return context;
}
