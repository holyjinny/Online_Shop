import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faArrowRight,
  faArrowLeft,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main");

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  function DropdownItem(props) {
    return (
      <p
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </p>
    );
  }

  return (
    <div className={scroll ? "stop-scrolling" : "dropdown"}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
      >
        <div className="menu">
          <DropdownItem leftIcon={<FontAwesomeIcon icon={faUser} />}>
            <Link to={"/login"}>
              <p>Login</p>
            </Link>
          </DropdownItem>
          <DropdownItem
            leftIcon={<FontAwesomeIcon icon={faGear} />}
            goToMenu="settings"
          >
            <p>Settings</p>
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}
            goToMenu="main"
          ></DropdownItem>
          <DropdownItem leftIcon={<FontAwesomeIcon icon={faGear} />}>
            <p>Settings</p>
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
