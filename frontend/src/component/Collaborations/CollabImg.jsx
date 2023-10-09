import { Box, Image } from "@chakra-ui/react";
import React from "react";
import img1 from "../../assets/Collaboration/Img1.svg";

const CollabImg = () => {
  return (
    <>
      <Box w={"100%"} padding={"3.75% 0% 0% 0%"}>
        <Image w={"100%"} height={"auto"} objectFit={"cover"} src={img1} alt="collabImg" />
      </Box>
    </>
  );
};

export default CollabImg;
