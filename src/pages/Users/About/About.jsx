import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "../../../assets/Strolling/image4.jpg";

// About Us Section
const AboutUs = () => {
  return (
    <section className="py-3 md:py-5 pr-5 bg-black text-white">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12">
            <h2 className="mb-4 text-3xl font-bold text-center">About Us</h2>
            <p className="text-gray-400 mb-5 text-center text-lg">
              E-commerce refers to buying and selling goods and services online,
              making shopping more convenient and accessible. It allows
              businesses to reach global customers and offers consumers a wider
              selection and competitive prices, all from the comfort of their
              homes.{" "}
            </p>
            <hr className="w-1/2 mx-auto mb-5 border-gray-600" />
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex items-center justify-center lg:w-1/2">
            <img
              className="w-[500px] h-[500px] rounded border border-gray-800 object-fill"
              loading="lazy"
              src={Image}
              alt="About Us"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
            <div className="flex justify-end">
              <div className="w-full lg:w-11/12">
                <div className="about-wrapper">
                  <p className="text-lg mb-4 md:mb-5">
                  At our online store, we pride ourselves on offering high-quality products that meet the diverse needs of our customers. Each item is carefully selected for its durability, performance, and style, ensuring that you receive only the best. We believe in delivering value and satisfaction, making every purchase a worthwhile investment.
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-5">
                    <div className="w-full md:w-1/2">
                      <div className="border border-gray-800 rounded-lg">
                        <div className="p-4">
                          <h3 className="text-3xl font-bold text-blue-400 text-center mb-2">
                            370+
                          </h3>
                          <p className="font-bold text-center m-0">
                            Qualified Experts
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <div className="border border-gray-800 rounded-lg">
                        <div className="p-4">
                          <h3 className="text-3xl font-bold text-blue-400 text-center mb-2">
                            18k+
                          </h3>
                          <p className="font-bold text-center m-0">
                            Satisfied Clients
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#!"
                    className="bg-blue-600 text-white py-2 px-4 rounded-full flex items-center justify-center"
                  >
                    Explore
                    <AiOutlineArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
