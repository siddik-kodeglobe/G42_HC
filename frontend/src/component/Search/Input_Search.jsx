import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
    Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Input_Search = ({inputText, handleInputChange}) => {
  return (
    <>
        <Box  padding={[
          "14px 20px 39px 20px",
          "14px 20px 39px 20px",
          "0px 178px 56px 60px",
          "0px 178px 56px 60px",
        ]}>
      <InputGroup>
        <Input focusBorderColor={"black"} value={inputText} onChange={(e) => handleInputChange(e.target.value)} fontFamily={"Bossa-Regular"} color={"#B6B6B6"} fontSize={["16px"]} fontStyle={"normal"} lineHeight={["22px"]} placeholder="What are you looking for?" variant='flushed'/>
        <InputRightElement cursor={"pointer"}>
            {inputText.length > 0 ? 
            <CloseIcon onClick={() => handleInputChange("")}  w={["19px"]} h={["19px"]} />
            :
            
          <SearchIcon  w={["19px"]} h={["19px"]}/>
            }
        </InputRightElement>
      </InputGroup>
      </Box>
    </>
  );
};

export default Input_Search;
