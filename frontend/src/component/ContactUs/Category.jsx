import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import emailIcon from "../../assets/contact_us/email_icon.svg";
import mapIcon from "../../assets/contact_us/map_icon.svg";
import SubCategory from "./SubCategory";

const Category = () => {
  const [name, setName] = useState("Omics");
  const [email, setEmail] = useState("partnerwithiros@omics.com");
  const [dropemail, setDropemail] = useState("contact@g42.ai");
  const [desc, setDesc] = useState(
    "Write to us and provide more details about your needs and how IROS can help. Supporting line maximum 1-2 lines."
  );

  const onOmics = () => {
    setName("Omics");
    setEmail("partnerwithiros@omics.com");
    setDesc(
      "Write to us and provide more details about your needs and how IROS can help. Supporting line maximum 1-2 lines."
    );
  };

  const onDigitalHealth = () => {
    setName("Digital Health");
    setEmail("partnerwith@digitalhealth.com");
    setDesc(
      "Write to us and provide more details about your needs and how IROS can help. Supporting line maximum 1-2 lines."
    );
  };

  const onAdvancedDiagnostic = () => {
    setName("Advanced Diagnostic");
    setEmail("partnerwith@advanceddiagnostic.com");
    setDesc(
      "Write to us and provide more details about your needs and how IROS can help. Supporting line maximum 1-2 lines."
    );
  };

  const onPharmaTherapeutics = () => {
    setName("Pharma & Therapeutics");
    setEmail("partnerwith@Pharma&Therapeutics.com");
    setDesc(
      "Write to us and provide more details about your needs and how IROS can help. Supporting line maximum 1-2 lines."
    );
  };

  const onIros = () => {
    setName("IROS");
    setEmail("partnerwithiros@iros.com");
    setDesc(
      "Write to us and provide more details about your needs and how IROS can help. Supporting line maximum 1-2 lines."
    );
  };

  const onEnvironmentalSciences = () => {
    setName("Environmental Sciences");
    setEmail("partnerwith@environmentalsciences.com");
    setDesc(
      "Write to us and provide more details about your needs and how IROS can help. Supporting line maximum 1-2 lines."
    );
  };

  const [categoryArr, setCategoryArr] = useState([
    "Omics",
    "Digital Health",
    "Advanced Diagnostic",
    "Pharma & Therapeutics",
    "IROS",
    "Environmental Sciences",
  ]);

  return (
    <>
      <Flex
        flexDir={["column", "column", "column", "row", "row", "row"]}
        w={"100vw"}
        maxW={"100%"}
        border={"1px solid #D9D9D9"}
      >
        {/* Mobile View  */}

        <Box display={["block", "block", "block", "none", "none", "none"]}>
          <Box
            padding={[
              "79px 20px 24px 20px",
              "79px 20px 24px 20px",
              "79px 20px 24px 20px",
              "",
              "",
              "",
            ]}
          >
            <Text
              fontFamily={"Bossa-ExtendedBold"}
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
            mt={["34px"]}
            overflow={"scroll"}
            alignItems={"center"}
            backgroundColor={"#f5f5f5"}
            paddingLeft={["37px", "37px", "37px", "44px", "55x", "66px"]}
            gap={["18px", "18px", "18px", "24px", "30px", "36px"]}
            height={["39px", "39px", "39px", "54px", "69px", "82px"]}
            w={"100vw"}
            maxW={"100%"}
            sx={{
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {categoryArr?.map((el, ind) => (
              <Text
                fontFamily={"Bossa-Regular"}
                flexShrink={0}
                cursor={"pointer"}
                fontSize={["12px", "12px", "12px", "16px", "18px", "20px"]}
                color={"black"}
                fontStyle={"normal"}
                lineHeight={"-0.42px"}
                key={ind}
              >
                {el}
              </Text>
            ))}
          </Flex>
        </Box>

        {/* Desktop View  */}
        <Box
          display={["none", "none", "none", "block", "block", "block"]}
          w={["100%", "100%", "100%", "35.09%", "35.09%", "35.09%"]}
          padding={[
            "89px 0px 191px 100px",
            "89px 0px 191px 100px",
            "89px 0px 191px 100px",
            "89px 0px 191px 100px",
            "89px 0px 191px 100px",
            "89px 0px 191px 100px",
          ]}
        >
          {/* Title  */}
          <Box>
            <Text
              fontFamily={"Bossa-ExtendedBold"}
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
            
            mt={["54px"]}
            marginLeft={"35px"}
            alignItems={"center"}
            flexDir={"column"}
          >

            
            <Text
              fontFamily={"Bossa-Regular"}
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
              fontFamily={"Bossa-Regular"}
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
              fontFamily={"Bossa-Regular"}
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
              fontFamily={"Bossa-Regular"}
              h={["54px"]}
              w={["100%"]}
              cursor={"pointer"}
              _hover={{ backgroundColor: "#F6F6F6", color: "#00D2AA" }}
              fontSize={["20px"]}
              fontStyle={"normal"}
              fontWeight={[400]}
              lineHeight={"normal"}
              backgroundColor={
                name == "Pharma & Therapeutics" ? "#F6F6F6" : null
              }
              color={name == "Pharma & Therapeutics" ? "#00D2AA" : null}
              onClick={onPharmaTherapeutics}
            >
              Pharma & Therapeutics
            </Text>
            <Text
              fontFamily={"Bossa-Regular"}
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
              fontFamily={"Bossa-Regular"}
              h={["54px"]}
              w={["100%"]}
              cursor={"pointer"}
              _hover={{ backgroundColor: "#F6F6F6", color: "#00D2AA" }}
              fontSize={["20px"]}
              fontStyle={"normal"}
              fontWeight={[400]}
              lineHeight={"normal"}
              backgroundColor={
                name == "Environmental Sciences" ? "#F6F6F6" : null
              }
              color={name == "Environmental Sciences" ? "#00D2AA" : null}
              onClick={onEnvironmentalSciences}
            >
              Environmental Sciences
            </Text>
          </Flex>
        </Box>

        <Box w={["100%", "100%", "100%", "64.91%", "64.91%", "64.91%"]}>
          <SubCategory
            name={name}
            email={email}
            dropemail={dropemail}
            desc={desc}
          />
        </Box>
      </Flex>
    </>
  );
};

export default Category;
