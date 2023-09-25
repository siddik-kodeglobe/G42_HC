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

const Companies = () => {
  const [data, setData] = useState([]);
  const swiperRef = React.useRef(null);

  const getData = async () => {
    // console.log(`${process.env.REACT_APP_BACKEND_URL}/api/services-companies?populate=*`);
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/services-companies?populate=*`
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
        backgroundColor={"#174042"}
        padding={[
          "80px 20px 80px 20px",
          "80px 20px 80px 20px",
          "125px 60px 93px 60px",
        ]}
      >
        <Text
        fontFamily={"Bossa-ExtendedBold"}
          color={"white"}
          fontSize={["24px", "24px", "48px"]}
          fontWeight={400}
          lineHeight={"normal"}
        >
          Companies
        </Text>

        <Box>
          <Swiper
          speed={750}
            breakpoints={{
              1024: {
                slidesOffsetBefore: 0,
                slidesPerView: 2.75,
                spaceBetween: 44,
              },
              390: {
                slidesPerView: 1.5,
                slidesOffsetBefore: 15,
                // spaceBetween:22,
              },
            }}
            ref={swiperRef}
            // navigation={true}
            modules={[Navigation]}
            className={style.swiper}
          >
            {data?.map((el) => (
              <SwiperSlide className={style.swipe_slide}>
                <Box
                  position={"relative"}
                  backgroundColor={"#396767"}
                  w={["292px", "292px", "433px"]}
                  h={["378px", "378px", "561px"]}
                ></Box>

                <Text
                fontFamily={"Bossa-Bold"}
                  position={"absolute"}
                  bottom={"64px"}
                  left={"25px"}
                  w={"100%"}
                  textAlign={"center"}
                  noOfLines={2}
                  color={"white"}
                  fontSize={["15px", "15px", "30px"]}
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
                  {el.id}
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
