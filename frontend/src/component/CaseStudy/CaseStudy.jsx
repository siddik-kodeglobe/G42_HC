import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import BreadCrumbCaseStudy from "./BreadCrumbCaseStudy";
import Title_CS from "./Title_CS";
import { useParams } from "react-router-dom";
import axios from "axios";
import MainImg_CS from "./MainImg_CS";
import Heading1 from "./Heading1";
import ThumbnailImg from "./ThumbnailImg";
import Heading2 from "./Heading2";
import FourImg_CS from "./FourImg_CS";
import Footer_CS from "./Footer_CS";

const CaseStudy = () => {
  
  return (
    <div>
      <Navbar />
      <BreadCrumbCaseStudy />
      <Title_CS />
      <ThumbnailImg/>
      <Heading1 />
      <MainImg_CS />
      <Heading2/>
      <FourImg_CS/>
      <Footer_CS/>
    </div>
  );
};

export default CaseStudy;
