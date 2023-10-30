import { Box, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Categories = () => {
  // Data Array useState
  const [data, setData] = useState([]);

  //Get Data
  const getData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/news-plural?populate=*`
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
      mt={["34px"]}
      overflow={"scroll"}
        alignItems={"center"}
        backgroundColor={"#f5f5f5"}
        paddingLeft={["20px","20px","20px", "44px","55x","66px"]}
        gap={["18px","18px","18px","24px","30px", "36px"]}
        height={["39px", "39px","39px","54px", "69px","82px"]}
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
        <Text
          fontFamily={"Bossa-Regular"}
          flexShrink={0}
            cursor={"pointer"}
            fontSize={["12px","12px", "12px","16px", "18px","20px"]}
            color={"black"}
            fontStyle={"normal"}
            lineHeight={"-0.42px"}
            
          >
            All
          </Text>
        {categoryArr?.map((el, ind) => (
          <Text
          fontFamily={"Bossa-Regular"}
          flexShrink={0}
            cursor={"pointer"}
            fontSize={["12px","12px", "12px","16px", "18px","20px"]}
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
