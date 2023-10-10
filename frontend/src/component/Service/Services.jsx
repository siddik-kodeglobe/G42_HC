import React from "react";
import Home_VideoSection from "./Home_VideoSection";
import ImageSubHeading from "./ImageSubHeading";
import Offering from "./Offering";
import USP from "./USP";
import ClientNPartner from "./ClientNPartners";
import ServicesFooter from "./ServicesFooter";
import LatestNews from "./LatestNews";
import Impact from "./Impact";
import Navbar from "../Navbar/Navbar";
import TopScroll from "../TopScroll/TopScroll";
import CaseStudies from "./CaseStudies";
import Companies from "./Companies";
import MeetTeam_AU from "../AboutUs_New/MeetTeam_AU";
import LazyLoad from "react-lazy-load";
import { Box } from "@chakra-ui/react";

const Services = () => {
  return (
    <>
    <Box>
      <LazyLoad>
        <Navbar />
      </LazyLoad>

      <LazyLoad>
        <Home_VideoSection />
      </LazyLoad>

      <LazyLoad>
        <ImageSubHeading />
      </LazyLoad>

      <LazyLoad>
        <Offering />
      </LazyLoad>

      <LazyLoad>
        <USP />
      </LazyLoad>

      <LazyLoad>
        <ClientNPartner />
      </LazyLoad>

      <LazyLoad>
        <Impact />
      </LazyLoad>

      <LazyLoad>
        <CaseStudies />
      </LazyLoad>

      <LazyLoad>
        <LatestNews />
      </LazyLoad>

      <LazyLoad>
        <MeetTeam_AU />
      </LazyLoad>

      <LazyLoad>
        <Companies />
      </LazyLoad>

      <LazyLoad>
        <ServicesFooter />
      </LazyLoad>
      <TopScroll />

      </Box>
    </>
  );
};

export default Services;
