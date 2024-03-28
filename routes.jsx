import AboutUs from "./src/Pages/AboutUs/AboutUs";
import ClientsList from "./src/Pages/ClientsList/ClientsList";
import CookList from "./src/Pages/CookList/CookList";
import FoodDetails from "./src/Pages/FoodDetails/FoodDetails";
import HomePage from "./src/Pages/HomePage/HomePage";
import Login from "./src/Pages/Login/Login";
import Notifications from "./src/Pages/Notifications/Notifications";
import Register from "./src/Pages/Register/Register";
import UserBasket from "./src/Pages/UserBasket/UserBasket";
import UserProfile from "./src/Pages/UserProfile/UserProfile";
import CookListInfo from "./src/Pages/CookListInfo/CookListInfo"

let routes = [
  { path: "/", element: <HomePage /> },
  { path: "/userprofile", element: <UserProfile /> },
  { path: "/cooklist", element: <CookList /> },
  { path: "/cooklist/:id", element: <CookListInfo /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/notifications", element: <Notifications /> },
  { path: "/userbasket", element: <UserBasket /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/clientlist", element: <ClientsList /> },
  { path: "/fooddetail/:id", element: <FoodDetails /> },
];

export default routes;
