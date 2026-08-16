package za.ac.cput.communitystoreplatform.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class CartItem {
    @Id
    private int cartItemId;
    private int cartId;
    private int productId;
    private int quantity;
    private double price;

    protected CartItem() {
    }

    private CartItem(Builder builder) {
        this.cartItemId = builder.cartItemId;
        this.cartId = builder.cartId;
        this.productId = builder.productId;
        this.quantity = builder.quantity;
        this.price = builder.price;
    }

    public int getCartItemId() {
        return cartItemId;
    }

    public int getCartId() {
        return cartId;
    }

    public int getProductId() {
        return productId;
    }

    public int getQuantity() {
        return quantity;
    }

    public double getPrice() {
        return price;
    }

    public void updateQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getSubtotal() {
        return price * quantity;
    }

    public static class Builder {
        private int cartItemId;
        private int cartId;
        private int productId;
        private int quantity;
        private double price;

        public Builder setCartItemId(int cartItemId) {
            this.cartItemId = cartItemId;
            return this;
        }

        public Builder setCartId(int cartId) {
            this.cartId = cartId;
            return this;
        }

        public Builder setProductId(int productId) {
            this.productId = productId;
            return this;
        }

        public Builder setQuantity(int quantity) {
            this.quantity = quantity;
            return this;
        }

        public Builder setPrice(double price) {
            this.price = price;
            return this;
        }

        public Builder copy(CartItem cartItem) {
            this.cartItemId = cartItem.cartItemId;
            this.cartId = cartItem.cartId;
            this.productId = cartItem.productId;
            this.quantity = cartItem.quantity;
            this.price = cartItem.price;
            return this;
        }

        public CartItem build() {
            return new CartItem(this);
        }
    }

    @Override
    public String toString() {
        return "==Cart Item Details==" +
                "\nCart Item ID: " + cartItemId +
                "\nCart ID: " + cartId +
                "\nProduct ID: " + productId +
                "\nQuantity: " + quantity +
                "\nPrice: " + price;
    }
}
