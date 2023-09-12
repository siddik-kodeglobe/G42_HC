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
      <Box mt={111}>
        <Marquee autoFill>
          <Flex alignItems={"center"} gap={["16px", "16px", "34px"]}>
            <hr
              style={{
                width: "88px",
                border: "1px solid black",
                margin: "auto",
              }}
            />

            <Text
              textAlign={"center"}
              fontFamily={"Bossa"}
              fontSize={["32px", "32px", "50px", "60px"]}
              fontWeight={700}
            >
              Join Us
            </Text>
            <hr
              style={{
                width: "88px",
                border: "1px solid black",
                margin: "auto",
              }}
            />
          </Flex>
        </Marquee>
      </Box>
    </>
  );
};

export default JoinUsMarquee;
