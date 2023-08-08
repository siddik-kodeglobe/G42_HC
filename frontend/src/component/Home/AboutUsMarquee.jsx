import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import aboutImage from "../../assets/temp/about_HomePage.svg";

const AboutUsMarquee = () => {
  return (
    <>
      <Box mt={111}>
        <marquee>
          <Flex alignItems={"center"} gap={["16px", "16px", "34px"]}>
            <hr style={{ width: "88px", border: "1px solid black", margin: "auto" }} />
            <Text textAlign={"center"} fontFamily={"Bossa"} fontSize={[ "32px", "32px", "60px", "60px"]} fontWeight={700}>
              About G42 Healthcare
            </Text>
            <hr style={{ width: "88px", border: "1px solid black", margin: "auto" }} />
          </Flex>
        </marquee>

        <Flex flexDirection={["column", "column", "row"]} mt={"100px"} padding={["0px 20px", "0px 20px", "0px 151px"]} gap={["33px", "33px", "90px"]} alignItems={"self-start"}>
          <Image w={["352px", "352px", "519px"]} src={aboutImage} alt="About Image" />
          <Flex flexDirection={"column"} justifyContent={"space-between"}>
            <Text
              fontFamily={"Bossa"}
              fontSize={18}
              fontStyle={"normal"}
              fontWeight={500}
              lineHeight={"24px"}
            >
              About G42 Healthcare in 2 paragraphs not more than 60-70 words.
              uses AI and data to create a world-class healthcare sector in the
              UAE and beyond. We partner with governments, scientists, and the
              medical community to future-proof nations' health. We built
              Biogenix Labs, the first COVID-19 accredited large-scale
              throughput lab in the UAE, and facilitated the world's first phase
              three inactivated COVID-19 vaccine trial, 4Humanity, with over
              43,000 participants from 125+ nationalities.
            </Text>
            <Button
            mt={"15px"}
              _hover={{ bgColor: "#00D2AA" }}
              bgColor={"#00D2AA"}
              borderRadius={"80px"}
              fontFamily={"Bossa"}
              fontSize={16}
              fontStyle={"normal"}
              fontWeight={500}
              textTransform={"capitalize"}
              textAlign={"center"}
              color={"white"}
              w={"219px"}
            >
              About Us
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default AboutUsMarquee;
