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


import doubleSideArrow from '../../assets/icons/doubleSidedArrow.png'
import playBtn from '../../assets/icons/playBtn.svg'

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
      <Box style={{cursor: `url(${doubleSideArrow}), auto`}} paddingBottom={["80px", "80px", "90px", "103px"]}>
        <Box
          w={["100vw", "100vw", "98.7vw"]}
          bgGradient={
            "linear-gradient(180deg, #00D2AA 28.96%, rgba(0, 210, 170, 0.00) 100%);"
          }
        >
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            padding={["40px 15px 0px 15px", "40px 15px 0px 15px", "72px 60px 0px 20px", "72px 60px 0px 178px"]}
          >
            <Text
            fontFamily={"Bossa-ExtendedBold"}
              color={"white"}
              fontSize={["22px","22px","32px","32px"]}
              fontWeight={700}
            >
              News
            </Text>
            <Flex alignItems={"center"} gap={5}>
              <Button
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
                w={["32px","32px","42px","52px"]}
                h={["32px","32px","42px","52px"]}
               
                margin={0}
                padding={"11px"}
                borderRadius={"50%"}
                cursor={swiperRef.current?.swiper.isBeginning ? "not-allowed" : "pointer"}
                // disabled={swiperRef.current?.swiper.isBeginning}
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
                _hover={{ backgroundColor: "white" }}
                onMouseOver={() => setHoverArrowColorR("black")}
                onMouseOut={() => setHoverArrowColorR("white")}
                backgroundColor={"#00D2AA"}
                alignItems={"center"}
                justifyContent={"center"}
                border={"1px solid white"}
                borderStyle={"dashed"}
                w={["32px","32px","42px","52px"]}
                h={["32px","32px","42px","52px"]}
                margin={0}
                padding={"11px"}
                borderRadius={"50%"}
                cursor={swiperRef.current?.swiper.isEnd ? "not-allowed" : "pointer"}
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

          <Box  mt={["-27px", "-27px", "-25px"]}>
            <Swiper
            
            speed={750}
              breakpoints={{
                390: {
                  slidesPerView: 1.75,
                  slidesOffsetBefore: 15,
                  spaceBetween: 24,
                },
                1024: {
                  slidesOffsetBefore: 20,
                  slidesPerView: 2,
                  spaceBetween: 22,
                },
                1280: {
                  slidesOffsetBefore: 178,
                  slidesPerView: 2.75,
                  spaceBetween: 22,
                },
              }}
              ref={swiperRef}
              // navigation={true}
              freeMode={true}
              modules={[Navigation, FreeMode]}
              className={style.swiper}
              
            >
              {data?.map((el) => (
                <SwiperSlide className={style.swipe_slide}>
                  <Link href={`/news/${el.id}`}>
                  <Box backgroundSize={"cover"} 
                  w={["238px", "238px", "451px", "451px"]}
                   h={["179px", "179px", "338px", "338px"]} backgroundImage={`linear-gradient(0deg, rgba(0, 0, 0, 0.84) 0%, rgba(0, 0, 0, 0.00) 100%), url(${process.env.REACT_APP_BACKEND_URL}${el.attributes.thumbnail.data.attributes.url})`} position={"relative"}>
                    {/* <Image
                      w={["238px", "238px", "451px"]}
                      src={`${process.env.REACT_APP_BACKEND_URL}${el.attributes.thumbnail.data.attributes.url}`}
                    /> */}
                  </Box>
                  
                  <Box
                    w={["238px", "238px", "451px", "451px"]}
                    paddingRight={[8, 8, 9]}
                    position={"absolute"}
                    bottom={["-50px", "-50px", 1.5, 1.5]}
                    left={5}
                  >
                    <Text
                    fontFamily={"Bossa-Regular"}
                      noOfLines={2}
                      color={"white"}
                      fontSize={["7px", "7px", "14px"]}
                      fontWeight={500}
                      lineHeight={"normal"}
                      textOverflow={"ellipsis"}
                    >
                      {convertData(el.attributes.createdAt)}
                    </Text>
                    <Text
                    fontFamily={"Bossa-Medium"}
                    noOfLines={3}
                      mt={"5px"}
                      h={"96px"}
                      maxHeight={"96px"}
                      marginBottom={"15px"}
                      color={"white"}
                      fontSize={["10px", "10px", "15px", "20px"]}
                      fontWeight={500}
                      lineHeight={"normal"}
                      textOverflow={"ellipsis"}
                    >
                      {el.attributes.info}
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

export default News;
