import { Box, Flex, Text, Image, Button, Link } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// Import Swipper
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from "../AboutUs/OurPartner_Slider.module.css";

import { isMobile } from "react-device-detect";
import doubleSideArrow from "../../assets/icons/doubleSidedArrow.png";
import playBtn from "../../assets/icons/playBtn.svg";

const News = () => {
  const [data, setData] = useState([]);
  const [hoverArrowColor, setHoverArrowColor] = useState("white");
  const [hoverArrowColorR, setHoverArrowColorR] = useState("white");
  // const swiper = useSwiper();
  const swiperRef = React.useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
    // console.log(swiperRef.current.swiper);
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const getData = async () => {
    // console.log(`${process.env.REACT_APP_BACKEND_URL}/api/teams?populate=*`);
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/news-plural?populate=*`
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

    const customFormattedDate = `${month} ${formattedDay},${year}`;
    return customFormattedDate;
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Box
        w={"100vw"}
        maxW={"100%"}
        style={{ cursor: `url(${doubleSideArrow}), auto` }}
        paddingBottom={["68px", "68px", "68px", "73px", "94px", "112px"]}
        bgGradient={
          "linear-gradient(180deg, #00D2AA 28.96%, rgba(0, 210, 170, 0.00) 100%);"
        }
      >
        <Box w={"100%"}>
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            padding={[
              "90px 20px 0px 20px",
              "90px 20px 0px 20px",
              "90px 20px 0px 20px",
              "47px 3.95% 0px 47px ",
              "47px 3.95% 0px 60px ",
              "47px 3.95% 0px 72px ",
            ]}
          >
            <Text
              fontFamily={"Bossa-ExtendedBold"}
              color={"white"}
              fontSize={["22px", "22px", "22px", "22px", "26px", "32px"]}
            >
              News
            </Text>
            <Flex alignItems={"center"} gap={["6px","6px", "6px", "12px","12px","12px" ]}>
              <Flex
                // margin={"auto"}
                onClick={() => goPrev()}
                // onClick={() => swiperRef.current.swiper.slidePrev()}
                _hover={{ backgroundColor: "white" }}
                backgroundColor={"#00D2AA"}
                onMouseOver={() => setHoverArrowColor("black")}
                onMouseOut={() => setHoverArrowColor("white")}
                alignItems={"center"}
                justifyContent={"center"}
                border={"1px solid white"}
                borderStyle={"dashed"}
                w={["32px", "32px", "32px", "42px", "42px", "52px"]}
                h={["32px", "32px", "32px", "42px", "42px", "52px"]}
                // margin={0}
                padding={"9.5px"}
                borderRadius={"50%"}
                cursor={
                  swiperRef.current?.swiper.isBeginning
                    ? "not-allowed"
                    : "pointer"
                }
                // disabled={swiperRef.current?.swiper.isBeginning}
              >
                {isMobile ? (
                  <BsArrowLeft
                    style={{
                      color: hoverArrowColor,
                      height: "12px",
                      width: "12px",
                    }}
                  />
                ) : (
                  <BsArrowLeft
                    style={{
                      color: hoverArrowColor,
                      height: "62px",
                      width: "62px",
                    }}
                  />
                )}
              </Flex>
              <Flex
                onClick={() => goNext()}
                _hover={{ backgroundColor: "white" }}
                onMouseOver={() => setHoverArrowColorR("black")}
                onMouseOut={() => setHoverArrowColorR("white")}
                backgroundColor={"#00D2AA"}
                alignItems={"center"}
                justifyContent={"center"}
                border={"1px solid white"}
                borderStyle={"dashed"}
                w={["32px", "32px", "42px", "52px"]}
                h={["32px", "32px", "42px", "52px"]}
                // margin={0}
                padding={"9.5px"}
                borderRadius={"50%"}
                cursor={
                  swiperRef.current?.swiper.isEnd ? "not-allowed" : "pointer"
                }
              >
                {isMobile ? (
                  <BsArrowRight
                    style={{
                      color: hoverArrowColor,
                      height: "12px",
                      width: "12px",
                    }}
                  />
                ) : (
                  <BsArrowRight
                    style={{
                      color: hoverArrowColorR,
                      height: "52px",
                      width: "52px",
                    }}
                  />
                )}
              </Flex>
            </Flex>
          </Flex>

          <Box mt={["25px", "25px", "25px", "25px", "27px", "33px"]}>
            <Swiper
              speed={750}
              slidesPerView={"auto"}
              breakpoints={{
                250: {
                  slidesOffsetBefore: 20,
                  spaceBetween: 24,
                },
                768: {
                  slidesOffsetBefore: 20,
                  spaceBetween: 26,
                },
                992: {
                  slidesOffsetBefore: 47,
                  spaceBetween: 28,
                },
                1280: {
                  slidesOffsetBefore: 60,
                  spaceBetween: 37,
                },
                1536: {
                  slidesOffsetBefore: 72,
                  spaceBetween: 44,
                },
              }}
              ref={swiperRef}
              // navigation={true}
              // freeMode={true}
              observeParents={true}
              observer={true}
              modules={[Navigation, FreeMode]}
              className={style.swiper}
            >
              {data?.map((el) => (
                <SwiperSlide className={style.swiper_slide}>
                  <Link href={`/news/${el.id}`}>
                    <Box
                      backgroundSize={"cover"}
                      w={["238px", "238px", "238px", "294px", "380px", "451px"]}
                      h={["179px", "179px", "179px", "220px", "284px", "338px"]}
                      backgroundImage={`linear-gradient(0deg, rgba(0, 0, 0, 0.84) 0%, rgba(0, 0, 0, 0.00) 100%), url(${process.env.REACT_APP_BACKEND_URL}${el.attributes.thumbnail.data.attributes.url})`}
                      position={"relative"}
                    ></Box>

                    <Box
                      w={["238px", "238px", "238px", "294px", "380px", "451px"]}
                      paddingRight={[8, 8, 9]}
                      position={"absolute"}
                      bottom={["0px", "0px", "0px", 1.5, 1.5]}
                      left={5}
                    >
                      <Text
                        fontFamily={"Bossa-Regular"}
                        noOfLines={2}
                        color={"white"}
                        fontSize={["7px", "7px", "7px", "10px", "12px", "14px"]}
                        fontWeight={500}
                        lineHeight={"normal"}
                        textOverflow={"ellipsis"}
                      >
                        {convertData(el.attributes.createdAt)}
                      </Text>
                      <Flex
                        alignItems={"start"}
                        h={["50px", "50px", "50px", "62px", "80px", "96px"]}
                      >
                        <Text
                          fontFamily={"Bossa-Medium"}
                          noOfLines={[2, 2, 2, 2, 3, 3]}
                          mt={"5px"}
                          maxHeight={"96px"}
                          marginBottom={"15px"}
                          color={"white"}
                          fontSize={[
                            "10.57px",
                            "10.57px",
                            "10.57px",
                            "13px",
                            "16.85px",
                            "20px",
                          ]}
                          lineHeight={"normal"}
                          w={[
                            "238px",
                            "238px",
                            "238px",
                            "294px",
                            "380px",
                            "451px",
                          ]}
                          textOverflow={"ellipsis"}
                        >
                          {el.attributes.info}
                        </Text>
                      </Flex>
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

export default News;
