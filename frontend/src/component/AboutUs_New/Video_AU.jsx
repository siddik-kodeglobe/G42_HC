import { Box, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import VideoModal from "../VideoModal/VideoModal";
import g42Video from "../../assets/temp/Video/G42 Video.mp4";
import playBtn from "../../assets/icons/playBtn.svg";
import BackgroundVideoContainer from "../BackgroundVideo/BackgroundVideoContainer";
import aboutBannerImg from '../../assets/aboutUs/aboutBannerImg.jpg'

const Video_AU = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Box w={"100vw"} maxW={"100%"} mt={["40px"]} position={"relative"}>
        <Box
          onClick={onOpen}
          style={{ cursor: `url(${playBtn}) 45 45, auto` }}
          position={"relative"}
          height={["445px", "445px", "445px", "100vh","100vh","100vh"]}
        >
          <Image w={"100%"} h={"100%"} objectFit={"cover"} src={aboutBannerImg} alt="aboutBannerImg"/>
          {/* <BackgroundVideoContainer videosrc={g42Video} height={"100%"} /> */}
        </Box>

        <Box
        w="100%"
        h={["265px", "265px", "30vh", "30vh", "40vh", "50vh"]}
          position={"absolute"}
          bgGradient={
            "linear-gradient(0deg, #00D2AA 27.38%, rgba(0, 210, 170, 0.00) 100%)"
          }
          bottom={0}
          margin={0}
        >
            <Box
              position={"absolute"}
              height={"fit-content"}
              // height={["100px", "100px","100px","139px", "180px", "214px"]}
              bottom={["-100px", "-0.5px"]}
              left={"2%"}
              right={"2%"}
              // w="96%"
              padding={[
                "15px 46px",
                "15px 46px",
                "15px 74px",
                "35px 96px",
                "45px 124px",
                "45px 148px",
              ]}
              justifyContent={"space-between"}
              alignItems={"center"}
              backgroundColor={"white"}
            >
              <Flex
                flexDir={["column", "column", "column", "row","row", "row"]}
                gap={["16px"]}
              >
                <Text
                  fontFamily={"Bossa-ExtendedBold"}
                  w={["100%", "100%", "100%", "100%", "50%", "50%"]}
                  fontSize={["24px", "24px","24px", "31px",  "40px", "48px"]}
                  textTransform={"capitalize"}
                  fontWeight={700}
                >
                  Invent better everyday
                </Text>

                <Text
                  fontFamily={"Bossa-Light"}
                  color={"#747272"}
                  w={["100%", "100%", "100%", "50%", "50%"]}
                  fontSize={["12px", "12px","12px", "14px","16px", "18px"]}
                  fontWeight={300}
                  letterSpacing={["-0.42px"]}
                >
                  G42 Healthcare, a leading AI-powered healthcare company, is on
                  a mission to develop a world-class healthcare sector in the
                  UAE and beyond, by harnessing data and emerging technologies
                  in healthcare to unlock the potential of personalized and
                  preventive care.
                </Text>
              </Flex>
          </Box>
        </Box>

        <VideoModal
          url={g42Video}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      </Box>
    </div>
  );
};

export default Video_AU;
