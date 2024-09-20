import React, { useState, useEffect } from 'react';
import Img1 from "../../assets/hero/sale.png";
import Img2 from "../../assets/hero/shopping.png";
import Img3 from "../../assets/hero/women.png";
import Bg from "../../assets/website/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg";
import {Text} from "./CarosealStyle"
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = [
    { src: Img1, alt: 'Big Sale 70% off' },
    { src: Img2, alt: 'Womens wear buy one get one free' },
    { src: Img3, alt: 'Onam offers' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="carousel w-full h-[500px] relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="carousel-inner relative w-full h-64 flex items-center justify-center">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`carousel-item absolute w-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={item.src}
              className="block mt-[250px] ml-[500px]  sm:ml-[100px] md:[600px]   w-[500px] h-[500px] object-cover"
              alt={item.alt}
            />
            <div className="absolute bottom-10 left-10 bg-opacity-50 text-white p-2 rounded">
                <Text>

                <div>
              <h1 className="text-2xl">{item.alt}</h1>

                </div>
                </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
