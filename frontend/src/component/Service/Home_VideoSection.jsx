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

const Home_VideoSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box position={"relative"}>
        <Box position={"relative"}>
          <ReactPlayer
            style={{ position: "position" }}
            width={"100%"}
            height={"100%"}
            playing={true}
            loop={true}
            url="http://localhost:1338/uploads/1065341845_preview_1_5bd602282c.mp4"
          />
        </Box>

        <Box
          w={"98.7vw"}
          h={"50vh"}
          position={"absolute"}
          bgGradient={
            "linear-gradient(0deg, #00AFFF 0%, rgba(0, 175, 255, 0.00) 100%);"
          }
          bottom={0}
          margin={0}
        >
          {/* TAGLINE  */}
          <Box paddingLeft={"72px"} paddingBottom={"92px"}>
            <Image onClick={onOpen} cursor={"pointer"} src={playBtn} alt="playBtn" />
          </Box>
          <Box position={"absolute"} bottom={-9} w="100%" h="35%">
            <Box
              position={"absolute"}
              bottom={0}
              right={5}
              height={"214px"}
              w={"96vw"}
              padding={"75px 148px"}
              mt={5}
              justifyContent={"space-between"}
              alignItems={"center"}
              backgroundColor={"white"}
            >
              <Text
                w={"50%"}
                fontFamily={"bossa"}
                fontSize={"48px"}
                textTransform={"capitalize"}
                fontWeight={700}
              >
                Omics
              </Text>
            </Box>
          </Box>
        </Box>

        <VideoModal
          url={
            "http://localhost:1338/uploads/1065341845_preview_1_5bd602282c.mp4"
          }
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      </Box>
    </>
  );
};

export default Home_VideoSection;
