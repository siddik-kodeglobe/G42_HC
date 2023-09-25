import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import VideoModal from "../VideoModal/VideoModal";
import g42Video from "../../assets/temp/Video/G42 Video.mp4";
import playBtn from "../../assets/icons/playBtn.svg";

const Video_AU = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Box mt={["38px"]} position={"relative"}>
        <Box
          onClick={onOpen}
          style={{ cursor: `url(${playBtn}), auto` }}
          position={"relative"}
        >
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
          w={"100vw"}
          maxW={"100%"}
          h={["15vh", "15vh", "25vh", "50vh"]}
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
              padding={["15px 50px", "15px 50px", "75px 148px", "75px 148px"]}
              mt={5}
              justifyContent={"space-between"}
              alignItems={"center"}
              backgroundColor={"white"}
            >
              <Flex flexDir={["column", "column", "column", "row", "row"]} gap={["16px"]}>
                <Text
                  fontFamily={"Bossa-ExtendedBold"}
                  w={["100%", "100%", "100%", "50%", "50%"]}
                  fontSize={["24px", "24px", "45px", "45px"]}
                  textTransform={"capitalize"}
                  fontWeight={700}
                >
                  Invent better everyday
                </Text>

                <Text
                  fontFamily={"Bossa-Light"}
                  color={"#747272"}
                  w={["100%", "100%", "100%", "50%", "50%"]}
                  fontSize={["9px", "9px", "18px", "18px"]}
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
