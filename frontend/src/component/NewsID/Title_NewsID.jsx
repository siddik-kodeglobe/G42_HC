import { Box, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Title_NewsID = () => {
    const {newsId} = useParams();
    console.log(newsId);
    const [data, setData] = useState([]);
    
    const getData = async () => {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/news-plural/${newsId}?populate=*`
        );
        // console.log(res.data.data);
        setData(res.data.data.attributes);
      };

    useEffect(() => {
        getData();
    }, []);
  return (
    <>
        <Box w={"70%"} margin={["67px 0px 0px 61px"]}>
            <Text fontSize={["60px"]} fontStyle={"normal"} fontWeight={[700]} color={"black"} textTransform={"capitalize"}>{data.title}</Text>
            
        </Box>
        
    </>
  )
}

export default Title_NewsID