import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Sidebar from './Sidebar';
const App = () => {
  return (
      <div className="app-container">
        <div className="flex-container">
          <Navbar />
          <div className="content-container">
            <Sidebar />
          </div>
        </div>
      </div>
  );
};

export default App;
