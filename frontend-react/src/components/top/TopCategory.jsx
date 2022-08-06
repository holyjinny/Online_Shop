import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Top.css";
import TopCart from "./TopCart";

const TopCategory = () => {
  return (
    <>
      <section className="topCategory background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row f_flex">
              <FontAwesomeIcon
                icon={faBorderAll}
                className="fa fa-border-all"
              />
              <h2>Top Categories</h2>
            </div>

            <div className="heading-right row">
              <span>View all</span>
              <FontAwesomeIcon
                icon={faCaretRight}
                className="fa fa-caret-right"
              />
            </div>
          </div>

          <TopCart />
        </div>
      </section>
    </>
  );
};

export default TopCategory;
