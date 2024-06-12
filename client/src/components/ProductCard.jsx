import { addToCart } from "@/redux/actions/product.action";
import PropTypes from "prop-types";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="shadow-lg rounded-xl border   flex flex-col text-sky-900 w-full">
      <div className="   mx-auto w-full ">
        {/* <img src={product?.images[0]} className="w-full" alt={product?.model} /> */}
        {product?.images?.length && (
          <img
            src={product?.images[0]}
            className="w-full"
            alt={product?.title}
          />
        )}
      </div>
      <div className="p-3 border-t flex-1 flex justify-between flex-col">
        <div className="pb-4">
          <h1 className="font-bold text-center pb-4">
            <span>{product?.title} </span>
            <span>{product?.processor?.model} </span>
            <span>{product?.memory?.ram} Ram </span>
            <span>
              {product?.storage?.capacity} {product?.storage?.type}
            </span>
          </h1>
          <ul className=" pl-4 list-disc text-slate-500 text-[14px] space-y-2">
            <li>
              Processor: {product?.processor?.model} with{" "}
              {product?.processor?.core} core CPU (
              {product?.processor?.frequency})
            </li>
            <li>Ram : {product?.memory?.ram} </li>
            <li>
              Strorage: {product?.storage?.capacity} {product?.storage?.type}
            </li>
            <li>
              Display: {product?.display?.size} {product?.display?.type} (
              {product?.display?.resolution})
            </li>
            <li>
              Features: {product?.display?.features} {product?.display?.touch}
            </li>
          </ul>
          {/* <p className="text-center font-semibold mb-3">
            Rating: {product?.rating}
          </p> */}
        </div>
        <div className="border-t pt-2">
          <button className="w-full text-center text-red-500 font-semibold">
            {product?.price?.regular} <span className="text-2xl">৳</span>
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
