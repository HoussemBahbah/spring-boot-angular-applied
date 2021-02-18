package com.project.test.repositories;

import com.project.test.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

        boolean existsByUserName(String string);
}
