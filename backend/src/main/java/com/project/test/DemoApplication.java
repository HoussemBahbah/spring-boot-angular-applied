package com.project.test;

import com.project.test.entity.Admin;
import com.project.test.repositories.AdminRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@SpringBootApplication
public class DemoApplication {


    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Component
    @AllArgsConstructor
    public class StartRunner implements ApplicationRunner {

        @Autowired
        private AdminRepository adminDetailRepository;
        @Autowired
        private PasswordEncoder passwordEncoder;

        @Override
        public void run(ApplicationArguments args) throws Exception {

            boolean userExist = adminDetailRepository.existsByUsernameIgnoreCase("user");
            if (!userExist) {
                Admin userDetail = new Admin("user", passwordEncoder.encode("password"));
                adminDetailRepository.save(userDetail);
            }

        }

    }

}
