import React from "react";
import "./UserBasket.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";
import { useState } from "react";
import FoodBox from "../../Components/FoodBox/FoodBox";
function UserBasket() {
  const [basketFood, setBasketFood] = useState([]);

  const pageAddress = location.href


  useEffect(() => {
    fetch("http://localhost:4000/food")
      .then((res) => res.json())
      .then((food) => setBasketFood(food));
  }, []);
  return (
    <>
      <Sidebar />
      <Header />

      <div className="foods">
      {basketFood.map((eachFood) => (
          eachFood.isSale && (
            <FoodBox key={eachFood.id} {...eachFood} pageAddress={pageAddress}  />
          )
        ))}
      </div>
      <Footer />
    </>
  );
}

export default UserBasket;
