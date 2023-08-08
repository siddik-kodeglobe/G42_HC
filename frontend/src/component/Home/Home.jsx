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

const Home = () => {
  return (
    <>
      <Box>
        <VideoSection />
        <News/>
        <AboutUsMarquee/>
        <PioneeringHC/>
        <ClientnPartner/>
        <Resources/>
        <SocialMedia/>
        <MeetUs/>
        <AU_Footer/>
      </Box>
    </>
  );
};

export default Home;
