import React from "react";
import Men from "../../assets/Category/men.png";
import Women from "../../assets/Category/women.png";
import { Container } from "./CatogoryStyle";
const Catagory = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center gap-24 md:gap-24 p-4">
  {/* Image section */}
  <div data-aos="zoom-out" className="flex flex-col items-center md:items-start">
    <img
      src={Men}
      alt="Men's Collection"
      className="max-w-full md:max-w-[400px] h-auto md:h-[400px] w-full md:w-auto transition-transform duration-700 transform hover:-translate-x-2 drop-shadow-md object-cover"
    />
    <h1 className="text-lg md:text-2xl mt-4 md:mt-6">Men's Collection</h1>
  </div>

  <div data-aos="zoom-in" className="flex flex-col items-center md:items-end">
    <img
      src={Women}
      alt="Women's Collection"
      className="max-w-full md:max-w-[400px] h-auto md:h-[400px] w-full md:w-auto transition-transform duration-700 transform hover:translate-x-2 drop-shadow-md object-cover"
    />
    <h1 className="text-lg md:text-2xl mt-4 md:mt-6">Women's Collection</h1>
  </div>
</div>
      </Container>
    </>
  );
};

export default Catagory;
