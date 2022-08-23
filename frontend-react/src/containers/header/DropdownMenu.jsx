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
import { useDispatch } from "react-redux";

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main");

  const [scroll, setScroll] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  function DropdownItem(props) {
    return (
      <div
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </div>
    );
  }

  function handleLogout() {
    console.log("로그아웃");
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
          <span>회원 아이디가 들어갈 부분</span>
          <DropdownItem leftIcon={<FontAwesomeIcon icon={faUser} />}>
            <Link to={"/login"}>
              <p>로그인</p>
            </Link>
          </DropdownItem>
          <DropdownItem leftIcon={<FontAwesomeIcon icon={faGear} />}>
            <Link to={"/userList"}>
              <p>UserList</p>
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
