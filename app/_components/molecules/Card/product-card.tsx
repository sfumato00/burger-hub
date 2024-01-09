import Link from "next/link";
import Image from "next/image";
import { Product } from "@/app/_lib/definitions";

export default function ProductCard({
  product,
  quantity,
  onIncrement,
  onDecrement,
  onAddToCart,
}: {
  product: Product;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onAddToCart: (product: Product) => void;
}) {
  return (
    <div className="flex flex-col gap-3 p-8 rounded-xl shadow-md text-center mb-6">
      <Link href="/">
        <Image
          src={product.image}
          className="w-full sm:block rounded-lg lg:block"
          alt={product.name}
          height={150}
          width={150}
          layout="responsive"
        />
      </Link>
      <div className="font-bold text-xl mb-2">{product.name}</div>
      <p className="text-gray-700 text-base">
        ${(product.price / 100).toFixed(2)}
      </p>
      <div className="flex justify-around items-center mt-4 mb-2 ">
        <button
          onClick={onDecrement}
          className="hover:text-gray-500 hover:bg-gray-100 w-8 h-8 rounded-full transition-colors duration-500"
        >
          -
        </button>
        <span className="w-10 text-center rounded-md mx-3">{quantity}</span>
        <button
          onClick={onIncrement}
          className="hover:text-gray-500 hover:bg-gray-100 w-8 h-8 rounded-full transition-colors duration-500"
        >
          +
        </button>
      </div>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-gray-50 hover:bg-gray-100 hover:text-white transition-colors duration-500 rounded-md px-5 py-2"
      >
        Add to cart
      </button>
    </div>
  );
}
