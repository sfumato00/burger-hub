"use client";

import GlobalNavBar from "@/app/_components/molecules/NavBar/global-nav-bar";
import { NextUIProvider } from "@nextui-org/react";
import Catalog from "@/app/_components/organisms/ProductPage/catalog";
import { ShoppingCartProvider } from "@/app/_context/providers/shopping-cart-context";

export default function Home() {
  return (
    <main>
      <NextUIProvider>
        <ShoppingCartProvider>
          <GlobalNavBar />
          <Catalog />
        </ShoppingCartProvider>
      </NextUIProvider>
    </main>
  );
}
