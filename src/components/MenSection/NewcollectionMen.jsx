import  { useState } from 'react';
import Image1 from '../../assets/shirt/shirt.png';
import Image2 from '../../assets/shirt/shirt2.png';
import Image3 from "../../assets/shirt/shirt3.png";
import Image4 from "../../assets/shirt/shirt4.png";
import Image5 from "../../assets/shirt/shirt5.png";

import { FaHeart as HeartOutline, FaHeart } from 'react-icons/fa'; // Import both filled and outlined icons

const Men = () => {
  const [isFavorited, setIsFavorited] = useState(Array(5).fill(false)); // Array to handle favorite state for each card
  const [Card] = useState([
    {
      id: 1,
      src: Image1,
      p: "New product"
    },
    {
      id: 2,
      src: Image2,
      p: "New Korean product"
    },
    {
      id: 3,
      src: Image3,
      p: "New South African product"
    },
    {
      id: 4,
      src: Image4,
      p: "Half-sleeve product"
    },
   
  ]);

  const handleFavoriteToggle = (index) => {
    const updatedFavorites = [...isFavorited];
    updatedFavorites[index] = !updatedFavorites[index]; // Toggle the favorite state of a specific card
    setIsFavorited(updatedFavorites);
  };

  return (
    <div className="flex flex-wrap  justify-center">
      {Card.map((item, index) => (
        <div
          key={item.id}
          className="w-80  hover:-translate-y-5 duration-700 m-5 items-center bg-gray-800  flex flex-col  shadow-lg rounded-lg overflow-hidden relative"
        >
          <img
            src={item.src}
            alt="Product"
            className="w-fit  h-64 object-cover"
          />
          <div className="p-4">
            <h5 className="text-xl font-semibold mb-2">{item.p}</h5>
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
                onClick={() => handleFavoriteToggle(index)}
                className="cursor-pointer text-2xl"
              >
                {isFavorited[index] ? (
                  <FaHeart className="text-3xl text-red-500" /> 
                ) : (
                  <HeartOutline className="text-3xl text-gray-200" />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Men;
