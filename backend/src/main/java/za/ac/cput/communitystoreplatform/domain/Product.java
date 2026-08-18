package za.ac.cput.communitystoreplatform.domain;

import jakarta.persistence.*;

import java.time.DateTimeException;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
public class Product {
    @Id
    private int productId;
    private String productName;
    private String description;
    private double price;
    private int quantity;
    private String condition;
    private String listingType;
    private boolean ecoFriendly;
    private String status;
    private LocalDate dateCreated;
    private LocalDate dateUpdated;

    protected Product(){}

    public Product(Builder builder){
        this.productId = builder.productId;
        this.productName = builder.productName;
        this.description = builder.description;
        this.price = builder.price;
        this.quantity = builder.quantity;
        this.condition = builder.condition;
        this.listingType = builder.listingType;
        this.ecoFriendly = builder.ecoFriendly;
        this.status = builder.status;
        this.dateCreated = builder.dateCreated;
        this.dateUpdated = builder.dateUpdated;
    }

    public int getProductId(){ return productId;}
    public String getProductName(){ return productName;}
    public String getDescription(){ return description;}
    public double getPrice(){ return price;}
    public int getQuantity(){ return quantity;}
    public String getCondition(){ return condition;}
    public String getListingType(){ return listingType;}
    public boolean getEcoFriendly(){ return ecoFriendly;}
    public String getStatus(){ return status;}
    public LocalDate getDateCreated(){ return dateCreated;}
    public LocalDate getDateUpdated(){ return dateUpdated;}

    @Override
    public String toString() {
        return "Product{" +
                "productId=" + productId +
                ", productName='" + productName + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", quantity=" + quantity +
                ", condition='" + condition + '\'' +
                ", listingType='" + listingType + '\'' +
                ", ecoFriendly=" + ecoFriendly +
                ", status='" + status + '\'' +
                ", dateCreated=" + dateCreated +
                ", dateUpdated=" + dateUpdated +
                '}';
    }

    public static class Builder{
        private int productId;
        private String productName;
        private String description;
        private double price;
        private int quantity;
        private String condition;
        private String listingType;
        private boolean ecoFriendly;
        private String status;
        private LocalDate dateCreated;
        private LocalDate dateUpdated;

        public Builder copy(Product product){
            this.productId = product.productId;
            this.productName = product.productName;
            this.description = product.description;
            this.price = product.price;
            this.quantity = product.quantity;
            this.condition = product.condition;
            this.listingType = product.listingType;
            this.ecoFriendly = product.ecoFriendly;
            this.status = product.status;
            this.dateCreated = product.dateCreated;
            this.dateUpdated = product.dateUpdated;
            return this;
        }


        public Builder setProductId(int productId) {
            this.productId = productId;
            return this;
        }

        public Builder setProductName(String productName) {
            this.productName = productName;
            return this;
        }

        public Builder setDescription(String description) {
            this.description = description;
            return this;
        }

        public Builder setPrice(double price) {
            this.price = price;
            return this;
        }

        public Builder setQuantity(int quantity) {
            this.quantity = quantity;
            return this;
        }

        public Builder setCondition(String condition) {
            this.condition = condition;
            return this;
        }

        public Builder setListingType(String listingType) {
            this.listingType = listingType;
            return this;
        }

        public Builder setEcoFriendly(boolean ecoFriendly) {
            this.ecoFriendly = ecoFriendly;
            return this;
        }

        public Builder setStatus(String status) {
            this.status = status;
            return this;
        }

        public Builder setDateCreated(LocalDate dateCreated) {
            this.dateCreated = dateCreated;
            return this;
        }

        public Builder setDateUpdated(LocalDate dateUpdated) {
            this.dateUpdated = dateUpdated;
            return this;
        }

        public Product build(){
            return new Product(this);
        }
    }
}
