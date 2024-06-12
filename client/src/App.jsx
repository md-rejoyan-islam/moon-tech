import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import router from "./router/router";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import {
  getAllProducts,
  productErrorEmpty,
  productMessageEmpty,
} from "./redux/actions/product.action";

function App() {
  const { message, error } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    message && toast.success(message);
    error && toast.error(error);

    dispatch(productMessageEmpty());
    dispatch(productErrorEmpty());
  }, [message, error, dispatch]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
