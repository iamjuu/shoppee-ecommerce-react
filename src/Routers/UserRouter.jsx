import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import UserLayout from "../Layout/UserLayout"; // Import your layout component

const UserRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default UserRouter;
