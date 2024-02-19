import { Product } from "@/lib/definitions";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import Image, { ImageLoaderProps } from "next/image";
import { Button } from "@nextui-org/button";
import { Spacer } from "@nextui-org/spacer";
import { CardHeader } from "@nextui-org/card";

const imageLoader = ({ src, width, quality }: ImageLoaderProps): string => {
  return `https://images.unsplash.com/${src}?w=${width}&h=${width}&q=${
    quality || 75
  }&fit=crop`;
};

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
          <Link href="#">
            <div>
              <Image
                loader={imageLoader}
                src={product.image}
                alt={product.name}
                height={500}
                width={500}
              />
            </div>
          </Link>
        </CardHeader>
        <CardBody>
          <h4 className="capitalize font-extrabold">{product.name}</h4>
          <small className="text-default-500 font-bold">
            ${(product.price / 100).toFixed(2)}
          </small>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </CardBody>
        <CardFooter className="flex-col">
          <div className="flex">
            <Button
              onClick={onDecrement}
              variant="faded"
              radius="full"
              color="primary"
              isIconOnly
              size="sm"
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
              size="sm"
            >
              +
            </Button>
          </div>
          <Spacer y={2} />
          <Button
            size="sm"
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
