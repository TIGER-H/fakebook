import { CircularProgress } from "@material-ui/core";
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleLoginClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Fakebook</h3>
          <span className="loginDesc">Connect with friends and the world</span>
          <span className="loginDesc">around you on Fakebook.</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleLoginClick}>
            <input
              type="email"
              className="loginInput"
              placeholder="Email or Phone Number"
              required
              ref={email}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="Password"
              required
              minLength="6"
              ref={password}
            />

            <button className="loginButton" type="submit">
              {isFetching ? <CircularProgress /> : "Log in"}
            </button>
            <span className="loginFindPassword">Forgot password?</span>
            <hr className="loginHr" />
            <Link to="/signup" className="signup">
              <button className="loginSignupButton">
                {isFetching ? <CircularProgress /> : "Create New Account"}
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
