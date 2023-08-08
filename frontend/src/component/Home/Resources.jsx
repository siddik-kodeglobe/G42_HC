import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import axios from "axios";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// import required modules

// Import Swipper
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Install Swiper modules
// import required modules
// import { Navigation } from "swiper";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FreeMode, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "../AboutUs/OurPartner_Slider.module.css";

const Resources = () => {
  const [data, setData] = useState([]);
  // const swiper = useSwiper();
  const swiperRef = React.useRef(null);

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

  const getData = async () => {
    // console.log(`${process.env.REACT_APP_BACKEND_URL}/api/teams?populate=*`);
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/resources?populate=*`
    );
    console.log(res.data.data);
    setData(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Box>
        <Flex
          padding={["40px 15px 20px 15px","95px 60px 20px 150px"]}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text
            fontFamily={"Bossa"}
            fontSize={"32px"}
            fontWeight={700}
            fontStyle={"normal"}
          >
            Resources
          </Text>
          <Flex alignItems={"center"} gap={5}>
            <Flex
              onClick={() => goPrev()}
              _hover={{ backgroundColor: "#00D2AA" }}
              alignItems={"center"}
              justifyContent={"center"}
              border={"1px solid black"}
              borderStyle={"dashed"}
              borderRadius={"50%"}
              cursor={"pointer"}
              w={"52px"}
              h={"52px"}
            >
              <BsArrowLeft
                style={{
                  color: "black",
                  height: "100%",
                  width: "100%",
                  padding: "11px",
                  cursor: "pointer",
                }}
              />
            </Flex>
            <Flex
              onClick={() => goNext()}
              _hover={{ backgroundColor: "#00D2AA" }}
              alignItems={"center"}
              justifyContent={"center"}
              border={"1px solid black"}
              borderStyle={"dashed"}
              borderRadius={"50%"}
              cursor={"pointer"}
            >
              <BsArrowRight
                style={{
                  color: "black",
                  height: "52px",
                  width: "52px",
                  padding: "11px",
                }}
              />
            </Flex>
          </Flex>
        </Flex>

        <Box>
          <Swiper
            slidesPerView={2.75}
            spaceBetween={44}
            ref={swiperRef}
            // navigation={true}
            modules={[Navigation]}
            className={style.swiper}
          >
            {data?.map((el) => (
              <SwiperSlide className={style.swipe_slide}>
                <Box position={"relative"}>
                  <Image
                    src={`${process.env.REACT_APP_BACKEND_URL}${el.attributes.image.data.attributes.url}`}
                  />
                </Box>
                <Box position={"absolute"} bottom={5} left={5}>
                  <Text
                    color={"white"}
                    fontFamily={"Bossa"}
                    fontSize={14}
                    fontWeight={500}
                    lineHeight={"normal"}
                  >
                    {el.attributes.createdAt}
                  </Text>
                  <Text
                    color={"white"}
                    fontFamily={"Bossa"}
                    fontSize={20}
                    fontWeight={500}
                    lineHeight={"normal"}
                  >
                    {el.attributes.heading}
                  </Text>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Box padding={"55px 60px"}>
          <hr style={{ width: "85%", background: "#004141" }} />
        </Box>
      </Box>
    </>
  );
};

export default Resources;
