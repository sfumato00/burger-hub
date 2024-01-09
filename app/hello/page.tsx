"use client";

import ProductCardContainer from "@/app/_components/molecules/Card/product-card-container";
import ShoppingCart from "@/app/_components/molecules/ShoppingCart/shopping-cart";
import { fetchProductData } from "@/app/_lib/data";

export default async function HelloPage() {
  const products = await fetchProductData();

  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 justify-center mx-auto gap-4 place-center flex-wrap w-100 md:max-w-[900px]">
        {products.map((product, index) => (
          <ProductCardContainer key={index} product={product} />
        ))}
        {/*<ProductCardContainer*/}
        {/*  product={{*/}
        {/*  id: "1",*/}
        {/*  name: "Burger A",*/}
        {/*  image:*/}
        {/*  "https://source.unsplash.com/burger-with-lettuce-and-tomatoes-sc5sTPMrVfk",*/}
        {/*  href: "burger",*/}
        {/*  price: 600,*/}
        {/*  }}*/}
        {/*  />*/}
        {/*  <ProductCardContainer*/}
        {/*  product={{*/}
        {/*  id: "2",*/}
        {/*  name: "Burger B",*/}
        {/*  image:*/}
        {/*  "https://source.unsplash.com/burger-with-lettuce-and-tomatoes-sc5sTPMrVfk",*/}
        {/*  href: "productA",*/}
        {/*  price: 700,*/}
        {/*  }}*/}
        {/*  />*/}
        {/*  <ProductCardContainer*/}
        {/*  product={{*/}
        {/*  id: "3",*/}
        {/*  name: "Burger C",*/}
        {/*  image:*/}
        {/*  "https://source.unsplash.com/burger-with-lettuce-and-tomatoes-sc5sTPMrVfk",*/}
        {/*  href: "productA",*/}
        {/*  price: 750,*/}
        {/*  }}*/}
        {/*  />*/}
        {/*  <ProductCardContainer*/}
        {/*  product={{*/}
        {/*  id: "4",*/}
        {/*  name: "Burger D",*/}
        {/*  image:*/}
        {/*  "https://source.unsplash.com/burger-with-lettuce-and-tomatoes-sc5sTPMrVfk",*/}
        {/*  href: "productA",*/}
        {/*  price: 899,*/}
        {/*  }}*/}
        {/*/>*/}
      </div>
      <div>
        <ShoppingCart />
      </div>
    </div>
  );
}
