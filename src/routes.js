import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Login from "./components/login";
import Signup from "./components/signup";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/about",
    component: About,
    exact: true
  },
  {
    path: "/contact",
    component: Contact,
    exact: true
  },
  {
    path: "/login",
    component: Login,
    exact: true
  },
  {
    path: "/signup",
    component: Signup,
    exact: true
  }
];

export default routes;
