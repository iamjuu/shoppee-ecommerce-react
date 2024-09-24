import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart, FaHeart, FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Services", link: "/services" },
  { id: 3, name: "About", link: "/about" },
  { id: 4, name: "Kids Wear", link: "/KidsWear" },
  { id: 5, name: "Mens Wear", link: "/MensWear" },
  { id: 6, name: "Womens Wear", link: "/WomensWear" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/TrendingProducts" },
  { id: 2, name: "Best Selling", link: "/BestSelling" },
  { id: 3, name: "Top Rated", link: "/TopRated" },
];

const Header = ({ handleOrderPopup, handleWishPopup }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="shadow-md bg-black dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-black py-2">
        <div className="container flex justify-between items-center">
          <div>
            <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
              Shopee
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Order Button */}
            <Link to="/cart">
              <button
                onClick={handleOrderPopup}
                className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <span className="transition-all duration-1000 ease-in-out opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-xs overflow-hidden">
                  Order
                </span>
                <FaShoppingCart className="text-xl text-gray-500 drop-shadow-sm" />
              </button>
            </Link>

            {/* Wishlist Button */}
            <Link to="/wishlist">
              <button
                onClick={handleWishPopup}
                className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-3 group transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <FaHeart className="text-xl text-red-500 drop-shadow-sm transition-transform duration-300 group-hover:scale-125" />
                <span className="transition-all duration-1000 ease-in-out opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-xs overflow-hidden">
                  Wishlist
                </span>
              </button>
            </Link>

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
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="relative sm:flex justify-center">
        {/* Mobile Menu */}
        <ul
          className={`sm:flex items-center gap-4 ${
            menuOpen ? "block" : "hidden"
          } sm:block absolute sm:relative top-12 left-0 sm:top-auto sm:left-auto bg-black dark:bg-black w-full sm:w-auto p-4 sm:p-0 transition-all duration-300`}
        >
          {Menu.map((data) => (
            <li
              key={data.id}
              className="relative  dark:hover:bg-gray-200 rounded-md transition-all duration-200"
            >
              <Link
                to={data.link}
                className="inline-block px-4 py-2 w-full text-center text-gray-200 dark:text-gray-200 hover:text-blue-500 dark:hover:text-gray-400"
              >
                {data.name}
              </Link>
            </li>
          ))}
          {/* Dropdown */}
          <li className="group relative cursor-pointer">
            <Link
              to="#"
              className="flex items-center gap-2 py-2 text-gray-300 dark:text-gray-800 hover:text-gray-500 dark:hover:text-gray-400"
            >
              Trending Products
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </Link>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white dark:bg-blue-700 p-2 text-black dark:text-white shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li
                    key={data.id}
                    className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all duration-200"
                  >
                    <Link
                      to={data.link}
                      className="inline-block w-full rounded-md p-2 text-center text-gray-900 dark:text-gray-200 hover:text-blue-500 dark:hover:text-yellow-400"
                    >
                      {data.name}
                    </Link>
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
