package com.project.test.controller;

import com.project.test.entity.Customer;
import com.project.test.model.MessageResponse;
import com.project.test.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
    @RequestMapping("api/customer")
    @CrossOrigin("*")
    public class CustomerController {

        @Autowired
        private CustomerService customerService;

        @PostMapping
        public MessageResponse save(@RequestBody Customer customer) {
            return customerService.save(customer);
        }

        @PutMapping
        public MessageResponse update(@RequestBody Customer customer) {
            return customerService.update(customer);
        }

        @DeleteMapping("/{id}")
        public MessageResponse delete(@PathVariable Long id) {
            return customerService.delete(id);
        }

        @GetMapping
        public List<Customer> findAll() {
            return customerService.findAll();
        }

        @GetMapping("/{id}")
        public Customer findById(@PathVariable Long id) {
            return customerService.findById(id);
        }

}
