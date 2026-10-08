// Mirrors za.ac.cput.communitystoreplatform.domain.Cart and CartItem
export interface Cart {
  cartId: number;
  buyerId: number;
  totalAmount: number | null;
  createdAt: string | null;
}

export interface CartItem {
  cartItemId: number;
  cartId: number;
  productId: number;
  quantity: number;
  price: number;
}