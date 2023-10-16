package com.ravenclaw.harmony.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ravenclaw.harmony.config.AuthenticationResponse;
import com.ravenclaw.harmony.dto.UserListResponseDTO;
import com.ravenclaw.harmony.model.User;
import com.ravenclaw.harmony.service.AuthenticationService;
import com.ravenclaw.harmony.service.EventService;

import lombok.RequiredArgsConstructor;
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {
	private final AuthenticationService service;
	private final EventService eventService;
@PostMapping("/register")
public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) throws Exception
{
	return ResponseEntity.ok(service.register(request));
}
@PostMapping("/authenticate")
public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) throws Exception
{
	return ResponseEntity.ok(service.authenticate(request));
}

@PutMapping("/isNewUser")
public void update(@RequestParam boolean isNewUser )
{
	service.UpdateNewUser(isNewUser);
}
@PostMapping("/uploadImage")
public ResponseEntity<String> uploadImage(
    @RequestParam Integer eventId,
    @RequestPart("profileImage") MultipartFile profileImage,
    @RequestPart("dImage1") MultipartFile dImage1,
    @RequestPart("dImage2") MultipartFile dImage2,
    @RequestPart("dImage3") MultipartFile dImage3
) {
	System.out.println("Hello");
    try {
        eventService.uploadImages(eventId, profileImage, dImage1, dImage2, dImage3);
        return ResponseEntity.ok("Images uploaded successfully.");
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Image upload failed: " + e.getMessage());
    }
}
@GetMapping("/user/{userId}")
public ResponseEntity<UserListResponseDTO> getUserById(@PathVariable Integer userId) {
    User user = service.getUserById(userId);

    if (user != null) {
        UserListResponseDTO UserListResponseDTO = mapUserToUserListResponseDTO(user);
        return ResponseEntity.ok(UserListResponseDTO);
    } else {
        return ResponseEntity.notFound().build();
    }
}

private UserListResponseDTO mapUserToUserListResponseDTO(User user) {
    UserListResponseDTO UserListResponseDTO = new UserListResponseDTO();
    UserListResponseDTO.setId(user.getOrgID());
    UserListResponseDTO.setUsername(user.getUsername());
    UserListResponseDTO.setDescription(user.getDescription());
   UserListResponseDTO.setName(user.getName());
    return UserListResponseDTO;
}

}
