import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const LifeAtG42 = () => {
  return (
    <>
      <Flex
        alignItems={"start"}
        justifyContent={"space-between"}
        margin={["70px 178px 64px 178px"]}
      >
        <Box w={["50%"]}>
          <Text
            fontSize={["48px"]}
            color={"black"}
            fontWeight={[700]}
            lineHeight={["51px"]}
            fontStyle={"normal"}
          >
            Life at G42 Healthcare
          </Text>
        </Box>

        <Box w={["50%"]}>
          <Text
            fontSize={["30px"]}
            letterSpacing={["-0.9px"]}
            color={"black"}
            fontWeight={[700]}
            lineHeight={["38px"]}
            fontStyle={"normal"}
          >
            G42 Healthcare - Health Tech Company
          </Text>
          <Text
          mt={["20px"]}
            fontSize={["14px"]}
            color={"#747272"}
            fontWeight={[300]}
            lineHeight={["21px"]}
            fontStyle={"normal"}
            letterSpacing={["0.42px"]}
          >
            G42 Healthcare, a leading AI-powered healthcare company, is on a
            mission to develop a world-class healthcare sector in the UAE and
            beyond, by harnessing data and emerging technologies in healthcare
            to unlock the potential of personalized and preventive care. Agile
            and futuristic, we have created a transformative shift in the
            traditional healthcare paradigm. As a visionary health tech company,
            we partner with governments, leading international entities,
            scientists and researchers and the wider medical community who
            subscribe to our values and our mission as we develop solutions to
            future-proof the health of nations. We have built Biogenix Labs,
            UAE’s first COVID-19 accredited large-scale throughput laboratory,
            and facilitated the 4Humanity clinical trials, the world’s first
            phase three trial for inactivated vaccine against COVID-19 with over
            43,000 volunteers from 125+ nationalities across the pan-Arab
            region.
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default LifeAtG42;
