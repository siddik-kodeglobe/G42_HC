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

const Services = () => {
  return (
    <div>
      <Navbar/>
      <Home_VideoSection />
      <ImageSubHeading/>
      <Offering/>
      <USP/>
      <ClientNPartner bgColor={"#F5F5F5"}/>
      <Impact/>
      <CaseStudies/>
      <LatestNews/>
      <MeetTeam_AU/>
      <Companies/>
      <ServicesFooter/>
      <TopScroll/>
    </div>
  );
};

export default Services;
