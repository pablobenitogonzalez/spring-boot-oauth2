package com.example;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.security.RolesAllowed;
import java.security.Principal;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
//@PreAuthorize("hasRole('ADMIN')")
public class GreetingController {

//    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
//    @PreAuthorize("#oauth2.hasScope('openid')")
//    @RolesAllowed(value = { "ROLE_ADMIN" })
    @RequestMapping("/greeting")
    public Map<String,Object> home(Principal user) {
        Map<String,Object> model = new HashMap<>();
        model.put("id", UUID.randomUUID().toString());
        model.put("content", "Hello user " + user.getName() + "!");
        return model;
    }

}
