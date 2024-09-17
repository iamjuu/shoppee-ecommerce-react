import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart, FaHeart,FaBars, FaTimes } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import DarkMode from "./Darkmode";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Serives", link: "/services" },
  { id: 3, name: "About", link: "/about" },
  { id: 4, name: "Kids Wear", link: "/KidsWear" },
  { id: 4, name: "Mens Wear", link: "/MensWear" },
  { id: 5, name: "Womens Wear", link: "/WomensWear" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];

const Header = ({ handleOrderPopup, handleWishPopup }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [wishOpen, setWishOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const wishtoggle = () => {
    setWishOpen(!wishOpen);
  };
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              Shopee
            </a>
          </div>

          {/* Search Bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Order Button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden">Order</span>
              <FaShoppingCart className="text-xl text-white drop-shadow-sm" />
            </button>

            {/* wishlist Button  */}
            <button
              onClick={() => handleWishPopup()}
              className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <FaHeart className="text-xl text-white drop-shadow-sm" />

              <span className="group-hover:block hidden">Wishlist</span>
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="sm:hidden">
              <button onClick={toggleMenu}>
                {menuOpen ? (
                  <FaTimes className="text-2xl" />
                ) : (
                  <FaBars className="text-2xl" />
                )}
              </button>
            </div>
            <div className="sm:hidden">
              <button onClick={wishtoggle}>
                {wishOpen ? (
                  <FaTimes className="text-2xl" />
                ) : (
                  <FaBars className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="relative sm:flex justify-center">
        {/* Mobile Menu */}
        <ul
          className={`sm:flex items-center gap-4 ${
            menuOpen ? "block" : "hidden"
          } sm:block absolute sm:relative top-12 left-0 sm:top-auto sm:left-auto bg-white dark:bg-gray-900 w-full sm:w-auto p-4 sm:p-0 transition-all duration-300`}
        >
          {Menu.map((data) => (
            <li
              key={data.id}
              className="relative hover:bg-yellow-100 dark:hover:bg-gray-800 rounded-md transition-all duration-200"
            >
              <a
                href={data.link}
                className="inline-block px-4 py-2 w-full text-center text-gray-900 dark:text-gray-200 hover:text-yellow-500 dark:hover:text-yellow-400"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Dropdown */}
          <li className="group relative cursor-pointer">
            <a
              href="#"
              className="flex items-center gap-2 py-2 text-gray-900 dark:text-gray-200 hover:text-yellow-500 dark:hover:text-yellow-400"
            >
              Trending Products
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white dark:bg-gray-700 p-2 text-black dark:text-white shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li
                    key={data.id}
                    className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all duration-200"
                  >
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 text-center text-gray-900 dark:text-gray-200 hover:text-yellow-500 dark:hover:text-yellow-400"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
