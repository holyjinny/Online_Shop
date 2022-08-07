import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const { pathname } = useLocation();

  if (pathname === "/login") return null;

  return (
    <>
      <footer>
        <div className="newsletter">
          <h2>
            <span>Subscribe Newsletter</span>
            <span>
              Subscribe Newsletter to get 10% discount on all products.
            </span>
          </h2>

          <form action="?">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Submit</button>
          </form>
        </div>

        <ul className="social-icons">
          <Link to={"/"}>
            <FontAwesomeIcon icon={faHashtag} className="fa fa-hash-tag" />
          </Link>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faHashtag} className="fa fa-hash-tag" />
          </Link>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faHashtag} className="fa fa-hash-tag" />
          </Link>
        </ul>

        <hr />

        <div className="main">
          <h2 className="footer-logo">SJH</h2>
          <div className="links">
            <h6>Men collection</h6>
            <ul>
              <Link to={"/"} className="link">
                Men
              </Link>
              <Link to={"/"} className="link">
                Men
              </Link>
              <Link to={"/"} className="link">
                Men
              </Link>
              <Link to={"/"} className="link">
                Men
              </Link>
            </ul>
          </div>
          <div className="links">
            <h6>Women collection</h6>
            <ul>
              <Link to={"/"} className="link">
                Men
              </Link>
              <Link to={"/"} className="link">
                Men
              </Link>
              <Link to={"/"} className="link">
                Men
              </Link>
              <Link to={"/"} className="link">
                Men
              </Link>
            </ul>
          </div>
          <div className="links">
            <h6>Child collection</h6>
            <ul>
              <Link to={"/"} className="link">
                Men
              </Link>
              <Link to={"/"} className="link">
                Men
              </Link>
              <Link to={"/"} className="link">
                Men
              </Link>
              <Link to={"/"} className="link">
                Men
              </Link>
            </ul>
          </div>
          <div className="links">
            <h6>Quick collection</h6>
            <ul>
              <Link to={"/"} className="link">
                Men
              </Link>
              <Link to={"/"} className="link">
                Men
              </Link>
              <Link to={"/"} className="link">
                Men
              </Link>
              <Link to={"/"} className="link">
                Men
              </Link>
            </ul>
          </div>
        </div>

        <hr />

        <div className="copyright">
          <p>Copyright 2022 All rights reserved | SJH</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
