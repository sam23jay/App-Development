import React, { useState } from "react";
import "../../assets/css/Volunteer/VolunteerSignup.css";
import { FormGroup, Input, Label } from "reactstrap";
import yourLogo from "../../assets/pics/harmony-logo.png";
import Footer from "../Footer";
import { DatePicker } from "antd";
import { useNavigate } from "react-router-dom";

const VolunteerSignup = () => {
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [formError, setFormError] = useState("");

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleGenderChange = (e) => {
    const value = e.target.value;
    setGender(value);
  };

  const handleDateOfBirthChange = (date) => {
    setDob(date);
  };

  const handleStateChange = (e) => {
    const value = e.target.value;
    setState(value);
  };

  const handleCountryChange = (e) => {
    const value = e.target.value;
    setCountry(value);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty and display the error message
    if (!username || !password || !gender || !dob || !state || !country) {
      setFormError("All Fields are required");
    } else {
      // All fields are filled, you can submit the data or perform other actions here
      console.log("Form submitted successfully!");
    }
  };
  const navigate = useNavigate();
  const handleCreateAccountClick = (e) => {
    navigate("/volunteer/login");
  };
  return (
    <div>
      <div className="sign-up-vol-sign-up-page">
        <div className="sign-up-vol-background-image"></div>
        <div className="sign-up-vol-sign-up-container">
          <div className="beaut-text">
            <div className="logo-and-text">
              <img
                src={yourLogo}
                alt="Your Logo"
                className="sign-up-vol-logo"
                style={{ width: "60px", height: "auto", marginBottom: "20px" }}
              />
              <div className="logo-text">Harmony</div>
            </div>
            <div className="abov-text">
              <h3>Welcome to Harmony!👋🏻</h3>
              <p>
                Unlock the door to limitless journeys! Join us now and be part
                of this amazing experience.
              </p>
            </div>
            <form onSubmit={handleSignupSubmit}>
              <div className="row">
                <div className="col-xs-4 col-xs-offset-4">
                  <div className="floating-label-group">
                    <input
                      type="text"
                      id="username"
                      className="form-control"
                      autoComplete="off"
                      autoFocus
                      required
                      value={username}
                      onChange={handleUsernameChange}
                    />
                    <label className="floating-label">Username</label>
                  </div>

                  <div className="floating-label-group">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      autoComplete="off"
                      required
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <label className="floating-label">Password</label>
                  </div>

                  <FormGroup>
                    <Label for="gender">Gender</Label>
                    <Input
                      type="select"
                      name="gender"
                      id="gender"
                      value={gender}
                      onChange={handleGenderChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Input>
                  </FormGroup>

                  <FormGroup>
                    <Label for="dob">Date of Birth</Label>
                    <br />
                    <DatePicker
                      id="dob"
                      selected={dob}
                      onChange={handleDateOfBirthChange}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Select Date of Birth"
                      showYearDropdown
                      scrollableYearDropdown
                      yearDropdownItemNumber={100}
                      maxDate={new Date()}
                    />
                  </FormGroup>

                  <div className="floating-label-group">
                    <input
                      style={{ marginTop: "25px" }}
                      type="text"
                      id="state"
                      className="form-control"
                      autoComplete="off"
                      autoFocus
                      required
                      value={state}
                      onChange={handleStateChange}
                    />
                    <label className="floating-label">State</label>
                  </div>

                  <div className="floating-label-group">
                    <input
                      type="text"
                      id="country"
                      className="form-control"
                      autoComplete="off"
                      autoFocus
                      required
                      value={country}
                      onChange={handleCountryChange}
                    />
                    <label className="floating-label">Country</label>
                  </div>
                </div>
              </div>

              {formError && (
                <p className="error-text" style={{ color: "red" }}>
                  {formError}
                </p>
              )}
              <button
                type="submit"
                className="sign-up-vol-btn"
                onClick={handleSignupSubmit}
              >
                Sign Up
              </button>

              <p style={{ textAlign: "center" }}>
                Already have an account?
                <p
                  style={{ color: "blue" }}
                  className="link-sign-up"
                  onClick={handleCreateAccountClick}
                >
                  Log in instead.
                </p>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VolunteerSignup;
