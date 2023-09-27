import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../assets/css/NavBar.css";
import MenuIcon from "@mui/icons-material/Menu"; // Import the Menu icon from Mui
import logo from "../assets/pics/harmony-logo.png";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { selectUser } from "./redux/UserSlice";
import { logout } from "./redux/UserSlice";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { getLoggedIn, setLoggedIn } from "./useAuthentication";
function NavBar() {
  const user = useSelector(selectUser);
  const username = user.user.email;
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    setLoggedIn(false);
    dispatch(logout(username));
    navigate("/");
  };
  const handleLogIn = () => {
    navigate("/volunteer/login");
  };
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink
            exact
            to="/"
            className="nav-logo"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={logo} alt="proj-title" />
            Harmony
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/ "
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>

            <li>
              {/* Conditionally render "Login" or "Logout" based on isLoggedIn */}
              {getLoggedIn() ? (
                <Button
                  className="log-out-red"
                  exact
                  to="/home"
                  onClick={handleLogOut}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  className="log-out-purp"
                  exact
                  to="/home"
                  onClick={handleLogIn}
                >
                  Login
                </Button>
              )}
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <MenuIcon style={{ fontSize: "30px" }} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
