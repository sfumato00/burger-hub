import { ShoppingCartItem } from "@/app/_lib/definitions";

export default function ShoppingCardItem({
  item,
  removeItem,
}: {
  item: ShoppingCartItem;
  removeItem: (item: ShoppingCartItem) => void;
}) {
  return (
    <div className="flex items-center gap-4 mb-3">
      <div>
        {item.name} <span className="text-xs">({item.quantity})</span>
      </div>
      <div className="ml-auto">
        ${((item.price * item.quantity) / 100).toFixed(2)}
      </div>
      <button onClick={() => removeItem(item)}>Remove</button>
    </div>
  );
}
