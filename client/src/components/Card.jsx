import { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

function Card() {
  const carts = [1, 2, 3, 4];

  return (
    <div className="font-[sans-serif] text-left container">
      <div className="grid lg:grid-cols-3 gap-12 p-6 min-h-screen ">
        <div className="lg:col-span-2 bg-white divide-y sticky top-0">
          {carts.map((cart, index) => {
            const [amount, setAmount] = useState(1);
            return (
              <div
                className="flex items-start max-sm:flex-col gap-8 py-6"
                key={index}
              >
                <div className="h-52 shrink-0">
                  <img
                    src="https://readymadeui.com/images/product6.webp"
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
                <div className="flex items-start gap-6 max-md:flex-col w-full">
                  <div>
                    <h3 className="text-xl font-extrabold text-[#333] mb-6">
                      Black T-Shirt
                    </h3>
                    <div>
                      <h6 className="text-md text-gray-500">
                        Size: <strong className="ml-2">7.5</strong>
                      </h6>
                      <h6 className="text-md text-gray-500 mt-2">
                        Color: <strong className="ml-2">Black</strong>
                      </h6>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-6">
                      <button
                        type="button"
                        className="font-semibold text-gray-500 text-sm flex items-center gap-2 shrink-0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 fill-current inline"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                            data-original="#000000"
                          ></path>
                          <path
                            d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                            data-original="#000000"
                          ></path>
                        </svg>
                        Remove
                      </button>
                      <button
                        type="button"
                        className="font-semibold text-gray-500 text-sm flex items-center gap-2 shrink-0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18px"
                          className="fill-current inline"
                          viewBox="0 0 64 64"
                        >
                          <path
                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                            data-original="#000000"
                          ></path>
                        </svg>
                        Move to wish list
                      </button>
                    </div>
                  </div>
                  <div className="md:ml-auto md:text-right">
                    <div className="flex">
                      <button
                        type="button"
                        className="bg-transparent py-2 font-semibold text-[#333]"
                        onClick={() => setAmount(amount > 1 ? amount - 1 : 1)}
                      >
                        <FaMinus />
                      </button>
                      <span className="bg-transparent mx-4 px-4 py-2 font-semibold text-[#333] text-md border">
                        {amount}
                      </span>
                      <button
                        type="button"
                        className="bg-transparent py-2 font-semibold text-[#333]"
                        onClick={() => setAmount(amount + 1)}
                      >
                        <FaPlus />
                      </button>
                    </div>
                    <div className="mt-6">
                      <h4 className="text-lg font-bold text-[#333]">
                        <strike className="text-gray-500 mr-2 font-medium">
                          $22.5
                        </strike>
                      </h4>
                      <h4 className="text-lg font-bold text-[#333] mt-2">
                        $18.5
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="shadow-sm p-6 h-fit lg:sticky lg:top-4 border rounded-md ">
          <h3 className="text-xl font-extrabold text-[#333] border-b pb-4">
            Order Summary
          </h3>
          <ul className="text-[#333] divide-y mt-6">
            <li className="flex flex-wrap gap-4 text-md py-4">
              Subtotal <span className="ml-auto font-bold">$55.5</span>
            </li>
            <li className="flex flex-wrap gap-4 text-md py-4">
              Shipping <span className="ml-auto font-bold">$4.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-md py-4">
              Tax <span className="ml-auto font-bold">$4.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-md py-4 font-bold">
              Total <span className="ml-auto">$63.5</span>
            </li>
          </ul>
          <button
            type="button"
            className="mt-6 text-md px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded"
          >
            Check out
          </button>

          <div className="mt-10">
            <h3 className="text-xl font-extrabold text-[#333] mb-6">
              Apply promo code
            </h3>
            <div className="flex border border-blue-600 overflow-hidden max-w-md rounded">
              <input
                type="email"
                placeholder="Promo code"
                className="w-full outline-none bg-white text-gray-600 text-md px-4 py-2.5"
              />
              <button
                type="button"
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 px-6 text-md text-white"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
