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

    const customFormattedDate = `${formattedDay} ${month} ${year}`;
    return customFormattedDate;
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Box>
        <Flex
          padding={["40px 15px 0px 15px", "124px 60px 0px 66px"]}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Flex
            flexDirection={["column", "column", "row", "row"]}
            gap={["11px", "11px", "25px", "25px"]}
            alignItems={["start", "start", "center", "center"]}
          >
            <Text
              fontFamily={"Bossa-ExtendedBold"}
              color={"black"}
              fontSize={["24px", "24px", "60px", "60px"]}
              fontWeight={700}
              lineHeight={"normal"}
              textTransform={"capitalize"}
            >
              Social Media
            </Text>
            <Flex
              cursor={"pointer"}
              justifyContent={"center"}
              alignItems={"center"}
              backgroundColor={"#00D2AA"}
              color={"white"}
              // w={["128px", "128px", "182px", "182px"]}
              // h={["40px", "40px", "55px", "55px"]}
              borderRadius={"80px"}
            >
              <Text
                fontFamily={"Bossa-ExtendedMedium"}
                lineHeight={["11px", "11px", "22px", "22px"]}
                textAlign={"center"}
                fontSize={["12px", "12px", "16px", "16px"]}
                textTransform={"capitalize"}
                fontWeight={[400, 400, 500, 500]}
                padding={"11px 21px"}
                flexShrink={0}
              >
                All Social Media
              </Text>
            </Flex>
          </Flex>
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
            speed={750}
            breakpoints={{
              390: {
                slidesOffsetBefore: 21,
                slidesPerView: 1.25,
                spaceBetween: 11,
              },
              768: {
                slidesOffsetBefore: 66,
                slidesPerView: 2,
                spaceBetween: 22,
              },
              1024: {
                slidesOffsetBefore: 66,
                slidesPerView: 2.75,
                spaceBetween: 22,
              },
            }}
            ref={swiperRef}
            // navigation={true}
            modules={[Navigation]}
            className={style.swiper}
          >
            {data?.map((el) => (
              <SwiperSlide className={style.swipe_slide}>
                <Box w={["285px", "285px", "451px"]}>
                  <Image
                    w={["285px", "285px", "451px"]}
                    h={["238px", "238px", "411px"]}
                    src={`${process.env.REACT_APP_BACKEND_URL}${el.attributes.image.data.attributes.url}`}
                  />
                  <Text
                    fontFamily={"Bossa-Regular"}
                    mt={"30px"}
                    noOfLines={2}
                    color={"#747272"}
                    fontSize={"14px"}
                    fontWeight={400}
                    textTransform={"capitalize"}
                    lineHeight={"normal"}
                  >
                    {convertData(el.attributes.createdAt)}
                  </Text>

                  <Text
                  fontFamily={"Bossa-ExtendedBold"}
                    textOverflow={"ellipsis"}
                    color={"black"}
                    fontStyle={"normal"}
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
        <hr
          style={{
            marginBottom: "54px",
            width: "98vw",
            maxWidth: "100%",
            border: "1px solid #D9D9D9",
          }}
        />
      </Box>
    </>
  );
};

export default SocialMedia;
