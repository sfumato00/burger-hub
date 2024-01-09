"use client";

import GlobalNavBar from "@/app/_components/molecules/NavBar/global-nav-bar";
import { ShoppingCartProvider } from "@/app/_context/providers/shopping-cart-context";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="">
        <ShoppingCartProvider>
          <GlobalNavBar />
          <div className="mx-auto lg:pl-72">
            <div className="space-y-8 pt-20 lg:px-8 lg:py-8">
              <div className="">{children}</div>
            </div>
          </div>
        </ShoppingCartProvider>
      </div>
    </>
  );
}
