import { Box, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

// link icon
import linkIcon from "../../assets/icons/linkIcon.svg";

// Import Swipper
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from "../AboutUs/OurPartner_Slider.module.css";

const CaseStudies = () => {
  const [data, setData] = useState([]);
  const swiperRef = React.useRef(null);

  const getData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/case-studies?populate=*`
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
      <Box>
        <Box
          mt={["80px", "80px", "80px", "115px", "115px", "115px"]}
          w={"100vw"}
          maxW={"100%"}
          borderTop={"1px solid rgba(0, 0, 0, 0.10)"}
          padding={[
            "80px 20px 0px 20px",
            "80px 20px 0px 20px",
            "80px 20px 0px 20px",
            "87px 11.71% 0px 11.71%",
            "87px 11.71% 0px 11.71%",
            "87px 11.71% 0px 11.71%",
          ]}
        >
          <Text
            fontFamily={"Bossa-ExtendedBold"}
            fontSize={["24px", "24px", "24px", "31px", "40px", "48px"]}
            fontWeight={700}
            lineHeight={"normal"}
          >
            Case Studies
          </Text>
          <Text
            fontFamily={"Bossa-Light"}
            w={["100%", "100%", "808px"]}
            fontSize={["12px", "12px", "12px", "12px", "15px", "18px"]}
            fontWeight={300}
            lineHeight={"normal"}
          >
            Harness data, develop artificial super intelligence and deliver
            innovative health solutions that leverage advanced technology and
            precision medicine to shape the future of healthcare
          </Text>
        </Box>

          <Box w={"100%"} mt={["13px", "15px"]}>
        <Swiper
        speed={750}
        slidesPerView={'auto'}
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
          ref={swiperRef}
          observeParents
          observer
          modules={[Navigation]}
          className={style.swiper}
        >
          {data?.map((el) => (
            <SwiperSlide
              className={style.swiper_slide}
            >
              <Box w={["240px","240px","240px", "294px", "380px", "456px"]}>
                <Box w={["240px","240px","240px", "294px", "380px", "456px"]} position={"relative"}>
                  <Image
                  w={["240px","240px","240px", "294px", "380px", "456px"]}
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

                {/* <Box
                  top={5}
                  left={5}
                  w={["12px", "12px", "32px"]}
                  position={"absolute"}
                >
                  <Image cursor={"pointer"} src={linkIcon} />
                </Box> */}

                <Box position={"absolute"} bottom={1} left={5}>
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
                  w={["240px","240px","240px", "294px", "380px", "456px"]}
                    fontFamily={"Bossa-Medium"}
                    noOfLines={2}
                    color={"white"}
                    fontSize={["12px", "12px", "12px", "14px", "16px", "20px"]}
                    fontWeight={500}
                    lineHeight={"normal"}
                    textOverflow={"ellipsis"}
                    height={["60px", "60px", "60px", "62px", "80px", "96px"]}
                  >
                    {el.attributes.title}
                  </Text>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        </Box>
      </Box>
    </>
  );
};

export default CaseStudies;
