import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const CollabHeading = () => {
  return (
    <>
    <Box w={"100vw"} maxW={"100%"}>
      <Flex
      padding={["25px 20px 40px 20px", "25px 20px 40px 20px", "25px 20px 40px 20px", "40px 11.71% 40px 11.71%", "50px 11.71% 50px 11.71%", "60px 11.71% 60px 11.71%"]}
      borderBottom={"1px solid #D9D9D9"}
        alignItems={"start"}
        justifyContent={"space-between"}
        flexDir={["column", "column", "row", "row"]}
      >
        <Box w={["100%", "100%", "50%", "50%"]} maxW={"100%"}>
          <Text
          w={"100%"}
          fontFamily={"Bossa-ExtendedBold"}
            alignItems={"start"}
            fontSize={["24px", "24px","24px","40px", "50px","60px"]}
            lineHeight={["81px"]}
            letterSpacing={["-0.72px"]}
            fontStyle={["normal"]}
            // fontWeight={700}
          >
            Opening Headline 1
          </Text>
        </Box>
        <Box w={["100%", "100%", "50%", "50%"]}>
          <Text
          fontFamily={"Bossa-Light"}
            
            w={"100%"}
            alignItems={"start"}
            color={"#747272"}
            fontSize={["12px", "12px","12px","14px", "16px", "18px"]}
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
            w={"100%"}
            alignItems={"start"}
            color={"#747272"}
            fontSize={["12px", "12px","12px","14px", "16px", "18px"]}
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
      {/* <hr style={{border: "1px solid #D9D9D9", width:"100%"}}/> */}
      </Box>
    </>
  );
};

export default CollabHeading;
