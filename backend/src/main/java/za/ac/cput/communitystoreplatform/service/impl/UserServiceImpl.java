package za.ac.cput.communitystoreplatform.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import za.ac.cput.communitystoreplatform.domain.User;
import za.ac.cput.communitystoreplatform.repository.UserRepository;
import za.ac.cput.communitystoreplatform.service.IUserService;
import java.util.List;

@Service
public class UserServiceImpl implements IUserService {
    private final UserRepository repository;

    @Autowired
    public UserServiceImpl(UserRepository repository){
        this.repository = repository;
    }

    @Override
    public User create(User user) {
        return repository.save(user);
    }

    @Override
    public User read(String userId) {
        return repository.findById(userId).orElse(null);
    }

    @Override
    public User update(User user) {
        return repository.save(user);
    }

    @Override
    public boolean delete(String userId) {
        if(repository.existsById(userId)){
            repository.deleteById(userId);
            return true;
        }
        return false;
    }

    @Override
    public List<User> getAll() {
        return repository.getAll();
    }

}
