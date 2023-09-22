import React from 'react';
import '../assets/css/Dashboard.css';
import NavBar from './NavBar';
const Dashboard = () => {
  const user = {
    username: 'User',
    enrolledEvents: 5,
  };

  const events = [
    {
      id: 1,
      title: 'Event 1',
      date: '2023-11-05',
      location: 'City A',
    },
    {
      id: 2,
      title: 'Event 2',
      date: '2023-11-05',
      location: 'City B',
    },
    {
      id: 3,
      title: 'Event 3',
      date: '2023-11-05',
      location: 'City C',
    },
    {
      id: 4,
      title: 'Event 4',
      date: '2023-11-05',
      location: 'City D',
    },{
      id: 5,
      title: 'Event 5',
      date: '2023-11-05',
      location: 'City E',
    },{
      id: 6,
      title: 'Event 6',
      date: '2023-11-05',
      location: 'City F',
    },{
      id: 7,
      title: 'Event 7',
      date: '2023-11-05',
      location: 'City G',
    },{
      id: 8,
      title: 'Event 8',
      date: '2023-11-05',
      location: 'City H',
    },{
      id: 9,
      title: 'Event 9',
      date: '2023-11-05',
      location: 'City I',
    },{
      id: 10,
      title: 'Event 10',
      date: '2023-11-05',
      location: 'City J',
    },
  ];

  return (
    <div>

        <NavBar />
    <div className="dashboard-container">

      <div className="upper-section">
        <p className='Welcome-Font'>Welcome, {user.username}!</p>
        <p>No. of Events Enrolled: {user.enrolledEvents}</p>
      </div>
      <div className="lower-section">
        <h2>Upcoming Events</h2>
        <div className="event-list">
          {events.map((event) => (
            <div key={event.id} className="event-tile">
              <h3>{event.title}</h3>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>

  );
};

export default Dashboard;
