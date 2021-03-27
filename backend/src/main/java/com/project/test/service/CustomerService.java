package com.project.test.service;

import com.project.test.entity.Customer;
import com.project.test.model.MessageResponse;
import com.project.test.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public MessageResponse save(Customer customer){
        boolean exist = customerRepository.existsById((customer.getId()));
        if (exist) {
            return new MessageResponse(false,"Not Success","Existing");

        }
        customerRepository.save(customer);
        return new MessageResponse(true, "Success", "Backend responded save ok");

    }

    public MessageResponse update(Customer customer){

        customerRepository.save(customer);
        return new MessageResponse(true, "Success", "Backend responded update  ok");

    }

    public MessageResponse delete(Long id) {
        customerRepository.deleteById(id);
        return new MessageResponse(true, "Success", "Backend responded delete ok");

    }

    public Customer findById(Long id) {
        return customerRepository.findById(id).orElse(null);
    }

    public List<Customer> findAll() {
        return customerRepository.findAll();

    }

}