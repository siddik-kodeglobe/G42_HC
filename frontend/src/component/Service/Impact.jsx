import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Impact = () => {
  const [data, setData] = useState([]);
  const { name } = useParams();
  const getData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/impacts?filters[tag][$eq]=${name}&populate=*`
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
        w={"100vw"}
        maxW={"100%"}
        padding={[
          "80px 20px 0px 20px",
          "80px 20px 0px 20px",
          "80px 20px 0px 20px",
          "125px 11.71% 0px 11.71%",
          "125px 11.71% 0px 11.71%",
          "125px 11.71% 0px 11.71%",
        ]}
      >
        <Text
          fontFamily={"Bossa-ExtendedBold"}
          fontStyle={"normal"}
          fontWeight={700}
          fontSize={["24px", "24px", "24px", "31px", "40px", "48px"]}
        >
          Impact we deliver
        </Text>
        <Text
          fontFamily={"Bossa-Light"}
          fontStyle={"normal"}
          fontWeight={300}
          fontSize={["12px", "12px", "12px", "12px", "15px", "18px"]}
          color={"#747272"}
        >
          Harness data, develop artificial super intelligence and deliver
          innovative health solutions that leverage advanced technology and
          precision medicine to shape the future of healthcare
        </Text>

        <SimpleGrid
          mt={"34px"}
          columns={[2, 3, 3, 3, 3, 3]}
          spacing={["25px", "25px", "50px"]}
        >
          {data?.map((el) => (
            <Box w={"100%"}>
              <Flex
                // w={["171px", "171px", "373px"]}
                w={"100%"}
                h={["91px", "91px", "100px", "129px", "166px", "198px"]}
                backgroundColor={"#cff0ff"}
                border={"1px solid #B6B6B6"}
              >
                <Image
                  w={["51px", "51px", "60px", "78px", "101px", "121px"]}
                  h={["51px", "51px", "60px", "78px", "101px", "121px"]}
                  margin={"auto"}
                  src={`${process.env.REACT_APP_BACKEND_URL}${el.attributes.image.data.attributes.url}`}
                />
              </Flex>
              <Text
                fontFamily={"Bossa-Regular"}
                color={"#000000"}
                fontSize={["12px", "12px", "12px", "14px", "16px", "20px"]}
                // fontWeight={400}
                fontStyle={"normal"}
                lineHeight={"normal"}
              >
                {el.attributes.title}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Impact;
