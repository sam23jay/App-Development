import React, { useEffect, useRef, useState } from "react";
import "../assets/css/OrgDashboard.css";
import AdminPannel from "./AdminPannel";
import green from "../assets/pics/green-earth.jpg";
import daisy from "../assets/pics/daisyy.jpg";
import river from "../assets/pics/river.jpg";
import purp from "../assets/pics/tam-purp.jpg";
import "../assets/css/ProfileOrd.css";
import "../assets/css/DashboardOrg.css";
import logo from "./earth.png";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/UserSlice";
import prof from "./nike.webp";
import { PieChart, Pie, Cell } from "recharts";
import "../assets/css/AnalyticsOrg.css";
import "../assets/css/EventOrg.css";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import tileearth from "../assets/pics/bg-domain.jpg";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import {
  faInstagram,
  faGoogle,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/VolunteerOrg.css";
import {
  faCalendar,
  faUsers,
  faBuilding,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  Bar,
  BarChart,
} from "recharts";
import Footer from "./Footer";
import { Button, Input, Label } from "reactstrap";
import "../assets/css/AddEvent.css";
import { useNavigate } from "react-router-dom";
const ProfileComponent = () => {
  const eventsprof = [
    {
      id: 1,
      title: "Green Earth Summit",
      date: "2023-10-15",
      location: "Mumbai, Maharashtra",
    },
    {
      id: 2,
      title: "Clean India Campaign Launch",
      date: "2023-09-22",
      location: "New Delhi, Delhi",
    },
    {
      id: 3,
      title: "Eco-Friendly Cleanup Drive",
      date: "2023-11-05",
      location: "Bengaluru, Karnataka",
    },
    {
      id: 4,
      title: "River Restoration Workshop",
      date: "2023-08-28",
      location: "Chennai, Tamil Nadu",
    },
    {
      id: 5,
      title: "Green Cities Symposium",
      date: "2023-10-02",
      location: "Kolkata, West Bengal",
    },
    {
      id: 6,
      title: "Environmental Awareness Walk",
      date: "2023-09-10",
      location: "Hyderabad, Telangana",
    },
    {
      id: 7,
      title: "Tree Plantation Drive",
      date: "2023-11-18",
      location: "Pune, Maharashtra",
    },
    {
      id: 8,
      title: "Clean Beach Cleanup",
      date: "2023-08-15",
      location: "Goa",
    },
    {
      id: 9,
      title: "Sustainable Living Expo",
      date: "2023-09-28",
      location: "Jaipur, Rajasthan",
    },
    {
      id: 10,
      title: "Wildlife Conservation Seminar",
      date: "2023-10-07",
      location: "Chandigarh",
    },
  ];

  const images = [
    {
      original:
        "https://images.unsplash.com/photo-1617953141729-04389b3cbd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      original:
        "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },

    {
      original:
        "https://images.unsplash.com/photo-1616680214084-22670de1bc82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];
  return (
    <div className="prof-overflow">
      <div className="profile-container">
        <div className="profile-photo">
          <img src={logo} alt="Profile" />
        </div>
        <div className="username">
          <p>Clean Earth Foundation</p>
        </div>
      </div>
      <div className="description-box italic-text">
        <p>
          At our heart, we are driven by a single, unshakable belief: a cleaner,
          greener world is within reach, and together, we can make it happen. As
          a non-profit organization dedicated to environmental stewardship, we
          stand shoulder to shoulder with nature, humbly committed to our
          mission. With a deep reverence for our planet and an unwavering
          passion for positive change, we tirelessly pursue solutions that
          respect both the environment and all its inhabitants. We invite you to
          join us on this inspiring journey towards a more sustainable future,
          where every small act of kindness towards Mother Earth ripples into
          waves of lasting impact. Together, we can turn the tide and leave a
          legacy of clean, vibrant, and harmonious surroundings for generations
          yet to come.
        </p>
      </div>
      <div>
        <h2 className="gallery-heading">Gallery</h2>
        <Gallery items={images} style={{ width: "100px" }} />{" "}
      </div>

      <h2 className="profile-event-heading">Events</h2>
      <div className="event-prof-pos">
        <div className="event-list-profile">
          {eventsprof.map((event) => (
            <div key={event.id} className="event-tile-profile">
              <h3>{event.title}</h3>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Placeholder components for Dashboard, Volunteers, Analytics, and Events
const DashboardComponent = () => {
  const user = useSelector(selectUser);
  const orgname = user.user.email;
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    if (orgname) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, user);
  const navigate = useNavigate();
  if (!isLogged) {
    navigate("/");
  }

  const [numEvents, setNumEvents] = useState(0);
  const [numVolunteersEnrolled, setNumVolunteersEnrolled] = useState(0);
  const [maxNumVolunteers, setMaxNumVolunteers] = useState(0);
  const [countries, setCountries] = useState(0);

  const events = [
    {
      id: 1,
      name: "Eco-Friendly Cleanup Drive",
      volunteersEnrolled: 25,
    },
    {
      id: 2,
      name: "Green Earth Summit",
      volunteersEnrolled: 40,
    },
    {
      id: 3,
      name: "River Cleanup",
      volunteersEnrolled: 15,
    },
  ];

  const volunteers = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: `Volunteer ${index + 1}`,
  }));

  useEffect(() => {
    const incrementNumbers = () => {
      let eventsCounter = 0;
      let volunteersEnrolledCounter = 0;
      let maxVolunteersCounter = 0;
      let countriesCounter = 0;
      const interval = setInterval(() => {
        if (eventsCounter <= 37) {
          setNumEvents(eventsCounter);
          eventsCounter++;
        }
        if (volunteersEnrolledCounter <= 50) {
          setNumVolunteersEnrolled(volunteersEnrolledCounter);
          volunteersEnrolledCounter++;
        }
        if (maxVolunteersCounter <= 99) {
          setMaxNumVolunteers(maxVolunteersCounter);
          maxVolunteersCounter++;
        }
        if (maxVolunteersCounter <= 29) {
          setCountries(countriesCounter);
          countriesCounter++;
        }

        if (
          eventsCounter > 37 &&
          volunteersEnrolledCounter > 50 &&
          maxVolunteersCounter > 100 &&
          countriesCounter > 28
        ) {
          clearInterval(interval);
        }
      }, 30);
    };

    incrementNumbers();
  }, []);
  return (
    <div>
      <div className="">
        <div className="org-welcome">
          <h1 className="welcome-title">Welcome, {orgname}!</h1>
        </div>
        <div className="org-info-box">
          <div className="info-list">
            <div className="info-item hoverable">
              <FontAwesomeIcon
                icon={faCalendar}
                style={{ color: "blue", fontSize: "50px" }}
              />
              <div className="info-content">
                <h2 className="info-number">{numEvents}</h2>
                <p className="info-event-name">Events</p>
              </div>
            </div>
            <div className="info-item hoverable">
              <FontAwesomeIcon
                icon={faUsers}
                style={{ color: "yellow", fontSize: "50px" }}
              />
              <div className="info-content">
                <h2 className="info-number">{numVolunteersEnrolled}</h2>
                <p className="info-event-name">Volunteers</p>
              </div>
            </div>
            <div className="info-item hoverable">
              <FontAwesomeIcon
                icon={faBuilding}
                style={{ color: "green", fontSize: "50px" }}
              />
              <div className="info-content">
                <h2 className="info-number">{maxNumVolunteers}</h2>
                <p className="info-event-name">Cities</p>
              </div>
            </div>
            <div className="info-item hoverable">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{ color: "red", fontSize: "50px" }}
              />
              <div className="info-content">
                <h2 className="info-number">{countries}</h2>
                <p className="info-event-name">States</p>
              </div>
            </div>
          </div>
        </div>

        <div className="org-events-and-volunteers">
          <div className="org-event-box-container">
            <div className="org-event-box">
              <div className="event-list">
                <p className="event-header">Event List</p>
                {events.map((event) => (
                  <div key={event.id} className="event-item">
                    <div className="event-name">{event.name}</div>
                    <div className="volunteers-enrolled">
                      {event.volunteersEnrolled} Volunteers Enrolled
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="org-volunteer-box">
            <div className="org-volunteer-list">
              <p className="volunteer-header">Volunteer List</p>
              <div className="volunteer-scrollable-list">
                {volunteers.map((volunteer) => (
                  <div key={volunteer.id} className="volunteer-item">
                    {volunteer.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="org-announcement-box">
            <div className="announcement-header">
              <h2 className="announce-heading">Announcements</h2>
              <button className="add-announcement-button">+</button>
            </div>
            <div className="announcement-list">
              <div className="announcement-item">
                <h3>New volunteer enrolled!</h3>
                <p>Content of Announcement 1.</p>
              </div>
              <div className="announcement-item">
                <h3>Event concluded successfully!</h3>
                <p>Content of Announcement 2.</p>
              </div>
              <div className="announcement-item">
                <h3>New event just begun!</h3>
                <p>Content of Announcement 3.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
const PopupComponent = ({ isOpen, onClose, selectedVolunteer }) => {
  if (!isOpen || !selectedVolunteer) {
    return null;
  }

  const { name, gender, eventsEnrolled, profilePicture } = selectedVolunteer;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <span className="popup-close" onClick={onClose}>
          &times;
        </span>
        <div className="popup-content">
          <img
            src={profilePicture}
            alt={name}
            className="popup-profile-picture"
          />
          <div className="popup-details">
            <h3>{name}</h3>
            <p>
              <strong>Gender:</strong> {gender}
            </p>
            <p>
              <strong>Events Enrolled:</strong> {eventsEnrolled}
            </p>
          </div>
          <div className="volunteer-icons">
            <FontAwesomeIcon icon={faGoogle} className="red-icon1" />
            <FontAwesomeIcon
              icon={faFacebookMessenger}
              className="blue-icon1"
            />
            <FontAwesomeIcon icon={faInstagram} className="orange-icon1" />
          </div>
        </div>
      </div>
    </div>
  );
};

const VolunteersComponent = () => {
  const volunteers = [
    {
      id: 1,
      name: "John Doe",
      gender: "Male",
      eventsEnrolled: "Eco-Friendly Cleanup Drive",
      profilePicture: prof,
    },
    {
      id: 2,
      name: "Jane Smith",
      gender: "Female",
      eventsEnrolled: "Green Earth Summit",
      profilePicture: prof,
    },
    {
      id: 3,
      name: "Michael Johnson",
      gender: "Male",
      eventsEnrolled: "River Cleanup",
      profilePicture: prof,
    },
    {
      id: 4,
      name: "Emily Brown",
      gender: "Female",
      eventsEnrolled: "Eco-Friendly Cleanup Drive",
      profilePicture: prof,
    },
    {
      id: 5,
      name: "William Davis",
      gender: "Male",
      eventsEnrolled: "Green Earth Summit",
      profilePicture: prof,
    },
    {
      id: 6,
      name: "Olivia Wilson",
      gender: "Female",
      eventsEnrolled: "River Cleanup",
      profilePicture: prof,
    },
    {
      id: 7,
      name: "James Miller",
      gender: "Male",
      eventsEnrolled: "Eco-Friendly Cleanup Drive",
      profilePicture: prof,
    },
    {
      id: 8,
      name: "Sophia Anderson",
      gender: "Female",
      eventsEnrolled: "Green Earth Summit",
      profilePicture: prof,
    },
    {
      id: 9,
      name: "Daniel Martinez",
      gender: "Male",
      eventsEnrolled: "River Cleanup",
      profilePicture: prof,
    },
    {
      id: 10,
      name: "Charlotte Taylor",
      gender: "Female",
      eventsEnrolled: "Eco-Friendly Cleanup Drive",
      profilePicture: prof,
    },
    {
      id: 11,
      name: "Matthew Garcia",
      gender: "Male",
      eventsEnrolled: "Green Earth Summit",
      profilePicture: prof,
    },
    {
      id: 12,
      name: "Ava Jones",
      gender: "Female",
      eventsEnrolled: "River Cleanup",
      profilePicture: prof,
    },
    {
      id: 13,
      name: "Elijah Hernandez",
      gender: "Male",
      eventsEnrolled: "Eco-Friendly Cleanup Drive",
      profilePicture: prof,
    },
    {
      id: 14,
      name: "Mia Brown",
      gender: "Female",
      eventsEnrolled: "Green Earth Summit",
      profilePicture: prof,
    },
    {
      id: 15,
      name: "Liam Davis",
      gender: "Male",
      eventsEnrolled: "River Cleanup",
      profilePicture: prof,
    },
    {
      id: 16,
      name: "Isabella Wilson",
      gender: "Female",
      eventsEnrolled: "Eco-Friendly Cleanup Drive",
      profilePicture: prof,
    },
    {
      id: 17,
      name: "Benjamin Miller",
      gender: "Male",
      eventsEnrolled: "Green Earth Summit",
      profilePicture: prof,
    },
    {
      id: 18,
      name: "Grace Anderson",
      gender: "Female",
      eventsEnrolled: "River Cleanup",
      profilePicture: prof,
    },
    {
      id: 19,
      name: "Samuel Martinez",
      gender: "Male",
      eventsEnrolled: "Eco-Friendly Cleanup Drive",
      profilePicture: prof,
    },
    {
      id: 20,
      name: "Lily Taylor",
      gender: "Female",
      eventsEnrolled: "Green Earth Summit",
      profilePicture: prof,
    },
    {
      id: 21,
      name: "Joseph Garcia",
      gender: "Male",
      eventsEnrolled: "River Cleanup",
      profilePicture: prof,
    },
    {
      id: 22,
      name: "Emma Jones",
      gender: "Female",
      eventsEnrolled: "Eco-Friendly Cleanup Drive",
      profilePicture: prof,
    },
    {
      id: 23,
      name: "Michael Hernandez",
      gender: "Male",
      eventsEnrolled: "Green Earth Summit",
      profilePicture: prof,
    },
    {
      id: 24,
      name: "Olivia Smith",
      gender: "Female",
      eventsEnrolled: "River Cleanup",
      profilePicture: prof,
    },
    {
      id: 25,
      name: "Daniel Johnson",
      gender: "Male",
      eventsEnrolled: "Eco-Friendly Cleanup Drive",
      profilePicture: prof,
    },
    {
      id: 26,
      name: "Sophia Davis",
      gender: "Female",
      eventsEnrolled: "Green Earth Summit",
      profilePicture: prof,
    },
    {
      id: 27,
      name: "Matthew Smith",
      gender: "Male",
      eventsEnrolled: "River Cleanup",
      profilePicture: prof,
    },
    {
      id: 28,
      name: "Emily Miller",
      gender: "Female",
      eventsEnrolled: "Eco-Friendly Cleanup Drive",
      profilePicture: prof,
    },
    {
      id: 29,
      name: "James Davis",
      gender: "Male",
      eventsEnrolled: "Green Earth Summit",
      profilePicture: prof,
    },
    {
      id: 30,
      name: "Ella Smith",
      gender: "Female",
      eventsEnrolled: "River Cleanup",
      profilePicture: prof,
    },
  ];
  const dropdownRef = useRef(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [sortOrder, setSortOrder] = useState("select");

  const handleSortChange = (sortType) => {
    setSortOrder(sortType);
    setIsDropdownOpen(false); // Close the dropdown after clicking an option
  };

  const sortedVolunteers = [...volunteers].sort((a, b) => {
    if (sortOrder === "alphabetical") {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === "event") {
      return a.eventsEnrolled.localeCompare(b.eventsEnrolled);
    }
    return 0; // Default: No sorting
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for managing popup visibility

  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  // Function to open the popup and set the selected volunteer
  const openPopup = (volunteer) => {
    setSelectedVolunteer(volunteer);
    setIsPopupOpen(true);
  };

  // Function to close the popup and clear the selected volunteer
  const closePopup = () => {
    setSelectedVolunteer(null);
    setIsPopupOpen(false);
  };

  return (
    <div className="reg-vol">
      <h2>Registered Volunteers</h2>
      <div className="sort-menu">
        <div className="sort-button" onClick={toggleDropdown}>
          {sortOrder === "select"
            ? "Sort:"
            : `Sort By: ${
                sortOrder === "alphabetical" ? "Alphabetical Order" : "Event"
              }`}
          <FontAwesomeIcon icon={faFilter} className="filter-icon" />
        </div>
        {isDropdownOpen && (
          <div className="dropdown-menu" ref={dropdownRef}>
            <div onClick={() => handleSortChange("alphabetical")}>
              Alphabetical Order
            </div>
            <div onClick={() => handleSortChange("event")}>Event</div>
          </div>
        )}
      </div>{" "}
      <ul className="volunteer-list">
        {sortedVolunteers.map((volunteer) => (
          <li
            key={volunteer.id}
            className="volunteer-item1"
            onClick={() => openPopup(volunteer)} // Pass the volunteer to openPopup
          >
            <img
              src={volunteer.profilePicture}
              alt={volunteer.name}
              className="profile-picture"
            />
            <div className="volunteer-info">
              <div className="volunteer-name">{volunteer.name}</div>
              <div className="volunteer-details">
                {volunteer.gender} | {volunteer.eventsEnrolled}
              </div>
            </div>
            <div className="volunteer-icons">
              <FontAwesomeIcon icon={faGoogle} className="red-icon" />
              <FontAwesomeIcon
                icon={faFacebookMessenger}
                className="blue-icon"
              />
              <FontAwesomeIcon icon={faInstagram} className="orange-icon" />
            </div>
          </li>
        ))}
      </ul>
      <PopupComponent
        isOpen={isPopupOpen}
        onClose={closePopup}
        selectedVolunteer={selectedVolunteer} // Pass the selected volunteer to PopupComponent
      />
      <Footer />
    </div>
  );
};

const LineChartComponent = () => {
  const data = [
    { name: "Event 1", attendance: 120 },
    { name: "Event 2", attendance: 200 },
    { name: "Event 3", attendance: 150 },
    { name: "Event 4", attendance: 280 },
    { name: "Event 5", attendance: 90 },
  ];
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="attendance" stroke="#36A2EB" />
    </LineChart>
  );
};

const PieChartComponent = () => {
  const data = [
    { name: "Event 1", attendance: 120 },
    { name: "Event 2", attendance: 200 },
    { name: "Event 3", attendance: 150 },
    { name: "Event 4", attendance: 280 },
    { name: "Event 5", attendance: 90 },
  ];

  const COLORS = ["#36A2EB", "#FFCE56", "#FF6384", "#4BC0C0", "#9966FF"];
  return (
    <PieChart width={500} height={300}>
      <Pie
        dataKey="attendance"
        isAnimationActive={true}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

const AreaChartComponent = () => {
  const data = [
    { name: "Event 1", attendance: 120 },
    { name: "Event 2", attendance: 200 },
    { name: "Event 3", attendance: 150 },
    { name: "Event 4", attendance: 280 },
    { name: "Event 5", attendance: 90 },
  ];
  return (
    <AreaChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area
        type="monotone"
        dataKey="attendance"
        stroke="#bb84e8"
        fill="#bb84e8"
      />
    </AreaChart>
  );
};

const BarChartComponent = () => {
  const data = [
    { name: "Event 1", attendance: 120 },
    { name: "Event 2", attendance: 200 },
    { name: "Event 3", attendance: 150 },
    { name: "Event 4", attendance: 280 },
    { name: "Event 5", attendance: 90 },
  ];
  return (
    <BarChart
      className="bar-resp"
      isAnimationActive={true}
      width={500}
      height={300}
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="attendance" fill="#1bbe0f" />
    </BarChart>
  );
};

const AnalyticsComponent = () => {
  return (
    <div>
      <div className="analytics-container">
        <h2 className="Ana-head">Analytics</h2>
        <div className="chart-row">
          <div className="chart">
            <h3>Attendance Trends</h3>
            <LineChartComponent />
          </div>
          <div className="chart">
            <h3>Event Distribution</h3>
            <PieChartComponent />
          </div>
        </div>
        <div className="chart-row">
          <div className="chart">
            <h3>Performance Overview</h3>
            <AreaChartComponent />
          </div>
          <div className="chart">
            <h3>Event Statistics</h3>
            <BarChartComponent />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const EventsComponent = () => {
  const events = [
    {
      id: 1,
      title: "Green Earth Day Cleanup",
      date: "October 15, 2023",
      location: "Mumbai, Maharashtra",
      image: river,
    },
    {
      id: 2,
      title: "Nature Revival Project",
      date: "November 5, 2023",
      location: "Bengaluru, Karnataka",
      image: tileearth,
    },
    {
      id: 3,
      title: "Clean Rivers Campaign",
      date: "December 12, 2023",
      location: "Chennai, Tamil Nadu",
      image: daisy,
    },
    {
      id: 4,
      title: "Eco-Friendly City Drive",
      date: "January 25, 2024",
      location: "Delhi, NCR",
      image: daisy,
    },
    {
      id: 5,
      title: "Green Hills Cleanup Expedition",
      date: "February 18, 2024",
      location: "Shimla, Himachal Pradesh",
      image: river,
    },
    {
      id: 6,
      title: "Coastal Cleanup Drive",
      date: "March 8, 2024",
      location: "Goa, India",
      image: green,
    },
    {
      id: 7,
      title: "Rural Afforestation Project",
      date: "April 22, 2024",
      location: "Jaipur, Rajasthan",
      image: green,
    },
    // Add more event objects here
  ];

  return (
    <div className="event-list-org1">
      <h1>Upcoming Events</h1>
      <Container fluid>
        <Row>
          {events.map((event) => (
            <Col key={event.id} xs={12} md={6} lg={4}>
              <Card className="event-card">
                <Card.Img
                  src={event.image}
                  alt={event.title}
                  className="event-image"
                />
                <Card.Body className="event-details">
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>Date: {event.date}</Card.Text>
                  <Card.Text>Location: {event.location}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Footer />
      </Container>
    </div>
  );
};
const AddComponent = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("12:00"); // Set an initial time

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  const currentDate = new Date(); // Get the current date

  return (
    <div>
      <div className="add-event-multi-step-form">
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div
              className={`add-event-form-step ${
                step === 1 ? "active" : step === 2 ? "previous" : "next"
              }`}
            >
              {" "}
              <Label className="add-event-label">Name of the Event:</Label>
              <Input
                type="text"
                required
                className="add-event-input"
                style={{ backgroundColor: "#131313", color: "white" }}
              />{" "}
              <Button
                type="button"
                onClick={nextStep}
                className="add-event-button"
              >
                Next
              </Button>
            </div>
          )}
          {step === 2 && (
            <div
              className={`add-event-form-step ${
                step === 2 ? "active" : step === 1 ? "previous" : "next"
              }`}
            >
              {" "}
              <Label className="add-event-label">Address:</Label>
              <Input
                type="text"
                required
                className="add-event-input"
                style={{ backgroundColor: "#131313", color: "white" }}
              />{" "}
              <Label className="add-event-label">City:</Label>
              <Input
                type="text"
                required
                className="add-event-input"
                style={{ backgroundColor: "#131313", color: "white" }}
              />{" "}
              <Label className="add-event-label">Zip Code:</Label>
              <Input
                type="text"
                required
                className="add-event-input"
                style={{ backgroundColor: "#131313", color: "white" }}
              />
              <Button
                type="button"
                onClick={prevStep}
                className="add-event-button"
              >
                Previous
              </Button>
              <Button
                type="button"
                onClick={nextStep}
                className="add-event-button"
              >
                Next
              </Button>
            </div>
          )}
          {step === 3 && (
            <div className="add-event-form-step">
              <Label className="add-event-label">Date of Event:</Label>
              <div>
                <DatePicker
                  className="add-event-input"
                  selected={selectedDate}
                  onChange={handleDateChange}
                  minDate={currentDate} // Set the minimum date to the current date
                  dateFormat="dd/MM/yyyy" // Customize date format
                  placeholderText="Select a date" // Placeholder text when no date is selected
                  scrollableYearDropdown // Make year dropdown scrollable
                  yearDropdownItemNumber={10} // Number of years shown in the year dropdown
                />
              </div>
              <Label className="add-event-label">Time of Event:</Label>
              <div className="time-picker">
                <TimePicker
                  onChange={handleTimeChange}
                  value={selectedTime}
                  disableClock={true} // Hide the clock, only show the input
                />
              </div>{" "}
              <br />
              <Label className="add-event-label">Description:</Label>
              <Input
                type="textarea"
                required
                className="add-event-input"
                style={{ backgroundColor: "#131313", color: "white" }}
              />{" "}
              <Button
                type="button"
                onClick={prevStep}
                className="add-event-button"
              >
                Previous
              </Button>
              <Button type="submit" className="add-event-button">
                Submit
              </Button>
            </div>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
};

const OrgDashboard = () => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleSidebarClick = (item) => {
    console.log(item);
    setSelectedItem(item);
  };

  return (
    <div>
      <div className="org-dashboard-container">
        <div className="sidebar">
          <AdminPannel onItemClick={handleSidebarClick} />
        </div>
        <div className="right-panel">
          {selectedItem === "Dashboard" ? (
            <DashboardComponent />
          ) : selectedItem === "Profile" ? (
            <ProfileComponent />
          ) : selectedItem === "Volunteers" ? (
            <VolunteersComponent />
          ) : selectedItem === "Analytics" ? (
            <AnalyticsComponent />
          ) : selectedItem === "Events" ? (
            <EventsComponent />
          ) : selectedItem === "Add Event" ? (
            <AddComponent />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default OrgDashboard;
