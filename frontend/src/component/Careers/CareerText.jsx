import { Box, Text } from "@chakra-ui/react";
import React from "react";

const CareerText = () => {
  return (
    <>
      <Box
      w={"100vw"}
      maxW={"100%"}
      >
        <Text
        padding={["15px 0px 0px 20px","15px 0px 0px 4.01%","15px 0px 0px 4.01%", "66px 0px 0px 4.01%", "66px 0px 0px 4.01%", "66px 0px 0px 4.01%", ]}
          fontFamily={"Bossa-ExtendedBold"}
          color={"black"}
          fontSize={["30px","30px", "30px", "40px", "50px", "60px"]}
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
