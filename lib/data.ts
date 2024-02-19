import { Product } from "@/lib/definitions";
import { isNumber } from "@/lib/utils";

export async function fetchProductData() {
  const apiUrl = process.env.BURGER_API;
  if (!apiUrl) {
    throw new Error("Burger API is url is not set in environment variable");
  }

  const revalidationFrequency: number = isNumber(
    process.env.REVALIDATION_FREQUENCY,
  )
    ? Number(process.env.REVALIDATION_FREQUENCY)
    : 60;

  const response = await fetch(apiUrl, {
    next: { revalidate: revalidationFrequency },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const json = await response.json();
  return json as Product[];
}
