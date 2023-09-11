import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../component/AboutUs/About";
import Home from "../component/Home/Home";
import Services from "../component/Service/Services";
import News from "../component/News/News";
import WhatWeDo from "../component/WhatWeDo/WhatWeDo";
import Resources from "../component/Resources/Resources";
import Collaborations from "../component/Collaborations/Collaborations";
import CaseStudy from "../component/CaseStudy/CaseStudy";
import NewsID from "../component/NewsID/NewsID";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News/>}/>
        <Route path="/whatwedo" element={<WhatWeDo/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/collaborations" element={<Collaborations/>}/>
        <Route path="/caseStudy/:caseStudyId" element={<CaseStudy/>}/>
        <Route path="/news/:newsId" element={<NewsID/>}/>

      </Routes>
    </div>
  );
};

export default AllRoutes;
