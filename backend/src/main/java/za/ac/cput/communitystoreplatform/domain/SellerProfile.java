package za.ac.cput.communitystoreplatform.domain;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class SellerProfile {
    @Id
    private int sellerId;
    private String storeName;
    private String storeDescription;
    private String businessRegistrationNo;
    private String verificationStatus;
    private LocalDate createdAt;

    protected SellerProfile(){}

    public SellerProfile(Builder builder){
        this.sellerId = builder.sellerId;
        this.storeName = builder.storeName;
        this.storeDescription = builder.storeDescription;
        this.businessRegistrationNo = builder.businessRegistrationNo;
        this.verificationStatus = builder.verificationStatus;
        this.createdAt = builder.createdAt;
    }

    public int getSellerId() {
        return sellerId;
    }

    public String getStoreName() {
        return storeName;
    }

    public String getStoreDescription() {
        return storeDescription;
    }

    public String getBusinessRegistrationNo() {
        return businessRegistrationNo;
    }

    public String getVerificationStatus() {
        return verificationStatus;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    @Override
    public String toString() {
        return "SellerProfile{" +
                "sellerId=" + sellerId +
                ", storeName='" + storeName + '\'' +
                ", storeDescription='" + storeDescription + '\'' +
                ", businessRegistrationNo='" + businessRegistrationNo + '\'' +
                ", verificationStatus='" + verificationStatus + '\'' +
                ", createAt=" + createdAt +
                '}';
    }

    public static class Builder{
        private int sellerId;
        private String storeName;
        private String storeDescription;
        private String businessRegistrationNo;
        private String verificationStatus;
        private LocalDate createdAt;

        public Builder copy(SellerProfile sellerProfile){
            this.sellerId = sellerProfile.sellerId;
            this.storeName = sellerProfile.storeName;
            this.storeDescription = sellerProfile.storeDescription;
            this.businessRegistrationNo = sellerProfile.businessRegistrationNo;
            this.verificationStatus = sellerProfile.verificationStatus;
            this.createdAt = sellerProfile.createdAt;
            return this;
        }

        public Builder setSellerId(int sellerId) {
            this.sellerId = sellerId;
            return this;
        }

        public Builder setStoreName(String storeName) {
            this.storeName = storeName;
            return this;
        }

        public Builder setStoreDescription(String storeDescription) {
            this.storeDescription = storeDescription;
            return this;
        }

        public Builder setBusinessRegistrationNo(String businessRegistrationNo) {
            this.businessRegistrationNo = businessRegistrationNo;
            return this;
        }

        public Builder setVerificationStatus(String verificationStatus) {
            this.verificationStatus = verificationStatus;
            return this;
        }

        public Builder setCreatedAt(LocalDate createdAt) {
            this.createdAt = createdAt;
            return this;
        }

        public SellerProfile build(){
            return new SellerProfile(this);
        }
    }
}
