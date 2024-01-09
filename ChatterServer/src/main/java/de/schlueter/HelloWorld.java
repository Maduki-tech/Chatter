package de.schlueter;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorld {
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/")
    ResponseEntity<String> helloWorld() {
        String json = "{\"message\": \"Hello David!\"}";
        return new ResponseEntity<>(json, null, 200);

    }
}
