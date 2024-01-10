"use client";

import ProductCardContainer from "@/app/_components/molecules/ProductCardContainer/product-card-container";
import ShoppingCart from "@/app/_components/_deprecated/ShoppingCart/shopping-cart";
import { fetchProductData } from "@/app/_lib/data";

export default async function HelloPage() {
  const products = await fetchProductData();

  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 justify-center mx-auto gap-4 place-center flex-wrap w-100 md:max-w-[900px]">
        {products.map((product, index) => (
          <ProductCardContainer key={index} product={product} />
        ))}
      </div>
      <div>
        <ShoppingCart />
      </div>
    </div>
  );
}
