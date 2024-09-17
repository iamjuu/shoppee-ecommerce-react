import React,{useState} from "react";

import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
    const [orderPopup, setOrderPopup] = useState(false);

    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
    };
  return (
    <>
    <Header handleOrderPopup={handleOrderPopup} />     
     <Outlet />
      <Footer />
    </>
  );
};

export default UserLayout;
