import React, { useEffect, useState } from "react";
import omicsImg from "../../assets/temp/services/omicsImg.svg";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ImageSubHeading = () => {
  const { name } = useParams();
  const [desc, setDesc] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [image, setImage] = useState("");

  const getData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/services?filters[heading][$eq]=${name}&populate=*`
    );
    // console.log(res.data.data[0].attributes);
    let subHeading = res.data.data[0].attributes.subHeading;
    let desc = res.data.data[0].attributes.desc;
    let imageData = res.data.data[0].attributes.image.data.attributes.url;

    // console.log(heading, imageData);
    setDesc(desc);
    setSubHeading(subHeading);
    setImage(imageData)
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Box
        w={"100vw"}
        maxW={"100%"}
        padding={[
          "33.7px 20px 0px 20px",
          "33.7px 20px 0px 20px",
          "33.7px 20px 0px 20px",
          "52px 11.71% 0px 11.71%",
          "52px 11.71% 0px 11.71%",
          "52px 11.71% 0px 11.71%",
        ]}
      >
        <Image w={"100%"} src={`${process.env.REACT_APP_BACKEND_URL}${image}`} alt="Img" />
        <Flex
          mt={["21px", "21px", "21px", "50px", "65px", "78px"]}
          flexDirection={["column", "column", "row"]}
          justifyContent={"space-between"}
        >
          <Box w={["100%", "100%", "100%", "50%", "50%", "50%"]}>
            <Text
              fontFamily={"Bossa-ExtendedBold"}
              fontStyle={"normal"}
              fontWeight={"700"}
              fontSize={["24px", "24px", "24px", "39px", "50px", "60px"]}
            >
              {subHeading}
            </Text>
          </Box>
          <Box w={["100%", "100%", "100%", "50%", "50%", "50%"]}>
            <Text
              fontFamily={"Bossa-Light"}
              color={"#747272"}
              fontStyle={"normal"}
              fontWeight={300}
              lineHeight={"22px"}
              fontSize={["12px", "12px", "12px", "12px", "13.5px", "16px"]}
            >
              {desc}
            </Text>
            <Button
              fontFamily={"Bossa-ExtendedMedium"}
              mt={"15px"}
              _hover={{ backgroundColor: "00D2AA" }}
              backgroundColor={"#00D2AA"}
              color={"white"}
              fontSize={"16px"}
              fontWeight={500}
              borderRadius={"80px"}
              padding={"15px 46px"}
            >
              Know More
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default ImageSubHeading;
