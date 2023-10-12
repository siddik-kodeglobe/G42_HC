import { Box, Image } from "@chakra-ui/react";
import React from "react";
import img1 from "../../assets/Collaboration/Img1.svg";

const CollabImg = () => {
  return (
    <>
      <Box mt={["32px", "60px"]} w={"100vw"} maxW={"100%"}>
        <Image w={"100%"} height={["315px", "407px", "407px", "525px", "678px", "815px"]} objectFit={"cover"} src={img1} alt="collabImg" />
      </Box>
    </>
  );
};

export default CollabImg;
