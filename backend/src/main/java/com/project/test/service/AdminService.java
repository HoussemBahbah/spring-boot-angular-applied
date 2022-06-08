package com.project.test.service;



import com.project.test.entity.Admin;
import com.project.test.model.MessageResponse;
import com.project.test.repositories.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class AdminService implements UserDetailsService {

    @Autowired
    private AdminRepository adminRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Admin admin = adminRepository.findOneByUsernameIgnoreCase(username).orElse(null);
        return admin;
    }

    public MessageResponse save(Admin user) {
        boolean exist = adminRepository.existsById((user.getId()));
        if (exist) {
            return new MessageResponse(false, "Not Success", "Existing");
        }
        adminRepository.save(user);
        return new MessageResponse(true, "Success", "The saving request has been processed successfully");
    }

    public MessageResponse update(Admin admin) {
        adminRepository.save(admin);
        return new MessageResponse(true, "Success", "The Update request has been processed successfully");
    }

    public MessageResponse delete(Long id) {
        adminRepository.deleteById(id);
        return new MessageResponse(true, "Success", "The Delete request has been processed successfully");

    }

    public Admin findById(Long id) {
        return adminRepository.findById(id).orElse(null);
    }

    public List<Admin> findAll() {
        return adminRepository.findAll();
    }


}

