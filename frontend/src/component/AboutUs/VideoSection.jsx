import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import AU_Slider from "./AU_Slider";

const VideoSection = () => {
  return (
    <>
    
      <Box>
        <ReactPlayer
          style={{ position: "position" }}
          width={"100%"}
          height={"100%"}
          playing={true}
          loop={true}
          url="http://localhost:1338/uploads/1065341845_preview_1_5bd602282c.mp4"
        />
        <Box
          position={"absolute"}
          bottom={0}
          w="100%"
          h="35%"
          bgGradient={
            "linear(360deg, #00D2AA 27.38%, rgba(0, 210, 170, 0) 100%)"
          }
        >
          <Flex
            position={"absolute"}
            bottom={0}
            right={5}
            height={"214px"}
            w={"96vw"}
            padding={"75px 138px"}
            justifyContent={"space-between"}
            alignItems={"center"}            
            backgroundColor={"white"}
          >
            <Text w={"50%"} fontFamily={"bossa"} fontSize={"48px"} textTransform={"capitalize"} fontWeight={700} >Invent better everyday</Text>
            <Text w={"50%"} color={"#747272"} fontSize={"18px"} fontFamily={"Bossa"} fontWeight={300}>
              G42 Healthcare, a leading AI-powered healthcare company, is on a
              mission to develop a world-class healthcare sector in the UAE and
              beyond, by harnessing data and emerging technologies in healthcare
              to unlock the potential of personalized and preventive care.
            </Text>
          </Flex>
        </Box>

      </Box>
    </>
  );
};

export default VideoSection;
