import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../component/AboutUs/About";
import Home from "../component/Home/Home";
import Services from "../component/Service/Services";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
