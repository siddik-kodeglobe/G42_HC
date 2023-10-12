import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../Footer/Footer";

const Footer_NewsID = () => {
  return (
    <>
        <Box w={"100vw"} maxW={"100%"} padding={["80px 20px 20px 20px", "81px 11.71% 0px 11.71%", "81px 11.71% 0px 11.71%", "81px 11.71% 0px 11.71%", "105px 11.71% 0px 11.71%", "125px 11.71% 0px 11.71%"]}>
        <Flex flexDirection={["column", "column", "row"]} justifyContent={"space-between"} alignItems={"start"}>
          <Box w={["100%", "100%", "65%"]}>
            <Text
            fontFamily={"Bossa-ExtendedBold"}
            fontStyle={"normal"}
            fontWeight={700}
            fontSize={["24px", "24px", "48px"]}
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
            <Button fontFamily={"Bossa-ExtendedMedium"} borderRadius={"80px"} mt={["16px", 0,0]} padding={"15px 34px"} textTransform={"capitalize"} fontSize={["12px", "12px", "16px"]} _hover={{backgroundColor: "#004141"}} color={"white"} backgroundColor={"#004141"}>
              Make Enquiry
            </Button>
          </Box>
        </Flex>
      <hr style={{ margin: "101px 0px 67px 0px", border: "1px solid lightgray" }} />
      <Footer />
      </Box>
    </>
  )
}

export default Footer_NewsID