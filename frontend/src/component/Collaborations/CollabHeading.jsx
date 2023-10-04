import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const CollabHeading = () => {
  return (
    <>
    <Box>
      <Flex
        alignItems={"start"}
        justifyContent={"space-between"}
        margin={["23px 20px 0px 20px","23px 20px 0px 20px","66px 12% 57px 5%","66px 12% 57px 5%"]}
        flexDir={["column", "column", "row", "row"]}
      >
        <Box w={["100%", "100%", "448px", "448px"]} maxW={"100%"}>
          <Text
          fontFamily={"Bossa-ExtendedBold"}
            alignItems={"start"}
            fontSize={["24px", "24px", "60px","60px"]}
            lineHeight={["81px"]}
            letterSpacing={["-0.72px"]}
            fontStyle={["normal"]}
            // fontWeight={700}
          >
            Opening Headline 1
          </Text>
        </Box>
        <Box>
          <Text
          fontFamily={"Bossa-Light"}
            w={["100%", "100%", "453px", "453px"]}
            maxW={"100%"}
            alignItems={"start"}
            color={"#747272"}
            fontSize={["12px", "12px", "14px", "14px"]}
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
          fontFamily={"Bossa-Light"}
            w={["100%", "100%", "453px", "453px"]}
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
