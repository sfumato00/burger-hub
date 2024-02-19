import { Product, ProductDetail } from "@/lib/definitions";
import { isNumber } from "@/lib/utils";
import { cache } from "react";

export const getBurgerHubApiEndpoint = (): string => {
  const url = process.env.BURGER_API;
  if (!url) {
    throw new Error("Burger API is url is not set in environment variable");
  }
  return url;
};

export const revalidateFrequency = isNumber(process.env.REVALIDATION_FREQUENCY)
  ? Number(process.env.REVALIDATION_FREQUENCY)
  : 60;

const burgerHupEndpoint = getBurgerHubApiEndpoint();

export const fetchProducts = async () => {
  const response = await fetch(burgerHupEndpoint, {
    next: { revalidate: revalidateFrequency },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products.");
  }

  const json = await response.json();
  return json as Product[];
};

export const fetchProductDetails = async () => {
  const response = await fetch(burgerHupEndpoint, {
    next: { revalidate: revalidateFrequency },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch product details.");
  }

  const json = await response.json();
  return json as ProductDetail[];
};

export const getProductDetail = cache(async (slug: string) => {
  const products = await fetchProductDetails();
  const product = products.find((p) => p.slug == slug);
  if (!product) {
    throw new Error(`Failed to fetch (${slug})`);
  }
  return product;
});
