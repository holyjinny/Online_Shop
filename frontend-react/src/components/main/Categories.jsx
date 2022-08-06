import React from "react";
import category1 from "../../assets/images/Womens-shirt.png";
import category2 from "../../assets/images/Womens-Tshirt.png";
import category3 from "../../assets/images/Hat.png";
import category4 from "../../assets/images/Mans-Tshirt.png";

const Categories = () => {
  const data = [
    {
      cateImg: category1,
      cateName: "Womens Shirt",
    },
    {
      cateImg: category2,
      cateName: "Womens T-Shirt",
    },
    {
      cateImg: category3,
      cateName: "Hat",
    },
    {
      cateImg: category4,
      cateName: "Mans T-Shirt",
    },
    {
      cateImg: category4,
      cateName: "Mans T-Shirt",
    },
    {
      cateImg: category4,
      cateName: "Mans T-Shirt",
    },
    {
      cateImg: category4,
      cateName: "Mans T-Shirt",
    },
    {
      cateImg: category4,
      cateName: "Mans T-Shirt",
    },
  ];
  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt={value.cateName} />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
