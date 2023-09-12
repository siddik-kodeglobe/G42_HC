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

const CareerVideo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box mt={["38px"]} position={"relative"}>
        <Box onClick={onOpen} style={{ cursor: `url(${playBtn}), auto` }} position={"relative"}>
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

        <Box
          w={"98.7vw"}
          h={["25vh", "25vh", "50vh"]}
          position={"absolute"}
          bgGradient={
            "linear-gradient(0deg, #00AFFF 0%, rgba(0, 175, 255, 0.00) 100%);"
          }
          bottom={0}
          margin={0}
        >
          <Box
            position={"absolute"}
            bottom={[-2, -2, -9]}
            left={[9, 9, 0]}
            w="90%"
            h="35%"
          >
            <Box
              position={"absolute"}
              bottom={0}
              left={[-8, -8, 5]}
              right={[1, 1, 5]}
              height={["50px", "50px", "214px"]}
              w={"96vw"}
              padding={["15px 50px", "75px 148px"]}
              mt={5}
              justifyContent={"space-between"}
              alignItems={"center"}
              backgroundColor={"white"}
            >
              <Flex>
                <Text
                  w={"50%"}
                  fontFamily={"bossa"}
                  fontSize={["24px", "24px", "48px"]}
                  textTransform={"capitalize"}
                  fontWeight={700}
                >
                  Our Promise
                </Text>

                <Text
                color={"#747272"}
                  w={"50%"}
                  fontSize={["9px", "9px", "18px"]}
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

export default CareerVideo;
