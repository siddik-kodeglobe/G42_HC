import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const NewsHeading = () => {
  return (
    <>
      <Box padding={["14px 60px 39px","14px 60px 39px","41px 60px","41px 60px"]}>
        <Text
        fontFamily={"Bossa-ExtendedBold"}
          fontWeight={700}
          lineHeight={"81px"}
          letterSpacing={"-0.72px"}
          fontStyle={"normal"}
          fontSize={["24px","24px","60px","60px"]}
          color={"black"}
        >
          News
        </Text>
      </Box>
    </>
  );
};

export default NewsHeading;
