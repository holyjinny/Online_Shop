import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux-toolkit/features/cartSlice";
import Stars from "./Stars";
import { useGetAllProductsQuery } from "../../redux-toolkit/features/productsAPI";

const FlashProduct = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="box">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured..</p>
      ) : (
        <Slider {...settings}>
          {data?.map((product) => (
            <div key={product.id} className="flash">
              <div className="content">
                <img src={product.image} alt={product.title} />
                <div className="flash-like">
                  <label>0</label> <br />
                  <FontAwesomeIcon icon={faHeart} className="fa fa-heart" />
                  <br />
                  <button onClick={() => handleAddToCart(product)}>
                    <FontAwesomeIcon
                      icon={faCartPlus}
                      className="fa fa-cart-plus"
                    />
                  </button>
                </div>
                <h3>{product.title}</h3>
                <h6>${product.price - product.price * 0.2}</h6>
                <div className="star">
                  <Stars />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default FlashProduct;
