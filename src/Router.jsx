import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./ViewsPage/Home";
import RegisterViews from "./ViewsPage/RegisterViews";
import { Toaster } from "sonner";
import ForPetId from "./ViewsPage/ForPetId";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>{/*<Route exact path="/" element={} />*/}</Routes>
      <Routes><Route exact path="/" element={<Home></Home>} /></Routes>
      <Routes><Route exact path="/register" element={<RegisterViews></RegisterViews>} /></Routes>
      
      <Routes><Route exact path="/pet-details/:petId" element={<ForPetId/>}></Route></Routes>


      <Toaster position="top-right" richColors />
    </BrowserRouter>
  );
};

export default Router;
