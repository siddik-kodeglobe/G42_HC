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

  const convertData = (inputDateString) => {
    const inputDate = new Date(inputDateString);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = inputDate.getUTCDate();
    const formattedDay = day < 10 ? `0${day}` : day;
    const month = months[inputDate.getUTCMonth()];
    const year = inputDate.getUTCFullYear();

    const customFormattedDate = `${month} ${formattedDay} ${year}`;
    return customFormattedDate;
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Box>
        <Flex
        w={"100vw"}
        maxW={"100%"}
        
        padding={["80px 20px 25px 20px", "80px 20px 25px 20px", "80px 20px 25px 20px", "84px 3.94% 41px 11.71%", "108px 3.94% 41px 11.71%", "130px 3.94% 41px 11.71%"]}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text
          fontFamily={"Bossa-ExtendedBold"}
            fontSize={["24px", "24px","24px", "24px", "27px", "32px"]}
            fontWeight={700}
            fontStyle={"normal"}
          >
            Resources
          </Text>
          <Flex display={["none", "none", "flex", "flex"]} alignItems={"center"} gap={5}>
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
            speed={750}
            slidesPerView={'auto'}
            breakpoints={{
              390: {
                // slidesPerView: 1.25,
                slidesOffsetBefore: 20,
                spaceBetween: 24,
              },
              768: {
                slidesOffsetBefore: 20,
                spaceBetween: 26,
              },
              992: {
                // slidesPerView: 2.25,
                slidesOffsetBefore: 150,
                spaceBetween: 44,
              },
              1280: {
                slidesOffsetBefore: 150,
                // slidesPerView: 2.5,
                spaceBetween: 22,
              },
              1536: {
                slidesOffsetBefore: 178,
                // slidesPerView: 2.75,
                spaceBetween: 22,
              }
            }}
            ref={swiperRef}
            // navigation={true}
            modules={[Navigation]}
            className={style.swiper}
            observer={true}
            observeParents={true}
          >
            {data?.map((el) => (
              <SwiperSlide className={style.swiper_slide}>
                <Box
                  // border={"5px solid red"}
                  h={["214px", "214px","214px", "220px", "284px","351px"]}
                  // maxH={["214px", "214px", "338px"]}
                  w={["285px", "285px", "285px", "294px","380px","456px"]}
                  // maxW={["285px", "285px", "425px"]}
                  backgroundImage={`linear-gradient(0deg, rgba(0, 0, 0, 0.84) 0%, rgba(0, 0, 0, 0.00) 100%), url(${process.env.REACT_APP_BACKEND_URL}${el.attributes.image.data.attributes.url})`}
                  // objectFit={"cover"}
                  backgroundSize={"cover"}
                  position={"relative"}
                ></Box>
                  
                <Box w={["285px", "285px", "285px", "294px","380px","456px"]} position={"absolute"} bottom={5} left={5}>
                  <Text
                  fontFamily={"Bossa-Regular"}
                    color={"white"}
                    fontSize={["10px", "10px", "14px"]}
                    fontWeight={500}
                    lineHeight={"normal"}
                  >
                    {convertData(el.attributes.createdAt)}
                  </Text>
                  <Text
                  fontFamily={"Bossa-Medium"}
                    mt={"5px"}
                    maxHeight={"96px"}
                    color={"white"}
                    fontSize={["12px", "12px", "20px"]}
                    fontWeight={500}
                    lineHeight={"normal"}
                    noOfLines={[2,2,2,3,3,3]}
                    w={"90%"}
                    textOverflow={"ellipsis"}
                  >
                    {el.attributes.heading}
                  </Text>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Box padding={["38px 0px 0px 15px", "38px 0px 0px 15px", "38px 0px 0px 15px", "55px 100px 0px 150px", "55px 100px 0px 150px", "55px 100px 0px 150px"]}>
          <hr style={{ width: "100%", background: "#004141" }} />
        </Box>
      </Box>
    </>
  );
};

export default Resources;
