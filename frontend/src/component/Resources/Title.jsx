import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Title = () => {
  return (
    <>
      <Box zIndex={-14} 
      w={"100vw"}
      maxW={"100%"}
      padding={["14.14px 0% 0% 4.01%","14.14px 0% 0% 4.01%","66.85 0% 0% 4.01%","43.65px 0% 0% 4.01%","56px 0% 0% 4.01%","66.85px 0% 0% 4.01%"]}
      >
        <Text
        fontFamily={"Bossa-ExtendedBold"}
          fontSize={["24px", "24px", "30px","39px", "50px", "60px"]}
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
