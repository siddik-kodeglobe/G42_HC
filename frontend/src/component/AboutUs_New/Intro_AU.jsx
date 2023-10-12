import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Intro_AU = () => {
  return (
    <>
    <Box w={"100vw"} maxW={"100%"}>
      <Text
        padding={[
          "14px 20px 0px 20px",
          "14px 20px 0px 20px",
          "14px 20px 0px 20px",
          "43px 3.94% 0px 3.94%",
          "56px 3.94% 0px 3.94%",
          "67px 3.94% 0px 3.94%",

        ]}
        fontFamily={"Bossa-ExtendedBold"}
        fontWeight={700}
        fontSize={["24px", "24px","24px", "39px", "50px", "60px"]}
      >
        Our Introduction
      </Text>
      </Box>
    </>
  );
};

export default Intro_AU;
