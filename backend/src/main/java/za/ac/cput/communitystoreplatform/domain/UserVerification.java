package za.ac.cput.communitystoreplatform.domain;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class UserVerification {
    @Id
    private int verificationId;
    private String verificationType;
    private String verificationStatus;
    private String verificationDocument;
    private LocalDate verifiedAt;

    protected UserVerification(){}

    public UserVerification(Builder builder){
        this.verificationId = builder.verificationId;
        this.verificationType = builder.verificationType;
        this.verificationStatus = builder.verificationStatus;
        this.verificationDocument = builder.verificationDocument;
        this.verifiedAt = builder.verifiedAt;
    }

    public int getVerificationId() {
        return verificationId;
    }

    public String getVerificationType() {
        return verificationType;
    }

    public String getVerificationStatus() {
        return verificationStatus;
    }

    public String getVerificationDocument() {
        return verificationDocument;
    }

    public LocalDate getVerifiedAt() {
        return verifiedAt;
    }

    @Override
    public String toString() {
        return "UserVerification{" +
                "verificationId=" + verificationId +
                ", verificationType='" + verificationType + '\'' +
                ", verificationStatus='" + verificationStatus + '\'' +
                ", verificationDocument='" + verificationDocument + '\'' +
                ", verifiedAt=" + verifiedAt +
                '}';
    }

    public static class Builder{
        private int verificationId;
        private String verificationType;
        private String verificationStatus;
        private String verificationDocument;
        private LocalDate verifiedAt;

        public Builder copy(UserVerification userVerification){
            this.verificationId = userVerification.verificationId;
            this.verificationType = userVerification.verificationType;
            this.verificationStatus = userVerification.verificationStatus;
            this.verificationDocument = userVerification.verificationDocument;
            this.verifiedAt = userVerification.verifiedAt;
            return this;
        }

        public Builder setVerificationId(int verificationId) {
            this.verificationId = verificationId;
            return this;
        }

        public Builder setVerificationType(String verificationType) {
            this.verificationType = verificationType;
            return this;
        }

        public Builder setVerificationStatus(String verificationStatus) {
            this.verificationStatus = verificationStatus;
            return this;
        }

        public Builder setVerificationDocument(String verificationDocument) {
            this.verificationDocument = verificationDocument;
            return this;
        }

        public Builder setVerifiedAt(LocalDate verifiedAt) {
            this.verifiedAt = verifiedAt;
            return this;
        }

        public UserVerification build(){
            return new UserVerification(this);
        }
    }
}
