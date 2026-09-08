package za.ac.cput.communitystoreplatform.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import za.ac.cput.communitystoreplatform.domain.User;
import java.util.*;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    List<User> getAll();

}
