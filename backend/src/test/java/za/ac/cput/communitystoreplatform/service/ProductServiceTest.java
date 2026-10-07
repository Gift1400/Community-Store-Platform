package za.ac.cput.communitystoreplatform.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import za.ac.cput.communitystoreplatform.domain.Product;
import za.ac.cput.communitystoreplatform.repository.ProductRepository;
import za.ac.cput.communitystoreplatform.service.impl.ProductServiceImpl;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ProductServiceTest {

    @Mock
    private ProductRepository repository;

    private ProductServiceImpl service;
    private Product product;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);

        service = new ProductServiceImpl(repository);

        product = new Product.Builder()
                .setProductId(1)
                .setProductName("Denim Jacket")
                .setDescription("Gently used denim jacket")
                .setPrice(250.00)
                .setQuantity(3)
                .setCondition("USED")
                .setListingType("FIXED_PRICE")
                .setEcoFriendly(true)
                .setStatus("ACTIVE")
                .setDateCreated(LocalDate.now())
                .setDateUpdated(LocalDate.now())
                .build();
    }

    @Test
    void create() {
        when(repository.save(product)).thenReturn(product);

        Product result = service.create(product);

        assertNotNull(result);
        assertEquals("Denim Jacket", result.getProductName());
        assertEquals(250.00, result.getPrice());

        verify(repository).save(product);
    }

    @Test
    void update() {
        when(repository.save(product)).thenReturn(product);

        Product result = service.update(product);

        assertNotNull(result);
        assertEquals(1, result.getProductId());

        verify(repository).save(product);
    }

    @Test
    void read() {
        when(repository.findById(1))
                .thenReturn(Optional.of(product));

        Product result = service.read(1);

        assertNotNull(result);
        assertEquals(1, result.getProductId());
        assertEquals("Denim Jacket", result.getProductName());
    }

    @Test
    void readNotFound() {
        when(repository.findById(99))
                .thenReturn(Optional.empty());

        Product result = service.read(99);

        assertNull(result);
    }

    @Test
    void getAll() {
        List<Product> products = Arrays.asList(product);

        when(repository.findAll()).thenReturn(products);

        List<Product> result = service.getAll();

        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals("Denim Jacket",
                result.get(0).getProductName());

        verify(repository).findAll();
    }

    @Test
    void findByProductName() {
        List<Product> products = Arrays.asList(product);

        when(repository.findByProductNameContainingIgnoreCase("Denim"))
                .thenReturn(products);

        List<Product> result =
                service.findByProductName("Denim");

        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals("Denim Jacket",
                result.get(0).getProductName());
    }

    @Test
    void findByStatus() {
        List<Product> products = Arrays.asList(product);

        when(repository.findByStatus("ACTIVE"))
                .thenReturn(products);

        List<Product> result =
                service.findByStatus("ACTIVE");

        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals("ACTIVE",
                result.get(0).getStatus());

        verify(repository).findByStatus("ACTIVE");
    }

    @Test
    void delete() {
        doNothing().when(repository).deleteById(1);

        service.delete(1);

        verify(repository).deleteById(1);
    }
}
