import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEnvelope,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";
import "./Login.css";
import LoginBG from "../../assets/banner/Login-bg.png";
import RegisterBG from "../../assets/banner/Register-bg.png";

import UserService from "../../services/userService/UserService";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
  const loginClassRef = useRef(null);

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
            {/* 로그인 */}
            <form className="sign-in-form">
              <h2 className="title">Welcome</h2>
              <div className="input-field">
                <FontAwesomeIcon icon={faUser} className="fa fa-user" />
                <input type="email" placeholder="email" required />
              </div>
              <div className="input-field">
                <FontAwesomeIcon icon={faLock} className="fa fa-lock" />
                <input type="password" placeholder="password" required />
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
            <Formik
              initialValues={{ email: "", password: "", name: "" }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                name: Yup.string()
                  .max(4, "올바른 형식으로 작성해주세요.")
                  .required("Required"),
                password: Yup.string()
                  .min(4, "4글자 이상 입력해주세요.")
                  .required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  UserService.saveUser(values)
                    .then((response) => {
                      console.log(response);
                      changeLoginForm();
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }, 400);
              }}
            >
              {(formik) => (
                /**
                 * 회원가입 양식
                 */
                <form className="sign-up-form" onSubmit={formik.handleSubmit}>
                  <h2 className="title">회원가입</h2>

                  {/* 이메일 */}
                  <div className="input-field">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="fa fa-envelope"
                    />
                    <input
                      id="email"
                      type="email"
                      placeholder="이메일"
                      {...formik.getFieldProps("email")}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}

                  {/* 이름 */}
                  <div className="input-field">
                    <FontAwesomeIcon icon={faUser} className="fa fa-envelope" />
                    <input
                      id="name"
                      type="text"
                      placeholder="이름"
                      {...formik.getFieldProps("name")}
                    />
                  </div>
                  {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                  ) : null}

                  {/* 비밀번호 */}
                  <div className="input-field">
                    <FontAwesomeIcon icon={faLock} className="fa fa-envelope" />
                    <input
                      id="password"
                      type="password"
                      placeholder="비밀번호"
                      {...formik.getFieldProps("password")}
                    />
                  </div>
                  {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null}

                  <input type="submit" className="btn" value="회원가입" />

                  {/* Social */}
                  <p className="social-text">
                    Or Sign up with social platforms
                  </p>
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
              )}
            </Formik>
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
