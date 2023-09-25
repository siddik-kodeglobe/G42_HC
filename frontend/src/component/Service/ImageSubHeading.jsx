import React from "react";
import omicsImg from "../../assets/temp/services/omicsImg.svg";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

const ImageSubHeading = () => {
  return (
    <>
    <Box margin={["33px 14px", "0px 180px"]}>
      <Image src={omicsImg} alt="Img" />
      <Flex margin={["0px 22px", "0px 22px", "78px 0px"]} mt={"78px"} flexDirection={["column", "column", "row"]} justifyContent={"space-between"}>
        <Box w={"50%"}>
          <Text
          fontFamily={"Bossa-ExtendedBold"}
            fontStyle={"normal"}
            fontWeight={"700"}
            fontSize={["24px", "24px", "45px"]}
          >
            Sub Heading
          </Text>
        </Box>
        <Box mt={["14px", 0, 0]} w={["100%","100%", "50%"]}>
          <Text
          fontFamily={"Bossa-Light"}
            color={"#747272"}
            fontStyle={"normal"}
            fontWeight={300}
            lineHeight={"22px"}
            fontSize={["12px", "12px", "16px"]}
          >
            The Omics Centre of Excellence is invested in the accentuated power
            of Wellness genomic, clinical, precision medicine and
            cross-disciplinary data that enables healthcare transformation.
            Delivering population genome program across the GCC and beyond, in
            partnership with governments and health authorities, we pave the way
            for personalized and preventive healthcare delivery through
            precision medicine, and standardized viral sequencing to ensure data
            reliability across populations. We also offer Next-Generation
            Sequencing technology, generating the highest quality and the most
            comprehensive genome data and biological insights. At G42
            Healthcare, we deliver the highest capacity combined sequencing
            throughput of over 40,000 genomes per month – the highest capacity
            globally. At our facilities, we harness advanced AI technology
            capabilities by integrating large, erse data sets to deliver
            valuable insights for R&D and improved outcomes as part of clinical
            and consumer genomics solutions, thus unlocking the power of the
            genome even further.
          </Text>
          <Button
          fontFamily={"Bossa-ExtendedMedium"}
            mt={"15px"}
            _hover={{ backgroundColor: "00D2AA" }}
            backgroundColor={"#00D2AA"}
            color={"white"}
            fontSize={"16px"}
            fontWeight={500}
            borderRadius={"80px"}
            padding={"15px 46px"}
          >
            Know More
          </Button>
        </Box>
      </Flex>
      </Box>
    </>
  );
};

export default ImageSubHeading;
