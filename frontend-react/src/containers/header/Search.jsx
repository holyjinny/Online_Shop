import React from "react";
import logo from "../../assets/logo/SJH-Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faCartShopping,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import UserService from "../../axios/UserService";
import { useSelector } from "react-redux";
import store from "../../redux-toolkit/store";
import { getTotals } from "../../redux-toolkit/features/cartSlice";
import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";

const Search = () => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  // 홈에서 장바구니에 물건을 추가하면 실시간으로 수량이 갱신 됨
  store.dispatch(getTotals());

  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <Link to={"/"}>
              <img src={logo} alt="SJH" />
            </Link>
          </div>

          <div className="search-box f_flex">
            <FontAwesomeIcon
              icon={faSearch}
              className="fa search"
            ></FontAwesomeIcon>
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
            <FontAwesomeIcon
              icon={faUser}
              className="fa user icon-circle"
            ></FontAwesomeIcon>

            <div className="cart">
              <Link to="/cart">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="fa cartshopping icon-circle"
                ></FontAwesomeIcon>
                <span>{cartTotalQuantity}</span>
              </Link>
            </div>

            <div className="drop-menu">
              <NavItem
                icon={
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className="fa fa-caret-down icon-circle"
                  />
                }
              >
                <DropdownMenu />
              </NavItem>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
