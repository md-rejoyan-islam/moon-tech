import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main.jsx";
import Home from "../pages/main/Home.jsx";
import About from "../pages/main/About.jsx";
import TopRated from "../pages/main/TopRated.jsx";
import Cart from "../pages/main/Cart.jsx";
import ProductList from "../pages/dashboard/ProductList.jsx";
import AddProduct from "../pages/dashboard/AddProduct.jsx";
import Dashboard from "../layout/dashboard/Dashboard.jsx";
import BrandList from "@/pages/dashboard/BrandList.jsx";
import DashboardHome from "@/pages/dashboard/DashboardHome.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "top-rated",
        element: <TopRated />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "product-list",
        element: <ProductList />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "brand-list",
        element: <BrandList />,
      },
    ],
  },
]);

export default router;
