import React from "react";
import BrandCart from "./BrandCart";
import "./Brand.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import BrandCategory from "./BrandCategory";

const Brand = () => {
  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <BrandCategory />

          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row f_flex">
                <h2>Mobile Phones</h2>
              </div>

              <div className="heading-right row">
                <span>View all</span>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="fa fa-caret-right"
                />
              </div>
            </div>

            <div className="product-content grid1">
              <BrandCart />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
