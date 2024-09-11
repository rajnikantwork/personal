import { lazy } from "react";
import constant from "./RouteConstants";
const Login = lazy(() => import("../screen/onboarding/login"));
const ForgotPassword = lazy(() => import("../screen/onboarding/forgotpassword"));
const Home = lazy(() => import("../screen/home"));
const Services = lazy(() => import("../screen/services"));
const Portfolios = lazy(() => import("../screen/portfolios"));
const Blog = lazy(() => import("../screen/blog"));
const Contact = lazy(() => import("../screen/contact"));

const { routeConstants } = constant;

const {
  login,
  forgotPassword,
  homePage,
  home,
  services,
  portfolios,
  blog,
  contact
} = routeConstants;

export const RoutesPath = [
  {
    path: login,
    element: Login
  },
  {
    path: forgotPassword,
    element: ForgotPassword
  }
];

export const ContainerRoutes = [
  {
    path: homePage,
    element: Home
  },
  {
    path: home,
    element: Home
  },
  {
    path: services,
    element: Services
  },
  {
    path: portfolios,
    element: Portfolios
  },
  {
    path: blog,
    element: Blog
  },
  {
    path: contact,
    element: Contact
  }
];
