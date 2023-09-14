import React, { useState } from 'react';
import '../assets/css/Signup.css'; // Import your CSS file
import { Button, Form, Input } from 'reactstrap';
import tree from "./tree.jpg"
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src={tree}/>
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
              
            />
          </div>
          <div className="form-group">
            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              
            />
          </div>
          <div className="form-group">
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              
            />
          </div>
          <div className="form-group">
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              
            />
          </div>
          <div className="form-group">
            <Input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              
            />
          </div>
          <div className="form-group">
            <Input
              type="text"
              name="confirmPassword"
              value={formData.gender}
              onChange={(e)=>{setFormData({...formData,gender:e.target.value})}}
              placeholder="Gender"
              
            />
          </div>
          <div className="form-group">
            <Input
              type="text"
              name="confirmPassword"
              value={formData.mobile}
              onChange={(e)=>{setFormData({...formData,mobile:e.target.value})}}
              placeholder="Mobile Number"
              
            />
          </div>
          <div className="form-group">
            <Input
              type="text"
              name="confirmPassword"
              value={formData.dob}
              onChange={(e)=>{setFormData({...formData,dob:e.target.value})}}
              placeholder="Date of Birth"
              
            />
          </div>
          <div className="form-group">
            <Input
              type="text"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              
            />
          </div>
          <div className="form-group">
            <Input
              type="text"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              
            />
          </div>
          <div className="form-group">
            <Input
              type="text"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              
            />
          </div>
          <Button type="submit">Sign Up</Button>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
