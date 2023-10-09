import { Box, Image } from "@chakra-ui/react";
import React, { useRef } from "react";
import img1 from "../../assets/aboutUs_Slider/img1.svg";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import style from "../AboutUs/AU_Slider.module.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Slider_AU = () => {
  const swiperRef = useRef();

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <>
      <Box
      w={"100vw"}
      maxW={"100%"}
      padding={"5% 11.718%"}
        // margin={
        //   ["62px 225px",
        //   "62px 56.24px",
        //   "62px 89px",
        //   "62px 116px",
        //   "62px 150px",
        //   "62px 225px"]
        // }
        pos={"relative"}
      >
        <Swiper
          breakpoints={{
            390: {
              slidesPerView: 1,
              slidesOffsetBefore: 0,
              // spaceBetween:22,
            },
            1024: {
              slidesOffsetBefore: 0,
              slidesPerView: 1.25,
              spaceBetween: 22,
            },
            1900: {
              slidesOffsetBefore: 0,
              slidesPerView: 1.25,
              spaceBetween: 22,
            },

          
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          // className={style.swiper}
        >
          {/* slides  */}
          <SwiperSlide className={style.swipe_slide}>
            <Image
              objectFit={"cover"}
              // w={["0px", "351px", "768px", "1152px"]}
              h={"576px"}
              src={img1}
              alt="Img1"
            />
          </SwiperSlide>
          <SwiperSlide className={style.swipe_slide}>
            <Image
              objectFit={"cover"}
              // w={["0px", "351px", "768px", "1152px"]}
              h={"576px"}
              src={img1}
              alt="Img1"
            />
          </SwiperSlide>
          <SwiperSlide className={style.swipe_slide}>
            <Image
              objectFit={"cover"}
              // w={["0px", "351px", "768px", "1152px"]}
              h={"576px"}
              src={img1}
              alt="Img1"
            />
          </SwiperSlide>
          <SwiperSlide className={style.swipe_slide}>
            <Image
              objectFit={"cover"}
              // w={["0px", "351px", "768px", "1152px"]}
              h={"576px"}
              src={img1}
              alt="Img1"
            />
          </SwiperSlide>
          <SwiperSlide className={style.swipe_slide}>
            <Image
              objectFit={"cover"}
              // w={["0px", "351px", "768px", "1152px"]}
              h={"576px"}
              src={img1}
              alt="Img1"
            />
          </SwiperSlide>
          <SwiperSlide className={style.swipe_slide}>
            <Image
              objectFit={"cover"}
              // w={["0px", "351px", "768px", "1152px"]}
              h={"576px"}
              src={img1}
              alt="Img1"
            />
          </SwiperSlide>
          <SwiperSlide className={style.swipe_slide}>
            <Image
              objectFit={"cover"}
              // w={["0px", "351px", "768px", "1152px"]}
              h={"576px"}
              src={img1}
              alt="Img1"
            />
          </SwiperSlide>
          <SwiperSlide className={style.swipe_slide}>
            <Image
              objectFit={"cover"}
              // w={["0px", "351px", "768px", "1152px"]}
              h={"576px"}
              src={img1}
              alt="Img1"
            />
          </SwiperSlide>
          <SwiperSlide className={style.swipe_slide}>
            <Image
              objectFit={"cover"}
              // w={["0px", "351px", "768px", "1152px"]}
              h={"576px"}
              src={img1}
              alt="Img1"
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default Slider_AU;
