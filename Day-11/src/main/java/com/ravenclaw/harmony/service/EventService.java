package com.ravenclaw.harmony.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ravenclaw.harmony.model.Event;
import com.ravenclaw.harmony.repository.EventRepository;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    public Event getEventById(Integer eventId) {
        Optional<Event> eventOptional = eventRepository.findById(eventId);
        return eventOptional.orElse(null);
    }

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Event updateEvent(Event event) {
        return eventRepository.save(event);
    }

    public void deleteEvent(Integer eventId) {
        eventRepository.deleteById(eventId);
    }

	public List<Event> getEventsByOrgID(Integer orgID) {
		// TODO Auto-generated method stub
        return eventRepository.findByOrganizer_OrgID(orgID);
	}
}
