import React from "react";
import { Badge, Button, useDisclosure } from "@nextui-org/react";

import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useCart } from "@/app/_context/shopping-cart-context";
import ShoppingCartModal from "@/app/_components/molecules/ShoppingCartModal/shopping-cart-modal";
import { ShoppingCartItem } from "@/app/_lib/definitions";

export default function ShoppingCardBadge() {
  const { isCartOpen, items, setItems } = useCart();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const totalItems = items.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0,
  );
  const handleRemove = (itemToRemove: ShoppingCartItem) => {
    setItems((items) => items.filter((item) => item.id !== itemToRemove.id));
  };
  return (
    <div>
      <Badge
        content={`${totalItems}`}
        shape="circle"
        color="primary"
        isInvisible={!isCartOpen}
      >
        <Button
          radius="full"
          isIconOnly
          aria-label={`${totalItems} items in the cart`}
          variant="light"
          size="lg"
          onPress={onOpen}
        >
          <ShoppingCartIcon width={24} />
        </Button>
        <ShoppingCartModal
          items={items}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          handleRemove={handleRemove}
        />
      </Badge>
    </div>
  );
}
