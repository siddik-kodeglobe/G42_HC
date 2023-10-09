import React from "react";
import Navbar from "../Navbar/Navbar";
import BreadCrumb from "./BreadCrumb";
import Title from "./Title";
import Categories from "./Categories";
import ImgContainer from "./ImgContainer";
import CaseStudies from "./CaseStudies";
import Publications from "./Publications";
import Events from "./Events";
import Podcast from "./Podcast";
import SocialMedia from "./SocialMediaResources";
import Footer from "../Footer/Footer";
import { Box } from "@chakra-ui/react";
import LazyLoad from "react-lazy-load";
import Footer_Resources from "./Footer_Resources";

const Resources = () => {
  return (
    <>
      <LazyLoad>
        <Navbar />
      </LazyLoad>
      <LazyLoad>
        <BreadCrumb />
      </LazyLoad>

      <LazyLoad>
        <Title />
      </LazyLoad>

      <LazyLoad>
        <Categories />
      </LazyLoad>

      <LazyLoad>
        <ImgContainer />
      </LazyLoad>

      <LazyLoad>
        <CaseStudies />
      </LazyLoad>

      <LazyLoad>
        <Publications />
      </LazyLoad>

      <LazyLoad>
        <Events />
      </LazyLoad>
      <LazyLoad>
        <Podcast />
      </LazyLoad>
      <LazyLoad>
        <SocialMedia />
      </LazyLoad>
      <LazyLoad>
        <Footer_Resources/>
      </LazyLoad>
    </>
  );
};

export default Resources;
