import { Box, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
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

const MeetTeam_AU = () => {
  const [data, setData] = useState([]);
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
      `${process.env.REACT_APP_BACKEND_URL}/api/teams?populate=*`
    );
    // console.log(res.data.data);
    setData(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box
        w={"100vw"}
        maxW={"100%"}
        mt={["79px", "79px", "79px", "115px", "120px", "125px"]}
        backgroundColor={"#174042"}
        // padding={"80px 0px"}
      >
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={["51px 20px 20px 20px", "51px 20px 20px 20px", "51px 20px 20px 20px", "80px 2.63% 80px 4.27%","80px 2.63% 80px 4.27%","80px 2.63% 80px 4.27%", ]}
          // margin={["51px 0px 0px 20px","51px 0px 0px 20px","78px 65px 0px 65px","78px 65px 0px 65px"]}
          gap={7}
        >
          <Flex
            flexDirection={["column", "column", "row"]}
            alignItems={["start", "start", "center", "center"]}
            gap={7}
          >
            <Text
              fontFamily={"Bossa-ExtendedBold"}
              fontSize={["24px", "24px", "24px", "31px", "40px", "48px"]}
              fontWeight={700}
              color={"white"}
            >
              Meet Our Team
            </Text>
            <Text
              fontFamily={"Bossa-Medium"}
              color={"#00D2AA"}
              fontSize={["14px", "14px", "20px"]}
              fontWeight={500}
              textDecoration={"underline"}
              textUnderlineOffset={["11px", "11px", "11px", "11px"]}
            >
              Leadership Team{" "}
            </Text>
          </Flex>
          <Flex
            alignItems={"center"}
            display={["none", "none", "none", "flex"]}
            gap={5}
          >
            <Flex
              onClick={() => goPrev()}
              _hover={{ backgroundColor: "#00D2AA" }}
              alignItems={"center"}
              justifyContent={"center"}
              border={"1px solid white"}
              borderStyle={"dashed"}
              borderRadius={"50%"}
              cursor={"pointer"}
            >
              <BsArrowLeft
                style={{
                  color: "white",
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
              border={"1px solid white"}
              borderStyle={"dashed"}
              borderRadius={"50%"}
              cursor={"pointer"}
            >
              <BsArrowRight
                style={{
                  color: "white",
                  height: "52px",
                  width: "52px",
                  padding: "11px",
                }}
              />
            </Flex>
          </Flex>
        </Flex>

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
              spaceBetween: 69,
            },
            1280: {
              slidesOffsetBefore: 60,
              spaceBetween: 89,
            },
            1536: {
              slidesOffsetBefore: 72,
              spaceBetween: 106,
            },
          }}
          ref={swiperRef}
          // navigation={true}
          className={style.swiper}
          modules={[Navigation]}
          observeParents={true}
          observer={true}
        >
          {data?.map((el) => (
            <SwiperSlide
              className={style.swiper_slide}
            >
              <Box paddingBottom={["50px", "50px", "50px", "80px", "80px", "80px"]} w={"fit-content"}>
                <Image
                // w={[""]}
                  height={["387px", "387px", "387px", "500px"]}
                  src={`${process.env.REACT_APP_BACKEND_URL}${el.attributes.avatar.data.attributes.url}`}
                  objectFit={"cover"}
                />
                <Text
                  fontFamily={"Bossa-Bold"}
                  mt={11}
                  fontWeight={700}
                  fontStyle={"normal"}
                  fontSize={["10px", "10px", "10px", "11px", "14px", "16px"]}
                  color={"white"}
                >
                  {el.attributes.name}
                </Text>
                <Text
                  fontFamily={"Bossa-Light"}
                  fontWeight={300}
                  fontStyle={"normal"}
                  fontSize={["9px", "9px", "9px", "10px", "12px", "14px"]}
                  color={"#B6B6B6"}
                >
                  {el.attributes.designation}
                </Text>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default MeetTeam_AU;
