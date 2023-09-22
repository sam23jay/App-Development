import React from 'react';
import { Link } from 'react-router-dom'; 
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import '../assets/css/Sidebar.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Container>
        <ListGroup flush>
          <ListGroupItem tag={Link}>
          <i className="fas fa-home"></i> Home
          </ListGroupItem>
          <ListGroupItem tag={Link}>
          <i className="fas fa-calendar-alt"></i> Events
          </ListGroupItem>
          <ListGroupItem tag={Link}>
          <i className="fas fa-users"></i> Volunteers
          </ListGroupItem>
          <ListGroupItem tag={Link}>
          <i className="fas fa-calendar-alt"></i>Volunteers
          </ListGroupItem>
          <ListGroupItem tag={Link}>
            Volunteers
          </ListGroupItem>
          <ListGroupItem tag={Link}>
            Volunteers
          </ListGroupItem>
          <ListGroupItem tag={Link}>
          </ListGroupItem>
        </ListGroup>
      </Container>
    </div>
  );
};

export default Sidebar;
