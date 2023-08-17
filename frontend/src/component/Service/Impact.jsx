import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Impact = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    // console.log(`${process.env.REACT_APP_BACKEND_URL}/api/teams?populate=*`);
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/impacts?populate=*`
    );
    console.log(res.data.data);
    setData(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Box  padding={"125px 60px 0px 60px"}>
        <Text
          fontFamily={"Bossa"}
          fontStyle={"normal"}
          fontWeight={700}
          fontSize={"48px"}
        >
          Impact we deliver
        </Text>
        <Text
          fontFamily={"Bossa"}
          fontStyle={"normal"}
          fontWeight={300}
          fontSize={"18px"}
          color={"#747272"}
        >
          Harness data, develop artificial super intelligence and deliver
          innovative health solutions that leverage advanced technology and
          precision medicine to shape the future of healthcare
        </Text>

        <SimpleGrid mt={"34px"} columns={3} spacing={"5px"}>
          {data?.map((el) => (
            <Flex
              w={"373px"}
              h={"198px"}
              backgroundColor={"#cff0ff"}
              border={"1px solid #B6B6B6"}
              
            >
              <Image
              margin={"auto"}
                src={`${process.env.REACT_APP_BACKEND_URL}${el.attributes.image.data.attributes.url}`}
              />
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Impact;
