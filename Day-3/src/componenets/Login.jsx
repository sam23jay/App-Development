import { useState } from "react";
import { Button, Form, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Login.css"
const Login=()=>{
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [showPassword,togglePassword]=useState(true);
    const [errorMessage,setErrorMessage]=useState("");
    const handleLogin=(event)=>{
        if(!username || !password)
        {
            setErrorMessage("Enter both username and password");
        }
        else{
            setErrorMessage("");
        }
        event.preventDefault();
    }
return(
    <div>
       <div className="login-page-container">
        <Form onSubmit={handleLogin}>
          <div className="form-container">
            <div className="login-form">
              <div className="login-heading">Log in</div>
              <Input
                type="text"
                className="username-input"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type={showPassword ? "text" : "password"}
                className="password-input"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            {errorMessage && <span className="error-message">{errorMessage}
                </span>}
              <div className="checkbox-container">
                <label>
                  <Input
                    type="checkbox"
                    className="custom-checkbox"
                    checked={showPassword}
                    onChange={() => togglePassword(!showPassword)}
                  />
                  Show Password
                </label>
              </div>
              <div className="checkbox-container">
                <label>
                  <Input
                    type="checkbox"
                    className="custom-checkbox"
                  />
                  Remember me
                </label>
              </div>
              <Button className="login-button">
                Login
              </Button>
              <a className="signup-link" href="signup">
                Don't have an account?
              </a>
            </div>
          </div>
        </Form>
      </div>
    </div>
)
}
export default Login;