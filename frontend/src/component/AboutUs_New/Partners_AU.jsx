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
    <div>
      <Text
      margin={["8px 20px 0px 20px", "8px 20px 0px 20px","78px 106px 0px 106px","78px 106px 0px 106px"]}
        fontFamily={"Bossa-ExtendedBold"}
        fontWeight={700}
        fontSize={["32px", "32px", "60px", "60px"]}
      >
        Our Partners
      </Text>

      <Swiper
        breakpoints={{
          1024: {
            slidesOffsetBefore: 120,
            slidesPerView: 2.75,
            spaceBetween: 44,
          },
          760: {
            slidesOffsetBefore: 106,
            slidesPerView: 2.75,
            spaceBetween: 35,
          },
          390: {
            slidesPerView: 1.2,
            slidesOffsetBefore: 35,
            spaceBetween:22,
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
    </div>
  )
}

export default Partners_AU