import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import playBtn from "../../assets/icons/playBtn.svg";
import News from "./News";

const VideoSection = () => {
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

        <Box position={"absolute"} bottom={0}  margin={0}>
          {/* TAGLINE  */}
          <Flex flexDirection={["column", "column", "row"]} alignItems={["start", "start", "center"]} paddingLeft={["20px", "20px", "72px"]} paddingBottom={["0px", "0px", "92px"]} bgGradient={"linear-gradient(0deg, #00D2AA 0%, rgba(0, 210, 170, 0.00) 100%);"} gap={[0,0,"14px"]}>
            <Box>
            <Image width={["48px", "48px", "90px"]} cursor={"pointer"} src={playBtn} alt="playBtn" />
            </Box>
            <Box>
              <Text
                color={"white"}
                fontFamily={"Bossa"}
                fontSize={["16px", "16px", "24px"]}
                fontWeight={400}
                fontStyle={"normal"}
              >
                Supporting tagline: Max one line statement.
              </Text>
              <Text
              w={"70%"}
                color={"white"}
                fontFamily={"Bossa"}
                fontSize={["28px", "28px", "80px"]}
                fontWeight={700}
                fontStyle={"normal"}
                lineHeight={"normal"}
              >
                Company Tagline max 3-4 words
              </Text>
            </Box>
          </Flex>
        </Box>

      </Box>
    </>
  );
};

export default VideoSection;
