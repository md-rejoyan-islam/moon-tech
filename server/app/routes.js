import authRouter from "../routes/auth.route.js";
import productRouter from "../routes/product.route.js";
import userRouter from "../routes/user.route.js";

const routes = [
  {
    path: "/api/v1/products",
    route: productRouter,
  },
  {
    path: "/api/v1/users",
    route: userRouter,
  },
  {
    path: "/api/v1/auth",
    route: authRouter,
  },
];

export default routes;
