import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import aboutImage from "../../assets/temp/about_HomePage.svg";
// import gsap from 'gsap';
// import { GSDevTools, SplitText } from 'gsap/all';
import Marquee from "react-fast-marquee";
import ReactPlayer from "react-player";
import homeVideo from "../../assets/logo/homeVideo.mp4";


const JoinUsMarquee = () => {

  return (
    <>
      <Box w={"100%"} mt={["80px", "80px", "80px", "81px", "105px", "125px"]}>
        <Marquee autoFill>
          <Flex alignItems={"center"} gap={["29px",  "32px"]}>
            
            <Box w={["88px", "166px"]} border={"1px solid black"}></Box>
            <Text
            fontFamily={"Bossa-ExtendedBold"}

              textAlign={"center"}
              color={"black"}
              fontSize={["32px", "32px", "50px", "60px"]}
              fontWeight={700}
            >
              Join Us
            </Text>
            <Box w={["88px", "166px"]} border={"1px solid black"}></Box>

          </Flex>
        </Marquee>
      </Box>
    </>
  );
};

export default JoinUsMarquee;
