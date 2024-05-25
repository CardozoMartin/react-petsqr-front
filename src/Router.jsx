import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./ViewsPage/Home";
import RegisterViews from "./ViewsPage/RegisterViews";
import { Toaster } from "sonner";
import ForPetId from "./ViewsPage/ForPetId";
import Navbar from "./Componentes/Common/Navbar";
import HelpViews from "./ViewsPage/HelpViews";
import Footer from "./Componentes/Common/Footer";


const Router = () => {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route
          exact
          path="/register"
          element={<RegisterViews></RegisterViews>}
        />
        <Route exact path="/help" element={<HelpViews></HelpViews>} />
        <Route exact path="/pet-details/:petId" element={<ForPetId />}></Route>
      </Routes>
      <Toaster position="top-right" richColors />
      <Footer/>
    </BrowserRouter>
  );
};

export default Router;
