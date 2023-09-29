import { Box, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";


const Categories_Search = () => {

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
        gap={["8px","8px","16px","16px"]}
        margin={[
          "14px 0px 39px 20px",
          "14px 0px 39px 20px",
          "0px 178px 56px 60px",
          "0px 178px 56px 60px",
        ]}
        sx={
          { 
         '::-webkit-scrollbar':{
                display:'none'
            }
         }
       }
      >
        {/* All  */}
        <Flex
          h={["41px"]}
          w={["fit-content"]}
          fontFamily={"Bossa-ExtendedRegular"}
          border={"1px solid black"}
          borderRadius={"33px"}
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{backgroundColor: "#00D2AA", color:"white", border: "1px solid #00D2AA"}}
          padding={["20px"]}
          flexShrink={0}
            cursor={"pointer"}
            fontSize={["12px", "12px","16px","16px"]}
            fontWeight={[300, 300, 400, 400]}
            color={"black"}
            fontStyle={"normal"}
            lineHeight={"-0.42px"}
          >
            All
          </Flex>

        {/* Mapping categories  */}

        {categoryArr?.map((el, ind) => (
          <Flex
          h={["41px"]}
          w={["fit-content"]}
          fontFamily={"Bossa-ExtendedRegular"}
          border={"1px solid black"}
          borderRadius={"33px"}
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{backgroundColor: "#00D2AA", color:"white", border: "1px solid #00D2AA"}}
          padding={["20px"]}
          flexShrink={0}
            cursor={"pointer"}
            fontSize={["12px", "12px","16px","16px"]}
            fontWeight={[300, 300, 400, 400]}
            color={"black"}
            fontStyle={"normal"}
            lineHeight={"-0.42px"}
            key={ind}
          >
            {el}
          </Flex>
        ))}
      </Flex>
        
    </>
  )
}

export default Categories_Search