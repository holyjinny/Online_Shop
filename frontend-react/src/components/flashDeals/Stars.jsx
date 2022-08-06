import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Stars = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faStar} className="fa fa-star"></FontAwesomeIcon>
      <FontAwesomeIcon icon={faStar} className="fa fa-star"></FontAwesomeIcon>
      <FontAwesomeIcon icon={faStar} className="fa fa-star"></FontAwesomeIcon>
      <FontAwesomeIcon icon={faStar} className="fa fa-star"></FontAwesomeIcon>
      <FontAwesomeIcon icon={faStar} className="fa fa-star"></FontAwesomeIcon>
    </div>
  );
};

export default Stars;
