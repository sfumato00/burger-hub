import { useCart } from "@/app/_context/providers/shopping-cart-context";
import ShoppingCardItem from "@/app/_components/atoms/ShoppingCartItem/shopping-card-item";
import { ShoppingCartItem } from "@/app/_lib/definitions";

export default function ShoppingCart() {
  const { items, setItems } = useCart();

  const handleRemove = (itemToRemove: ShoppingCartItem) => {
    setItems((items) => items.filter((item) => item.id !== itemToRemove.id));
  };

  return (
    <div className="justify-center mx-auto gap-4 place-center flex-wrap w-96">
      <h1 className="text-xl font-bold">Shopping Cart</h1>
      <div>
        {items.map((item, index) => (
          <ShoppingCardItem key={index} item={item} removeItem={handleRemove} />
        ))}
      </div>
    </div>
  );
}
