import React from "react";
import { useGetAllProductsQuery } from "../../redux-toolkit/features/productsAPI";
import TestData from "../main/TestData";

const Cart = () => {
  //   const { data } = useGetAllProductsQuery();

  return (
    <>
      <div className="content grid product">
        {TestData.map((product) => (
          <div className="box" key={product.id}>
            <div className="img">
              <img src={product.cover} alt={product.title} />
            </div>

            <h4>{product.title}</h4>
            <span>{product.id}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
