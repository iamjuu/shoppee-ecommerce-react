import { Route, Routes } from "react-router-dom";
import Home from "../pages/Users/Home/Home";
import DetailsPage from "../pages/Users/DetailsPage/DetailsPage";
import Wishlist from "../pages/Users/Wishlist/Wishlist"
import Cart from "../pages/Users/Cart/Cart"
import Checkout from "../pages/Users/Checkout/Checkout";
import UserLayout from "../Layout/UserLayout"; 

const UserRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
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
