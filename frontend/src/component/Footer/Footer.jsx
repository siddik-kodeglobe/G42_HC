import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import G42Logo from "../../assets/Footer/G42_logo.svg";
import certifiedImg from "../../assets/Footer/Certified_Img.svg";
import instaIcon from "../../assets/Footer/insta.svg";
import linkedinIcon from "../../assets/Footer/linkedin.svg";
import twitterIcon from "../../assets/Footer/twitter.svg";
import ytIcon from "../../assets/Footer/yt.svg";

const Footer = () => {
  return (
    <>
      <Flex
        fontFamily={"Bossa"}
        fontSize={14}
        fontWeight={700}
        color={"black"}
        alignItems={"start"}
        justifyContent={"space-between"}
        flexDirection={["column", "column", "row"]}
      >
        <Flex
          flexDirection={["column", "column", "row"]}
          w={"100vw"}
          maxW={"100%"}
          gap={["0px", "0px", "136px"]}
        >
          <a href="/">
          <Image
            h={["29px", "29px", "79px"]}
            w={["80px", "80px", "212px"]}
            src={G42Logo}
          />
          </a>
          <Flex
            marginTop={["20px", "20px", "0px"]}
            justifyContent={["space-between", "space-between", ""]}
            alignItems={"top"}
            gap={7}
          >
            <Flex flexDir={"column"}>
              <Link href={"/about"}>About G42 Healthcare</Link>
              <Link href="/news">News</Link>
              <Link href="/whatwedo">What We Do</Link>
              <Link href="casestudy">Case Studies</Link>
            </Flex>

            <Flex flexDir={"column"}>
              <Link href="/career">Careers</Link>
              <Link href="/contactus">Contact Us</Link>
              <Text>Cookies Policy</Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          marginTop={["42px", "42px", "0px"]}
          h={["150px", "150px", "150px"]}
          w={["","","","395px"]}
          alignItems={"end"}
          >
          <Box w={"fit-content"}>   
            <Text>SOCIAL MEDIA:</Text>
            <Flex mt={2} gap={"15px"}>
              <Image w={18} src={instaIcon} />
              <Image w={18} src={linkedinIcon} />
              <Image w={18} src={twitterIcon} />
              <Image w={18} src={ytIcon} />
            </Flex>
          </Box>
          <Box w={["106px", "106px", "106px"]} h={["150px", "150px", "150px"]}>
            <Image w={"100%"} h={"100%"} src={certifiedImg} />
          </Box>
        </Flex>
      </Flex>

      <hr style={{ width: "98vw", maxWidth:"100%", marginTop: "10%", border: "1px solid lightgray" }} />

      <Flex
        fontFamily={"Bossa"}
        fontSize={14}
        fontWeight={300}
        color={"black"}
        margin={"25px 0px"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={["column-reverse", "column-reverse", "row"]}
        f
      >
        <Text>{new Date().getFullYear()} G42. All right reserved</Text>
        <Text>Terms&Conditions | Privacy Policy</Text>
      </Flex>
    </>
  );
};

export default Footer;
