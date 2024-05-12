import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import FoodBox from "../../Components/FoodBox/FoodBox";
import Swal from "sweetalert2";
import "./UserBasket.css";
import { RxHamburgerMenu } from "react-icons/rx";

function UserBasket() {
  const [basketFood, setBasketFood] = useState([
    {
      id: "9",
      title: "نوشابه",
      price: 25000,
      image: "./img/soda.jpg",
      foodCount: 2,
    },
    {
      id: "8",
      title: "سینی 5 نفره",
      price: 299000,
      image: "./img/sini5.jpg",
      foodCount: 2,
    },
    {
      id: "12",
      title: "قروتی",
      price: 450000,
      image: "./img/ghorouti.jpg",
      foodCount: 1,
    },
    {
      id: "13",
      title: "همبرگر",
      price: 65000,
      image: "./img/hamburgur.jpg",
      foodCount: 2,
    },
    {
      id: "11",
      title: "سالاد شیرازی",
      price: 30000,
      image: "./img/salade shirazi.jpg",
      foodCount: 2,
    },
    {
      id: "10",
      title: "سالاد فصل",
      price: 30000,
      image: "./img/salade fasl.jpg",
      foodCount: 2,
    },
  ]);
  const [sidebarStatus, setSidebarStatus] = useState(false);

  const pageAddress = location.href;

  // useEffect(() => {
  //   async function getBasket() {
  //     await fetch("http://localhost:4000/userbasket")
  //       .then((res) => res.json())
  //       .then((food) => setBasketFood(food));
  //   }
  //   getBasket();
  // }, []);

  function totalPrice() {
    let total = 0;
    basketFood.forEach((food) => {
      console.log(food);
      total += food.price * food.foodCount;
    });
    return total;
  }

  const showTotal = () => {
    console.log(basketFood);
    Swal.fire({
      title: totalPrice().toLocaleString(),
      icon: "success",
      confirmButtonText: "پرداخت",
    });
  };

  return (
    <>
      <Sidebar sidebarStatus={sidebarStatus} />

      <div
        className={`hamburgur-menu ${
          sidebarStatus === true ? "escape-from-sidebar" : ""
        }`}
      >
        <RxHamburgerMenu onClick={() => setSidebarStatus((prev) => !prev)} />
      </div>
      <Header />

      <div className="foods">
        {basketFood.map((eachFood) => (
          <FoodBox key={eachFood.id} {...eachFood} pageAddress={pageAddress} />
        ))}
      </div>

      <button className="total-price" onClick={showTotal}>
        {" "}
        نمایش جمع خرید ها
      </button>
      <Footer />
    </>
  );
}

export default UserBasket;
