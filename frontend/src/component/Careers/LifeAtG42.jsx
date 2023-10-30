import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const LifeAtG42 = () => {
  return (
    <>
      <Flex
        flexDir={["column", "column", "row", "row"]}
        alignItems={["start"]}
        justifyContent={"space-between"}
        w={"100%"}
        padding={["40px 20px 40px 20px", "40px 4.01% 40px 4.01%", "40px 4.01% 40px 4.01%", "45px 11.71% 41px 11.71%", "59px 11.71% 54px 11.71%", "70px 11.71% 64px 11.71%"]}
      >
        <Box w={["100%", "100%","100%","50%", "50%", "50%"]}>
          <Text
            fontFamily={"Bossa-ExtendedBold"}
            fontSize={["24px", "24px","24px", "31px","40px", "48px"]}
            color={"black"}
            fontWeight={[700]}
            fontStyle={"normal"}
            lineHeight={["normal","normal","normal","51px", "51px", "51px"]}
          >
            Life at G42 Healthcare
          </Text>
        </Box>

        <Box w={["100%", "100%", "50%", "50%"]}>
          <Text
            fontFamily={"Bossa-ExtendedBold"}
            mt={["21px", "21px", "21px", "0px","0px","0px"]}
            fontSize={["16px", "16px","16px", "19px",  "25px", "30px"]}
            letterSpacing={["-0.9px"]}
            color={"black"}
            fontWeight={[700]}
            lineHeight={["normal", "normal", "normal", "38px","38px","38px" ]}
            fontStyle={"normal"}
          >
            G42 Healthcare - Health Tech Company
          </Text>
          <Text
            fontFamily={"Bossa-Light"}
            mt={["21px"]}
            fontSize={["12px", "12px", "12px", "14px", "14px", "14px"]}
            color={"#747272"}
            fontWeight={[300]}
            lineHeight={["18px", "18px", "18px", "21px", "21px", "21px"]}
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
