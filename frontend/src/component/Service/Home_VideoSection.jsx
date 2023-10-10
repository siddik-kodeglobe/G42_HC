import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import playBtn from "../../assets/icons/playBtn.svg";
import omicsImg from "../../assets/temp/services/omicsImg.svg";
import VideoModal from "../VideoModal/VideoModal";

import g42Video from "../../assets/temp/Video/G42 Video.mp4";
import BackgroundVideoContainer from "../BackgroundVideo/BackgroundVideoContainer";
import { isMobile, isTablet } from "react-device-detect";

const Home_VideoSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box w={"100vw"} maxW={"100%"} pos={"relative"}>
        <Box
          maxH={isMobile ? "589px" : isTablet ? "589px" : "100%"}
          position={"relative"}
        >
          <BackgroundVideoContainer
            videosrc={g42Video}
            height={isMobile ? "589px" : isTablet ? "589px" : "100vh"}
          />
        </Box>

        <Box
          // border={"2px"}
          w="100%"
          h={["25vh", "25vh", "50vh"]}
          position={"absolute"}
          bgGradient={
            "linear-gradient(0deg, #00AFFF 0%, rgba(0, 175, 255, 0.00) 100%);"
          }
          bottom={0}
          right={0}
          left={0}
          margin={0}
        ></Box>

        <Box
          position={"absolute"}
          backgroundColor={"white"}
          bottom={-1}
          left={"1%"}
          right={"1%"}
          w="98%"
          h={["67px", "67px", "67px", "108px", "139px", "180px", "216px"]}
        >
          <Text
            mt={["37px", "37px", "37px", "56px", "72px", "86px"]}
            marginLeft={["24px","24px","24px","96px", "124px", "149px"]}
            fontFamily={"Bossa-ExtendedBold"}
            fontSize={["24px", "24px", "24px", "39px", "50px", "60px"]}
            textTransform={"capitalize"}
            fontWeight={700}
          >
            Omics
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

export default Home_VideoSection;
