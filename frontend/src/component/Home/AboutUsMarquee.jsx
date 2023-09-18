import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import aboutImage from "../../assets/temp/about_HomePage.svg";
// import gsap from 'gsap';
// import { GSDevTools, SplitText } from 'gsap/all';
import Marquee from "react-fast-marquee";
import ReactPlayer from "react-player";
import homeVideo from "../../assets/logo/homeVideo.mp4";

import g42Video from '../../assets/temp/Video/G42 Video.mp4'

const AboutUsMarquee = () => {
  const textRef = useRef(null);

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
              About G42 Healthcare
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

        <Flex
          flexDirection={["column", "column", "row"]}
          mt={"100px"}
          padding={["0px 20px", "0px 20px", "0px 151px"]}
          gap={["33px", "33px", "90px"]}
          alignItems={["self-start", "self-start", "self-start", "start"]}
        >
          <Box
          pos={"relative"}
          // paddingTop={"56.25%"}
            height={["214px", "214px", "377px"]}
            w={["352px", "352px", "619px"]}
          >
            <ReactPlayer
            style={{position:"absolute", top: 0, left: 0, objectFit:"cover"}}
              width={"100%"}
              height={"377px"}
              
              playing={true}
              loop={true}
              url={g42Video}
              muted
            />
          </Box>
          <Flex
            mt={["50px", "50px", "25px"]}
            w={["100vw","100vw", "453px", "453px"]}
            maxW={["100%", "100%", "453px", "453px"]}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Text

              fontFamily={"Bossa"}
              fontSize={"18px"}
              fontStyle={"normal"}
              fontWeight={300}
              lineHeight={"24px"}
              color={"#747272"}
              letterSpacing={"-0.42px"}
            >
              About G42 Healthcare in 2 paragraphs not more than 60-70 words.
              uses AI and data to create a world-class healthcare sector in the
              UAE and beyond. We partner with governments, scientists, and the
              medical community to future-proof nations' health.
              <br />
              <br />
              We built Biogenix Labs, the first COVID-19 accredited large-scale
              throughput lab in the UAE, and facilitated the world's first phase
              three inactivated COVID-19 vaccine trial, 4Humanity, with over
              43,000 participants from 125+ nationalities.
            </Text>
            <Button
              mt={"15px"}
              _hover={{ bgColor: "#00D2AA" }}
              bgColor={"#00D2AA"}
              borderRadius={"80px"}
              fontFamily={"Bossa"}
              fontSize={16}
              fontStyle={"normal"}
              fontWeight={500}
              textTransform={"capitalize"}
              textAlign={"center"}
              color={"white"}
              w={"219px"}
              h={"55px"}
            >
              About Us
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default AboutUsMarquee;
