import React, { useEffect, useState } from 'react'
import { Text, Image, Box, Flex } from "@chakra-ui/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/aboutUs_Slider/img1.svg";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import style from "../AboutUs/OurPartner_Slider.module.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

//icons
import plus from "../../assets/icons/caretDownIcon.svg";
import minus from "../../assets/icons/minus.svg";

const Partners_AU = () => {
    const [data, setData] = useState([]);

  useEffect(async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/partners`
    );
    console.log(res.data.data);
    setData(res.data.data);
  }, []);
  return (
    <>
    <Box w={"100vw"} maxW={"100%"}
    >
      <Text
      margin={"8.68% 0px 3.47% 6.97%"}
      // margin={["65px 20px 0px 20px", "65px 20px 0px 20px","78px 106px 0px 106px","78px 106px 0px 106px"]}
        fontFamily={"Bossa-ExtendedBold"}
        fontWeight={700}
        fontSize={["32px", "32px", "60px", "60px"]}
      >
        Our Partners
      </Text>

      <Swiper
        breakpoints={{
          1900: {
            slidesOffsetBefore: 138.21,
            slidesPerView: 2.75,
            spaceBetween: 25,
          },
          1250: {
            slidesOffsetBefore: 92.14,
            slidesPerView: 2.75,
            spaceBetween: 16,
          },
          900: {
            slidesOffsetBefore: 71.4,
            slidesPerView: 2.25,
            spaceBetween: 13,
          },
          760: {
            slidesOffsetBefore: 55.28,
            slidesPerView: 1.25,
            spaceBetween: 10,
          },
          390: {
            slidesPerView: 1.2,
            slidesOffsetBefore: 34.5,
            spaceBetween:6,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className={style.swiper}
      >
        {data?.map((el) => (
          <SwiperSlide className={style.swipe_slide}>
            <Box
              backgroundColor={"#00D2AA"}
              height={["338px", "338px", "338px","35vw"]}
              position={"relative"}
            >
              <Flex
                position={"absolute"}
                alignItems={"center"}
                justifyContent={"center"}
                top={5}
                right={5}
                width={74}
                height={74}
                borderRadius={"50%"}
                backgroundColor={"white"}
              >
                <Image src={plus} />
              </Flex>
              <Text
                position={"absolute"}
                bottom={0}
                left={5}
                fontFamily={"Bossa-ExtendedBold"}
                fontSize={["34px", "34px", "60px"]}
                fontWeight={700}
                color={"white"}
              >
                {el.attributes.title}
              </Text>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      </Box>
    </>
    
  )
}

export default Partners_AU