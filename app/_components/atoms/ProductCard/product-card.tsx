import { Product } from "@/app/_lib/definitions";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Spacer } from "@nextui-org/spacer";

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
      <Card className="w-full" shadow="lg">
        <CardBody>
          <Link href="#">
            <div className="">
              <Image
                src={product.image}
                className="w-full block rounded-lg"
                alt={product.name}
                height={150}
                width={150}
                loading="lazy"
              />
            </div>
          </Link>
        </CardBody>
        <CardFooter className="flex flex-col items-center">
          <div className="flex justify-around items-center">
            <Button
              onClick={onDecrement}
              variant="faded"
              radius="full"
              color="primary"
              isIconOnly
            >
              -
            </Button>
            <span className="w-10 text-center mx-3">{quantity}</span>
            <Button
              onClick={onIncrement}
              variant="faded"
              radius="full"
              color="primary"
              isIconOnly
            >
              +
            </Button>
          </div>
          <Spacer y={6} />
          <Button size="sm" onClick={() => onAddToCart(product)}>
            <p className="text-default-500">Add to cart</p>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
