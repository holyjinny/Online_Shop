import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEnvelope,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";
import "./Login.css";
import LoginBG from "../../assets/banner/Login-bg.png";
import RegisterBG from "../../assets/banner/Register-bg.png";
import { Link, useNavigate } from "react-router-dom";
import UserApi from "../../axios/UserApi";

const Login = () => {
  const loginClassRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await UserApi.userRegister(
        email,
        password,
        name,
        age,
        phone,
        profileImage
      );
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/");
    }
  }

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

            {/* 회원가입 */}
            <form className="sign-up-form" onSubmit={handleSubmit}>
              <h2 className="title">Sign up</h2>

              <div className="input-field">
                <FontAwesomeIcon icon={faEnvelope} className="fa fa-envelope" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>

              <div className="input-field">
                <FontAwesomeIcon icon={faLock} className="fa fa-lock" />
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>

              {/* <div className="input-field">
                <FontAwesomeIcon icon={faLock} className="fa fa-lock" />
                <input
                  type="password"
                  name="confirmPw"
                  placeholder="confirm password"
                />
              </div> */}

              <div className="input-field">
                <FontAwesomeIcon icon={faUser} className="fa fa-user" />
                <input
                  type="text"
                  name="name"
                  placeholder="Username"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>

              <div className="input-field">
                <FontAwesomeIcon icon={faUser} className="fa fa-user" />
                <input
                  type="text"
                  name="age"
                  placeholder="Age"
                  onChange={(event) => {
                    setAge(event.target.value);
                  }}
                />
              </div>

              <div className="input-field">
                <FontAwesomeIcon icon={faUser} className="fa fa-user" />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }}
                />
              </div>

              <div className="input-field">
                <FontAwesomeIcon icon={faUser} className="fa fa-user" />
                <input
                  type="text"
                  name="profileImage"
                  placeholder="ProfileImage"
                  onChange={(event) => {
                    setProfileImage(event.target.value);
                  }}
                />
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
