import React from "react";
import g42Video from "../../assets/temp/Video/G42 Video.mp4";
import { Box, Text, useDisclosure } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import playBtn from "../../assets/icons/playBtn.svg";
import VideoModal from "../VideoModal/VideoModal";

const Video = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
      onClick={onOpen}
        pos={"relative"}
        paddingTop={"56.25%"}
        // border={"4px solid red"}
        h={["392px", "392px","604px","604px"]}
        maxH={"100%"}
        w={"100vw"}
        maxW={"100%"}
        style={{ cursor: `url(${playBtn}), auto` }}
      >
        <ReactPlayer
          style={{ position: "absolute", top: "0px", left: "0px" }}
          width={"100%"}
          height={"100%"}
          playing={true}
          loop={true}
          url={g42Video}
          muted
        />

        <Box
          background={
            "linear-gradient(0deg, #00D2AA 0%, rgba(0, 210, 170, 0.00) 100%);"
          }
          pos={"absolute"}
          bottom={"0px"}
          left={"0px"}
          w={"100vw"}
          maxW={"100%"}
          h={"341px"}
        >
          <Text
            position={"absolute"}
            bottom={["22px","22px","45px","45px"]}
            left={["24px","24px","60px","60px"]}
            w={["353px","353px","946px","946px"]}
            color={"white"}
            fontWeight={700}
            letterSpacing={"-0.352px"}
            fontSize={["24px","24px","32px","32px"]}
            fontStyle={"normal"}
          >
            Emirati Genome Program: Region’s largest and most advanced Omics
            facility
          </Text>
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

export default Video;
