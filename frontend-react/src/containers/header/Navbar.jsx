import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderAll,
  faChevronDown,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="categories d_flex">
            <span>
              <FontAwesomeIcon
                icon={faBorderAll}
                className="fa border-all"
              ></FontAwesomeIcon>
            </span>

            <h4>
              Categories{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="fa chevron-down"
              ></FontAwesomeIcon>
            </h4>
          </div>

          <div className="navlink">
            <ul
              className={
                MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pages">Pages</Link>
              </li>
              <li>
                {/* <Link to="/user">User Account</Link> */}
                <Link to="/not-found">User Account</Link>
              </li>
              <li>
                {/* <Link to="/vendor">Vendor Account</Link> */}
                <Link to="/not-found">Vendor Account</Link>
              </li>
              <li>
                {/* <Link to="/track">Track my order</Link> */}
                <Link to="/not-found">Track my order</Link>
              </li>
              <li>
                {/* <Link to="/contact">Contact</Link> */}
                <Link to="/not-found">Contact</Link>
              </li>
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <FontAwesomeIcon
                  icon={faXmark}
                  className="fa close home-btn"
                ></FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  className="fa open"
                ></FontAwesomeIcon>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
