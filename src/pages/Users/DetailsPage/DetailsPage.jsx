import React from 'react';
import { FaRocketchat, FaTruck, FaFilter } from 'react-icons/fa';
import Image1 from '../../../assets/shirt/shirt.png';
import Image2 from '../../../assets/shirt/shirt2.png';
import Image3 from '../../../assets/shirt/shirt3.png';
import Image4 from '../../../assets/shirt/shirt4.png';
import Image5 from '../../../assets/shirt/shirt5.png';
import { Container } from './DetailsStyle';

const DetailsPage = () => {
  return (
    <Container>
      <div className="container mx-auto  dark:bg-gray-900 text-white p-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-5/12 p-2">
            <div className="relative">
              <img
                className="w-full h-auto  max-w-[400px] mx-auto object-cover shadow-lg"
                src={Image1}
                alt="Product"
              />
              <div className="absolute inset-x-0 bottom-3 flex gap-2">
              <img
  className="w-1/4 hover:-translate-y-10 transition-transform duration-1000 cursor-pointer"
  src={Image4}
  alt="Preview 1"
/>

                <img
                  className="w-1/4  hover:-translate-y-10 transition-transform duration-1000 cursor-pointer"
                  src={Image5}
                  alt="Preview 2"
                />
                <img
                  className="w-1/4  hover:-translate-y-10 transition-transform duration-1000 cursor-pointer"
                  src={Image3}
                  alt="Preview 3"
                />
                <img
                  className="w-1/4  hover:-translate-y-10 transition-transform duration-1000 cursor-pointer"
                  src={Image2}
                  alt="Preview 4"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-7/12 p-2">
            <div className="px-2">
              <div className="text-lg font-bold mb-2">Category: Women</div>
              <div className="text-xl font-bold my-3">Black dress for Women</div>
              <div className="my-4">
                <p className="mb-1 text-gray-500 line-through">
                  1000 <span className="text-red-500">(20% off)</span>
                </p>
                <p className="text-xl font-bold mb-1">800</p>
                <p className="text-gray-500">(Additional tax may apply on checkout)</p>
              </div>
              <div className="flex gap-2 my-5 items-center">
                <a href="#" className="btn shadow bg-gray-800 text-white py-2 px-4 rounded">
                  Wishlist
                </a>
                <button className="btn shadow bg-gray-800 text-white py-2 px-4 rounded">
                  Add to cart
                </button>
              
              </div>
              <div className="my-4">
                <p className="font-bold mb-1">
                  <FaTruck className="inline mr-2" />
                  Delivery done in 3 days from date of purchase
                </p>
                <p className="text-gray-500">Order now to get this product delivery</p>
              </div>
              <div className="my-4">
                <p className="font-bold mb-1">
                  <FaFilter className="inline mr-2" />
                  Delivery options
                </p>
                <p className="text-gray-500">View delivery options here</p>
              </div>
              <div className=" p-3 my-4 flex items-start">
                <FaRocketchat className="text-xl mr-2" />
                <p>
                  Have a question about our products at E-Store? Feel free to contact our representatives via live chat or email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DetailsPage;
