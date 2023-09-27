import { AspectRatio, Box, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import playBtn from "../../assets/icons/playBtn.svg";
import News from "./News";
import VideoModal from "../VideoModal/VideoModal";
import g42Video from "../../assets/temp/Video/G42 Video.mp4";
import g42MobVideo from '../../assets/temp/Video/G42_MobVideo.mp4';
import g42TabVideo from '../../assets/temp/Video/g42_TabVideo.mp4'

import { useMediaQuery } from 'react-responsive';

const VideoSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isMobile = useMediaQuery({ maxWidth: 500 }); // Mobile
  const isTablet = useMediaQuery({ maxWidth: 1024 }); // Tablet

  const [videoUrl, setVideoUrl] = useState(
    g42Video
  );

  // alert(videoUrl)
  useEffect(() => {
    setVideoUrl(isMobile ? g42MobVideo : isTablet ? g42TabVideo : g42Video);

  }, [isMobile, isTablet]);
  return (
    <>
      <Box
        marginBottom={"-20px"}
        onClick={onOpen}
        style={{ cursor: `url(${playBtn}) 45 45, auto` }}
        position={"relative"}
      >
        <Box position={"relative"} w={"100vw"} maxW={"100%"}>
          <ReactPlayer
            style={{ position: "position" }}
            width={"100%"}
            height={"100%"}
            playing={true}
            loop={true}
            url={videoUrl}
            muted={true}
          />

        </Box>

        <Box w={"100vw"} maxW={"100%"} position={"absolute"} bottom={"0px"} margin={"0px"}>
          <Flex
          h={["125px", "125px", "250px", "431px"]} 
       
            flexDirection={["column", "column", "row"]}
            alignItems={["start", "start", "center"]}
            paddingLeft={["20px", "20px", "25px", "72px"]}
            paddingBottom={["0px", "0px", "0px", "50px"]}
            bgGradient={
              "linear-gradient(0deg, #00D2AA 0%, rgba(0, 210, 170, 0.00) 100%);"
            }
            gap={[0, 0, "14px"]}
          >
            <Box>
              <Text
                fontFamily={"Bossa-Regular"}
                color={"white"}
                fontSize={["16px", "16px", "20px", "24px"]}
                fontWeight={400}
                fontStyle={"normal"}
                letterSpacing={"-0.72px"}
              >
                Supporting tagline: Max one line statement.
              </Text>
              <Text
                fontFamily={"Bossa-ExtendedBold"}
                w={["100%", "100%", "75%", "66%"]}
                textShadow={"0px 4px 30px rgba(0, 65, 65, 0.27)"}
                color={"white"}
                fontSize={["28px", "28px", "50px", "65px"]}
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
          url={g42Video}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      </Box>
    </>
  );
};

export default VideoSection;
