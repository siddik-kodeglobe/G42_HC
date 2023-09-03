import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Title = () => {
  return (
    <>
      <Box zIndex={-14} padding={"66px 60px 0px 60px"}>
        <Text
          fontSize={"60px"}
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
