import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
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
    const formattedDay = (day < 10) ? `0${day}` : day;
    const month = months[inputDate.getUTCMonth()];
    const year = inputDate.getUTCFullYear();

    const customFormattedDate = `${formattedDay} ${month} ${year}`;
    return customFormattedDate;
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Box w={"100vw"} maxW={"100%"}>
        <Flex
        padding={["40px 20px 25px 20px", "40px 20px 25px 20px", "40px 20px 25px 20px", "47px 3.94% 42px 11.71%", "60px 3.94% 42px 11.71%", "72px 3.94% 42px 11.71%"]}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text
          fontFamily={"Bossa-ExtendedBold"}
            fontSize={["24px", "24px","24px", "24px", "26px", "32px"]}
            fontWeight={700}
            fontStyle={"normal"}
          >
            Social Media
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

        <Box w={"100%"}>
          <Swiper
          speed={750}
          slidesPerView={'auto'}
          breakpoints={{
            300: {
              // slidesPerView: 1.25,
              slidesOffsetBefore: 20,
              spaceBetween: 24,
            },
            768: {
              slidesOffsetBefore: 20,
              spaceBetween: 24,
            },
            992: {
              // slidesPerView: 2.25,
              slidesOffsetBefore: 150,
              spaceBetween: 22,
            },
            1280: {
              slidesOffsetBefore: 150,
              // slidesPerView: 2.5,
              spaceBetween: 25,
            },
            1536: {
              slidesOffsetBefore: 178,
              // slidesPerView: 2.75,
              spaceBetween: 30,
            }
          }}
            ref={swiperRef}
            // navigation={true}
            modules={[Navigation]}
            observeParents
            observer
            className={style.swiper}
          >
            {data?.map((el) => (
              <SwiperSlide className={style.swiper_slide}>
                  <Link _hover={{textDecoration: "none"}} href={el.attributes.link} isExternal>
                <Box  w={["285px", "285px","285px", "294px","380px","456px"]}>
                  <Image
                  
                  w={["100%"]}
                  h={["268px", "268px", "268px", "268px","346px","415px"]}
                  objectFit={"cover"}
                  src={`${process.env.REACT_APP_BACKEND_URL}${el.attributes.image.data.attributes.url}`}
                  />
                  <Text
                  w={"100%"}
                  fontFamily={"Bossa-Regular"}
                    mt={["15px", "30px"]}
                    noOfLines={2}
                    color={"#747272"}
                    fontSize={["10px","10px","10px","11px", "12px", "14px"]}
                    fontWeight={400}
                    textTransform={"capitalize"}
                    lineHeight={"normal"}
                  >
                    {convertData(el.attributes.createdAt)}
                  </Text>

                  <Text
                  mt={"5px"}
                  w={"100%"}
                  fontFamily={"Bossa-ExtendedBold"}
                  textOverflow={"ellipsis"}
                    color={"black"}
                    fontStyle={"normal"}
                    fontSize={["12px", "12px","12px", "14px", "16px", "20px"]}
                    fontWeight={700}
                    lineHeight={"normal"}
                    overflow={"hidden"}
                    noOfLines={2}
                    textTransform={"capitalize"}
                  >
                    {el.attributes.Heading}
                  </Text>
                </Box>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
};

export default SocialMedia;
