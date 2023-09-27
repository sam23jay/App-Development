import React, { useState } from "react";
import "../../assets/css/Volunteer/LoginVolunteer.css";
import { Label } from "reactstrap";
import yourLogo from "../../assets/pics/harmony-logo.png";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/UserSlice";
import { setLoggedIn } from "../useAuthentication";

const LoginVolunteer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // State for form validation errors
  const handleSignIn = (e) => {
    e.preventDefault(); // Prevent the form from submitting automatically

    // Validate form fields
    const validationErrors = {};
    if (!username.trim()) {
      validationErrors.username = "Username is required";
    }
    if (!password.trim()) {
      validationErrors.password = "Password is required";
    }

    // If there are validation errors, update the state and return
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoggedIn(true);
    setErrors({});
    dispatch(logout(username));
    dispatch(login(username));
    navigate("/volunteer/explore");
  };

  const handleCreateAccountClick = () => {
    navigate("/volunteer/signup");
  };

  return (
    <div>
      <div className="login-vol-login-page">
        <div className="login-vol-background-image"></div>
        <div className="login-vol-login-container">
          <div className="beaut-text">
            <div className="logo-and-text">
              <img
                src={yourLogo}
                alt="Your Logo"
                className="login-vol-logo"
                style={{ width: "60px", height: "auto", marginBottom: "20px" }}
              />
              <div className="logo-text">Harmony</div>
            </div>
            <div className="abov-text">
              <h3>Welcome to Harmony!👋🏻</h3>
              <p>Please Sign-in to your account and start your adventure</p>
            </div>
            <form>
              <div class="row">
                <div class="col-xs-4 col-xs-offset-4">
                  <div class="floating-label-group">
                    <input
                      type="text"
                      id="username"
                      class="form-control"
                      autocomplete="off"
                      autofocus
                      required
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                    <label class="floating-label">Username</label>
                  </div>

                  <div class="floating-label-group">
                    <input
                      type={show ? "text" : "password"}
                      id="password"
                      class="form-control"
                      autocomplete="off"
                      required
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <label class="floating-label">Password</label>
                  </div>
                </div>
              </div>
              <div className="login-vol-form-group">
                <input
                  type="checkbox"
                  id="remember-me"
                  name="remember-me"
                  className="login-vol-checkbox"
                  onClick={() => {
                    setShow(!show);
                  }}
                />
                <Label style={{ fontWeight: "normal", marginLeft: "5px" }}>
                  Show Password
                </Label>
              </div>
              {errors.username && (
                <p style={{ color: "red" }} className="error">
                  {errors.username}
                </p>
              )}
              {errors.password && (
                <p style={{ color: "red" }} className="error">
                  {errors.password}
                </p>
              )}
              <button
                type="submit"
                className="login-vol-btn"
                onClick={handleSignIn}
              >
                Sign In
              </button>
              {/* Display validation errors */}
              <p style={{ textAlign: "center" }}>
                New on our platform?
                <p
                  style={{ color: "blue" }}
                  className="link-sign-up"
                  onClick={handleCreateAccountClick}
                >
                  Create an Account
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

export default LoginVolunteer;
