import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const CollabHeading = () => {
  return (
    <>
    <Box>
      <Flex
        alignItems={"start"}
        justifyContent={"space-between"}
        margin={["66px 12% 57px 5%"]}
      >
        <Box w={["448px"]} maxW={"100%"}>
          <Text
            alignItems={"start"}
            fontSize={["60px"]}
            lineHeight={["81px"]}
            letterSpacing={["-0.72px"]}
            fontStyle={["normal"]}
            fontWeight={700}
          >
            Opening Headline 1
          </Text>
        </Box>
        <Box>
          <Text
            w={["453px"]}
            maxW={"100%"}
            alignItems={"start"}
            color={"#747272"}
            fontSize={"14px"}
            fontWeight={300}
            letterSpacing={"-0.42px"}
            lineHeight={["24px"]}
          >
            G42 Healthcare, a leading AI-powered healthcare company, is on a
            mission to develop a world-class healthcare sector in the UAE and
            beyond, by harnessing data and emerging technologies in healthcare
            to unlock the potential of personalized and preventive care.
          </Text>

          <Text
            w={["453px"]}
            maxW={"100%"}
            alignItems={"start"}
            color={"#747272"}
            fontSize={"14px"}
            fontWeight={300}
            letterSpacing={"-0.42px"}
            lineHeight={["24px"]}
          >
            G42 Healthcare, a leading AI-powered healthcare company, is on a
            mission to develop a world-class healthcare sector in the UAE and
            beyond, by harnessing data and emerging technologies in healthcare
            to unlock the potential of personalized and preventive care.
          </Text>
        </Box>
      </Flex>
      <hr style={{border: "1px solid #D9D9D9", width:"100%"}}/>
      </Box>
    </>
  );
};

export default CollabHeading;
