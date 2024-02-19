export type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  slug: string;
};

export type ProductDetail = Product & {
  details: string;
};

export type ShoppingCartItem = Product & {
  quantity: number;
};
