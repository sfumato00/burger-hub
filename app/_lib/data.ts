export async function fetchProductData() {
  try {
    const response = await fetch(
      "https://sfumato00.github.io/json/data/products.json",
      { cache: "no-store" },
    );

    const { products } = await response.json();

    return products;
  } catch (error) {
    console.error("Error:", error);
  }
}
