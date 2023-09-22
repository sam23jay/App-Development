import React, { useState } from 'react';
import '../assets/css/Signup.css'; 
import { Button, Form, Input } from 'reactstrap';
import bg from "./bg.jpg"
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile:'',
    gender:'',
    dob:'',
  });
const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/");
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src={bg} alt="Background"/>
      </div>
      <div className="signup-form-container">
        <Form onSubmit={handleSubmit} className="signup-form">
          <h2>Sign Up</h2>
          <div className="form-group">
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
          </div>
          <div className="form-group">
            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </div>
          <div className="form-group">
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group">
            <Input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="form-group">
            <Input
              type="text"
              name="confirmPassword"
              value={formData.gender}
              onChange={(e)=>{setFormData({...formData,gender:e.target.value})}}
              placeholder="Gender"
              required
            />
          </div>
          <div className="form-group">
            <Input
              type="text"
              name="confirmPassword"
              value={formData.mobile}
              onChange={(e)=>{setFormData({...formData,mobile:e.target.value})}}
              placeholder="Mobile Number"
              required
            />
          </div>
          <div className="form-group">
            <Input
              type="text"
              name="confirmPassword"
              value={formData.dob}
              onChange={(e)=>{setFormData({...formData,dob:e.target.value})}}
              placeholder="Date of Birth"
              required
            />
          </div>
          <div className="button-position-signup">
          <Button className="sign-up-button" type="submit">Sign Up</Button>
          </div>
          <p onClick={()=>{navigate("/login")}}>Already have an account? Login</p>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
