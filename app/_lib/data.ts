import { Product } from "@/app/_lib/definitions";

export async function fetchProductData() {
  try {
    const response = await fetch(
      "https://sfumato00.github.io/json/data/products.json",
      { next: { revalidate: 3600 } },
    );

    const { products } = await response.json();

    return products;
  } catch (error) {
    console.error("Error:", error);
  }
}
