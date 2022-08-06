import React from "react";
import category1 from "../../assets/images/Womens-shirt.png";
import category2 from "../../assets/images/Womens-Tshirt.png";

const BrandCategory = () => {
  const brandData = [
    {
      cateImg: category1,
      cateName: "HERMES",
    },
    {
      cateImg: category2,
      cateName: "LOUIS VUITTON",
    },
    {
      cateImg: category1,
      cateName: "NIKE",
    },
    {
      cateImg: category2,
      cateName: "H&M",
    },
    {
      cateImg: category1,
      cateName: "ZARA",
    },
    {
      cateImg: category2,
      cateName: "GUCCI",
    },
  ];

  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Brands</h1>
          <h1>Shops</h1>
        </div>

        {brandData.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt={value.cateName} />
              <span>{value.cateName}</span>
            </div>
          );
        })}

        <div className="box box2">
          <button>View All Brands</button>
        </div>
      </div>
    </>
  );
};

export default BrandCategory;
