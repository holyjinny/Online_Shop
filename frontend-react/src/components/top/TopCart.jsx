import React from "react";
import { useGetAllProductsQuery } from "../../redux-toolkit/features/productsAPI";
import Slider from "react-slick";

const TopCart = () => {
  const { data } = useGetAllProductsQuery();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Slider {...settings}>
        {data?.map((product) => (
          <div className="box product" key={product.id}>
            <div className="nametop d_flex">
              <span className="tleft">Category</span>
              <span className="tright">Reviews</span>
            </div>

            <div className="img">
              <img src={product.image} alt={product.title} />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default TopCart;
