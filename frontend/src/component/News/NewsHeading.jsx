import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const NewsHeading = () => {
  return (
    <>
      <Box padding={["14px 0px 0px 20px", "14px 0px 0px 20px", "14px 0px 0px 20px", "43px 0px 0px 3.94%", "55px 0px 0px 3.94%", "66px 0px 0px 3.94%"]}>
        <Text
        fontFamily={"Bossa-ExtendedBold"}
          fontWeight={700}
          lineHeight={"81px"}
          letterSpacing={"-0.72px"}
          fontStyle={"normal"}
          fontSize={["24px","24px","24px","39px", "50px","60px"]}
          color={"black"}
        >
          News
        </Text>
      </Box>
    </>
  );
};

export default NewsHeading;
