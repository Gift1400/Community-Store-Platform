package za.ac.cput.communitystoreplatform.domain;

import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import java.util.*;

@Entity
public class User {
    @Id
    private String userId;
    private String firstName;
    private String lastName;
    private Role role;

    @Embedded
    private Contact contact;


}
