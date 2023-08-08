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

const SocialMedia = () => {
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
      `${process.env.REACT_APP_BACKEND_URL}/api/social-medias?populate=*`
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
          padding={"95px 60px 20px 150px"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text
            fontFamily={"Bossa"}
            fontSize={"32px"}
            fontWeight={700}
            fontStyle={"normal"}
          >
            Social Media
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
            >
              <BsArrowLeft
                style={{
                  color: "black",
                  height: "52px",
                  width: "52px",
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
                <Box>
                  <Image
                  w={"450px"}
                  h={"424px"}
                    src={`${process.env.REACT_APP_BACKEND_URL}${el.attributes.image.data.attributes.url}`}
                  />
                  <Text
                    color={"#747272"}
                    fontFamily={"Bossa"}
                    fontSize={"14px"}
                    fontWeight={400}
                    textTransform={"capitalize"}
                    lineHeight={"normal"}
                  >
                    {el.attributes.createdAt}
                  </Text>

                  <Text
                  textOverflow={"ellipsis"}
                    color={"black"}
                    fontStyle={"normal"}
                    fontFamily={"Bossa"}
                    fontSize={"20px"}
                    fontWeight={700}
                    lineHeight={"normal"}
                    overflow={"hidden"}
                    noOfLines={2}
                    textTransform={"capitalize"}
                  >
                    {el.attributes.Heading}
                  </Text>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
};

export default SocialMedia;
