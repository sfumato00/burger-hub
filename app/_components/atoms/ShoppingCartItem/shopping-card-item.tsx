import { ShoppingCartItem } from "@/app/_lib/definitions";
import { Button } from "@nextui-org/button";
import { TrashIcon } from "@heroicons/react/16/solid";
import Image, { ImageLoaderProps } from "next/image";

const cartImageLoader = ({ src, width, quality }: ImageLoaderProps): string => {
  return `https://images.unsplash.com/${src}?w=${width}&h=${width}&q=${
    quality || 80
  }&fit=crop`;
};

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
        loader={cartImageLoader}
        src={item.image}
        alt={item.name}
        height={48}
        width={48}
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
