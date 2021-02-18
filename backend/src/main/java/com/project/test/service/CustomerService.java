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
        boolean exist = customerRepository.existsByUserName((customer.getUserName()));
        if (exist) {
            return new MessageResponse(false,"Attention","Client existe déja");

        }
        customerRepository.save(customer);
        return new MessageResponse(true, "Succès", "Opération effectuée");

    }

    public MessageResponse update(Customer customer){

        boolean exist = customerRepository.existsByUserName((customer.getUserName()));

        if (exist) {
            return new MessageResponse(false,"Attention","Client existe déja");
        }
        customerRepository.save(customer);
        return new MessageResponse(true, "Succès", "Opération effectuée");

    }

    public MessageResponse delete(Long id) {
        customerRepository.deleteById(id);
        return new MessageResponse(true, "Succès", "Opération effectuée");

    }

    public Customer findById(Long id) {
        return customerRepository.findById(id).orElse(null);
    }

    public List<Customer> findAll() {
        return customerRepository.findAll();

    }

}