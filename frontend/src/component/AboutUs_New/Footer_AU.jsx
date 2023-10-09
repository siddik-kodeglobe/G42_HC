import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../Footer/Footer";

const Footer_AU = () => {
  return (
    <>
      <Box 
      w={"100vw"}
      maxW={"100%"}
      padding={"8.16% 11.77% 1.72% 11.77%"}
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
          <Link href="/career">
            <Button
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
            </Button>
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
          <Link href="/contactus">
            <Button
              fontFamily={"Bossa-ExtendedMedium"}
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
          </Link>
        </Flex>

        <hr
          style={{
            margin: "101px 0px 67px 0px",
            border: "1px solid lightgray",
          }}
        />
        <Footer />
      </Box>
    </>
  );
};

export default Footer_AU;
