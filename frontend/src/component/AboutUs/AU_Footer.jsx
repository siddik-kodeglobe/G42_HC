import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../Footer/Footer";

const AU_Footer = () => {
  return (
    <div style={{ margin: "78px 10% 0px 10%" }}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Text
          color={"#00AFFF"}
          fontFamily={"Bossa"}
          fontSize={48}
          fontWeight={700}
        >
          →Join Our Team
        </Text>
        <Button
          fontFamily={"Bossa"}
          fontSize={16}
          fontWeight={500}
          textTransform={"capitalize"}
          padding={"15px 40px"}
          color={"white"}
          _hover={{backgroundColor: "#00AFFF"}}
          backgroundColor={"#00AFFF"}
          borderRadius={80}
        >
          Learn More
        </Button>
      </Flex>

      <hr style={{ margin: "35px 0px 54px 0px" }} />
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Text
          fontFamily={"Bossa"}
          fontSize={48}
          fontWeight={700}
          color={"black"}
        >
          Partner with G42 Healthcare
        </Text>
        <Button
          fontFamily={"Bossa"}
          fontSize={16}
          fontWeight={500}
          textTransform={"capitalize"}
          padding={"15px 40px"}
          backgroundColor={"#00D2AA"}
          _hover={{backgroundColor: "#00D2AA"}}
          color={"white"}
          borderRadius={80}
        >
          Contact Us
        </Button>
      </Flex>

      <hr style={{ margin: "101px 0px 67px 0px" }} />
      <Footer />
    </div>
  );
};

export default AU_Footer;
