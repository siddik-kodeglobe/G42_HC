import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Partnership = () => {
  return (
    <>
      <Flex alignItems={"start"} justifyContent={"space-between"} margin={["66px 12% 57px 5%"]}>
        <Text alignItems={"start"} fontSize={["60px"]} lineHeight={["81px"]} letterSpacing={["-0.72px"]} fontStyle={["normal"]} fontWeight={700}>Partnerships</Text>
        <Text w={"452px"} maxW={"100%"} alignItems={"start"} color={"#747272"} fontSize={"14px"} fontWeight={300} letterSpacing={"-0.42px"} lineHeight={["24px"]}>
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
