import { Link, NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import logo from "../../assets/moon-tech-logo.png";

const Navbar = () => {
  const [openSmallMenu, setOpenSmallMenu] = useState(false);
  return (
    <>
      <header className=" mx-auto  bg-[#002a5c]  ">
        <nav>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:p-3">
            <Link
              to={"/"}
              className="flex items-center space-x-3 rtl:space-x-reverse text-indigo-900 font-semibold"
            >
              {/* Moon Tech */}
              <img src={logo} className="w-20" alt="" />
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-violet-300 border border-violet-400 focus:border-none "
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => {
                setOpenSmallMenu(!openSmallMenu);

                if (openSmallMenu) {
                  document.body.style.height = "auto";
                  document.body.style.overflow = "visible";
                } else {
                  document.body.style.height = "100vh";
                  document.body.style.overflow = "hidden";
                }
              }}
            >
              <span className="sr-only">Open main menu</span>

              {openSmallMenu ? (
                <RxCross2 className="text-2xl" />
              ) : (
                <RxHamburgerMenu className="text-2xl" />
              )}
              {/* <RxCross2 className="hidden text-2xl" />
              <RxHamburgerMenu className="text-2xl" /> */}
            </button>
            <div
              className={`${
                !openSmallMenu && "hidden"
              } w-full md:block md:w-auto`}
            >
              <ul className="font-medium flex flex-col p-2 md:p-0 mt-2 border border-violet-300 rounded-lg  md:flex-row gap-1 rtl:space-x-reverse md:items-center md:mt-0 md:border-0 ">
                <li>
                  <NavLink
                    to="/"
                    className="block py-2 px-3  rounded hover:bg-violet-500 text-white  font-semibold md:border-0"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/top-rated"
                    className="block py-2 px-3  rounded hover:bg-violet-500 text-white  font-semibold md:border-0 "
                  >
                    Top Rated
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/about"}
                    className="block py-2 px-3  rounded hover:bg-violet-500 text-white  font-semibold md:border-0 "
                  >
                    About
                  </NavLink>
                </li>

                <li
                  title="Wishlist"
                  className="flex gap-2 px-2 items-center mt-2 md:mt-0"
                >
                  <Link to="/">
                    <IoIosListBox className=" bg-indigo-500 w-8 h-8 p-2 rounded-full text-white" />
                  </Link>
                  <Link to="/cart">
                    <BsFillCartFill className=" bg-indigo-500 w-8 h-8 p-2 rounded-full  text-white" />
                  </Link>
                </li>
                <li title="cart"></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
