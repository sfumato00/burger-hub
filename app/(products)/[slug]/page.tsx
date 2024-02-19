import { getProductDetail } from "@/lib/data";

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductDetail(params.slug);
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{JSON.stringify(product)}</p>
    </div>
  );
}
