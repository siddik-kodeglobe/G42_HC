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
        <Box w={"100vw"} maxW={"100%"} padding={["14px 20px 0px 20px", "14px 20px 0px 20px", "14px 20px 0px 20px", "44px 3.94% 0px 3.94%", "55px 3.94% 0px 3.94%", "66px 3.94% 0px 3.94%", ]}>
            <Text fontFamily={"Bossa-ExtendedBold"} fontSize={["24px","24px","24px","40px","50px","60px",]} fontStyle={"normal"} fontWeight={[700]} color={"black"} textTransform={"capitalize"}>{data.title}</Text>
            
        </Box>
        
    </>
  )
}

export default Title_NewsID