package za.ac.cput.communitystoreplatform.domain;

import jakarta.persistence.*;

import java.util.*;

@Entity
public class User {
    @Id
    private String userId;
    private String firstName;
    private String lastName;

    @ManyToOne
    @JoinColumn(name = "role")
    private Role role;

    @Embedded
    private Contact contact;

    protected User(){}

    public User(Builder builder) {
        this.userId = builder.userId;
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.role = builder.role;
        this.contact = builder.contact;
    }

    public Role getRole() {
        return role;
    }

    public String getUserId() {
        return userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public Contact getContact() {
        return contact;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId='" + userId + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", role=" + role +
                ", contact=" + contact +
                '}';
    }


    public static class Builder{
        private String userId;
        private String firstName;
        private String lastName;
        private Role role;
        private Contact contact;


        public Builder copy(User user){
            this.userId = user.userId;
            this.firstName = user.firstName;
            this.lastName = user.lastName;
            this.role = user.role;
            this.contact = user.contact;
            return this;
        }

        public Builder setUserId(String userId) {
            this.userId = userId;
            return this;
        }

        public Builder setFirstName(String firstName) {
            this.firstName = firstName;
            return this;
        }

        public Builder setLastName(String lastName) {
            this.lastName = lastName;
            return this;
        }

        public Builder setRole(Role role) {
            this.role = role;
            return this;
        }

        public Builder setContact(Contact contact) {
            this.contact = contact;
            return this;
        }

        public User build(){
            return new User(this);
        }
    }
}
