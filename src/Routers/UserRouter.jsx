import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import UserLayout from "../Layout/UserLayout"; // Import your layout component

const UserRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<DetailsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default UserRouter;
