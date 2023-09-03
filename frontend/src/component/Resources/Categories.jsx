import { Box, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Categories = () => {
  // Data Array useState
  const [data, setData] = useState([]);

  //Get Data
  const getData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/resources?populate=*`
    );
    setData(res.data.data);
    // console.log(res.data.data)
    filterCategoryFn(res.data.data);
  };

  // Get Category Function
  let categoryArrTemp = [];
  const [categoryArr, setCategoryArr] = useState([]);
  const filterCategoryFn = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i].attributes.category;
      if (categoryArrTemp.indexOf(val) == -1) {
        categoryArrTemp.push(val);
      }
    }
    // console.log(categoryArrTemp);
    setCategoryArr(categoryArrTemp);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Flex
      mt={["32px"]}
      overflow={"scroll"}
        alignItems={"center"}
        backgroundColor={"#f5f5f5"}
        paddingLeft={"66px"}
        gap={["18px","18px","36px","36px"]}
        height={["39px", "39px","82px","82px"]}
        w={"100vw"}
        maxW={"100%"}
        sx={
          { 
         '::-webkit-scrollbar':{
                display:'none'
            }
         }
       }
      >
        {categoryArr?.map((el, ind) => (
          <Text
          flexShrink={0}
            cursor={"pointer"}
            fontSize={["12px", "12px","20px","20px"]}
            fontWeight={[300, 300, 400, 400]}
            color={"black"}
            fontStyle={"normal"}
            lineHeight={"-0.42px"}
            key={ind}
          >
            {el}
          </Text>
        ))}
      </Flex>
    </>
  );
};

export default Categories;
