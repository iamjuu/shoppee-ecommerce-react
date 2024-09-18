import React, { useState, useEffect } from "react";
import Caroseal from "../components/Caroseal/Caroseal"; // For default export
import Products from "../components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "../components/TopProducts/TopProducts";
import Banner from "../components/Banner/Banner";
import Subscribe from "../components/Subscribe/Subscribe";
import Popup from "../components/Popup/Popup"; 

const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

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
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Caroseal/>
        <TopProducts handleOrderPopup={handleOrderPopup} />
        <Banner />
        <Subscribe />
        <Products />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} /> {/* Added from main branch */}
      </div>
    </>
  );
}

export default Home;
