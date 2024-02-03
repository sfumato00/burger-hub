"use client";

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ShoppingCartItem } from "@/app/_lib/definitions";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

interface ShoppingCartContextProps {
  isCartOpen: boolean;
  items: ShoppingCartItem[];
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setItems: React.Dispatch<React.SetStateAction<ShoppingCartItem[]>>;
}

const ShoppingCartContext = createContext<ShoppingCartContextProps>({
  isCartOpen: false,
  items: [],
  setCartOpen: () => {},
  setItems: () => {},
});

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({
  children,
}) => {
  const [items, setItems] = useState<ShoppingCartItem[] | []>(() => {
    if (typeof window === "undefined") {
      return [];
    }
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
    setIsCartOpen(items.length > 0);
  }, [items]);

  return (
    <ShoppingCartContext.Provider
      value={{
        isCartOpen: isCartOpen,
        items,
        setCartOpen: setIsCartOpen,
        setItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export default ShoppingCartContext;
