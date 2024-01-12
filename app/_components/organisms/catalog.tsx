import { fetchProductData } from "@/app/_lib/data";
import ProductCardContainer from "@/app/_components/molecules/ProductCardContainer/product-card-container";
import { Product } from "@/app/_lib/definitions";

export default async function Catalog() {
  const products: Product[] = await fetchProductData();

  return (
    <div>
      <div className="grid px-6 py-6 sm:grid-cols-2 md:grid-cols-4 justify-center mx-auto gap-4 place-center flex-wrap w-100 md:max-w-[900px]">
        {products.map((product) => (
          <ProductCardContainer key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
