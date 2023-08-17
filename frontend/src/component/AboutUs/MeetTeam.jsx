
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


import style from "./OurPartner_Slider.module.css";

const MeetTeam = () => {
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
      `${process.env.REACT_APP_BACKEND_URL}/api/teams?populate=*`
    );
    console.log(res.data.data);
    setData(res.data.data);
  };
  
  useEffect(() => {
    getData();
    
  }, []);
  return (
    <div style={{ backgroundColor: "#174042", padding: "2% 0%" }}>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        margin="78px 10% 0px 10%"
        gap={7}
      >
        <Flex alignItems={"center"} gap={7}>
          <Text
            fontFamily={"Bossa"}
            fontSize={50}
            fontWeight={700}
            color={"white"}
          >
            Meet Our Team
          </Text>
          <Text
            color={"#00D2AA"}
            fontFamily={"Bossa"}
            fontSize={20}
            fontWeight={500}
            textDecoration={"underline"}
          >
            Leadership Team{" "}
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={5}>
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
                cursor: "pointer"
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
                padding: "11px"
              }}
            />
          </Flex>
        </Flex>
      </Flex>


      <Swiper
      breakpoints={{
        1024: {
          slidesOffsetBefore: 125,
          slidesPerView: 2.5,
          spaceBetween:44,
        },
        390: {
          slidesPerView: 1.5,
          slidesOffsetBefore: 15
          // spaceBetween:22,
        },
      }}
        ref={swiperRef}
        // navigation={true}
        modules={[Navigation]}
        className={style.swiper}
      >
        {data?.map((el) => (
          <SwiperSlide className={style.swipe_slide}>
            <Box w={"fit-content"}>
              <Image
                height={500}
                src={`${process.env.REACT_APP_BACKEND_URL}${el.attributes.avatar.data.attributes.url}`}
              />
              <Text
                mt={11}
                fontFamily={"Bossa"}
                fontWeight={700}
                fontStyle={"normal"}
                fontSize={16}
                color={"white"}
              >
                {el.attributes.name}
              </Text>
              <Text
                fontFamily={"Bossa"}
                fontWeight={300}
                fontStyle={"normal"}
                fontSize={14}
                color={"#B6B6B6"}
              >
                {el.attributes.designation}
              </Text>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MeetTeam;
