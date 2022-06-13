import { lazy } from "react";
import { routes } from "../config/routes";
import { HeaderDefault } from "../layouts/header";

const Home = lazy(() => import("../pages/Home/Home"));
const Details = lazy(() => import("../pages/Details/ProductDetails"));
const Search = lazy(() => import("../pages/Search/Search"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const CheckOut = lazy(() => import("../pages/CheckOut/CheckOut"));
// const CheckOutSuccess = lazy(() => import("../pages/CheckOut/CheckOutSuccess"));
const Signup = lazy(() => import("../pages/Sign/Signup"));
const Signin = lazy(() => import("../pages/Sign/Signin"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const publicRoutes = [
  {
    path: routes.home,
    component: Home,
  },
  {
    path: `${routes.details}/:slug`,
    component: Details,
  },
  {
    path: routes.checkout,
    component: CheckOut,
    layout: HeaderDefault,
    content: {
      title: "Thanh toán",
    },
  },
  {
    path: routes.cart,
    component: Cart,
  },
  {
    path: routes.search,
    component: Search,
  },
  {
    path: routes.signin,
    component: Signin,
    isPrivate: true,
    layout: HeaderDefault,
    content: {
      title: "Đăng nhập",
    },
  },
  {
    path: routes.signup,
    component: Signup,
    layout: HeaderDefault,
    content: {
      title: "Đăng ký",
    },
  },
  {
    path: "*",
    component: NotFound,
  },
];

export { publicRoutes };
