import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import Wishlist from "../pages/Wishlist/Wishlist"
import Cart from "../pages/Cart/Cart"
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


        </Route>
      </Routes>
    </>
  );
};

export default UserRouter;
