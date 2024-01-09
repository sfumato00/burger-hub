import React, { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingCartItem } from "@/app/_lib/definitions";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

interface ShoppingCartContextType {
  items: ShoppingCartItem[];
  setItems: React.Dispatch<React.SetStateAction<ShoppingCartItem[]>>;
}

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(
  undefined,
);

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({
  children,
}) => {
  const [items, setItems] = useState<ShoppingCartItem[]>([]);
  return (
    <ShoppingCartContext.Provider value={{ items, setItems }}>
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
