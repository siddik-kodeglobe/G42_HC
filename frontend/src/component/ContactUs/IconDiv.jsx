import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import emailIcon from "../../assets/contact_us/email_icon.svg";
import infoIcon from "../../assets/contact_us/info_icon.svg";
import mapIcon from "../../assets/contact_us/map_icon.svg";

import instagram from '../../assets/Footer/insta.svg';
import linkedin from '../../assets/Footer/linkedin.svg';
import twitter from '../../assets/Footer/twitter.svg';
import youtube from '../../assets/Footer/yt.svg';

const IconDiv = () => {
  return (
    <>
      <Flex gap={["162px"]} margin={["68px 178px 100px 108px"]}>
        <Box>
          <Image mb={["14px"]} src={emailIcon} />
          <Text mb={["6px"]}>Email</Text>
          <Text fontSize={["16px"]} fontWeight={[400]} lineHeight={["normal"]} color={["#747272"]}>Drop us a line for general enquiry:</Text>
          <Text fontSize={["16px"]} fontWeight={[400]} lineHeight={["normal"]} color={"var(--Emergent-Green, #00D2AA)"}>contact@g42.ai</Text>
        </Box>

        <Box>
          <Image mb={["14px"]} src={mapIcon} />
          <Text mb={["6px"]}>Main Office</Text>
          <Text fontSize={["16px"]} fontWeight={[400]} lineHeight={["normal"]} color={["#747272"]} w={["335px"]}>G42, Capital Gate, 12 Floor Al Khaleej Al Arabi Street Abu Dhabi, United Arab Emirates.</Text>
          <Text fontSize={["16px"]} fontWeight={[400]} lineHeight={["normal"]} color={"var(--Emergent-Green, #00D2AA)"}>Get Directions</Text>
        </Box>

        <Box>
          <Image mb={["14px"]} src={infoIcon} />
          <Text mb={["6px"]}>Follow</Text>
          <Text fontSize={["16px"]} fontWeight={[400]} lineHeight={["normal"]} color={["#747272"]}>Follow us on social media</Text>
          <Flex mt={["8px"]} gap={"15px"}>
            <Image cursor={"pointer"} src={instagram} alt="Instagram"/>
            <Image cursor={"pointer"} src={linkedin} alt="linkeidn"/>
            <Image cursor={"pointer"} src={twitter} alt="twitter"/>
            <Image cursor={"pointer"} src={youtube} alt="youtube"/>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default IconDiv;
