package com.example.demo;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

  private static final String template = "Hello %s!";

  @GetMapping("/greeting")
  public Greeting greeting(@RequestParam(required = false) String name) {

    String message = (name == null || name.isBlank()) ? "Hello!" : template.formatted(name); 

    return new Greeting(message); // HTTP Response 
  }
}