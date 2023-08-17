import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../Footer/Footer";

const ServicesFooter = () => {
  return (
    <>
      <Box margin={["80px 20px 0px 20px", "125px 175px 0px 175px"]}>
        <Flex flexDirection={["column", "column", "row"]} justifyContent={"space-between"} alignItems={"start"}>
          <Box w={["100%", "100%", "60%"]}>
            <Text
            fontFamily={"Bossa"}
            fontStyle={"normal"}
            fontWeight={700}
            fontSize={["24px", "24px", "48px"]}
            >Curious to know more</Text>
            <Text
            fontFamily={"Bossa"}
            fontStyle={"normal"}
            fontWeight={500}
            fontSize={["12px", "12px", "14px"]}
            color={"#747272"}
            >
              Need 2-3 line statement to support the heading. Partner with G42
              Healthcare for industry-leading AI-powered solutions and expert
              support to drive your healthcare initiatives forward. Suggest a
              write for 2-3 lines to better address the purpose of the section
              clearly.
            </Text>
          </Box>
          <Box>
            <Button borderRadius={"80px"} mt={["16px", 0,0]} padding={"15px 34px"} textTransform={"capitalize"} fontSize={["12px", "12px", "16px"]} _hover={{backgroundColor: "#004141"}} color={"white"} backgroundColor={"#004141"}>
              Make Enquiry
            </Button>
          </Box>
        </Flex>
        <hr style={{ margin: "35px 0px 54px 0px" }} />
      <Flex
        flexDirection={["column", "column", "row"]}
        alignItems={["start", "start", "center"]}
        gap={["12px", "12px", ""]}
        justifyContent={"space-between"}
      >
        <Text
          fontFamily={"Bossa"}
          fontSize={["24px", "24px", "48px"]}
          fontWeight={700}
          color={"black"}
        >
          Partner with G42 Healthcare
        </Text>
        <Button
          fontFamily={"Bossa"}
          fontSize={["12px", "12px", "16px"]}
          fontWeight={500}
          textTransform={"capitalize"}
          padding={"15px 40px"}
          backgroundColor={"#00D2AA"}
          _hover={{ backgroundColor: "#00D2AA" }}
          color={"white"}
          borderRadius={80}
        >
          Contact Us
        </Button>
      </Flex>

      <hr style={{ margin: "101px 0px 67px 0px" }} />
      <Footer />
      </Box>
    </>
  );
};

export default ServicesFooter;
