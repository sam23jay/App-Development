import React from 'react';
import NavBar from './NavBar';
import '../assets/css/OrgDashboard.css';
import RightPanel from './RightPanel';
import AdminPannel from './AdminPannel';

const OrgDashboard = () => {

  return (
    <div className="org-dashboard-container">
      <NavBar />
      <div className="sidebar">
        <AdminPannel/>
      </div>
      <div className="right-panel">
        <RightPanel />
      </div>
    </div>
  );
};

export default OrgDashboard;
