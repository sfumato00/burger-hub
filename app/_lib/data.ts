export async function fetchProductData() {
  const apiUrl = process.env.BURGER_API;
  if (!apiUrl) {
    throw new Error("Burger API is url is not set in environment variable");
  }

  const response = await fetch(apiUrl, {
    next: { revalidate: 300 },
  });

  const { products } = await response.json();

  return products;
}
