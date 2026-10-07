package za.ac.cput.communitystoreplatform.repository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;
import org.springframework.boot.jdbc.test.autoconfigure.AutoConfigureTestDatabase;
import org.springframework.boot.jdbc.test.autoconfigure.AutoConfigureTestDatabase.Replace;
import za.ac.cput.communitystoreplatform.domain.User;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest(properties = {
        "spring.datasource.url=jdbc:h2:mem:testdb;NON_KEYWORDS=USER;DB_CLOSE_DELAY=-1",
        "spring.datasource.driver-class-name=org.h2.Driver",
        "spring.datasource.username=sa",
        "spring.datasource.password="
})
@AutoConfigureTestDatabase(replace = Replace.NONE)
class UserRepositoryTest {

    @Autowired
    private UserRepository repository;

    private User user;

    @BeforeEach
    void setUp() {

        user = new User.Builder()
                .setUserId("U001")
                .setFirstName("Lindo")
                .setLastName("Nanto")
                .build();

        repository.save(user);
    }

    @Test
    void findByFirstName() {

        List<User> users =
                repository.findByFirstName("Lindo");

        assertNotNull(users);
        assertEquals(1, users.size());
        assertEquals("Lindo",
                users.get(0).getFirstName());
    }

    @Test
    void findByLastName() {

        List<User> users =
                repository.findByLastName("Nanto");

        assertNotNull(users);
        assertEquals(1, users.size());
        assertEquals("Nanto",
                users.get(0).getLastName());
    }

    @Test
    void findById() {

        User found =
                repository.findById("U001").orElse(null);

        assertNotNull(found);
        assertEquals("U001", found.getUserId());
        assertEquals("Lindo", found.getFirstName());
    }

    @Test
    void save() {

        User newUser = new User.Builder()
                .setUserId("U002")
                .setFirstName("John")
                .setLastName("Smith")
                .build();

        User saved = repository.save(newUser);

        assertNotNull(saved);
        assertEquals("U002", saved.getUserId());
        assertEquals("John", saved.getFirstName());
    }

    @Test
    void delete() {

        repository.deleteById("U001");

        User found =
                repository.findById("U001").orElse(null);

        assertNull(found);
    }
}