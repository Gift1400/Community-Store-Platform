package za.ac.cput.communitystoreplatform.domain;

import jakarta.persistence.*;

@Embeddable
public class Contact {
    private String phone;
    private String email;
    private String altPhone;

    protected Contact(){}

    public Contact(Builder builder){
        this.phone = builder.phone;
        this.email = builder.email;
        this.altPhone = builder.altPhone;
    }

    public String getPhone(){ return phone;}
    public String getEmail(){ return email;}
    public String getAltPhone(){ return altPhone;}

    public String toString(){
        return "Contact { " + "\n" +
                "Phone: " + phone + "\n" +
                "Email: " + email + "\n" +
                "Alt Phone: " + altPhone + "}";
    }

    public static class Builder{
        private String phone;
        private String email;
        private String altPhone;

        public Builder copy(Contact contact){
            this.phone = contact.phone;
            this.email = contact.email;
            this.altPhone = contact.altPhone;
            return this;
        }

        public Builder setPhone(String phone){
            this.phone = phone;
            return this;
        }
        public Builder setEmail(String email){
            this.email = email;
            return this;
        }
        public Builder setAltPhone(String altPhone){
            this.altPhone = altPhone;
            return this;
        }

        public Contact build(){
            return new Contact(this);
        }
    }

}
