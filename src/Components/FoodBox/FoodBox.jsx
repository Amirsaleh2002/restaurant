import React from "react";
import { AiOutlineStar, AiTwotoneStar, AiOutlineHeart } from "react-icons/ai";

import { Link } from "react-router-dom";
import "./FoodBox.css";

function FoodBox({
  title,
  price,
  isFavorite,
  id,
  isSale,
  isButtonNeed,
  serveFoodCounter,
  pageAddress
}) {


  const addFoodToBasket = (foodID) => {
    let newBasketFood = {
      title,
      price,
      isSale: true,
      serveFoodCounter: ++serveFoodCounter,
    };
    fetch(`http://localhost:4000/food/${foodID}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newBasketFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="food-box">
      <a href="#">
        <img
          src="./img/download (2).jpg"
          alt="food box"
          className="food-box-img"
        />
      </a>
      <div className="food-details">
        <p className="food-desc">{title}</p>
        <div className="score-favorite">
          <div className="food-score">
            <AiOutlineStar className="score-icon" />
            <AiOutlineStar className="score-icon" />
            <AiTwotoneStar className="score-icon" />
            <AiTwotoneStar className="score-icon" />
            <AiTwotoneStar className="score-icon" />
          </div>
          <Link to={`/fooddetail/${id}`} className="see-food-details">
            مشاهده جزئیات
          </Link>
        </div>
        <div className="price-addtocart">
          {isSale && pageAddress === "http://localhost:5173/userbasket" ? (
            <span className="food-price">
              {(serveFoodCounter * price).toLocaleString()} تومان
            </span>
          ) : (
            <span className="food-price">{price.toLocaleString()} تومان</span>
          )}
          {isButtonNeed ? (
            <button className="addtocart" onClick={() => addFoodToBasket(id)}>
              افزودن به سبد خرید
            </button>
          ) : (
            <span className="food-counter">{serveFoodCounter}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default FoodBox;
