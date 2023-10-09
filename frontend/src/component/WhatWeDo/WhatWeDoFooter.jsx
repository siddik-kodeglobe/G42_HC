import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Footer from '../Footer/Footer'

const WhatWeDoFooter = () => {
  return (
    <div>
      <Box style={{ margin: "5.16% 11.71% 0px 11.71%" }}>
        <Flex
          flexDirection={["column", "column", "row"]}
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
          <Button
          fontFamily={"Bossa-ExtendedMedium"}
          height={["55px"]}
          w={["219px"]}
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

        <hr
          style={{
            width: "100vw",
            maxWidth: "100%",
            border: "1px solid #D9D9D9",
            marginBottom:"67px"
          }}
        />


        <Footer />  
      </Box>
    </div>
  );
};

export default WhatWeDoFooter;
