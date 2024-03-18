import React from "react";
import { AiOutlineStar, AiTwotoneStar, AiOutlineHeart } from "react-icons/ai";

import "./FoodBox.css";

function FoodBox({ title, price, isFavorite, id, isSale, isButtonNeed , serveFoodCounter }) {
  const addToFavorite = (foodID) => {
    console.log(foodID);
    let newFavoriteFood = {
      title,
      price,
      isFavorite: !isFavorite,
    };
    fetch(`http://localhost:4000/food/${foodID}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newFavoriteFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const addFoodToBasket = (foodID) => {
    let newBasketFood = {
      title,
      price,
      isSale: true,
      serveFoodCounter : ++serveFoodCounter
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
          <AiOutlineHeart
            className={`favorite-icon ${isFavorite && "favorite-food-active"}`}
            onClick={() => addToFavorite(id)}
          />
        </div>
        <div className="price-addtocart">
          <span className="food-price">{price.toLocaleString()} تومان</span>
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
