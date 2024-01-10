import { Product } from "@/app/_lib/definitions";

export async function fetchProductData() {
  const productData: Product[] = require("@/app/_lib/data-placeholder");
  // await delay(300);
  return productData;
}

// export async function fetchProductGroupData() {
//   const groups: ProductGroup[] = productGroups;
//   await delay(100);
//   return groups;
// }

// export async function fetchProductByGroup(groupId: string) {
//   const [products, groups] = await Promise.all([
//     fetchProductData(),
//     fetchProductGroupData(),
//   ]);
//   const group = groups.find((g) => g.id === groupId);
//   if (group === undefined) {
//     return [];
//   }
//   return products.filter((p) => p.id in group.products);
// }

const delay = (duration: number) =>
  new Promise((resolve) => setTimeout(resolve, duration));
