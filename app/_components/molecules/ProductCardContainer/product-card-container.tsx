"use client";

import { useState } from "react";

import { Product } from "@/app/_lib/definitions";
import ProductCard from "@/app/_components/molecules/ProductCard/product-card";
import { useCart } from "@/app/_context/providers/shopping-cart-context";

export default function ProductCardContainer({
  product,
}: {
  product: Product;
}) {
  const { items, setItems } = useCart();
  const [quantity, setQuantity] = useState<number>(1);
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = (product: Product) => {
    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id === product.id);
      if (item) {
        return prevItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        );
      }
      return [...prevItems, { ...product, quantity: quantity }];
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
