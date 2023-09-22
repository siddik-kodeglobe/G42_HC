import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Connect = () => {
  return (
    <>
      <Box ml={["20px", "20px", "60px", "60px"]} mt={["58px"]}>
        <Text
        fontFamily={"Bossa-ExtendedBold"}
          textTransform={"capitalize"}
          fontSize={["24px", "24px", "32px", "32px"]}
          fontWeight={700}
          lineHeight={"normal"}
        >
          connect with <span style={{color: "var(--Emergent-Green, #00D2AA)"}}>G42 Healthcare?</span>
        </Text>
      </Box>
    </>
  );
};

export default Connect;
