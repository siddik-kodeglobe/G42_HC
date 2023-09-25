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
      <Box
        padding={[
          "80px 20px 0px 20px",
          "80px 20px 0px 20px",
          "125px 60px 0px 60px",
        ]}
      >
        <Text
        fontFamily={"Bossa-ExtendedBold"}
          fontStyle={"normal"}
          fontWeight={700}
          fontSize={["24px", "24px", "48px"]}
        >
          Impact we deliver
        </Text>
        <Text
        fontFamily={"Bossa-Light"}
          fontStyle={"normal"}
          fontWeight={300}
          fontSize={["12px", "12px", "18px"]}
          color={"#747272"}
        >
          Harness data, develop artificial super intelligence and deliver
          innovative health solutions that leverage advanced technology and
          precision medicine to shape the future of healthcare
        </Text>

        <SimpleGrid mt={"34px"} columns={[2, 2, 3]} spacing={["25px", "25px","50px"]}>
          {data?.map((el) => (
            <Box w={["171px", "171px", "373px"]}>
              <Flex
                w={["171px", "171px", "373px"]}
                h={["91px", "91px", "198px"]}
                backgroundColor={"#cff0ff"}
                border={"1px solid #B6B6B6"}
              >
                <Image
                  w={"25%"}
                  margin={"auto"}
                  src={`${process.env.REACT_APP_BACKEND_URL}${el.attributes.image.data.attributes.url}`}
                />
              </Flex>
              <Text
              fontFamily={"Bossa-Regular"}
                color={"#000000"}
                fontSize={["12px", "12px", "20px"]}
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
