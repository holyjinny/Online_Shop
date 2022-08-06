import React from "react";
import "./NewArrivals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Cart from "./Cart";

const NewArrivals = () => {
  return (
    <>
      <section className="newarrivals background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row f_flex">
              <FontAwesomeIcon
                icon={faVolumeHigh}
                className="fa fa-volume-high"
              />
              <h2>New Arrivals</h2>
            </div>

            <div className="heading-right row">
              <span>View all</span>
              <FontAwesomeIcon
                icon={faCaretRight}
                className="fa fa-caret-right"
              />
            </div>
          </div>

          <Cart />
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
