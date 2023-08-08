import { Box, Flex, Text, Image } from "@chakra-ui/react";
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

const News = () => {
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
      `${process.env.REACT_APP_BACKEND_URL}/api/news-plural?populate=*`
    );
    console.log(res.data.data);
    setData(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    <Box >
      <Box
        w={["100vw", "100vw", "98.7vw"]}
        bgGradient={
          "linear-gradient(180deg, #00D2AA 28.96%, rgba(0, 210, 170, 0.00) 100%);"
        }
      >
        <Flex justifyContent={"space-between"} padding={["40px 15px 20px 15px","72px 60px 33px 178px"]}>
          <Text
            color={"white"}
            fontFamily={"Bossa"}
            fontSize={"32px"}
            fontWeight={700}
          >
            News
          </Text>
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

        <Box padding={"15px"}>
          <Swiper
            // slidesPerView={2.75}
            breakpoints={{
              1024: {
                slidesPerView: 2.75,
                spaceBetween:44,
              },
              390: {
                slidesPerView: 1.5,
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
                
                <Box position={"relative"}>
                  <Image
                  w={["238px", "238px", "451px"]}
                    src={`${process.env.REACT_APP_BACKEND_URL}${el.attributes.thumbnail.data.attributes.url}`}
                  />
                </Box>
                <Box w={["238px", "238px", "451px"]} paddingRight={[8, 8, 9]} position={"absolute"} bottom={1.5} left={5}>
                  <Text
                    noOfLines={2}
                    color={"white"}
                    fontFamily={"Bossa"}
                    fontSize={["7px", "7px", "14px"]}
                    fontWeight={500}
                    lineHeight={"normal"}
                  >
                    {el.attributes.createdAt}
                  </Text>
                  <Text
                  noOfLines={2}
                    color={"white"}
                    fontFamily={"Bossa"}
                    fontSize={["10px", "10px", "20px"]}
                    fontWeight={500}
                    lineHeight={"normal"}
                  >
                    {el.attributes.info}
                  </Text>
                </Box>
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
