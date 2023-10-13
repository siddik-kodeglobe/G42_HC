import { Box, Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import React from "react";

const EnquiryForm = () => {
  return (
    <>
      <Flex
        flexWrap={"wrap"}
        w={"100vw"}
        maxW={"100%"}
        padding={[
          "0px 20px 0px 20px",
          "0px 20px 0px 20px",
          "0px 20px 0px 20px",
          "0px 11.71% 0px 4.01%",
          "0px 11.71% 0px 4.01%",
          "0px 11.71% 0px 4.01%",
        ]}
        justifyContent={"space-between"}
        borderTop={"1px solid #D9D9D9"}
        borderBottom={"1px solid #D9D9D9"}
      >
        <Box
          // padding={["29px 0px 40px 0px", "29px 0px 40px 0px", "29px 0px 40px 0px", "0px", "0px", "0px"]}
        
         mt={["79px", "79px", "79px", "90px", "90px", "90px"]}>
          <Text
            fontFamily={"Bossa-ExtendedBold"}
            w={["100%","100%","100%", "326px", "326px", "326px"]}
            fontSize={["24px", "24px", "24px", "24px", "26px", "32px"]}
            fontWeight={[700]}
            lineHeight={"normal"}
            textTransform={"capitalize"}
            fontStyle={"normal"}
            color={"black"}
          >
            Did not find what you are Looking for?
          </Text>
          <Text
          mt={["20px", "7px"]}
            fontFamily={"Bossa-Regular"}
            fontSize={["16px", "18px"]}
            fontWeight={[400]}
            lineHeight={"normal"}
            fontStyle={"normal"}
            color={"#747272"}
          >
            Tell us more about your specifics.
          </Text>
        </Box>

        <Box
          w={["100%", "100%", "100%", "63%", "63%", "63%"]}
          borderLeft={["0px", "0px", "0px", "1px solid #D9D9D9","1px solid #D9D9D9","1px solid #D9D9D9" ]}
        >
          <Flex
          padding={["29px 0px 40px 0px", "29px 0px 40px 0px", "29px 0px 40px 0px", "90px 0px 80px 97px", "90px 0px 80px 97px", "90px 0px 80px 97px"]}
            flexDir={"column"}
            gap={"22px"}
            margin={"auto"}
            // w={"100%"}
          >
            <Text
              fontFamily={"Bossa-Regular"}
              fontSize={["16px", "18px"]}
              lineHeight={"normal"}
              fontStyle={["normal"]}
              fontWeight={[400]}
            >
              Submit an enquiry here and we will get back to you soon.
            </Text>
            <Input
              backgroundColor={"#F5F5F5"}
              type="text"
              placeholder="Full Name*"
            />
            <Input
              backgroundColor={"#F5F5F5"}
              type="text"
              placeholder="Organization"
            />
            <Input backgroundColor={"#F5F5F5"} type="text" placeholder="Role" />
            <Input
              backgroundColor={"#F5F5F5"}
              type="text"
              placeholder="Email Address*"
            />
            <Textarea
              height={"150px"}
              backgroundColor={"#F5F5F5"}
              placeholder="Message"
            />
            <Text
              fontFamily={"Bossa-Regular"}
              fontSize={["12px"]}
              color={"#747272"}
              fontWeight={[400]}
              fontStyle={"normal"}
              lineHeight={"normal"}
            >
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </Text>
            <Button
              fontFamily={"Bossa-ExtendedMedium"}
              fontSize={["16px"]}
              fontWeight={[500]}
              lineHeight={["22px"]}
              textTransform={"capitalize"}
              w={["219px"]}
              h={["55px"]}
              flexShrink={0}
              borderRadius={["80px"]}
              backgroundColor={"#00D2AA"}
              _hover={{ backgroundColor: "#00D2AA" }}
              color={"white"}
            >
              Submit
            </Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default EnquiryForm;
