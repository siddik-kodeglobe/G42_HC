import React from "react";
import Navbar from "../Navbar/Navbar";
import Breadcrumb_AB from "./Breadcrumb_AB";
import { Flex, Image, Text } from "@chakra-ui/react";
import menuIcon from "../../assets/icons/menuIcon.svg";
import VideoSection from "./VideoSection";
import AU_Slider from "./AU_Slider";
import WhoWeAre from "./WhoWeAre";

const About = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb_AB />
      <Flex
        margin={"60px 56px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text fontFamily={"bossa"} fontWeight={700} fontSize={"60px"}>
          Our Introduction
        </Text>
        <Image cursor={"pointer"} w={"85px"} src={menuIcon} alt="menuIcon" />
      </Flex>
      <VideoSection  />
      <AU_Slider/>
    </>
  );
};

export default About;
