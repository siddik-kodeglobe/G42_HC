import { Box, Text } from "@chakra-ui/react";
import React from "react";

const CareerText = () => {
  return (
    <>
      <Box ml={["20px", "20px", "60px", "60px"]} mt={["30px", "30px", "58px", "58px"]}>
        <Text
fontFamily={"Bossa-ExtendedBold"}
        color={"black"}
          fontSize={["30px", "30px", "60px", "60px"]}
          fontWeight={700}
          lineHeight={["81px"]}
          letterSpacing={["-0.72px"]}
        >
          Careers
        </Text>
      </Box>
    </>
  );
};

export default CareerText;
