import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { RxHamburgerMenu } from "react-icons/rx";
import FoodBox from "../../Components/FoodBox/FoodBox";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Footer from "../../Components/Footer/Footer";
import "./HomePage.css";

function HomePage() {
  const [allFood, setAllFood] = useState([
    {
      title: "سینی 5 نفره",
      price: 299000,
      id: "8",
      image: "./img/sini5.jpg",
      category: "سینی",
      score: "5",
    },
    {
      title: "نوشابه",
      price: 25000,
      id: "9",
      image: "./img/soda.jpg",
      category: "نوشیدنی",
      score: "5",
    },
    {
      title: "سالاد فصل",
      price: 30000,
      id: "10",
      category: "سالاد",
      image: "./img/salade fasl.jpg",
      score: "5",
    },
    {
      title: "سالاد شیرازی",
      price: 30000,
      id: "11",
      image: "./img/salade shirazi.jpg",
      category: "سالاد",
      score: "5",
    },
    {
      title: "قروتی",
      price: 450000,
      id: "12",
      category: "محلی",
      image: "./img/ghorouti.jpg",
      score: "5",
    },
    {
      title: "آبگوشت",
      price: 98000,
      id: "15",
      image: "./img/abgoosht.jpg",
      category: "سنتی",
      score: "5",
    },
    {
      title: "همبرگر",
      price: 65000,
      id: "13",
      category: "ساندویچ",
      image: "./img/hamburgur.jpg",
      score: "5",
    },
    {
      id: "14",
      title: "پیتزا پپرونی",
      price: 100000,
      category: "پیتزا",
      image: "./img/pizzapep.jpg",
      score: "5",
    },
  ]);
  const [filteredFoodByCategory, setFilteredFoodByCategory] = useState([]);
  const [category, setCategory] = useState("");
  const [sidebarStatus, setSidebarStatus] = useState(false);

  // useEffect(() => {
  //   fetch("http://localhost:4000/food")
  //     .then((res) => res.json())
  //     .then((food) => {
  //       setAllFood(food);
  //       setFilteredFoodByCategory(food);
  //     });
  // }, []);

  useEffect(() => {
    switch (category) {
      case "همه":
        setFilteredFoodByCategory(allFood);
        break;
      case "پیتزا":
        let pizaaCategory = allFood.filter((food) => food.category === "پیتزا");
        setFilteredFoodByCategory(pizaaCategory);
        break;
      case "ساندویچ":
        let sandwichCategory = allFood.filter(
          (food) => food.category === "ساندویچ"
        );
        setFilteredFoodByCategory(sandwichCategory);
        break;
      case "سنتی":
        let ancientCategory = allFood.filter(
          (food) => food.category === "سنتی"
        );
        setFilteredFoodByCategory(ancientCategory);
        break;
      case "محلی":
        let localCategory = allFood.filter((food) => food.category === "محلی");
        setFilteredFoodByCategory(localCategory);
        break;
      case "سینی":
        let siniCategory = allFood.filter((food) => food.category === "سینی");
        setFilteredFoodByCategory(siniCategory);
        break;
      case "نوشیدنی":
        let drinkCategory = allFood.filter(
          (food) => food.category === "نوشیدنی"
        );
        setFilteredFoodByCategory(drinkCategory);
        break;
      case "سالاد":
        let saladCategory = allFood.filter((food) => food.category === "سالاد");
        setFilteredFoodByCategory(saladCategory);
        break;
      default:
        setFilteredFoodByCategory(allFood);
        break;
    }
  }, [category]);
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

      <div className="categories">
        <ul className="category-menu">
          <li
            className="category-name category-active"
            onClick={() => {
              setCategory("همه");
            }}
          >
            همه
          </li>
          <li
            className="category-name"
            onClick={() => {
              setCategory("پیتزا");
            }}
          >
            پیتزا
          </li>
          <li
            className="category-name"
            onClick={() => {
              setCategory("ساندویچ");
            }}
          >
            ساندویچ
          </li>
          <li
            className="category-name"
            onClick={() => {
              setCategory("سنتی");
            }}
          >
            سنتی
          </li>
          <li
            className="category-name"
            onClick={() => {
              setCategory("محلی");
            }}
          >
            محلی
          </li>
          <li
            className="category-name"
            onClick={() => {
              setCategory("سینی");
            }}
          >
            سینی
          </li>
          <li
            className="category-name"
            onClick={() => {
              setCategory("نوشیدنی");
            }}
          >
            نوشیدنی
          </li>
          <li
            className="category-name"
            onClick={() => {
              setCategory("سالاد");
            }}
          >
            سالاد
          </li>
        </ul>
      </div>

      <div className="introduce">
        {/* <img src="./img/images--2-.jpg" alt="introduce" /> */}
        <div className="header-title">
          <h1 className="introduce-title">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("رستوران فلان آماده پذیرایی از شما می باشد")
                  .start()
                  .pauseFor(2000)
                  .deleteAll()
                  .pauseFor(1000)
                  .typeString("با یک بار خرید مشتری دائمی ما می شوید")
                  .pauseFor(2000)
                  .deleteAll();
              }}
              options={{
                loop: true,
              }}
            />
          </h1>
        </div>
        <div className="foods">
          {filteredFoodByCategory.map((food) => (
            <FoodBox key={food.id} {...food} isButtonNeed={true} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default HomePage;
