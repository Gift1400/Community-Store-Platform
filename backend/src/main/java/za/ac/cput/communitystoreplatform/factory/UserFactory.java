package za.ac.cput.communitystoreplatform.factory;

import za.ac.cput.communitystoreplatform.domain.Contact;
import za.ac.cput.communitystoreplatform.domain.Role;
import za.ac.cput.communitystoreplatform.domain.User;
import za.ac.cput.communitystoreplatform.util.Helper;

public class UserFactory {
    public User createUser(String userId, String firstName,
                           String lastName, Role role,  Contact contact){

        if(Helper.isNullOrEmpty(userId)
        && Helper.isNullOrEmpty(firstName)
        && Helper.isNullOrEmpty(lastName)
        && Helper.isNull(role)
        && Helper.isNull(contact)){
            return null;
        }


        return new User.Builder()
                .setUserId(userId)
                .setFirstName(firstName)
                .setLastName(lastName)
                .setRole(role)
                .setContact(contact)
                .build();
    }

}
