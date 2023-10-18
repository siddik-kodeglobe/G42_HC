import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

// Import Swipper
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from "../AboutUs/OurPartner_Slider.module.css";

import axios from "axios";
import { useParams } from "react-router-dom";

const Companies = () => {
  const [data, setData] = useState([]);
  const swiperRef = React.useRef(null);

  const {name} = useParams();
  const getData = async () => {
    // console.log(`${process.env.REACT_APP_BACKEND_URL}/api/services-companies?populate=*`);
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/services-companies?filters[tag][$eq]=${name}&populate=*`
    );
    // console.log(res.data.data);
    setData(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box
      display={data.length > 0 ? "block" : "none"}
        backgroundColor={"#174042"}
        w={"100vw"}
        maxW={"100%"}
        borderTop={"1px solid #00D2AA"}
      >
        <Box padding={"5.26% 2.64% 0% 4.27%"}>
          <Text
            fontFamily={"Bossa-ExtendedBold"}
            color={"white"}
            fontSize={["24px", "24px", "24px", "31px", "40px", "48px"]}
            fontWeight={400}
            lineHeight={"normal"}
          >
            Companies
          </Text>
        </Box>

        <Box paddingTop={["20px", "29px"]} paddingBottom={["80px", "92px"]}>
          <Swiper
            speed={750}
            slidesPerView={"auto"}
            breakpoints={{
              1536: {
                slidesOffsetBefore: 65,
                spaceBetween: 121.34,
              },
              1280: {
                slidesOffsetBefore: 50.55,
                spaceBetween: 80.89,
              },
              992: {
                slidesOffsetBefore: 39.18,
                spaceBetween: 62.69,
              },
              768: {
                slidesOffsetBefore: 30.33,
                spaceBetween: 48.43,
              },
              390: {
                slidesOffsetBefore: 18.95,
                spaceBetween: 30.33,
              },
            }}
            observeParents
            observer
            ref={swiperRef}
            // navigation={true}
            modules={[Navigation]}
            className={style.swiper}
          >
            {data?.map((el, ind) => (
              <SwiperSlide className={style.swiper_slide}>
                <Box
                  position={"relative"}
                  backgroundColor={"#396767"}
                  // border={"1px solid cyan"}
                  w={["292px", "292px", "292px", "289px", "373px", "443px"]}
                  h={["378px", "378px","378px","366px", "472px", "561px"]}
                ></Box>

                <Text
                  fontFamily={"Bossa-Bold"}
                  position={"absolute"}
                  bottom={"64px"}
                  left={"25%"}
                  right={"25%"}
                  textAlign={"center"}
                  color={"white"}
                  fontSize={["20px", "20px", "20px", "20px", "25px", "30px"]}
                  fontWeight={700}
                  lineHeight={"normal"}
                >
                  {el.attributes.Name}
                </Text>

                <Text
                  fontFamily={"Bossa-Regular"}
                  position={"absolute"}
                  top={"15px"}
                  left={"25px"}
                  w={"100%"}
                  noOfLines={2}
                  color={"white"}
                  fontSize={["15px", "15px", "30px"]}
                  fontWeight={700}
                  lineHeight={"normal"}
                >
                  {ind + 1}
                </Text>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
};

export default Companies;
