package za.ac.cput.communitystoreplatform.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import za.ac.cput.communitystoreplatform.domain.Review;

public interface ReviewRepository extends JpaRepository<Review, String> {
}
