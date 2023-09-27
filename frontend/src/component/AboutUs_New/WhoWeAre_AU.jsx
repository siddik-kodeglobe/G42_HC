import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const WhoWeAre_AU = () => {
  return (
    <>
      <Flex
        flexDirection={["column", "column", "column", "row", "row"]}
        alignItems={"start"}
        margin={["51px 21px 0px 21px", "51px 21px 0px 21px","51px 100px 0px 100px", "78px 148px 0px 148px", "78px 148px 0px 148px"]}
        mt={["45px"]}
        justifyContent={"space-between"}
        gap={["0px","0px","0px","20px","20px"]}
      >
        <Box w={["100%", "100%", "100%", "50%", "50%"]}>
          <Text fontFamily={"Bossa-ExtendedBold"} fontWeight={700} fontSize={["24px", "24px", "48px", "48px", "48px"]}>
            Who we are
          </Text>
        </Box>
        <Box w={["100%", "100%", "100%", "50%", "50%"]}>
          <Text fontFamily={"Bossa-ExtendedBold"} fontWeight={700} fontSize={["24px", "24px", "41px", "41px", "41px"]}>
            G42 Healthcare - Health Tech Company
          </Text>
          <Text fontFamily={"Bossa-Light"} mt={5} fontSize={14} color={"#747272"} fontWeight={300}>
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

export default WhoWeAre_AU;
