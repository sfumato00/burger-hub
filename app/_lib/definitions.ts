export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  slug?: string;
}

export interface ProductDetail extends Product {
  href: string;
}

export interface ProductGroup {
  id: string;
  name: string;
  products: string[];
}

export interface ShoppingCartItem extends Product {
  quantity: number;
}
