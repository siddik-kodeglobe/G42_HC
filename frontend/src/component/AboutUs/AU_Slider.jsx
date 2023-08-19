import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Image } from "@chakra-ui/react";
import img1 from "../../assets/aboutUs_Slider/img1.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import style from "./AU_Slider.module.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import WhoWeAre from "./WhoWeAre";
import PurposeMV from "./PurposeMV";
import CEO from "./CEO";
import OurPartners from "./OurPartners";
import MeetTeam from "./MeetTeam";
import AU_Footer from "./AU_Footer";
import ChartingTriumph from "./ChartingTriumph";

const AU_Slider = () => {
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
    <div style={{ position: "absolute"}}>
      {/* SLIDER  */}
      <Box position={"relative"}>
        <Swiper
        breakpoints={{
          1024: {
            slidesOffsetBefore: 0,
            slidesPerView: 1.25,
            spaceBetween:22,
          },
          390: {
            slidesPerView: 1,
            slidesOffsetBefore: 0
            // spaceBetween:22,
          },
        }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className={style.swiper}
        >
          {/* slides  */}
          <SwiperSlide className={style.swipe_slide}>
            <Image src={img1} alt="Img1" />
          </SwiperSlide>
          <SwiperSlide className={style.swipe_slide}>
            <Image src={img1} alt="Img1" />
          </SwiperSlide>
          <SwiperSlide className={style.swipe_slide}>
            <Image src={img1} alt="Img1" />
          </SwiperSlide>
          <SwiperSlide className={style.swipe_slide}>
            <Image src={img1} alt="Img1" />
          </SwiperSlide>
          <SwiperSlide className={style.swipe_slide}>
            <Image src={img1} alt="Img1" />
          </SwiperSlide>
          <SwiperSlide className={style.swipe_slide}>
            <Image src={img1} alt="Img1" />
          </SwiperSlide>
          <SwiperSlide className={style.swipe_slide}>
            <Image src={img1} alt="Img1" />
          </SwiperSlide>
          <SwiperSlide className={style.swipe_slide}>
            <Image src={img1} alt="Img1" />
          </SwiperSlide>
          <SwiperSlide className={style.swipe_slide}>
            <Image src={img1} alt="Img1" />
          </SwiperSlide>
        </Swiper>
      </Box>

      {/* SLIDER BTN  */}
      <Box></Box>
      <WhoWeAre />
      <hr style={{ width: "100%", marginTop: "64px" }} />
      <PurposeMV />
      <hr style={{ margin: "64px 0px 0px 0px", border: "1px solid rgba(0, 0, 0, 0.10)" }} />
      <CEO />
      <Box width={"98.7vw"} margin={"64px 0px"}>
        <OurPartners />
      </Box>
      {/* <ChartingTriumph /> */}
      <Box width={"98.7vw"} margin={"64px 0px"}>
        <MeetTeam />
      </Box>
      <AU_Footer />
    </div>
  );
};

export default AU_Slider;
