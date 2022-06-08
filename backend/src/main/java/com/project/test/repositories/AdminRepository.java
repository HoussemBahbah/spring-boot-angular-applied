package com.project.test.repositories;



import com.project.test.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin, Long> {

    Optional<Admin> findOneByUsernameIgnoreCase(String username);

    boolean existsByUsernameIgnoreCase(String username);

}
