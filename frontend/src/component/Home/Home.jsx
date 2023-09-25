import React from "react";
import VideoSection from "./VideoSection";
import { Box } from "@chakra-ui/react";
import News from "./News";
import AboutUsMarquee from "./AboutUsMarquee";
import PioneeringHC from "./PioneeringHC";
import ClientnPartner from "./ClientnPartner";
import Resources from "./Resources";
import SocialMedia from "./SocialMedia";
import MeetUs from "./MeetUs";
import Navbar from "../Navbar/Navbar";
import TopScroll from "../TopScroll/TopScroll";
import OurServices from "./OurServices";
import LatestInitiative from "./LatestInitiative";
import Footer_AU from "../AboutUs_New/Footer_AU";


const Home = () => {
  return (
    <>
      <Box>
        <Navbar/>
        <VideoSection />
        <News/>
        <AboutUsMarquee/>
        <PioneeringHC/>
        <OurServices/>
        <ClientnPartner/>
        <LatestInitiative/>
        <Resources/> 
        <SocialMedia/>
        <MeetUs/>
        <Footer_AU/>
        <TopScroll/>
      </Box>
    </>
  );
};

export default Home;
