import AboutUs from "./src/Pages/AboutUs/AboutUs";
import ClientsList from "./src/Pages/ClientsList/ClientsList";
import Favorites from "./src/Pages/Favorites/Favorites";
import HomePage from "./src/Pages/HomePage/HomePage";
import Login from "./src/Pages/Login/Login";
import Notifications from "./src/Pages/Notifications/Notifications";
import Register from "./src/Pages/Register/Register";
import UserBasket from "./src/Pages/UserBasket/UserBasket";
import UserProfile from "./src/Pages/userProfile/userProfile";

let routes = [
  { path: "/", element: <HomePage /> },
  { path: "/userprofile", element: <UserProfile /> },
  { path: "/favorites", element: <Favorites /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/notifications", element: <Notifications /> },
  { path: "/userbasket", element: <UserBasket /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/clientlist", element: <ClientsList /> },
];

export default routes;
