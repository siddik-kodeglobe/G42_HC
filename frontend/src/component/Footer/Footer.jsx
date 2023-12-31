import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import G42Logo from "../../assets/Footer/G42_logo.svg";
import certifiedImg from "../../assets/Footer/Certified_Img.svg";
import instaIcon from "../../assets/Footer/insta.svg";
import linkedinIcon from "../../assets/Footer/linkedin.svg";
import twitterIcon from "../../assets/Footer/twitter.svg";
import ytIcon from "../../assets/Footer/yt.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <>
      <Flex
    
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
            <Flex gap={"7px"} flexDir={"column"}>
              <Link _hover={{textDecor: "none", color: "var(--Emergent-Green, #00D2AA)"}} fontSize={["14px"]} fontFamily={"Bossa-ExtendedBold"} href={"/about"}>About G42 Healthcare</Link>
              <Link _hover={{textDecor: "none", color: "var(--Emergent-Green, #00D2AA)"}} fontSize={["14px"]} fontFamily={"Bossa-ExtendedBold"} href="/news">News</Link>
              <Link _hover={{textDecor: "none", color: "var(--Emergent-Green, #00D2AA)"}} fontSize={["14px"]} fontFamily={"Bossa-ExtendedBold"} href="/whatwedo">What We Do</Link>
              <Link _hover={{textDecor: "none", color: "var(--Emergent-Green, #00D2AA)"}} fontSize={["14px"]} fontFamily={"Bossa-ExtendedBold"} href="casestudy">Case Studies</Link>
            </Flex>

            <Flex gap={"7px"} flexDir={"column"}>
              <Link _hover={{textDecor: "none", color: "var(--Emergent-Green, #00D2AA)"}} fontSize={["14px"]} fontFamily={"Bossa-ExtendedBold"} href="/career">Careers</Link>
              <Link _hover={{textDecor: "none", color: "var(--Emergent-Green, #00D2AA)"}} fontSize={["14px"]} fontFamily={"Bossa-ExtendedBold"} href="/contactus">Contact Us</Link>
              <Link _hover={{textDecor: "none", color: "var(--Emergent-Green, #00D2AA)"}} fontSize={["14px"]} fontFamily={"Bossa-ExtendedBold"} href="">Cookies Policy</Link>
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
            <Text fontFamily={"Bossa-Bold"} fontSize={["14px"]}>SOCIAL MEDIA:</Text>
            <Flex mt={2} gap={"15px"}>
            
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
        <Text>Terms & Conditions | Privacy Policy</Text>
      </Flex>
    </>
  );
};

export default Footer;
