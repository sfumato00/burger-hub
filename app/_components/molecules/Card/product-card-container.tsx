"use client";

import { useState } from "react";

import { Product } from "@/app/_lib/definitions";
import ProductCard from "@/app/_components/molecules/Card/product-card";
import { useCart } from "@/app/_context/providers/shopping-cart-context";

export default function ProductCardContainer({
  product,
}: {
  product: Product;
}) {
  const { items, setItems } = useCart();
  const [quantity, setQuantity] = useState<number>(1);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = (product: Product) => {
    setItems((items) => {
      const item = items.find((item) => item.id === product.id);
      if (item) {
        item.quantity += quantity;
        return [...items];
      }
      return [...items, { ...product, quantity: quantity }];
    });
    setQuantity(1);
  };

  return (
    <div>
      <ProductCard
        product={product}
        quantity={quantity}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
