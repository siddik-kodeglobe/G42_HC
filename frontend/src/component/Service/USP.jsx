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

const USP = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/usp-services?populate=*`
    );
    console.log(res.data.data);
    setData(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box margin={"0px 60px"} mt={"125px"}>
        <Text
          textAlign={"center"}
          fontFamily={"Bossa"}
          fontSize={["32px", "32px", "60px"]}
          fontWeight={700}
          lineHeight={"normal"}
          fontStyle={"normal"}
        >
          USPs
        </Text>
        <Flex
          flexDirection={["column", "column", "row"]}
          mt={["44pxpx", "44pxpx", "61px"]}
          alignItems={"start"}
        >
          {/* <Box border={"1px"} w={"50%"}> */}
          <Image w={["350px", "350px", "628px"]} h={["394px", "394px", "708px"]} src={uspImg} />
          {/* </Box> */}
          <Box margin={["0px", "0px", "0px 80px"]} w={["100%", "100%", "50%"]}>
            {data?.map((el) => (
              <Box>
                <Accordion _hover={{ backgroundColor: "white" }} allowToggle>
                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <Box as="span" flex="1" textAlign="left">
                              <Text w={"80%"}>
                                {el.attributes.shortHeading}
                              </Text>
                            </Box>
                            {isExpanded ? (
                              <MinusIcon w={"50%"} fontSize="12px" />
                            ) : (
                              <AddIcon fontSize="12px" />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          {el.attributes.subStatement}
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                </Accordion>

                <hr style={{ margin: "44px 0px" }} />
              </Box>
            ))}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default USP;
