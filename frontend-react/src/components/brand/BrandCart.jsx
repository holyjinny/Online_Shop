import React from "react";
import TestData from "../main/TestData";

const BrandCart = () => {
  return (
    <>
      {TestData.map((value, index) => {
        return (
          <div className="brand" key={index}>
            <div className="content">
              <div className="product mtop">
                <div className="img">
                  <img src={value.cover} alt={value.title} />
                </div>
              </div>
              <h3>{value.title}</h3>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BrandCart;
