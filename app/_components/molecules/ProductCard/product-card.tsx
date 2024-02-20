import { Product } from "@/lib/definitions";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Spacer } from "@nextui-org/spacer";
import { CardHeader } from "@nextui-org/card";

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
    <div>
      <Card fullWidth>
        <CardHeader className="py-0 px-0">
          <Link href={`/${product.slug}`}>
            <Image
              src={`https://images.unsplash.com/${product.image}?w=800&h=800&q=80&fit=crop`}
              alt={product.name}
              height={800}
              width={800}
            />
          </Link>
        </CardHeader>
        <CardBody>
          <h4 className="capitalize font-extrabold">{product.name}</h4>
          <small className="text-default-500 font-bold">
            ${(product.price / 100).toFixed(2)}
          </small>
          <p className="max-h-32 overflow-hidden line-clamp-3">
            {product.description}
          </p>
        </CardBody>
        <CardFooter className="grid grid-cols-1 max-w-64 mx-auto">
          <div className="flex justify-around align-middle items-center">
            <Button
              onClick={onDecrement}
              variant="faded"
              radius="full"
              color="primary"
              isIconOnly
              size="lg"
            >
              -
            </Button>
            <span className="w-10 text-center">{quantity}</span>
            <Button
              onClick={onIncrement}
              variant="faded"
              radius="full"
              color="primary"
              isIconOnly
              size="lg"
            >
              +
            </Button>
          </div>
          <Spacer y={5} />
          <Button
            // size="lg"
            radius="full"
            variant="shadow"
            className="font-bold"
            onClick={() => onAddToCart(product)}
          >
            Add
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
