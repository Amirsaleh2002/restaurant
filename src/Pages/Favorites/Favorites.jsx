import React, { useEffect, useState } from "react";
import "./Favorites.css";
import FoodBox from "../../Components/FoodBox/FoodBox";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import Category from "../../Components/Category/Category";
import Footer from "../../Components/Footer/Footer";

function Favorites() {
  const [favoriteFood, setFavoriteFood] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/food")
      .then((res) => res.json())
      .then((food) => setFavoriteFood(food));
  }, []);
  
  return (
    <>
      <Sidebar />
      <Header />
      <div className="foods">
        {favoriteFood.map((eachFood) => (
          eachFood.isFavorite && (
            <FoodBox key={eachFood.id} {...eachFood} isButtonNeed={true} />
          )
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Favorites;
