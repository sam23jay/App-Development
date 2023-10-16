package com.ravenclaw.harmony.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ravenclaw.harmony.config.AuthenticationResponse;
import com.ravenclaw.harmony.dto.UserListResponseDTO;
import com.ravenclaw.harmony.model.Volunteer;
import com.ravenclaw.harmony.service.VolunteerAuthService;

import lombok.RequiredArgsConstructor;
@RestController
@RequestMapping("/auth/vol")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class AuthenticationVolunteer {
	private final VolunteerAuthService service;
@PostMapping("/register")
public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request)
{
	return ResponseEntity.ok(service.register(request));
}
@PostMapping("/authenticate")
public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) throws Exception
{
	return ResponseEntity.ok(service.authenticate(request));
}

@GetMapping("/user/{userId}")
public ResponseEntity<UserListResponseDTO> getUserById(@PathVariable Integer userId) {
    Volunteer user = service.getUserById(userId);

    if (user != null) {
        UserListResponseDTO UserListResponseDTO = mapUserToUserListResponseDTO(user);
        return ResponseEntity.ok(UserListResponseDTO);
    } else {
        return ResponseEntity.notFound().build();
    }
}

private UserListResponseDTO mapUserToUserListResponseDTO(Volunteer user) {
    UserListResponseDTO UserListResponseDTO = new UserListResponseDTO();
    UserListResponseDTO.setId(user.getVolID());
    UserListResponseDTO.setUsername(user.getUsername());
    UserListResponseDTO.setDescription(user.getDescription());

    return UserListResponseDTO;
}

}
