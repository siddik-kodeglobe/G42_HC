import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Footer from '../Footer/Footer'

const WhatWeDoFooter = () => {
  return (
    <div>
      <Box padding={["0px 20px 18px 20px","29px 20px 18px 20px","29px 20px 18px 20px", "0px 11.71% 35px 11.71%","0px 11.71% 35px 11.71%","0px 11.71% 35px 11.71%"]} w={"100vw"} maxW={"100%"}>
        <Flex
          flexDirection={["column", "column","column", "row", "row", "row", ]}
          alignItems={["start", "start", "start", "start"]}
          gap={["12px", "12px", ""]}
          justifyContent={"space-between"}
        >
          <Text
          fontFamily={"Bossa-ExtendedBold"}
            maxW={["", "", "595px"]}
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

      <Box margin={["49px 0px 67px 0px", "49px 0px 67px 0px", "49px 0px 67px 0px", "51px 0px 72px 0px", "51px 0px 72px 0px", "51px 0px 72px 0px"]} border={"1px solid #D9D9D9"} w={"100%"}></Box>
       

        <Footer />  
      </Box>
    </div>
  );
};

export default WhatWeDoFooter;
