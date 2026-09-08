package za.ac.cput.communitystoreplatform.service;

import za.ac.cput.communitystoreplatform.domain.User;
import java.util.*;

public interface IUserService extends IService<User, String>{
    List<User> getAll();
}
