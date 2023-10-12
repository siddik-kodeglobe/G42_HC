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
      padding={["25px 20px 39px 20px", "25px 20px 39px 20px", "25px 20px 39px 20px", "86px 0% 34px 6.97%","111px 0% 43px 6.97%","132px 0% 52px 6.97%"]}
      // margin={["65px 20px 0px 20px", "65px 20px 0px 20px","78px 106px 0px 106px","78px 106px 0px 106px"]}
        fontFamily={"Bossa-ExtendedBold"}
        fontWeight={700}
        fontSize={["32px", "32px", "60px", "60px"]}
      >
        Our Partners
      </Text>

      <Swiper
      speed={750}
      slidesPerView={'auto'}
        breakpoints={{
          1556: {
            slidesOffsetBefore: 107,
            spaceBetween: 20,
          },
          1280: {
            slidesOffsetBefore: 89,
            spaceBetween: 16.85,
          },
          992: {
            slidesOffsetBefore: 69,
            spaceBetween: 14,
          },
          768: {
            slidesOffsetBefore: 54,
            spaceBetween: 11,
          },
          390: {
            slidesOffsetBefore: 33,
            spaceBetween:11,
          },
        }}
        // modules={[FreeMode]}
        className={style.swiper}
      >
        {data?.map((el) => (
          <SwiperSlide className={style.swiper_slide}>
            <Box
            w={["338px", "338px", "338px", "385px", "498px", "591px"]}
            h={["338px", "338px", "338px", "385px", "498px", "591px"]}
              backgroundColor={"#00D2AA"}
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