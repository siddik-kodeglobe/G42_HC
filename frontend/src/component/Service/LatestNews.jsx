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
import { useParams } from "react-router-dom";

const LatestNews = () => {
  const [data, setData] = useState([]);
  // const swiper = useSwiper();
  const swiperRef = React.useRef(null);

  const { name } = useParams();
  const getData = async () => {
    // console.log(`${process.env.REACT_APP_BACKEND_URL}/api/teams?populate=*`);
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/news-plural?filters[tag][$eq]=${name}&populate=*`
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
        maxW={"100%"}
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
          ]}
        >
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
        <Box w={"100%"} mt={["13px", "15px"]} marginBottom={"125px"}>
          <Swiper
            speed={750}
            slidesPerView={"auto"}
            breakpoints={{
              380: {
                slidesOffsetBefore: 21,
                // slidesPerView: 1.25,
                spaceBetween: 11,
              },
              768: {
                slidesOffsetBefore: 21,
                // slidesPerView: 1.75,
                spaceBetween: 11,
              },
              992: {
                slidesOffsetBefore: 116,
                // slidesPerView: 2.25,
                spaceBetween: 13,
              },
              1280: {
                slidesOffsetBefore: 149,
                // slidesPerView: 2.5,
                spaceBetween: 18,
              },
              1536: {
                slidesOffsetBefore: 178,
                // slidesPerView: 2.75,
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
              // ?.filter((el) => el.attributes.category == "Omics")
              ?.map((el) => (
                <SwiperSlide className={style.swiper_slide}>
                  <Box
                    w={["240px", "240px", "240px", "294px", "380px", "456px"]}
                    position={"relative"}
                  >
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
                      noOfLines={[2, 2, 2, 3, 3, 3]}
                      fontFamily={"Bossa-Medium"}
                      height={["60px", "60px", "60px", "62px", "80px", "96px"]}
                      maxHeight={["60px", "60px", "60px", "62px", "80px", "96px"]}
                      color={"white"}
                      fontSize={[
                        "12px",
                        "12px",
                        "12px",
                        "14px",
                        "16px",
                        "20px",
                      ]}
                      lineHeight={"normal"}
                      textOverflow={"ellipsis"}
                      marginBottom={"15px"}
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
