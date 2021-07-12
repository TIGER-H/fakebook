import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Fakebook</h3>
          <span className="loginDesc">Connect with friends and the world</span>
          <span className="loginDesc">around you on Fakebook.</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              type="text"
              className="loginInput"
              placeholder="Email or Phone Number"
            />
            <input
              type="password"
              className="loginInput"
              placeholder="Password"
            />
            <button className="loginButton">Log in</button>
            <span className="loginFindPassword">Forgot password?</span>
            <hr className="loginHr" />
            <button className="loginSignupButton">Create New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
