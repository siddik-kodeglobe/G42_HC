import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Text_Search = () => {
  return (
    <div>
      <Box
        padding={[
          "14px 0px 39px 20px",
          "14px 0px 39px 20px",
          "66px 0px 56px 60px",
          "66px 0px 56px 60px",
        ]}
      >
        <Text
          fontFamily={"Bossa-ExtendedBold"}
          color={"black"}
          fontSize={["24px", "24px", "60px", "60px"]}
          fontStyle={"normal"}
          fontWeight={[700]}
          lineHeight={["68px"]}
          textTransform={"capitalize"}
        >
          Search
        </Text>
      </Box>
    </div>
  );
};

export default Text_Search;
