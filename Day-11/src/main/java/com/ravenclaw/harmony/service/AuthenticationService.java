package com.ravenclaw.harmony.service;

import java.util.Date;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ravenclaw.harmony.config.AuthenticationResponse;
import com.ravenclaw.harmony.controller.AuthenticationRequest;
import com.ravenclaw.harmony.controller.RegisterRequest;
import com.ravenclaw.harmony.model.User;
import com.ravenclaw.harmony.model.enumerate.Role;
import com.ravenclaw.harmony.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.var;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final UserRepository repo; 

    public AuthenticationResponse register(RegisterRequest request) {
        System.out.println(new Date(System.currentTimeMillis()));
        var user = User.builder()
                .name(request.getName())
                .type(request.getType())
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .dob(request.getDob())
                .gender(request.getGender())
                .state(request.getState())
                .description(request.getDescription())
                .build();
        repo.save(user);

        return AuthenticationResponse.builder()
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(), request.getPassword()));
        System.out.println("apply");

        var user = repo.findByUsername(request.getUsername())
                .orElseThrow();
        int orgID = user.getOrgID();
        var jwtToken = jwtService.generateToken(user);
        System.out.println(orgID);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .orgID(orgID) 
                .build();

    }

	public User getUserById(Integer userId) {
        Optional<User> optionalUser = repo.findById(userId);

        if (optionalUser.isPresent()) {
            return optionalUser.get();
        } else {
            return null; 
        }

	}



}
