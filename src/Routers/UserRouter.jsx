import { Route, Routes } from "react-router-dom";
import Home from "../pages/Users/Home/Home";
import AboutUs from "../pages/Users/About/About";
import DetailsPage from "../pages/Users/DetailsPage/DetailsPage";
import Wishlist from "../pages/Users/Wishlist/Wishlist"
import Cart from "../pages/Users/Cart/Cart"
import Checkout from "../pages/Users/Checkout/Checkout";
import UserLayout from "../Layout/UserLayout"; 
import Login from "../pages/Users/Login/LoginPage";
import Signup from "../pages/Users/Signup/SignupPage"
import Otp from "../pages/Users/Otp/OtpPage";
import Forgot from "../pages/Users/Forgotpass/Forgotpage";
const UserRouter = () => {
  return (
    <>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/forgotpassword" element={<Forgot />} />

        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs/>} />

          <Route path="/details" element={<DetailsPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout/>}/>


        </Route>
      </Routes>
    </>
  );
};

export default UserRouter;
