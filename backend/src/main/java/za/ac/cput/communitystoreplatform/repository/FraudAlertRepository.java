package za.ac.cput.communitystoreplatform.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import za.ac.cput.communitystoreplatform.domain.FraudAlert;

public interface FraudAlertRepository extends JpaRepository<FraudAlert, Integer> {
}
