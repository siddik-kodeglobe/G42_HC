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

import LazyLoad from 'react-lazy-load';

const Home = () => {
  return (
    <>
      <Box>
        <LazyLoad>
          <Navbar />
        </LazyLoad>

        <LazyLoad>
          <VideoSection />
        </LazyLoad>

        <LazyLoad>
          <News />
        </LazyLoad>

        <LazyLoad>
          <AboutUsMarquee />
        </LazyLoad>

        <LazyLoad>
          <PioneeringHC />
        </LazyLoad>

        <LazyLoad>
          <OurServices />
        </LazyLoad>

        <LazyLoad>
          <ClientnPartner />
        </LazyLoad>

        <LazyLoad>
          <LatestInitiative />
        </LazyLoad>

        <LazyLoad>
          <Resources />
        </LazyLoad>

        <LazyLoad>
          <SocialMedia />
        </LazyLoad>

        <LazyLoad>
          <MeetUs />
        </LazyLoad>

        <LazyLoad>
          <Footer_AU />
        </LazyLoad>
        <TopScroll />
      </Box>
    </>
  );
};

export default Home;
