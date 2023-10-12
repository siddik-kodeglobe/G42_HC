import React from "react";
import g42Video from "../../assets/temp/Video/G42 Video.mp4";
import { Box, Text, useDisclosure } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import playBtn from "../../assets/icons/playBtn.svg";
import VideoModal from "../VideoModal/VideoModal";
import { isMobile, isTablet } from "react-device-detect";
import BackgroundVideoContainer from "../BackgroundVideo/BackgroundVideoContainer";

const Video = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    
        <Box
        style={{ cursor: `url(${playBtn}), auto` }}
          height={isMobile ? "450px" : isTablet ? "550px" : "604px"}
          position={"relative"}
        >
          <BackgroundVideoContainer videosrc={g42Video} height={"100%"} />

        <Box
          background={
            "linear-gradient(0deg, #00D2AA 0%, rgba(0, 210, 170, 0.00) 100%);"
          }
          pos={"absolute"}
          bottom={"0px"}
          left={"0px"}
          w={"100vw"}
          maxW={"100%"}
          h={["375px","375px","375px","344px","344px","344px"]}
          // h={["164px","164px","164px", "222px", "287px", "344px"]}
        >
          <Text
            fontFamily={"Bossa-ExtendedBold"}
            position={"absolute"}
            bottom={["22px", "22px", "45px", "45px"]}
            left={["24px", "24px", "60px", "60px"]}
            w={["95%", "65%"]}
            color={"white"}
            fontWeight={700}
            letterSpacing={"-0.352px"}
            fontSize={["22px", "20px","20px","22px",  "24px", "32px"]}
            fontStyle={"normal"}
          >
            Emirati Genome Program: Region’s largest and most advanced Omics
            facility
          </Text>
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

export default Video;
