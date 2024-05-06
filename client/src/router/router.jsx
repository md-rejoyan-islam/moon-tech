import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main.jsx";
import Home from "../pages/main/Home.jsx";
import About from "../pages/main/About.jsx";
import TopRated from "../pages/main/TopRated.jsx";
import Cart from "../pages/main/Cart.jsx";
import ProductList from "../pages/dashboard/ProductList.jsx";
import AddProduct from "../pages/dashboard/AddProduct.jsx";
import Dashboard from "../layout/dashboard/Dashboard.jsx";

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
        element: <ProductList />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
    ],
  },
]);

export default router;