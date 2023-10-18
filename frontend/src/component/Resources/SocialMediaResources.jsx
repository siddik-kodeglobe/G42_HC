import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
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

  const [hoverArrowColor, setHoverArrowColor] = useState("black");
  const [hoverArrowColorR, setHoverArrowColorR] = useState("black");

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
      <Box w={"100vw"} maxW={"100%"}>
        <Flex>
          <Flex
            flexDirection={["column", "column", "row", "row"]}
            w={"100%"}
            alignItems={["start", "start", "center", "center"]}
            justifyContent={"space-between"}
            padding={[
              "80px 3.94% 0% 3.94%",
              "80px 3.94% 0% 3.94%",
              "80px 3.94% 0% 3.94%",
              "81px 3.94% 0% 3.94%",
              "105px 3.94% 0% 3.94%",
              "125px 3.94% 0% 3.94%",
            ]}
            gap={["15px", "15px", "0px", "0px"]}
          >
            <Flex
              flexDirection={["column", "column", "row", "row"]}
              gap={["11px", "11px", "25px", "25px"]}
              alignItems={["start", "start", "center", "center"]}
            >
              <Text
                fontFamily={"Bossa-ExtendedBold"}
                color={"black"}
                fontSize={["24px", "24px", "30px", "39px", "50px", "60px"]}
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
                borderRadius={"80px"}
              >
                <Text
                  color={"white"}
                  fontFamily={"Bossa-ExtendedMedium"}
                  lineHeight={["11px", "11px", "22px", "22px"]}
                  textAlign={"center"}
                  fontSize={["12px", "12px", "12px", "10px", "13px", "16px"]}
                  textTransform={"capitalize"}
                  fontWeight={[400, 400, 500, 500]}
                  padding={[
                    "12.55px 12px",
                    "12.55px 12px",
                    "",
                    "10.44px 14px",
                    "13.48px 18.53px",
                    "16px 22px",
                  ]}
                  flexShrink={0}
                >
                  All Social Media
                </Text>
              </Flex>
            </Flex>
            <Flex alignItems={"center"} gap={[2, 2, 5, 5]}>
              <Button
                onClick={() => goPrev()}
                // onClick={() => swiperRef.current.swiper.slidePrev()}
                _hover={{ backgroundColor: "#00D2AA" }}
                backgroundColor={"white"}
                onMouseOver={() => setHoverArrowColor("white")}
                onMouseOut={() => setHoverArrowColor("black")}
                alignItems={"center"}
                justifyContent={"center"}
                border={"1px solid black"}
                borderStyle={"dashed"}
                w={["45px", "45px", "52px", "52px"]}
                h={["45px", "45px", "52px", "52px"]}
                margin={0}
                padding={"11px"}
                borderRadius={"50%"}
              >
                <BsArrowLeft
                  style={{
                    color: hoverArrowColor,
                    height: "52px",
                    width: "52px",
                  }}
                />
              </Button>
              <Button
                onClick={() => goNext()}
                _hover={{ backgroundColor: "#00D2AA" }}
                backgroundColor={"white"}
                onMouseOver={() => setHoverArrowColorR("white")}
                onMouseOut={() => setHoverArrowColorR("black")}
                alignItems={"center"}
                justifyContent={"center"}
                border={"1px solid black"}
                borderStyle={"dashed"}
                w={["45px", "45px", "52px", "52px"]}
                h={["45px", "45px", "52px", "52px"]}
                margin={0}
                padding={"11px"}
                borderRadius={"50%"}
              >
                <BsArrowRight
                  style={{
                    color: hoverArrowColorR,
                    height: "52px",
                    width: "52px",
                  }}
                />
              </Button>
            </Flex>
          </Flex>
        </Flex>

        <Box mt={["15px", "15px", "15px", "52px","52px","52px"]}>
          <Swiper
            speed={750}
            slidesPerView={"auto"}
            breakpoints={{
              380: {
                slidesOffsetBefore: 21,
                // slidesPerView: 1.25,
                spaceBetween: 15,
              },
              768: {
                slidesOffsetBefore: 21,
                // slidesPerView: 1.95,
                spaceBetween: 24,
              },
              992: {
                slidesOffsetBefore: 39,
                // slidesPerView: 2.5,
                spaceBetween: 31,
              },
              1280: {
                slidesOffsetBefore: 51,
                // slidesPerView: 2.65,
                spaceBetween: 40,
              },
              1536: {
                slidesOffsetBefore: 60,
                // slidesPerView: 2.75,
                spaceBetween: 60,
              },
            }}
            ref={swiperRef}
            // navigation={true}
            modules={[Navigation]}
            className={style.swiper}
          >
            {data?.map((el) => (
              <SwiperSlide className={style.swiper_slide}>
                <Box>
                  <Link _hover={{textDecor: "none"}} target={el.attributes.link ? "_blank" : null} href={el.attributes.link ? el.attributes.link : null}>
                  <Image
                  w={["301px", "301px", "301px", "304px", "391px", "470px"]}
                    height={"auto"}
                    maxH={[
                      "275px",
                      "275px",
                      "214px",
                      "276px",
                      "357px",
                      "428px",
                    ]}
                    objectFit={"cover"}
                    src={`${process.env.REACT_APP_BACKEND_URL}${el.attributes.image.data.attributes.url}`}
                  />
                  <Text
                    fontFamily={"Bossa-Regular"}
                    mt={"30px"}
                    noOfLines={2}
                    color={"#747272"}
                    fontSize={[
                      "9px",
                      "9px",
                      "9.14px",
                      "14px",
                      "11.8px",
                      "14px",
                    ]}
                    fontWeight={400}
                    textTransform={"capitalize"}
                    lineHeight={"normal"}
                  >
                    {convertData(el.attributes.createdAt)}
                  </Text>

                  <Text
                  w={["301px", "301px", "301px", "304px", "391px", "470px"]}
                    fontFamily={"Bossa-ExtendedBold"}
                    textOverflow={"ellipsis"}
                    color={"black"}
                    fontStyle={"normal"}
                    fontSize={["12px", "12px", "12px", "13px", "16px", "20px"]}
                    fontWeight={700}
                    lineHeight={[
                      "18px",
                      "18px",
                      "18px",
                      "20px",
                      "26px",
                      "31px",
                    ]}
                    overflow={"hidden"}
                    noOfLines={2}
                    textTransform={"capitalize"}
                  >
                    {el.attributes.Heading}
                  </Text>
                  </Link>
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
