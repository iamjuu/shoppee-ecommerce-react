import React, { useState } from 'react';
import Image1 from '../../../assets/shirt/shirt.png';
import { FaHeart as HeartOutline, FaHeart } from 'react-icons/fa'; // Import both filled and outlined icons

const Wishlist = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorited((prev) => !prev); // Toggle the state
  };

  return (
    <div className="w-80 m-5 items-center flex flex-col  shadow-lg rounded-lg overflow-hidden relative">
      <img
        src={Image1}
        alt="Product"
        className="w-fit  h-64 object-cover"
      />
      <div className="p-4">
        <h5 className="text-xl font-semibold mb-2">Korean shirt</h5>
        <p className="text-gray-700 mb-4">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <div className="flex items-center gap-28">
          <a
            href="#"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Add to cart
          </a>
          <div
            onClick={handleFavoriteToggle}
            className="cursor-pointer text-2xl"
          >
            {isFavorited ? (
              <FaHeart className=" text-3xl  text-red-500" /> // Filled heart icon
            ) : (
              <HeartOutline className="text-3xl  text-gray-200" /> // Outlined heart icon
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
