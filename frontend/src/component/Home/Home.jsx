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
import AU_Footer from "../AboutUs/AU_Footer";
import Navbar from "../Navbar/Navbar";
import TopScroll from "../TopScroll/TopScroll";
import OurServices from "./OurServices";
import LatestInitiative from "./LatestInitiative";


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
        <AU_Footer/>
        <TopScroll/>
      </Box>
    </>
  );
};

export default Home;
