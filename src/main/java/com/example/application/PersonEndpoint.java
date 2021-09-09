package com.example.application;

import java.util.Random;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.flow.server.connect.Endpoint;

@Endpoint
@AnonymousAllowed
public class PersonEndpoint {
    public Person getPerson(){
        Person person = new Person();
        Random random = new Random();
        int randomNum = random.nextInt(10);
        person.setFirstName("firstName"+randomNum);
        person.setLastName("lastName"+randomNum);
        return person;
    }
}
