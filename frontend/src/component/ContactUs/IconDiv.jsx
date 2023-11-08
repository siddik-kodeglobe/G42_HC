import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import emailIcon from "../../assets/contact_us/email_icon.svg";
import infoIcon from "../../assets/contact_us/info_icon.svg";
import mapIcon from "../../assets/contact_us/map_icon.svg";

import instagram from "../../assets/Footer/insta.svg";
import linkedin from "../../assets/Footer/linkedin.svg";
import twitter from "../../assets/Footer/twitter.svg";
import youtube from "../../assets/Footer/yt.svg";

const IconDiv = () => {
  return (
    <>
      <Flex
      // border={"1px solid red"}
        flexWrap={"wrap"}
        w={"100%"}
        padding={[
          "40px 20px 40px 20px",
          "40px 4.01% 40px 4.01%",
          "40px 4.01% 40px 4.01%",
          "45px 11.71% 65px 11.71%",
          "59px 11.71% 85px 11.71%",
          "70px 11.71% 99px 11.71%",
        ]}
        gap={["16px", "16px", "16px", "105px", "136px", "136px"]}
      >
        {/* Email Container */}
        <Box

        w={"25%"}
        // border={"1px"} 
        // w={["168px", "168px", "168px", "218px", "282px", "338px"]}
        >
          <Image
            h={["80px", "80px", "80px", "80px", "80px", "93px"]}
            w={["93px", "93px", "93px", "115px", "115px", "115px"]}
            src={emailIcon}
          />
          <Text
            fontFamily={"Bossa-Regular"}
            fontSize={["16px", "18px", "20px", "20px", "24px", "24px"]}
            mt={["14px"]}
          >
            Email
          </Text>
          <Text
            fontFamily={"Bossa-Regular"}
            fontSize={["12px", "12px", "12px", "14px", "15px", "16px"]}
            fontWeight={[400]}
            lineHeight={["normal"]}
            color={["#747272"]}
            mt={["3px", "6px"]}
          >
            Drop us a line for general enquiry:
          </Text>
          <Link
          _hover={{textDecor: "none", color: "#004141"}}
          href={`mailto:contact@g42.ai`}
            fontFamily={"Bossa-Regular"}
            fontSize={["12px", "12px", "12px", "14px", "15px", "16px"]}
            fontWeight={[400]}
            lineHeight={["normal"]}
            color={"var(--Emergent-Green, #00D2AA)"}
          >
            contact@g42.ai
          </Link>
        </Box>

        {/* Main Container */}
        <Box 
        w={"25%"}
        // border={"1px"}
        // w={["168px", "168px", "168px", "218px", "282px", "338px"]}
        >
          <Image
            h={["80px", "80px", "80px", "80px", "80px", "93px"]}
            w={["93px", "93px", "93px", "115px", "115px", "115px"]}
            src={mapIcon}
          />
          <Text fontFamily={"Bossa-Regular"} 
                      fontSize={["16px", "18px", "20px", "20px", "24px", "24px"]}

           mt={["14px"]}>
            Main Office
          </Text>
          <Text
            fontFamily={"Bossa-Regular"}
            fontSize={["12px", "12px", "12px", "14px", "15px", "16px"]}
            fontWeight={[400]}
            lineHeight={["normal"]}
            color={["#747272"]}
            mt={["3px", "6px"]}
          >
            G42, Capital Gate, 12 Floor Al Khaleej Al Arabi Street Abu Dhabi,
            United Arab Emirates.
          </Text>
          <Text
            fontFamily={"Bossa-Regular"}
            fontSize={["12px", "12px", "12px", "14px", "15px", "16px"]}
            fontWeight={[400]}
            lineHeight={["normal"]}
            color={"var(--Emergent-Green, #00D2AA)"}
          >
            Get Directions
          </Text>
        </Box>

        {/* Follow Container */}
        <Box 
        w={"25%"}
        // border={"1px"}
        // w={["168px", "168px", "168px", "218px", "282px", "338px"]}
        >
          <Image
            h={["80px", "80px", "80px", "80px", "80px", "93px"]}
            w={["93px", "93px", "93px", "115px", "115px", "115px"]}
            src={infoIcon}
          />
          <Text
            fontFamily={"Bossa-Regular"}
            fontSize={["16px", "18px", "20px", "20px", "24px", "24px"]}
            mt={["14px"]}
          >
            Follow
          </Text>
          <Text
            fontFamily={"Bossa-Regular"}
            fontSize={["12px", "12px", "12px", "14px", "15px", "16px"]}
            fontWeight={[400]}
            lineHeight={["normal"]}
            color={["#747272"]}
            mt={["3px", "6px"]}
          >
            Follow us on social media
          </Text>
          <Flex mt={["8px"]} gap={"15px"}>
            <Image cursor={"pointer"} src={instagram} alt="Instagram" />
            <Image cursor={"pointer"} src={linkedin} alt="linkeidn" />
            <Image cursor={"pointer"} src={twitter} alt="twitter" />
            <Image cursor={"pointer"} src={youtube} alt="youtube" />
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default IconDiv;
