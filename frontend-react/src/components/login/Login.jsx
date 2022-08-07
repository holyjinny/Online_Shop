import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEnvelope,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef } from "react";
import "./Login.css";
import LoginBG from "../../assets/banner/Login-bg.png";
import RegisterBG from "../../assets/banner/Register-bg.png";
import { Link } from "react-router-dom";

const Login = () => {
  const loginClassRef = useRef(null);

  // useEffect(() => {
  //   loginclassRef.current.classList.add("sign-in");
  // }, []);

  function changeRegisterForm() {
    loginClassRef.current.classList.add("sign-up-mode");
  }

  function changeLoginForm() {
    loginClassRef.current.classList.remove("sign-up-mode");
  }

  return (
    <>
      <div className="login-container" ref={loginClassRef}>
        <div className="forms-container">
          <div className="signin-signup">
            <form className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <FontAwesomeIcon icon={faUser} className="fa fa-user" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <FontAwesomeIcon icon={faLock} className="fa fa-lock" />
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <Link to={""} className="social-icon">
                  <FontAwesomeIcon icon={faLink} className="fa fa-link" />
                </Link>
                <Link to={""} className="social-icon">
                  <FontAwesomeIcon icon={faLink} className="fa fa-link" />
                </Link>
                <Link to={""} className="social-icon">
                  <FontAwesomeIcon icon={faLink} className="fa fa-link" />
                </Link>
                <Link to={""} className="social-icon">
                  <FontAwesomeIcon icon={faLink} className="fa fa-link" />
                </Link>
              </div>
            </form>
            <form className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <FontAwesomeIcon icon={faUser} className="fa fa-user" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <FontAwesomeIcon icon={faEnvelope} className="fa fa-envelope" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <FontAwesomeIcon icon={faLock} className="fa fa-lock" />
                <input type="password" placeholder="Password" />
              </div>
              <div className="input-field">
                <FontAwesomeIcon icon={faLock} className="fa fa-lock" />
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <Link to={""} className="social-icon">
                  <FontAwesomeIcon icon={faLink} className="fa fa-link" />
                </Link>
                <Link to={""} className="social-icon">
                  <FontAwesomeIcon icon={faLink} className="fa fa-link" />
                </Link>
                <Link to={""} className="social-icon">
                  <FontAwesomeIcon icon={faLink} className="fa fa-link" />
                </Link>
                <Link to={""} className="social-icon">
                  <FontAwesomeIcon icon={faLink} className="fa fa-link" />
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={changeRegisterForm}
              >
                Sign up
              </button>
              <div>
                <Link to={"/"}>
                  <button className="btn transparent">Home</button>
                </Link>
              </div>
            </div>
            <img src={LoginBG} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={changeLoginForm}
              >
                Sign in
              </button>
            </div>
            <img src={RegisterBG} className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
