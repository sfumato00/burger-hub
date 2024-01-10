"use client";

import { ShoppingCartProvider } from "@/app/_context/providers/shopping-cart-context";
import { NextUIProvider } from "@nextui-org/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="">
      <NextUIProvider>
        <ShoppingCartProvider>
          <div className="mx-auto pl-8 lg:pl-72">
            <div className="space-y-8 pt-20 lg:px-8 lg:py-8">
              <div className="">{children}</div>
            </div>
          </div>
        </ShoppingCartProvider>
      </NextUIProvider>
    </main>
  );
}
