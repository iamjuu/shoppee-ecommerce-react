import React, { useState, useEffect } from "react";
import Caroseal from "../../../components/Caroseal/Caroseal"; // Default export
import Products from "../../../components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "../../../components/TopProducts/TopProducts";
import Banner from "../../../components/Banner/Banner";
import Subscribe from "../../../components/Subscribe/Subscribe";
import Catagory from "../../../components/Category/Catagory";
import NewcollectionMen from "../../../components/MenSection/NewcollectionMen";
import { HeroParallax } from "../../../components/ui/Stroller/Stroller"; 
import { SparklesPreview } from "../../../components/Sparkle/Sparkleview";
import {InfiniteMovingCardsDemo} from "../../../components/MovingCard/MovinCard"

// images  
import Image1 from "../../../assets/Strolling/image1.jpg"
import Image2 from "../../../assets/Strolling/image2.jpg"
import Image3 from "../../../assets/Strolling/image3.jpg"
import Image4 from "../../../assets/Strolling/image4.jpg"
const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  // Example product data
  const products = [
    {
      id: 1,
      title: "Product 1",
      thumbnail: Image1, // Example image URL
      link: "/", // Example product link
    },
    {
      id: 2,
      title: "Product 2",
      thumbnail: Image2,
      link: "/",
    },
    {
      id: 3,
      title: "Product 3",
      thumbnail:Image3,
      link: "/",
    },
    {
      id: 4,
      title: "Product 4",
      thumbnail:Image4,
      link: "/",
    },
    {
      id: 5,
      title: "Product 5",
      thumbnail:Image1,
      link: "/",
    },

    
   
 
  ];

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 200,
    });
    AOS.refresh();
  }, []);

  return (
    <div className=" dark:bg-black dark:text-white duration-200">
      {/* <Caroseal /> */}
      <SparklesPreview/>
      <HeroParallax products={products} />

      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Products />
      <Catagory />
      <NewcollectionMen />
      <InfiniteMovingCardsDemo/>

      {/* < AuroraBackground/> */}
    </div>
  );
};

export default Home;
