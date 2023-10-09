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

import bgImg from "../../assets/MeetUs/background.png";
import blueMotionVideo from '../../assets/backgroundVideo/blueMotionVideo.mp4';
import BackgroundVideoContainer from "../BackgroundVideo/BackgroundVideoContainer";

const MeetUs = () => {
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
      `${process.env.REACT_APP_BACKEND_URL}/api/meet-uss?populate=*`
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
      <Box mt={"95px"} position={"relative"}>
        <Box height={"815px"} zIndex={-10} position={"relative"} mt={["80px"]}>
          <BackgroundVideoContainer
            videosrc={blueMotionVideo}
            height={"815px"}
          />
        </Box>

        <Box height={"390px"} position={"absolute"} zIndex={1} top={0}  left={0} right={0}
 background={"linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)"}></Box>
        <Box
        position={"absolute"} zIndex={2} top={0}  left={0} right={0}
          
        >
          <Flex
            padding={["40px 15px 20px 15px", "55px 60px 20px 150px"]}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Text
              fontFamily={"Bossa-ExtendedBold"}
              fontSize={["18px", "18px", "32px", "32px"]}
              fontWeight={700}
              fontStyle={"normal"}
            >
              Meet us at
            </Text>
            <Flex
              display={["none", "none", "flex", "flex"]}
              alignItems={"center"}
              gap={5}
            >
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

          <Box mt={["-45px", "-45px", "-45px", "-45px"]}>
            <Swiper
              speed={750}
              breakpoints={{
                390: {
                  slidesPerView: 1.25,
                  slidesOffsetBefore: 15,
                  // spaceBetween: 24,
                },
                1021: {
                  slidesPerView: 2.25,
                  slidesOffsetBefore: 150,
                  spaceBetween: 27,
                },
                1150: {
                  slidesOffsetBefore: 150,
                  slidesPerView: 2.25,
                  spaceBetween: 5,
                },
                1250: {
                  slidesOffsetBefore: 150,
                  slidesPerView: 2.5,
                  spaceBetween: 44,
                },
                1250: {
                  slidesOffsetBefore: 150,
                  slidesPerView: 2.75,
                  spaceBetween: 44,
                }
              }}
              ref={swiperRef}
              // navigation={true}
              modules={[Navigation]}
              className={style.swiper}
            >
              {data?.map((el) => (
                <SwiperSlide className={style.swipe_slide}>
                  <Link
                    href={el.attributes.linkedin_link}
                    _hover={{ textDecoration: "none" }}
                    isExternal
                  >
                    <Box
                      w={["306px", "306px", "516px","516px","652px"]}
                      h={["285px", "285px", "450px","450px","491px"]}
                      backgroundColor={"white"}
                    >
                      <Text
                        fontFamily={"Bossa-Regular"}
                        padding={["8px", "8px", "14px 0px 17px 14px"]}
                        color={"#747272"}
                        fontSize={"14px"}
                        fontWeight={400}
                        textTransform={"capitalize"}
                        fontStyle={"normal"}
                        lineHeight={"normal"}
                      >
                        {convertData(el.attributes.createdAt)}
                      </Text>
                      <Image
                        padding={["8px", "8px", "0px 14px"]}
                        w={["100%", "100%", "100%"]}
                        h={["172px", "172px", "291px"]}
                        src={`${process.env.REACT_APP_BACKEND_URL}${el.attributes.image.data.attributes.url}`}
                      />

                      <Text
                        fontFamily={"Bossa-ExtendedBold"}
                        margin={"17px 13px 79px 13px"}
                        textOverflow={"ellipsis"}
                        color={"black"}
                        fontStyle={"normal"}
                        fontSize={["12px", "12px", "20px", "20px"]}
                        fontWeight={700}
                        lineHeight={"normal"}
                        overflow={"hidden"}
                        noOfLines={[2, 2, 3, 3]}
                        textTransform={"capitalize"}
                      >
                        {el.attributes.title}
                      </Text>
                    </Box>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MeetUs;
