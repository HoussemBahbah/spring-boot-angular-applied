package com.project.test.controller;



import com.project.test.config.JwtTokenUtil;
import com.project.test.entity.Admin;
import com.project.test.model.LoginRequest;
import com.project.test.model.LoginResponse;
import com.project.test.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private AdminService userDetailsService;

    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody LoginRequest authenticationRequest)
            throws Exception {
        Admin userDetails;
        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
        userDetails = (Admin) userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        String token = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(new LoginResponse(token));

    }


    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        }
    }
}
