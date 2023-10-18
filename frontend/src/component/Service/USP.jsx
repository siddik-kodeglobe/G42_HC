import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import uspImg from "../../assets/temp/services/uspImg.svg";
import axios from "axios";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";

const USP = () => {
  const [data, setData] = useState([]);

  const {name} = useParams();
  const getData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/usp-services?filters[tag][$eq]=${name}&populate=*`
    );
    console.log(res.data.data);
    setData(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box
      display={data.length > 0 ? "block": "none"}
        w={"100vw"}
        maxW={"100%"}
        mt={["80px", "80px", "80px", "81px", "105px", "126px"]}
      >
        <Text
          fontFamily={"Bossa-ExtendedBold"}
          textAlign={"center"}
          fontSize={["32px", "32px", "60px"]}
          fontWeight={700}
          lineHeight={"normal"}
          fontStyle={"normal"}
        >
          USPs
        </Text>
        <Flex
          padding={[
            "44px 20px 0px 20px",
            "44px 20px 0px 20px",
            "44px 20px 0px 20px",
            "44px 3.94% 0px 3.94%",
            "51px 3.94% 0px 3.94%",
            "61px 3.94% 0px 3.94%",
          ]}
          flexDirection={["column", "column", "row"]}
          // mt={["44pxpx", "44pxpx", "61px"]}
          alignItems={"start"}
          gap={["48px", "48px", "48px", "52px", "67px", "80px"]}
        >
          {/* <Box border={"1px"} w={"50%"}> */}
          <Image
            objectFit={"cover"}
            w={["100%", "100%", "100%", "50%", "50%", "50%"]}
            h={["394px", "394px", "394px", "462px", "596px", "715px"]}
            src={uspImg}
          />
          {/* </Box> */}
          <Box w={["100%", "100%", "100%", "50%", "50%", "50%"]}>
            {data?.map((el) => (
              <Box>
                <Accordion _hover={{ backgroundColor: "white" }} allowToggle>
                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <Box as="span" flex="1" textAlign="left">
                              <Text
                                fontSize={[
                                  "16px",
                                  "16px",
                                  "16px",
                                  "20px",
                                  "22px",
                                  "24px",
                                ]}
                                fontFamily={"Bossa-Medium"}
                                fontWeight={isExpanded ? 700 : 400}
                                w={"80%"}
                              >
                                {el.attributes.shortHeading}
                              </Text>
                            </Box>
                            {isExpanded ? (
                              <MinusIcon fontSize="12px" />
                            ) : (
                              <AddIcon fontSize="12px" />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel
                          fontSize={[
                            "12px",
                            "12px",
                            "12px",
                            "14px",
                            "16px",
                            "18px",
                          ]}
                          fontFamily={"Bossa-Light"}
                          pb={4}
                        >
                          {el.attributes.subStatement}
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                </Accordion>
              </Box>
            ))}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default USP;
