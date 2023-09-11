import React from "react";
import Navbar from "../Navbar/Navbar";
import Breadcrumb_AB from "./Breadcrumb_AB";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import menuIcon from "../../assets/aboutUs/menuIcon.svg";
import VideoSection from "./VideoSection";
import AU_Slider from "./AU_Slider";
import WhoWeAre from "./WhoWeAre";
import TopScroll from "../TopScroll/TopScroll";

const About = () => {
  return (
    <>
    <Box w={"100vw"} maxW={"100%"}>
      <Navbar />
      <Breadcrumb_AB />
      <Flex
        margin={["14px 20px", "14px 20px", "60px 56px"]}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text fontFamily={"bossa"} fontWeight={700} fontSize={["24px", "24px", "60px"]}>
          Our Introduction
        </Text>
      </Flex>
      <VideoSection  />
      <AU_Slider/>
      </Box>
    </>
  );
};

export default About;
