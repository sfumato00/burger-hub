export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  slug?: string;
}

export interface ShoppingCartItem extends Product {
  quantity: number;
}
