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

const DigitalHealth = () => {
  const [data, setData] = useState([]);
  const [hoverArrowColor, setHoverArrowColor] = useState("black");
  const [hoverArrowColorR, setHoverArrowColorR] = useState("black");
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
    //   console.log(res.data.data);
    let temp = await res.data.data?.filter(
      (el) => el.attributes.category == "Digital Health"
    );
    //   console.log(temp);
    setData(temp);
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
    const customFormattedDate = `${formattedDay} ${month},${year}`;
    return customFormattedDate;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box w={"100vw"} maxW={"100%"}>
        <Flex>
          <Flex
            flexDirection={["column", "row", "row", "row", "row", "row"]}
            w={"100%"}
            alignItems={["start", "start", "center", "center"]}
            justifyContent={"space-between"}
            padding={["40px 20px 0px  20px", "125px 3.94% 0px 3.94%"]}
            gap={["15px", "15px", "0px", "0px"]}
          >
            <Flex
              flexDirection={["column", "column", "row", "row"]}
              gap={["11px", "11px", "25px", "25px"]}
              alignItems={["start", "start", "center", "center"]}
            >
              <Text
                fontFamily={"Bossa-ExtendedBold"}
                color={"black"}
                fontSize={["24px", "24px", "60px", "60px"]}
                fontWeight={700}
                lineHeight={"normal"}
                textTransform={"capitalize"}
              >
                Digital Health
              </Text>
              <Flex
                cursor={"pointer"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"#00D2AA"}
                _hover={{bgColor: "#004141"}}
                color={"white"}
                // w={["128px", "128px", "182px", "182px"]}
                // h={["40px", "40px", "55px", "55px"]}
                borderRadius={"80px"}
              >
                <Text
                color={"white"}
                  fontFamily={"Bossa-ExtendedMedium"}
                  lineHeight={["11px", "11px", "22px", "22px"]}
                  textAlign={"center"}
                  fontSize={["12px", "12px", "16px", "16px"]}
                  textTransform={"capitalize"}
                  fontWeight={[400, 400, 500, 500]}
                  padding={"11px 21px"}
                  flexShrink={0}
                >
                  All Digital Health
                </Text>
              </Flex>
            </Flex>
            <Flex alignItems={"center"} gap={[2, 2, 5, 5]}>
              <Button
                onClick={() => goPrev()}
                // onClick={() => swiperRef.current.swiper.slidePrev()}
                _hover={{ backgroundColor: "#00D2AA" }}
                backgroundColor={"white"}
                onMouseOver={() => setHoverArrowColor("white")}
                onMouseOut={() => setHoverArrowColor("black")}
                alignItems={"center"}
                justifyContent={"center"}
                border={"1px solid black"}
                borderStyle={"dashed"}
                w={["45px", "45px", "52px", "52px"]}
                h={["45px", "45px", "52px", "52px"]}
                margin={0}
                padding={"11px"}
                borderRadius={"50%"}
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
                _hover={{ backgroundColor: "#00D2AA" }}
                backgroundColor={"white"}
                onMouseOver={() => setHoverArrowColorR("white")}
                onMouseOut={() => setHoverArrowColorR("black")}
                alignItems={"center"}
                justifyContent={"center"}
                border={"1px solid black"}
                borderStyle={"dashed"}
                w={["45px", "45px", "52px", "52px"]}
                h={["45px", "45px", "52px", "52px"]}
                margin={0}
                padding={"11px"}
                borderRadius={"50%"}
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
        </Flex>

        <Box mt={["20px", "20px", "20px", "33px", "44px", "52px"]}>
          <Swiper
            speed={750}
            slidesPerView={"auto"}
            breakpoints={{
              380: {
                slidesOffsetBefore: 21,

                spaceBetween: 0,
              },
              768: {
                slidesOffsetBefore: 30,
                spaceBetween: 0,
              },
              992: {
                slidesOffsetBefore: 39,

                spaceBetween: 0,
              },
              1280: {
                slidesOffsetBefore: 50,

                spaceBetween: 0,
              },
              1536: {
                slidesOffsetBefore: 60,

                spaceBetween: 0,
              },
            }}
            ref={swiperRef}
            // navigation={true}
            observeParents
            observer
            modules={[Navigation, FreeMode]}
            className={style.swiper}
          >
            {data?.map((el) => (
              <SwiperSlide key={el.id} className={style.swiper_slide}>
                <Box
                  textDecor={"none"}
                  padding={["40px 24px 52px 24px"]}
                  border={"1px solid #D9D9D9"}
                >
                  <Link href={`/news/${el.id}`}>
                    <Image
                      w={["301px", "301px", "301px", "465px", "465px"]}
                      h={["275px", "275px", "275px", "424px", "424px"]}
                      objectFit={"cover"}
                      maxW={"100%"}
                      src={`${process.env.REACT_APP_BACKEND_URL}${el.attributes.thumbnail.data.attributes.url}`}
                    />
                    <Text
                      fontFamily={"Bossa-Regular"}
                      noOfLines={1}
                      color={"#747272"}
                      fontSize={["9px", "9px", "14px", "14px"]}
                      fontWeight={500}
                      lineHeight={"31px"}
                      textTransform={"capitalize"}
                    >
                      {convertData(el.attributes.createdAt)}
                    </Text>

                    <Text
                      fontFamily={"Bossa-ExtendedBold"}
                      noOfLines={[2, 2, 2, 3, 3, 3]}
                      w={["301px", "301px", "301px", "465px", "465px"]}
                      maxW={"100%"}
                      color={"black"}
                      fontSize={[
                        "12px",
                        "12px",
                        "12px",
                        "14px",
                        "18px",
                        "20px",
                      ]}
                      fontWeight={700}
                      lineHeight={"31px"}
                      textTransform={"capitalize"}
                      textOverflow={"ellipsis"}
                    >
                      {el.attributes.title}
                    </Text>
                  </Link>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
};

export default DigitalHealth;
