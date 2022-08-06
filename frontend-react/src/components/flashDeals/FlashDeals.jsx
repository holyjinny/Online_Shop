import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import FlashProduct from "./FlashProduct";

const FlashDeals = () => {
  return (
    <>
      <section className="flash background">
        <div className="container">
          <div className="heading f_flex">
            <FontAwesomeIcon
              icon={faBolt}
              className="fa fa-bolt"
            ></FontAwesomeIcon>
            <h1>Flash Deals</h1>
          </div>
          <div className="discount">
            <h4>20% 할인</h4>
          </div>
          <FlashProduct />
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
