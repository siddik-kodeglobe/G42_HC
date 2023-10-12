import { Box, Image } from "@chakra-ui/react";
import React, { useRef } from "react";
import img1 from "../../assets/aboutUs_Slider/img1.svg";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import style from "../AboutUs/OurPartner_Slider.module.css";

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
      mt={["100px", "50px", "50px", "50px", "65px", "78px"]}
      padding={["0px 20px","0px 11.71%","0px 11.71%", "0px 11.718%"]}
        pos={"relative"}
      >
        <Swiper
        speed={750}
        slidesPerView={'auto'}
          breakpoints={{
            380: {
              // slidesOffsetBefore: 21,
              // slidesPerView: 1.25,
              spaceBetween: 5,
            },
            768: {
              // slidesOffsetBefore: 89,
              // slidesPerView: 1.95,
              spaceBetween: 20,
            },
            992: {
              // slidesOffsetBefore: 116,
              // slidesPerView: 2.5,
              spaceBetween: 15,
            },
            1280: {
              // slidesOffsetBefore: 149,
              // slidesPerView: 2.65,
              spaceBetween: 18,
            },
            1536: {
              // slidesOffsetBefore: 178,
              // slidesPerView: 2.75,
              spaceBetween: 20,
            }
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className={style.swiper}
        >
          {/* slides  */}
          <SwiperSlide className={style.swiper_slide}>
            <Image
              objectFit={"cover"}
              w={["351px", "351px", "351px", "604px", "780px", "936px"]}
             h={["225px", "225px", "225px", "304px", "392px", "471px"]}
              src={img1}
              alt="Img1"
            />
          </SwiperSlide>
          <SwiperSlide className={style.swiper_slide}>
            <Image
              objectFit={"cover"}
              w={["351px", "351px", "351px", "604px", "780px", "936px"]}

              // w={["0px", "351px", "768px", "1152px"]}
             h={["225px", "225px", "225px", "304px", "392px", "471px"]}
              src={img1}
              alt="Img1"
            />
          </SwiperSlide>
          <SwiperSlide className={style.swiper_slide}>
            <Image
              objectFit={"cover"}
              // w={["0px", "351px", "768px", "1152px"]}
             h={["225px", "225px", "225px", "304px", "392px", "471px"]}
              w={["351px", "351px", "351px", "604px", "780px", "936px"]}

              src={img1}
              alt="Img1"
            />
          </SwiperSlide>
          <SwiperSlide className={style.swiper_slide}>
            <Image
              objectFit={"cover"}
              // w={["0px", "351px", "768px", "1152px"]}
             h={["225px", "225px", "225px", "304px", "392px", "471px"]}
              w={["351px", "351px", "351px", "604px", "780px", "936px"]}

              src={img1}
              alt="Img1"
            />
          </SwiperSlide>
          <SwiperSlide className={style.swiper_slide}>
            <Image
              objectFit={"cover"}
              // w={["0px", "351px", "768px", "1152px"]}
             h={["225px", "225px", "225px", "304px", "392px", "471px"]}
              w={["351px", "351px", "351px", "604px", "780px", "936px"]}

              src={img1}
              alt="Img1"
            />
          </SwiperSlide>
          <SwiperSlide className={style.swiper_slide}>
            <Image
              objectFit={"cover"}
              // w={["0px", "351px", "768px", "1152px"]}
             h={["225px", "225px", "225px", "304px", "392px", "471px"]}
              w={["351px", "351px", "351px", "604px", "780px", "936px"]}

              src={img1}
              alt="Img1"
            />
          </SwiperSlide>
          <SwiperSlide className={style.swiper_slide}>
            <Image
              objectFit={"cover"}
              // w={["0px", "351px", "768px", "1152px"]}
             h={["225px", "225px", "225px", "304px", "392px", "471px"]}
              w={["351px", "351px", "351px", "604px", "780px", "936px"]}

              src={img1}
              alt="Img1"
            />
          </SwiperSlide>
          <SwiperSlide className={style.swiper_slide}>
            <Image
              objectFit={"cover"}
              // w={["0px", "351px", "768px", "1152px"]}
             h={["225px", "225px", "225px", "304px", "392px", "471px"]}
              w={["351px", "351px", "351px", "604px", "780px", "936px"]}

              src={img1}
              alt="Img1"
            />
          </SwiperSlide>
          <SwiperSlide className={style.swiper_slide}>
            <Image
              objectFit={"cover"}
              // w={["0px", "351px", "768px", "1152px"]}
             h={["225px", "225px", "225px", "304px", "392px", "471px"]}
              w={["351px", "351px", "351px", "604px", "780px", "936px"]}

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
