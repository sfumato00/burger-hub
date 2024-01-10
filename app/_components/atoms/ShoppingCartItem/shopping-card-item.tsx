import { ShoppingCartItem } from "@/app/_lib/definitions";
import { Button } from "@nextui-org/button";
import { TrashIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export default function ShoppingCardItem({
  item,
  removeItem,
}: {
  item: ShoppingCartItem;
  removeItem: (item: ShoppingCartItem) => void;
}) {
  return (
    <div className="flex items-center gap-4 mb-3">
      <Image
        src={item.image}
        alt={item.name}
        height={40}
        width={40}
        className="rounded-full"
      />
      <div>
        {item.name} <span className="text-xs">({item.quantity})</span>
      </div>
      <small className="ml-auto">
        ${((item.price * item.quantity) / 100).toFixed(2)}
      </small>
      <Button
        size="sm"
        isIconOnly
        // color="primary"
        variant="light"
        radius="full"
        onClick={() => removeItem(item)}
      >
        <TrashIcon className="w-3" />
      </Button>
    </div>
  );
}
