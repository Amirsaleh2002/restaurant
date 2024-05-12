import React, { useEffect, useState } from "react";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./FoodBox.css";

function FoodBox({ id, title, price, image, foodCount, pageAddress }) {
  const [basketFood, setBasketFood] = useState([]);

  async function getUserFood() {
    await fetch("http://localhost:4000/userbasket")
      .then((res) => res.json())
      .then((food) => {
        setBasketFood(food);
      });
  }


  // const addFoodToBasket = async (id) => {
  //   let is = basketFood.some((food) => food.id === id);
  //   console.log(is);
  //   if (!is) {
  //     let newBasketFood = {
  //       id,
  //       title,
  //       price,
  //       image,
  //       foodCount: 1,
  //     };
  //     await fetch(
  //       `http://localhost:4000/userbasket
  //     `,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-type": "application/json",
  //         },
  //         body: JSON.stringify(newBasketFood),
  //       }
  //     ).then((res) => {
  //       if (res.ok) {
  //         getUserFood();
  //         const Toast = Swal.mixin({
  //           toast: true,
  //           position: "top-end",
  //           showConfirmButton: false,
  //           timer: 3000,
  //           timerProgressBar: true,
  //           didOpen: (toast) => {
  //             toast.onmouseenter = Swal.stopTimer;
  //             toast.onmouseleave = Swal.resumeTimer;
  //           },
  //         });
  //         Toast.fire({
  //           icon: "success",
  //           title: "غذا با موفقیت به سبد شما اضافه شد",
  //         });
  //       }
  //     });
  //     return true;
  //   } else {
  //     let newBasketFood = {
  //       id,
  //       title,
  //       price,
  //       image,
  //       foodCount: basketFood.find((food) => food.id === id).foodCount + 1,
  //     };
  //     await fetch(`http://localhost:4000/userbasket/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify(newBasketFood),
  //     }).then((res) => {
  //       if (res.ok) {
  //         const Toast = Swal.mixin({
  //           toast: true,
  //           position: "top-end",
  //           showConfirmButton: false,
  //           timer: 3000,
  //           timerProgressBar: true,
  //           didOpen: (toast) => {
  //             toast.onmouseenter = Swal.stopTimer;
  //             toast.onmouseleave = Swal.resumeTimer;
  //           },
  //         });
  //         Toast.fire({
  //           icon: "success",
  //           title: "غذا با موفقیت به سبد شما اضافه شد",
  //         });
  //       }
  //     });
  //     return true;
  //   }
  // };

  return (
    <div className="food-box">
      <a href="#">
        <img src={image} alt="food box" className="food-box-img" />
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
          {pageAddress === "http://localhost:5173/userbasket" ? (
            <span className="food-price">
              {(foodCount * price).toLocaleString()} تومان
            </span>
          ) : (
            <span className="food-price">{price.toLocaleString()} تومان</span>
          )}
          {pageAddress !== "http://localhost:5173/userbasket" ? (
            <button className="addtocart" onClick={() => addFoodToBasket(id)}>
              افزودن به سبد خرید
            </button>
          ) : (
            <span className="food-counter">{foodCount}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default FoodBox;
