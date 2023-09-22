import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Partnership = () => {
  return (
    <>
      <Flex
        alignItems={"start"}
        justifyContent={"space-between"}
        margin={["14px 12% 29px 20px", "66px 12% 57px 5%", "66px 9% 57px 5%"]}
        flexDir={["column", "column", "row", "row"]}
      >
        <Text
        fontFamily={"Bossa-ExtendedBold"}
          alignItems={"start"}
          fontSize={["24px", "24px", "60px", "60px"]}
          lineHeight={["81px"]}
          letterSpacing={["-0.72px"]}
          fontStyle={["normal"]}
          color={"black"}
          // fontWeight={700}
        >
          Partnerships
        </Text>
        <Text
        fontFamily={"Bossa-Light"}
          w={"452px"}
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
          beyond, by harnessing data and emerging technologies in healthcare to
          unlock the potential of personalized
        </Text>
      </Flex>
    </>
  );
};

export default Partnership;
