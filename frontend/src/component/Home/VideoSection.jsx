import { Box, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import playBtn from "../../assets/icons/playBtn.svg";
import News from "./News";
import VideoModal from "../VideoModal/VideoModal";
import g42Video from '../../assets/temp/Video/G42 Video.mp4'

const VideoSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
                
      <Box marginBottom={"-20px"} onClick={onOpen}  style={{cursor: `url(${playBtn}), auto`}} position={"relative"}>
        <Box position={"relative"}>
          <ReactPlayer
            style={{ position: "position" }}
            width={"100%"}
            height={"100%"}
            playing={true}
            loop={true}
            url={g42Video}
            muted={true}
          />
        </Box>

        <Box w={"100%"} position={"absolute"} bottom={"0px"} margin={0}>
           
          <Flex
            flexDirection={["column", "column", "row"]}
            alignItems={["start", "start", "center"]}
            paddingLeft={["20px", "20px", "72px", "72px"]}
            paddingBottom={["0px", "0px", "55px"]}
            bgGradient={
              "linear-gradient(0deg, #00D2AA 0%, rgba(0, 210, 170, 0.00) 100%);"
            }
            gap={[0, 0, "14px"]}
          >
            <Box>
              <Text
                color={"white"}
                fontFamily={"Bossa"}
                fontSize={["16px", "16px", "20px", "24px"]}
                fontWeight={400}
                fontStyle={"normal"}
                letterSpacing={"-0.72px"}
              >
                Supporting tagline: Max one line statement.
              </Text>
              <Text
                w={["", "", "75%", "75%"]}
                textShadow={"0px 4px 30px rgba(0, 65, 65, 0.27)"}
                color={"white"}
                fontFamily={"Bossa"}
                fontSize={["28px", "28px", "50px", "80px"]}
                fontWeight={700}
                fontStyle={"normal"}
                letterSpacing={"-0.72px"}
                lineHeight={"normal"}
              >
                Company Tagline max 3-4 words
              </Text>
            </Box>
          </Flex>
        </Box>

        <VideoModal
          url={
            g42Video
          }
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      </Box>
    </>
  );
};

export default VideoSection;
