import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Connect = () => {
  return (
    <>
      <Box
        w={"100vw"}
        maxW={"100%"}
        padding={[
          "40px 20px 0px 20px",
          "40px 4.01% 0px 4.01%",
          "40px 4.01% 0px 4.01%",
          "66px 11.71% 0px 4.01%",
          "66px 11.71% 0px 4.01%",
          "66px 11.71% 0px 4.01%",
        ]}
      >
        <Text
          fontFamily={"Bossa-ExtendedBold"}
          textTransform={"capitalize"}
          fontSize={["24px", "24px", "24px", "24px", "26px", "32px"]}
          lineHeight={"normal"}
        >
          connect with{" "}
          <span style={{ color: "var(--Emergent-Green, #00D2AA)" }}>
            G42 Healthcare?
          </span>
        </Text>
      </Box>
    </>
  );
};

export default Connect;
