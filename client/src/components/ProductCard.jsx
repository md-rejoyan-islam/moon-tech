import PropTypes from "prop-types";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers/productReducer/action";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="shadow-lg rounded-xl border   flex flex-col text-indigo-900 w-full">
      <div className="   mx-auto w-full ">
        <img src={product?.image} className="w-full" alt={product?.model} />
      </div>
      <div className="p-3 border-t flex-1 flex justify-between flex-col">
        <div className="pb-4">
          <h1 className="font-bold text-center">{product?.model}</h1>
          <p className="text-center font-semibold mb-3">
            Rating: {product.rating}
          </p>
          <div className=" flex-1">
            <ul className="space-y-2">
              {product?.keyFeature.map((feature, index) => {
                return (
                  <li className="text-sm " key={index}>
                    {feature}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="border-t pt-2">
          <button className="w-full text-center text-red-500 font-semibold">
            153,00 $
          </button>
          {location.pathname === "/" && (
            <div className="flex gap-2 mt-3 ">
              <button
                className="bg-indigo-100 hover:bg-indigo-500 rounded-md py-2 text-sm px-2 flex-1 hover:text-white text-bold flex items-center justify-center gap-3"
                onClick={() => dispatch(addToCart(product))}
                title="Buy Now"
              >
                <FaShoppingCart />
                <span> Buy Now</span>
              </button>
              <button
                title="Add to wishlist"
                className="bg-indigo-100 hover:bg-indigo-500  py-1 px-2 rounded-full h-8 w-8 flex items-center justify-center hover:fill-red-500 hover:text-white"
              >
                <FaRegHeart className=" hover:hidden inline-block " />
                <FaHeart className="hover:fill-red-500 hidden " />
              </button>
            </div>
          )}
        </div>
        {/* {location.pathname.includes("/cart") && (
          <div className="flex gap-2 mt-5">
            <button
              className="bg-red-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
              onClick={() => dispatch(removeFromCart(product.id))}
            >
              Remove from cart
            </button>
       
          </div>
        )} */}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
