package com.ravenclaw.harmony.controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ravenclaw.harmony.dto.EventRequestDTO;
import com.ravenclaw.harmony.dto.EventResponseDTO;
import com.ravenclaw.harmony.dto.UserDTO;
import com.ravenclaw.harmony.model.Event;
import com.ravenclaw.harmony.model.User;
import com.ravenclaw.harmony.repository.EventRepository;
import com.ravenclaw.harmony.repository.UserRepository;
import com.ravenclaw.harmony.service.EventService;


import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/ev")
@CrossOrigin(origins = "http://localhost:3000") 
public class EventController {

    @Autowired
    private EventService eventService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private EventRepository eventRepository;
    @PostMapping("/post")
    public ResponseEntity<EventResponseDTO> createEvent(@RequestBody EventRequestDTO eventRequestDTO) {
		User organizer = userRepository.findById(eventRequestDTO.getOrganizer().getOrgID()).orElse(null);
        Event event = new Event();
        event.setName(eventRequestDTO.getName());
        event.setType(eventRequestDTO.getType());
        event.setDescription(eventRequestDTO.getDescription());
        event.setOrganizer(organizer);
        event.setAddress(eventRequestDTO.getAddress());
        event.setEventDate(eventRequestDTO.getEventDate());

        Event createdEvent = eventService.createEvent(event);

        EventResponseDTO responseDTO = new EventResponseDTO();
        responseDTO.setEventID(createdEvent.getEventID());
        responseDTO.setName(createdEvent.getName());
        responseDTO.setType(createdEvent.getType());
        responseDTO.setDescription(createdEvent.getDescription());
        responseDTO.setAddress(createdEvent.getAddress());
        responseDTO.setEventDate(createdEvent.getEventDate());
        
        responseDTO.setOrganizer(mapUserToUserDTO(createdEvent.getOrganizer()));
        

        return ResponseEntity.ok(responseDTO);
    }

    @PostMapping("/enroll/{eventID}/{volunteerID}")
    public ResponseEntity<Void> enrollVolunteerInEvent(@PathVariable Integer eventID, @PathVariable Integer volunteerID) {
        Event event = eventService.getEventById(eventID);
        User volunteer = userRepository.findById(volunteerID).orElse(null);

        if (event == null || volunteer == null) {
            return ResponseEntity.notFound().build();
        }

        event.getVolunteers().add(volunteer);
        eventRepository.save(event);

        return ResponseEntity.ok().build(); 
    }


    @GetMapping("/enrolledEvents/{volunteerID}")
    public ResponseEntity<List<EventResponseDTO>> getEventsEnrolledByVolunteer(@PathVariable Integer volunteerID) {
        User volunteer = userRepository.findById(volunteerID).orElse(null);

        if (volunteer == null) {
            return ResponseEntity.notFound().build();
        }

        List<Event> enrolledEvents = volunteer.getEvents();

        List<EventResponseDTO> responseDTOs = enrolledEvents.stream()
                .map(this::mapEventToEventResponseDTO)
                .collect(Collectors.toList());

        return ResponseEntity.ok(responseDTOs);
    }


    @GetMapping("/get/{eventID}")
    public ResponseEntity<EventResponseDTO> getEvent(@PathVariable Integer eventID) {
        Event event = eventService.getEventById(eventID);

        EventResponseDTO responseDTO = new EventResponseDTO();
        responseDTO.setEventID(event.getEventID());
        responseDTO.setName(event.getName());
        responseDTO.setType(event.getType());
        responseDTO.setDescription(event.getDescription());
        responseDTO.setOrganizer(mapUserToUserDTO(event.getOrganizer()));

        return ResponseEntity.ok(responseDTO);
    }
    @GetMapping("/getByOrgID/{orgID}")
    public ResponseEntity<List<EventResponseDTO>> getEventsByOrgID(@PathVariable Integer orgID) {
        List<Event> events = eventService.getEventsByOrgID(orgID);

        List<EventResponseDTO> responseDTOs = events.stream()
                .map(event -> {
                    EventResponseDTO responseDTO = new EventResponseDTO();
                    responseDTO.setEventID(event.getEventID());
                    responseDTO.setName(event.getName());
                    responseDTO.setType(event.getType());
                    responseDTO.setDescription(event.getDescription());
                    responseDTO.setAddress(event.getAddress());
                    responseDTO.setOrganizer(mapUserToUserDTO(event.getOrganizer()));
                    responseDTO.setEventDate(event.getEventDate());
                    return responseDTO;
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok(responseDTOs);
    }

    @GetMapping("/get")
    public ResponseEntity<List<EventResponseDTO>> getAllEvents() {
        List<Event> events = eventService.getAllEvents();

        List<EventResponseDTO> responseDTOs = events.stream()
                .map(event -> {
                    EventResponseDTO responseDTO = new EventResponseDTO();
                    responseDTO.setEventID(event.getEventID());
                    responseDTO.setName(event.getName());
                    responseDTO.setEventDate(event.getEventDate());
                    responseDTO.setAddress(event.getAddress());
                    responseDTO.setType(event.getType());
                    responseDTO.setDescription(event.getDescription());
                    responseDTO.setOrganizer(mapUserToUserDTO(event.getOrganizer()));
                    return responseDTO;
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok(responseDTOs);
    }

    @PutMapping("/put/{eventID}")
    public ResponseEntity<EventResponseDTO> updateEvent(@PathVariable Integer eventID, @RequestBody EventRequestDTO eventRequestDTO) {
        Event existingEvent = eventService.getEventById(eventID);

        existingEvent.setName(eventRequestDTO.getName());
        existingEvent.setType(eventRequestDTO.getType());
        existingEvent.setDescription(eventRequestDTO.getDescription());
        existingEvent.setAddress(eventRequestDTO.getAddress());
        existingEvent.setEventDate(eventRequestDTO.getEventDate());
        Event updatedEvent = eventService.updateEvent(existingEvent);

        EventResponseDTO responseDTO = new EventResponseDTO();
        responseDTO.setEventID(updatedEvent.getEventID());
        responseDTO.setName(updatedEvent.getName());
        responseDTO.setType(updatedEvent.getType());
        responseDTO.setDescription(updatedEvent.getDescription());
        responseDTO.setAddress(updatedEvent.getAddress());
        responseDTO.setEventDate(updatedEvent.getEventDate());
        responseDTO.setOrganizer(mapUserToUserDTO(updatedEvent.getOrganizer()));

        return ResponseEntity.ok(responseDTO);
    }

    @DeleteMapping("/del/{eventID}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Integer eventID) {
        eventService.deleteEvent(eventID);

        return ResponseEntity.noContent().build();
    }

    private UserDTO mapUserToUserDTO(User user) {
        if (user == null) {
            return null; 
        }

        UserDTO userDTO = new UserDTO();
        userDTO.setOrgID(user.getOrgID());
        userDTO.setName(user.getName());
        userDTO.setType(user.getType());
        return userDTO;
    }
    private EventResponseDTO mapEventToEventResponseDTO(Event event) {
        EventResponseDTO responseDTO = new EventResponseDTO();
        responseDTO.setEventID(event.getEventID());
        responseDTO.setName(event.getName());
        responseDTO.setType(event.getType());
        responseDTO.setDescription(event.getDescription());
        responseDTO.setAddress(event.getAddress());
        responseDTO.setOrganizer(mapUserToUserDTO(event.getOrganizer()));
        responseDTO.setEventDate(event.getEventDate());

        return responseDTO;
    }

}
