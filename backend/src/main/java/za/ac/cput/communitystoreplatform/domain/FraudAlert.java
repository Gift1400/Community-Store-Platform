package za.ac.cput.communitystoreplatform.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.springframework.resilience.annotation.EnableResilientMethods;

@Entity
@Table(name = "fraudAlert")
public class FraudAlert {
    @Id
    private int fAlertId;


}
