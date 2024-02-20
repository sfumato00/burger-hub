"use server";

import { getProduct } from "@/lib/data";
import Image from "next/image";

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProduct(params.slug);
  const imageSrc = `https://images.unsplash.com/${product.image}?w=800&h=800&q=80&fit=crop`;
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        src={imageSrc}
        alt={product.name}
        height={800}
        width={800}
        className="rounded-2xl"
      />
      <h1 className="font-extrabold">{product.name}</h1>
      <p>{product.description}</p>
      <p>cal. {product.calorie}</p>
      <p>price ${(product.price / 100).toFixed(2)}</p>
    </div>
  );
}
