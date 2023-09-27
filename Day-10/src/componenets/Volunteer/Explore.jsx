import React, { useEffect, useState } from "react";
import "../../assets/css/Volunteer/Explore.css"; // Import your CSS file
import SearchIcon from "@mui/icons-material/Search"; // Import Material-UI search icon
import { Input } from "@mui/material";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import green from "../../assets/pics/green-earth.jpg";
import daisy from "../../assets/pics/daisyy.jpg";
import river from "../../assets/pics/river.jpg";
import purp from "../../assets/pics/tam-purp.jpg";
import star from "../../assets/pics/cotton-thumb.jpg";
import StarIcon from "@mui/icons-material/Star"; // Import StarIcon
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../redux/UserSlice";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const user = useSelector(selectUser);
  const orgname = user.user.email;
  const [isLogged, setIsLogged] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (orgname !== null) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, user);
  const navigate = useNavigate();
  if (!isLogged) {
    navigate("/");
  }
  const events = [
    {
      id: 1,
      title: "Green Earth Day Cleanup",
      date: "October 15, 2023",
      location: "Mumbai, Maharashtra",
      image: green,
    },
    {
      id: 2,
      title: "Nature Revival Project",
      date: "November 5, 2023",
      location: "Bengaluru, Karnataka",
      image: daisy,
    },
    {
      id: 3,
      title: "Clean Rivers Campaign",
      date: "December 12, 2023",
      location: "Chennai, Tamil Nadu",
      image: river,
    },
  ];
  const events1 = [
    {
      id: 4,
      title: "Dog Adoption Drive",
      date: "January 20, 2023",
      location: "Delhi, India",
      image: green,
    },
    {
      id: 5,
      title: "Pet Health and Wellness Workshop",
      date: "February 8, 2023",
      location: "Pune, Maharashtra",
      image: daisy,
    },
    {
      id: 6,
      title: "Medical Camp for Underprivileged",
      date: "March 15, 2023",
      location: "Hyderabad, Telangana",
      image: river,
    },
    {
      id: 7,
      title: "Emergency Fire Safety Training",
      date: "April 10, 2023",
      location: "Kolkata, West Bengal",
      image: daisy,
    },
    {
      id: 8,
      title: "Dog Park Cleanup Day",
      date: "May 5, 2023",
      location: "Jaipur, Rajasthan",
      image: river,
    },
    {
      id: 9,
      title: "Healthcare Awareness Seminar",
      date: "June 20, 2023",
      location: "Chandigarh, Punjab",
      image: green,
    },
  ];
  const allEvents = [
    {
      id: 1,
      title: "Green Earth Day Cleanup",
      date: "October 15, 2023",
      location: "Mumbai, Maharashtra",
      image: green,
    },
    {
      id: 2,
      title: "Nature Revival Project",
      date: "November 5, 2023",
      location: "Bengaluru, Karnataka",
      image: daisy,
    },
    {
      id: 3,
      title: "Clean Rivers Campaign",
      date: "December 12, 2023",
      location: "Chennai, Tamil Nadu",
      image: river,
    },
    {
      id: 4,
      title: "Dog Adoption Drive",
      date: "January 20, 2023",
      location: "Delhi, India",
      image: river,
    },
    {
      id: 5,
      title: "Pet Health and Wellness Workshop",
      date: "February 8, 2023",
      location: "Pune, Maharashtra",
      image: river,
    },
    {
      id: 6,
      title: "Medical Camp for Underprivileged",
      date: "March 15, 2023",
      location: "Hyderabad, Telangana",
      image: river,
    },
    {
      id: 7,
      title: "Emergency Fire Safety Training",
      date: "April 10, 2023",
      location: "Kolkata, West Bengal",
      image: river,
    },
    {
      id: 8,
      title: "Dog Park Cleanup Day",
      date: "May 5, 2023",
      location: "Jaipur, Rajasthan",
      image: river,
    },
    {
      id: 9,
      title: "Healthcare Awareness Seminar",
      date: "June 20, 2023",
      location: "Chandigarh, Punjab",
      image: river,
    },
    // ... Add more events
  ];
  const [enrolledEvents, setEnrolledEvents] = useState([]);

  // Function to toggle enrollment status for an event
  const toggleEnrollment = (eventId) => {
    if (enrolledEvents.includes(eventId)) {
      // If already enrolled, remove it from the list
      setEnrolledEvents(enrolledEvents.filter((id) => id !== eventId));
    } else {
      // If not enrolled, add it to the list
      setEnrolledEvents([...enrolledEvents, eventId]);
    }
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [rating, setRating] = useState(0);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  // Function to handle star rating
  const handleStarClick = (value) => {
    setRating(value);
  };

  // Function to handle feedback submission
  const handleFeedbackSubmit = () => {
    // You can add code here to submit the feedback
    // For now, we'll just mark it as submitted and reset the rating
    setFeedbackSubmitted(true);
    setRating(0);
  };

  // Function to filter events based on search query
  const filteredEvents = allEvents.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="explore-container">
      <div className="search-bar">
        <Input
          style={{ color: "white" }}
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button">
          <SearchIcon />
        </button>
      </div>
      {searchQuery ? ( // If there's a search query, render only filtered events
        <div className="event-list-org11">
          <h1>Search Results</h1>
          <Container fluid>
            <Row>
              {filteredEvents.map((event) => (
                <Col key={event.id} xs={12} md={6} lg={4}>
                  <Card className="event-card11">
                    <Card.Img
                      src={event.image}
                      alt={event.title}
                      className="event-image11"
                    />
                    <Card.Body className="event-details11">
                      <Card.Title>{event.title}</Card.Title>
                      <Card.Text>Date: {event.date}</Card.Text>
                      <Card.Text>Location: {event.location}</Card.Text>
                      <Button
                        className={`custom-enroll-button ${
                          enrolledEvents.includes(event.id) ? "enrolled" : ""
                        }`}
                        onClick={() => toggleEnrollment(event.id)}
                      >
                        {enrolledEvents.includes(event.id)
                          ? "Enrolled"
                          : "Enroll"}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      ) : (
        <div>
          {/* If no search query, render events and allEvents */}
          <div className="event-list-org11">
            <h1>For You, {orgname}</h1>
            <Container fluid>
              <Row>
                {events.map((event) => (
                  <Col key={event.id} xs={12} md={6} lg={4}>
                    <Card className="event-card11">
                      <Card.Img
                        src={event.image}
                        alt={event.title}
                        className="event-image11"
                      />
                      <Card.Body className="event-details11">
                        <Card.Title>{event.title}</Card.Title>
                        <Card.Text>Date: {event.date}</Card.Text>
                        <Card.Text>Location: {event.location}</Card.Text>
                        <Button
                          className={`custom-enroll-button ${
                            enrolledEvents.includes(event.id) ? "enrolled" : ""
                          }`}
                          onClick={() => toggleEnrollment(event.id)}
                        >
                          {enrolledEvents.includes(event.id)
                            ? "Enrolled"
                            : "Enroll"}
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
            <div
              className="custom-profile-box"
              onClick={() => {
                navigate("/volunteer/profile");
              }}
            >
              <div className="custom-profile-image">
                <img
                  src={purp}
                  alt="Custom Profile"
                  className="profile-image-act"
                />
              </div>
              <div className="custom-profile-text">
                <h2>Customize Your Profile!</h2>
                <p>Personalize your profile to stand out.</p>
              </div>
            </div>
            <div className="custom-profile-box">
              <div className="custom-profile-image">
                <img
                  src={star}
                  alt="Custom Profile"
                  className="profile-image-act"
                />
              </div>
              {feedbackSubmitted ? (
                <div className="custom-profile-text-feed">
                  <h2>Thank You For Your Feedback!</h2>
                </div>
              ) : (
                <div className="custom-profile-text">
                  <h2>Rate Your Last Event!</h2>
                  <div className="rating-stars">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <StarIcon
                        key={value}
                        onClick={() => handleStarClick(value)}
                        style={{
                          fontSize: "24px !important",
                          color: "gray !important",
                        }}
                        className={`star-icon custom-star-icon ${
                          value <= rating ? "selected" : ""
                        }`}
                      />
                    ))}
                  </div>
                  <Button
                    className="star-button"
                    onClick={handleFeedbackSubmit}
                  >
                    Submit Feedback
                  </Button>
                </div>
              )}
            </div>
          </div>
          <h1 className="more-events">More Events</h1>
          <Container fluid>
            <Row>
              {events1.map((event) => (
                <Col key={event.id} xs={12} md={6} lg={4}>
                  <Card className="event-card11">
                    <Card.Img
                      src={event.image}
                      alt={event.title}
                      className="event-image11"
                    />
                    <Card.Body className="event-details11">
                      <Card.Title>{event.title}</Card.Title>
                      <Card.Text>Date: {event.date}</Card.Text>
                      <Card.Text>Location: {event.location}</Card.Text>
                      <Button
                        className={`custom-enroll-button ${
                          enrolledEvents.includes(event.id) ? "enrolled" : ""
                        }`}
                        onClick={() => toggleEnrollment(event.id)}
                      >
                        {enrolledEvents.includes(event.id)
                          ? "Enrolled"
                          : "Enroll"}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Explore;
