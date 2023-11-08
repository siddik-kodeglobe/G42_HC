import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../Footer/Footer";

const ServicesFooter = () => {
  return (
    <>
      <Box w={"100vw"} maxW={"100%"} 
     padding={["53px 11.71%  32px 11.71%"]}
     mt={["30px","30px","30px","71px","71px","71px"]}
      >
        <Flex flexDirection={["column", "column", "row"]} justifyContent={"space-between"} alignItems={"start"}>
          <Box w={["100%", "100%", "60%"]}>
            <Text
            fontFamily={"Bossa-ExtendedBold"}
            fontStyle={"normal"}
            fontWeight={700}
            fontSize={["24px", "24px", "48px", "48px"]}
            >Curious to know more</Text>
            <Text
            fontFamily={"Bossa-Regular"}
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
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            // w={["219px"]}
            // height={["55px"]}
              fontFamily={"Bossa-ExtendedMedium"}
              fontSize={["12px", "12px","12px", "16px", "16px", "16px"]}
              fontWeight={500}
              textTransform={"capitalize"}
              padding={["15px 40px","15px 40px","15px 34px","15px 34px","15px 34px", "15px 34px", ]}
              color={"white"}
              _hover={{ backgroundColor: "#00D2AA" }}
              backgroundColor={"#004141"}
              borderRadius={80}
            >
              Make Enquiry
            </Flex>
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
        fontFamily={"Bossa-ExtendedBold"}
          fontSize={["24px", "24px", "48px"]}
          fontWeight={700}
          color={"black"}
        >
          Partner with G42 Healthcare
        </Text>
        <Flex
            justifyContent={"center"}
            alignItems={"center"}
            w={["219px"]}
            height={["55px"]}
              fontFamily={"Bossa-ExtendedMedium"}
              fontSize={["12px", "12px", "16px"]}
              fontWeight={500}
              textTransform={"capitalize"}
              padding={"15px 40px"}
              backgroundColor={"#00D2AA"}
              _hover={{ backgroundColor: "#004141" }}
              color={"white"}
              borderRadius={80}
            >
              Contact Us
            </Flex>
      </Flex>

      <hr style={{ margin: "101px 0px 67px 0px", border: "1px solid lightgray" }} />
      <Footer />
      </Box>
    </>
  );
};

export default ServicesFooter;
