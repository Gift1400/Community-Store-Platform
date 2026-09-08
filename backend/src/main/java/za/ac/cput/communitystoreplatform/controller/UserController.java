package za.ac.cput.communitystoreplatform.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import za.ac.cput.communitystoreplatform.domain.User;
import za.ac.cput.communitystoreplatform.service.impl.UserServiceImpl;
import java.util.*;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserServiceImpl userService;

    @Autowired
    public UserController(UserServiceImpl userService){
        this.userService = userService;
    }

    @PostMapping("/create")
    public User create(@RequestBody User user){
        return userService.create(user);
    }

    @GetMapping("/read/{userId}")
    public User read(@PathVariable String userId){
        return userService.read(userId);
    }

    @PutMapping("/update")
    public User update(@RequestBody User user){
        return userService.update(user);
    }

    @DeleteMapping("/delete/{userId}")
    public boolean delete(@PathVariable String userId){
        return userService.delete(userId);
    }

    @GetMapping("/getAll")
    public List<User> getAll(){
        return userService.getAll();
    }

}
