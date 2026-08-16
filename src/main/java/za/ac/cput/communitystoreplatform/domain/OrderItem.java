package za.ac.cput.communitystoreplatform.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class OrderItem {
    @Id
    private int orderItemId;
    private int orderId;
    private int productId;
    private int quantity;
    private double price;

    protected OrderItem() {
    }

    private OrderItem(Builder builder) {
        this.orderItemId = builder.orderItemId;
        this.orderId = builder.orderId;
        this.productId = builder.productId;
        this.quantity = builder.quantity;
        this.price = builder.price;
    }

    public int getOrderItemId() {
        return orderItemId;
    }

    public int getOrderId() {
        return orderId;
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

    public double getSubtotal() {
        return price * quantity;
    }

    public static class Builder {
        private int orderItemId;
        private int orderId;
        private int productId;
        private int quantity;
        private double price;

        public Builder setOrderItemId(int orderItemId) {
            this.orderItemId = orderItemId;
            return this;
        }

        public Builder setOrderId(int orderId) {
            this.orderId = orderId;
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

        public Builder copy(OrderItem orderItem) {
            this.orderItemId = orderItem.orderItemId;
            this.orderId = orderItem.orderId;
            this.productId = orderItem.productId;
            this.quantity = orderItem.quantity;
            this.price = orderItem.price;
            return this;
        }

        public OrderItem build() {
            return new OrderItem(this);
        }
    }

    @Override
    public String toString() {
        return "==Order Item Details==" +
                "\nOrder Item ID: " + orderItemId +
                "\nOrder ID: " + orderId +
                "\nProduct ID: " + productId +
                "\nQuantity: " + quantity +
                "\nPrice: " + price;
    }
}
