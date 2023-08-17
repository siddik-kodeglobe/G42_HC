import React from "react";
import Navbar from "../Navbar/Navbar";
import Breadcrumb_AB from "./Breadcrumb_AB";
import { Flex, Image, Text } from "@chakra-ui/react";
import menuIcon from "../../assets/aboutUs/menuIcon.svg";
import VideoSection from "./VideoSection";
import AU_Slider from "./AU_Slider";
import WhoWeAre from "./WhoWeAre";
import TopScroll from "../TopScroll/TopScroll";

const About = () => {
  return (
    <>
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
        <Image cursor={"pointer"} w={["0px", "0px", "85px"]} src={menuIcon} alt="menuIcon" />
      </Flex>
      <VideoSection  />
      <AU_Slider/>
      <TopScroll/>
    </>
  );
};

export default About;
