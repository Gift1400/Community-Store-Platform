import { apiDelete, apiGet, apiPut } from './client';
import type { Cart, CartItem } from '../types/cart';

// Wraps CartController and CartItemController.
// The backend runs under server.servlet.context-path=/CommunityStore.
const CART_PATH = '/CommunityStore/cart';
const CART_ITEM_PATH = '/CommunityStore/cartItem';

export const cartApi = {
  getByBuyer: (buyerId: number) =>
    apiGet<Cart[]>(`${CART_PATH}/getByBuyer/${buyerId}`),
};

export const cartItemApi = {
  getByCart: (cartId: number) =>
    apiGet<CartItem[]>(`${CART_ITEM_PATH}/getByCart/${cartId}`),

  update: (item: CartItem) =>
    apiPut<CartItem>(`${CART_ITEM_PATH}/update`, item),

  remove: (cartItemId: number) =>
    apiDelete<boolean>(`${CART_ITEM_PATH}/delete/${cartItemId}`),
};