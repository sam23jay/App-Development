import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './componenets/Signup';
import Login from './componenets/Login';
import Dashboard from './componenets/Dashboard';
import OrgDashboard from './componenets/OrgDashboard';
import Store from './componenets/redux/Store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
  <Router>
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/home" element={<Dashboard />}></Route>
      <Route path="/homeD" element={<OrgDashboard />}></Route>
    </Routes>
  </Router>
  </Provider>
);


