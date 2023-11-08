import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../Footer/Footer";

const Footer_AU = () => {
  return (
    <>
      <Box 
      w={"100vw"}
      maxW={"100%"}
      padding={["80px 20px 22px 20px","80px 20px 22px 20px","80px 20px 22px 20px", "125px 11.77% 25px 11.77%", "125px 11.77% 25px 11.77%", "125px 11.77% 25px 11.77%"]}
      // margin={["78px 10% 0px 10%","78px 10% 0px 10%","78px 10% 0px 10%","78px 225px 0px 225px"]}
      >
        <Flex
          flexDirection={["column", "column", "row"]}
          alignItems={["start", "start", "center"]}
          justifyContent={"space-between"}
          gap={["12px", "12px", ""]}
        >
          <Text
            fontFamily={"Bossa-ExtendedBold"}
            color={"#00AFFF"}
            fontSize={["24px", "24px", "40px", "48px"]}
            fontWeight={700}
          >
            →Join Our Team
          </Text>
          <Link _hover={{textDecor: "none"}} href="/career">
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            w={["219px"]}
            height={["55px"]}
              fontFamily={"Bossa-ExtendedMedium"}
              fontSize={["12px", "12px", "16px"]}
              fontWeight={500}
              textTransform={"capitalize"}
              padding={["15px 40px","15px 40px","15px 40px","15px 40px","20px 46px"]}
              color={"white"}
              _hover={{ backgroundColor: "#00AFFF" }}
              backgroundColor={"#00AFFF"}
              borderRadius={80}
            >
              Learn More
            </Flex>
          </Link>
        </Flex>

        <hr style={{ margin: "35px 0px 54px 0px" }} />
        <Flex
          flexDirection={["column", "column", "row"]}
          alignItems={["start", "start", "start", "start"]}
          gap={["12px", "12px", ""]}
          justifyContent={"space-between"}
        >
          <Text
            fontFamily={"Bossa-ExtendedBold"}
            maxW={["", "", "595px"]}
            fontSize={["24px", "24px", "40px", "48px"]}
            fontWeight={700}
            color={"black"}
          >
            Partner with G42 Healthcare
          </Text>
          <Link _hover={{textDecor: "none"}} href="/contactus">
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
          </Link>
        </Flex>

        <Box border={"1px solid #D9D9D9"} margin={["52px 0px 42px 0px", "52px 0px 42px 0px", "52px 0px 42px 0px", "102px 0px 67px 0px", "102px 0px 67px 0px", "102px 0px 67px 0px"]}></Box>       
       
        <Footer />
      </Box>
    </>
  );
};

export default Footer_AU;
