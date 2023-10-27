import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Partnership = () => {
  return (
    <>
      <Flex
      w={"100vw"}
      maxW={"100%"}
        alignItems={"start"}
        justifyContent={"space-between"}
        padding={["14px 20px 0px 20px", "14px 20px 0px 20px", "14px 20px 0px 20px", "66px 4.01% 0px 4.01%", "66px 4.01% 0px 4.01%", "66px 4.01% 0px 4.01%"]}
        flexDir={["column", "column", "row", "row"]}
        gap={["29px","29px","29px","0px", "0px", "0px"]}
      >
        <Text
        fontFamily={"Bossa-ExtendedBold"}
          alignItems={"start"}
          fontSize={["24px", "24px","24px","40px", "50px", "60px"]}
          // lineHeight={["81px"]}
          letterSpacing={["-0.72px"]}
          fontStyle={["normal"]}
          color={"black"}
          w={["100%","100%","100%","50%","50%","50%"]}
          // fontWeight={700}
        >
          Partnerships
        </Text>
        <Text
        fontFamily={"Bossa-Light"}
        w={["100%","100%","100%","50%","50%","50%"]}
          maxW={"100%"}
          alignItems={"start"}
          color={"#747272"}
          fontSize={["12px","12px","12px","14px","14px","14px"]}
          fontWeight={300}
          letterSpacing={"-0.42px"}
          lineHeight={["24px"]}
          // mt={[]}
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
