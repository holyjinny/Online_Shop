import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux-toolkit/features/singleProductApi";
import Stars from "../flashDeals/Stars";
import "./ProductSingle.css";

const ProductSingle = () => {
  const product = useParams();
  const { data, error, isLoading } = useGetSingleProductQuery(
    product.productId
  );

  const imags = document.querySelectorAll(".img-select a");
  const imgBtns = [...imags];
  let imgId = 1;
  imgBtns.forEach((imgItem) => {
    imgItem.addEventListener("click", (event) => {
      event.preventDefault();
      imgId = imgItem.dataset.id;
      slideImage();
    });
  });

  function slideImage() {
    const displayWidth = document.querySelector(
      ".img-showcase img:first-child"
    ).clientWidth;

    document.querySelector(".img-showcase").style.transform = `translateX(${
      -(imgId - 1) * displayWidth
    }px)`;
  }

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>An error occured...</h1>
      ) : (
        <div className="card-wrapper">
          <span className="link-route">
            <Link to={"/"}>Home</Link> {">"}
            <Link to={"/pages"}>Brand</Link>
          </span>

          <div className="card">
            <div className="product-image" key={data?.id}>
              <div className="img-display">
                <div className="img-showcase">
                  <img src={data?.image} alt={data?.title} />
                  <img src={data?.image} alt={data?.title} />
                  <img src={data?.image} alt={data?.title} />
                  <img src={data?.image} alt={data?.title} />
                </div>
              </div>

              <div className="img-select">
                <div className="img-item">
                  <a href="#" data-id="1">
                    <img src={data?.image} alt={data?.title} />
                  </a>
                </div>
                <div className="img-item">
                  <a href="#" data-id="2">
                    <img src={data?.image} alt={data?.title} />
                  </a>
                </div>
                <div className="img-item">
                  <a href="#" data-id="3">
                    <img src={data?.image} alt={data?.title} />
                  </a>
                </div>
                <div className="img-item">
                  <a href="#" data-id="4">
                    <img src={data?.image} alt={data?.title} />
                  </a>
                </div>
              </div>
            </div>

            <div className="product-content">
              <h2 className="product-title">{data?.title}</h2>
              <Link to={"#"} className="product-link">
                Visit Store
              </Link>

              <div className="product-rating">
                <Stars />
                <span>4.7(21)</span>
              </div>

              <div className="product-price">
                <p className="last-price">
                  Old Price: <span>{data?.price}</span>
                </p>
                <p className="new-price">
                  New Price:{" "}
                  <span>{data?.price - data?.price * 0.05} (5%)</span>
                </p>
              </div>

              <div className="product-detail">
                <h2>about this item: </h2>
                <p>{data?.description}</p>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="fas fa-check" />
                    Color: <span>Black</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="fas fa-check" />
                    Available: <span>in stock</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="fas fa-check" />
                    Category: <span>Shoes</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="fas fa-check" />
                    Shipping Area: <span>All over the world</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="fas fa-check" />
                    Shipping Fee: <span>Free</span>
                  </li>
                </ul>
              </div>

              <div className="purchase-info">
                <input type="number" min={1} />
                <button type="button" className="button">
                  Add to Cart
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="fa-shopping-cart"
                  ></FontAwesomeIcon>
                </button>
                <button type="button" className="button">
                  Compare
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductSingle;
