import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Title = () => {
  return (
    <>
      <Box zIndex={-14} padding={["14px 0px 0px 20px", "14px 0px 0px 20px", "66px 60px 0px 60px", "66px 60px 0px 60px"]}>
        <Text
        fontFamily={"Bossa-ExtendedBold"}
          fontSize={["24px", "24px","60px", "60px"]}
          fontStyle={"normal"}
          fontWeight={700}
          lineHeight={["81px"]}
          letterSpacing={"-0.72px"}
          color={"black"}
        >
          Resources
        </Text>
      </Box>
    </>
  );
};

export default Title;
