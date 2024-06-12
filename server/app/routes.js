import authRouter from "../routes/auth.route.js";
import brandRouter from "../routes/brand.route.mjs";
import cartRouter from "../routes/cart.route.mjs";
import productRouter from "../routes/product.route.js";
import seedRouter from "../routes/seeds.route.mjs";
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
  {
    path: "/api/v1/brands",
    route: brandRouter,
  },
  {
    path: "/api/v1/carts",
    route: cartRouter,
  },
  {
    path: "/api/v1/seeds",
    route: seedRouter,
  },
];

export default routes;
