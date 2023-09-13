import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import emailIcon from "../../assets/contact_us/email_icon.svg";
import mapIcon from "../../assets/contact_us/map_icon.svg";
import SubCategory from "./SubCategory";

const Category = () => {
    const [name, setName] = useState("Omics");
    const [email, setEmail] = useState("partnerwithiros@omics.com");
    const [dropemail, setDropemail] = useState("contact@g42.ai");
    const [desc, setDesc] = useState("Write to us and provide more details about your needs and how IROS can help. Supporting line maximum 1-2 lines.");


    const onOmics = () => {
        setName("Omics");
        setEmail("partnerwithiros@omics.com")
        setDesc("Write to us and provide more details about your needs and how IROS can help. Supporting line maximum 1-2 lines.");
    }

    const onDigitalHealth = () => {
        setName("Digital Health");
        setEmail("partnerwith@digitalhealth.com")
        setDesc("Write to us and provide more details about your needs and how IROS can help. Supporting line maximum 1-2 lines.");
    }

    const onAdvancedDiagnostic = () => {
        setName("Advanced Diagnostic");
        setEmail("partnerwith@advanceddiagnostic.com")
        setDesc("Write to us and provide more details about your needs and how IROS can help. Supporting line maximum 1-2 lines.");
    }

    const onPharmaTherapeutics = () => {
        setName("Pharma & Therapeutics");
        setEmail("partnerwith@Pharma&Therapeutics.com")
        setDesc("Write to us and provide more details about your needs and how IROS can help. Supporting line maximum 1-2 lines.");
    }

    const onIros = () => {
        setName("IROS");
        setEmail("partnerwithiros@iros.com")
        setDesc("Write to us and provide more details about your needs and how IROS can help. Supporting line maximum 1-2 lines.");
    }

    const onEnvironmentalSciences = () => {
        setName("Environmental Sciences");
        setEmail("partnerwith@environmentalsciences.com")
        setDesc("Write to us and provide more details about your needs and how IROS can help. Supporting line maximum 1-2 lines.");
    }

  return (
    <>
      <Flex border={"1px solid #D9D9D9"} padding={["100px 60px 140px 60px"]}>
        <Box w={"50%"}>
          {/* Title  */}
          <Box>
            <Text
              fontSize={["32px"]}
              fontWeight={700}
              lineHeight={"normal"}
              fontStyle={"normal"}
            >
              Lorem Ipsum
            </Text>
            <Text>We want to hear from you.</Text>
          </Box>

          <Flex
            alignItems={"center"}
            mt={["54px"]}
            marginLeft={"100px"}
            flexDir={"column"}
          >
            <Text
              h={["54px"]}
              w={["100%"]}
              cursor={"pointer"}
              _hover={{ backgroundColor: "#F6F6F6", color: "#00D2AA" }}
              fontSize={["20px"]}
              fontStyle={"normal"}
              fontWeight={[400]}
              lineHeight={"normal"}
              backgroundColor={name == "Omics" ? "#F6F6F6" : null}
              color={name == "Omics" ? "#00D2AA" : null}
                onClick={onOmics}
            >
              Omics
            </Text>
            <Text
              h={["54px"]}
              w={["100%"]}
              cursor={"pointer"}
              _hover={{ backgroundColor: "#F6F6F6", color: "#00D2AA" }}
              fontSize={["20px"]}
              fontStyle={"normal"}
              fontWeight={[400]}
              lineHeight={"normal"}

              backgroundColor={name == "Digital Health" ? "#F6F6F6" : null}
              color={name == "Digital Health" ? "#00D2AA" : null}
                onClick={onDigitalHealth}
            >
              Digital Health
            </Text>
            <Text
              h={["54px"]}
              w={["100%"]}
              cursor={"pointer"}
              _hover={{ backgroundColor: "#F6F6F6", color: "#00D2AA" }}
              fontSize={["20px"]}
              fontStyle={"normal"}
              fontWeight={[400]}
              lineHeight={"normal"}

              backgroundColor={name == "Advanced Diagnostic" ? "#F6F6F6" : null}
              color={name == "Advanced Diagnostic" ? "#00D2AA" : null}
                onClick={onAdvancedDiagnostic}
            >
              Advanced Diagnostic
            </Text>
            <Text
              h={["54px"]}
              w={["100%"]}
              cursor={"pointer"}
              _hover={{ backgroundColor: "#F6F6F6", color: "#00D2AA" }}
              fontSize={["20px"]}
              fontStyle={"normal"}
              fontWeight={[400]}
              lineHeight={"normal"}

              backgroundColor={name == "Pharma & Therapeutics" ? "#F6F6F6" : null}
              color={name == "Pharma & Therapeutics" ? "#00D2AA" : null}
                onClick={onPharmaTherapeutics}
            >
              Pharma & Therapeutics
            </Text>
            <Text
              h={["54px"]}
              w={["100%"]}
              cursor={"pointer"}
              _hover={{ backgroundColor: "#F6F6F6", color: "#00D2AA" }}
              fontSize={["20px"]}
              fontStyle={"normal"}
              fontWeight={[400]}
              lineHeight={"normal"}

              backgroundColor={name == "IROS" ? "#F6F6F6" : null}
              color={name == "IROS" ? "#00D2AA" : null}
                onClick={onIros}
            >
              IROS
            </Text>
            <Text
              h={["54px"]}
              w={["100%"]}
              cursor={"pointer"}
              _hover={{ backgroundColor: "#F6F6F6", color: "#00D2AA" }}
              fontSize={["20px"]}
              fontStyle={"normal"}
              fontWeight={[400]}
              lineHeight={"normal"}

              backgroundColor={name == "Environmental Sciences" ? "#F6F6F6" : null}
              color={name == "Environmental Sciences" ? "#00D2AA" : null}
                onClick={onEnvironmentalSciences}
            >
              Environmental Sciences
            </Text>
          </Flex>
        </Box>

        <SubCategory name={name} email={email} dropemail={dropemail} desc={desc}/>
     
      </Flex>
    </>
  );
};

export default Category;
