import { Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

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

const LatestNews = () => {
  const [data, setData] = useState([]);
  // const swiper = useSwiper();
  const swiperRef = React.useRef(null);

  const getData = async () => {
    // console.log(`${process.env.REACT_APP_BACKEND_URL}/api/teams?populate=*`);
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/news-plural?populate=*`
    );
    setData(res.data.data);
  };

  const convertDate = (inputDateString) => {
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
        mt={["80px", "80px", "80px", "88px", "88px", "88px"]}
        w={"100vw"}
        maxw={"100%"}
        
      >
        <Box 
        paddingTop={["72px"]}
        borderTop={"1px solid #747272"}
        margin={[
          "80px 20px 0px 20px",
          "80px 20px 0px 20px",
          "80px 20px 0px 20px",
          "72px 11.71% 0px 11.71%",
          "72px 11.71% 0px 11.71%",
          "72px 11.71% 0px 11.71%",
        ]}>
          <Text
            fontFamily={"Bossa-ExtendedBold"}
            fontSize={["24px", "24px", "48px"]}
            fontWeight={700}
            lineHeight={"normal"}
            fontStyle={"normal"}
          >
            Latest News
          </Text>
        </Box>
        <Box w={"100%"} marginBottom={"125px"}>
          <Swiper
            breakpoints={{
              380: {
                slidesOffsetBefore: 21,
                slidesPerView: 1.25,
                spaceBetween: 11,
              },
              750: {
                slidesOffsetBefore: 21,
                slidesPerView: 1.75,
                spaceBetween: 11,
              },
              990: {
                slidesOffsetBefore: 116,
                slidesPerView: 2.25,
                spaceBetween: 13,
              },
              1250: {
                slidesOffsetBefore: 149,
                slidesPerView: 2.5,
                spaceBetween: 18,
              },
              1530: {
                slidesOffsetBefore: 178,
                slidesPerView: 2.75,
                spaceBetween: 21,
              },
            }}
            observeParents
            observer
            ref={swiperRef}
            modules={[Navigation, FreeMode]}
            className={style.swiper}
          >
            {data
              ?.filter((el) => el.attributes.category == "Omics")
              ?.map((el) => (
                <SwiperSlide
                  style={{ width: "29.69%" }}
                  className={style.swipe_slide}
                >
                  <Box w={"100%"} position={"relative"}>
                    <Image
                      w={"100%"}
                      height={[
                        "208px",
                        "208px",
                        "218px",
                        "218px",
                        "282px",
                        "338px",
                      ]}
                      objectFit={"cover"}
                      src={`${process.env.REACT_APP_BACKEND_URL}${el.attributes.thumbnail.data.attributes.url}`}
                    />
                  </Box>
                  <Box
                    w={"100%"}
                    paddingRight={[8, 8, 9]}
                    position={"absolute"}
                    bottom={1.5}
                    left={5}
                  >
                    <Text
                      fontFamily={"Bossa-Regular"}
                      noOfLines={2}
                      color={"white"}                      
                      fontSize={[
                        "7.5px",
                        "7.5px",
                        "7.5px",
                        "9px",
                        "12px",
                        "14px",
                      ]}
                      fontWeight={400}
                      lineHeight={"normal"}
                    >
                      {convertDate(el.attributes.createdAt)}
                    </Text>
                    <Text
                      fontFamily={"Bossa-Medium"}
                      noOfLines={2}
                      color={"white"}
                    fontSize={["12px", "12px", "12px", "14px", "16px", "20px"]}
                      fontWeight={500}
                      lineHeight={"normal"}
                    height={["60px", "60px", "60px", "62px", "80px", "96px"]}
                    >
                      {el.attributes.info}
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

export default LatestNews;
