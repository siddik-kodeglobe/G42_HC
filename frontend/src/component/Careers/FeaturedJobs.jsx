import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import jobsCSS from './FeaturedJobs.module.css'

// Import Swipper
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from "../AboutUs/OurPartner_Slider.module.css";
import axios from "axios";
import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/Services/icons/plus.svg";
import { useParams } from "react-router-dom";

const FeaturedJobs = () => {
  const swiperRef = React.useRef(null);
  const [data, setData] = useState([]);

  const { name } = useParams();

  const getData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/careers?populate=*`
    );
    // console.log(res.data.data);
    let temp = res.data.data;
    setMainContainerBackgroundColor(Array(temp.length).fill('white'))
    setData(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  const [mainContainerBackgroundColor, setMainContainerBackgroundColor] = useState();
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    const newColors = [...mainContainerBackgroundColor];
    newColors[index] = '#004141'; // Replace with your desired background color for this index
    setMainContainerBackgroundColor(newColors);
  };
  
  const handleMouseLeave = (index) => {
    setHoveredIndex(-1);
    const newColors = [...mainContainerBackgroundColor];
    newColors[index] = '#00D2AA';
    setMainContainerBackgroundColor(newColors);
  };
  return (
    <>
      <Box w={"100%"}>
        <Flex
          w={"100%"}
          padding={[
            "80px 20px 0px 20px",
            "80px 4.01% 0px 4.01%",
            "80px 4.01% 0px 4.01%",
            "81px 11.71% 0px 11.71%",
            "105px 11.71% 0px 11.71%",
            "125px 11.71% 0px 11.71%",
          ]}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text
            fontFamily={"Bossa-ExtendedBold"}
            color={"black"}
            fontWeight={700}
            fontSize={["30px", "30px", "30px", "40px", "50px", "60px"]}
            fontStyle={"normal"}
          >
            Featured Jobs
          </Text>
          <Button
            fontFamily={"Bossa-ExtendedMedium"}
            borderRadius={"80px"}
            padding={"15px 30px"}
            backgroundColor={"var(--Emergent-Green, #00D2AA)"}
            color={"white"}
            _hover={{backgroundColor: "var(--Emergent-Green, #00D2AA)"}}
            fontWeight={500}
            fontSize={["12px", "12px", "12px", "14px", "15px", "16px"]}
            fontStyle={"normal"}
          >
            More Jobs
          </Button>
        </Flex>
        <Box mt={["40px", "57px"]} paddingBottom={"15px"}>
            <Swiper
              slidesPerView={"auto"}
              breakpoints={{
                380: {
                  slidesOffsetBefore: 21,
                  // slidesPerView: 1.25,
                  spaceBetween: 11,
                },
                750: {
                  slidesOffsetBefore: 21,
                  // slidesPerView: 1.5,
                  spaceBetween: 11,
                },
                990: {
                  slidesOffsetBefore: 116,
                  // slidesPerView: 2.25,
                  spaceBetween: 13,
                },
                1250: {
                  slidesOffsetBefore: 149,
                  // slidesPerView: 2.5,
                  spaceBetween: 18,
                },
                1530: {
                  slidesOffsetBefore: 178,
                  // slidesPerView: 2.75,
                  spaceBetween: 21,
                },
              }}
              ref={swiperRef}
              // navigation={true}
              modules={[Navigation]}
              className={style.swiper}
            >
              {data?.map((el, ind) => (
                <SwiperSlide className={style.swiper_slide}>
                  <Box
                    backgroundColor={mainContainerBackgroundColor[ind]}
                    w={["338px", "338px", "338px", "338px", "393px", "472px"]}
                    h={["338px", "338px", "338px", "338px", "385px", "463px"]}
                    position={"relative"}
                  ></Box>

                  <Box left={5} right={5} bottom={5} position={"absolute"}>
                  
                    <Text
                      fontFamily={"Bossa-ExtendedBold"}
                      noOfLines={ind == hoveredIndex ? 4 : 2}
                      fontSize={ind == hoveredIndex ? "24px" : [
                        "32px",
                        "32px",
                        "32px",
                        "31px",
                        "40px",
                        "48px",
                      ]}
                      fontWeight={700}
                      // w={["338px", "338px", "338px", "338px", "393px", "472px"]}
                      w={"100%"}
                      lineHeight={"normal"}
                      fontStyle={"normal"}
                      textOverflow={"ellipsis"}
                      color={"white"}
                      // padding={}
                      
                    >
                      {ind == hoveredIndex ? el.attributes.info : el.attributes.title}
                    </Text>
                  </Box>

                  <Box
                    borderRadius={"50%"}
                    right={"5%"}
                    top={"5%"}
                    position={"absolute"}
                  >
                    <Box
                    onMouseEnter={() => handleMouseEnter(ind)}
                    onMouseLeave={() => handleMouseLeave(ind)}
                      h={["42px", "42px", "42px", "48px", "62px", "74px"]}
                      w={["42px", "42px", "42px", "48px", "62px", "74px"]}
                      className={jobsCSS.container}
                    >
                      <div className={jobsCSS.button}></div>
                    </Box>
                  </Box>

                  <Box position={"absolute"} top={30} left={30}>
                    <Text
                      fontFamily={"Bossa-ExtendedBold"}
                      fontSize={["20px","20px","20px", "26px","29px", "32px" ]}
                      color={"white"}
                    >
                      {/* {console.log(ind, ind.toString().length)} */}
                      {(ind < 9 & ind.toString().length == 1 )? `0${ind + 1}` : ind+1}
                    </Text>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
      </Box>
    </>
  );
};

export default FeaturedJobs;
