package za.ac.cput.communitystoreplatform.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
public class Cart {
    @Id
    private int cartId;
    private int buyerId;
    private BigDecimal totalAmount;
    private LocalDateTime createdAt;

    protected Cart() {
    }

    private Cart(Builder builder) {
        this.cartId = builder.cartId;
        this.buyerId = builder.buyerId;
        this.totalAmount = builder.totalAmount;
        this.createdAt = builder.createdAt;
    }

    public int getCartId() {
        return cartId;
    }

    public int getBuyerId() {
        return buyerId;
    }

    public BigDecimal getTotalAmount() {
        return totalAmount;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void addItem(int productId, int quantity) {
        // Implementation will be added when CartItem is implemented.
    }

    public void removeItem(int productId) {
        // Implementation will be added when CartItem is implemented.
    }

    public void clearCart() {
        this.totalAmount = BigDecimal.ZERO;
    }

    public BigDecimal getTotal() {
        return totalAmount;
    }

    // TODO: Completed when the Order entity is created.
    // public Order checkout() {
    //     return null;
    // }

    public static class Builder {
        private int cartId;
        private int buyerId;
        private BigDecimal totalAmount;
        private LocalDateTime createdAt;

        public Builder setCartId(int cartId) {
            this.cartId = cartId;
            return this;
        }

        public Builder setBuyerId(int buyerId) {
            this.buyerId = buyerId;
            return this;
        }

        public Builder setTotalAmount(BigDecimal totalAmount) {
            this.totalAmount = totalAmount;
            return this;
        }

        public Builder setCreatedAt(LocalDateTime createdAt) {
            this.createdAt = createdAt;
            return this;
        }

        public Builder copy(Cart cart) {
            this.cartId = cart.cartId;
            this.buyerId = cart.buyerId;
            this.totalAmount = cart.totalAmount;
            this.createdAt = cart.createdAt;
            return this;
        }

        public Cart build() {
            return new Cart(this);
        }
    }

    @Override
    public String toString() {
        return "==Cart Details==" +
                "\nCart ID: " + cartId +
                "\nBuyer ID: " + buyerId +
                "\nTotal Amount: " + totalAmount +
                "\nCreated At: " + createdAt;
    }
}
