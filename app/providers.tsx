"use client";

import { ShoppingCartProvider } from "@/app/_context/shopping-cart-context";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ShoppingCartProvider>{children}</ShoppingCartProvider>
    </NextUIProvider>
  );
}
