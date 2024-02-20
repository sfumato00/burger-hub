export type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  slug: string;
  description: string;
  calorie: number;
};

export type ShoppingCartItem = Product & {
  quantity: number;
};
