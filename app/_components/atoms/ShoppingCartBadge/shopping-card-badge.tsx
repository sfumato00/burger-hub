import React from "react";
import { Badge, Button, useDisclosure } from "@nextui-org/react";

import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useCart } from "@/app/_context/providers/shopping-cart-context";
import ShoppingCartModal from "@/app/_components/molecules/ShoppingCartModal/shopping-cart-modal";
import { ShoppingCartItem } from "@/app/_lib/definitions";

export default function ShoppingCardBadge() {
  const { items, setItems } = useCart();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // const [modalPlacement, setModalPlacement] = useState("auto");

  const totalItems = items.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0,
  );
  const handleRemove = (itemToRemove: ShoppingCartItem) => {
    setItems((items) => items.filter((item) => item.id !== itemToRemove.id));
  };

  return (
    <Badge content={`${totalItems}`} shape="circle" color="primary">
      <Button
        radius="full"
        isIconOnly
        aria-label={`${totalItems} items in the cart`}
        variant="light"
        size="lg"
        onPress={onOpen}
      >
        <ShoppingCartIcon className="w-6" />
      </Button>
      <ShoppingCartModal
        items={items}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        handleRemove={handleRemove}
      />
    </Badge>
  );
}