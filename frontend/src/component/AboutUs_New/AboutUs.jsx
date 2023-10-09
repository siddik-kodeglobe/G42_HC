import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Intro_AU from "./Intro_AU";
import Video_AU from "./Video_AU";
import Slider_AU from "./Slider_AU";
import WhoWeAre_AU from "./WhoWeAre_AU";
import PurposeMV_AU from "./PurposeMV_AU";
import CEO_msg_AU from "./CEO_msg_AU";
import Partners_AU from "./Partners_AU";
import Charting_AU from "./Charting_AU";
import MeetTeam_AU from "./MeetTeam_AU";
import Footer_AU from "./Footer_AU";
import Breadcrumb_AU from "./Breadcrumb_AU";
import LazyLoad from "react-lazy-load";

const AboutUs = () => {
  return (
    <>
      <Box pos={"relative"}>
        <LazyLoad>
          <Navbar />
        </LazyLoad>
        <LazyLoad>
          <Breadcrumb_AU />
        </LazyLoad>
        <LazyLoad>
          <Intro_AU />
        </LazyLoad>
        <LazyLoad>
          <Video_AU />
        </LazyLoad>
        <LazyLoad>
          <Slider_AU />
        </LazyLoad>
        <LazyLoad>
          <WhoWeAre_AU />
        </LazyLoad>
        <LazyLoad>
          <PurposeMV_AU />
        </LazyLoad>
        <LazyLoad>
          <CEO_msg_AU />
        </LazyLoad>
        <LazyLoad>
          <Partners_AU />
        </LazyLoad>
        <LazyLoad>
          <Charting_AU />
        </LazyLoad>
        <LazyLoad>
          <MeetTeam_AU />
        </LazyLoad>
        <LazyLoad>
          <Footer_AU />
        </LazyLoad>
      </Box>
    </>
  );
};

export default AboutUs;
