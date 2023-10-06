import { Box, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import StrokeIcon from "../../assets/icons/yearStrokeIcon.svg";
import { AddIcon } from "@chakra-ui/icons";
import { TweenLite, TimelineMax, Linear, Back, Sine } from "gsap";

const Charting_AU = () => {
  const [data, setData] = useState([]);

  // year
  const [year, setYear] = useState("");

  //showImg
  const [firstImg, setFirstImg] = useState("");
  const [secondImg, setSecondImg] = useState("");
  const [thirdImg, setThirdImg] = useState("");

  // OuterImg
  const firstImgRef = useRef("");
  const secondImgRef = useRef("");
  const thirdImgRef = useRef("");

  //showTitle
  const [firstTitle, setFirstTitle] = useState("");
  const [secondTitle, setSecondTitle] = useState("");
  const [thirdTitle, setThirdTitle] = useState("");

  //showMonths
  const [firstMonth, setFirstMonth] = useState("");
  const [secondMonth, setSecondMonth] = useState("");
  const [thirdMonth, setThirdMonth] = useState("");

  const getData = async () => {
    // console.log(`${process.env.REACT_APP_BACKEND_URL}/api/teams?populate=*`);
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/charting-triumphs?populate=*`
    );
    // console.log("Charting Triump:", res.data.data);
    const temp = res.data.data;
    const sorted = temp.sort((a, b) =>
      a.attributes.date < b.attributes.date ? 1 : -1
    );
    // console.log("sorted", sorted);
    setData(sorted);

    // initial Image
    setFirstImg(sorted[0].attributes.image.data.attributes.url);
    setSecondImg(sorted[1].attributes.image.data.attributes.url);
    setThirdImg(sorted[2].attributes.image.data.attributes.url);

    //outerImg
    firstImgRef.current = res.data.data[0].attributes.image.data.attributes.url;
    secondImgRef.current =
      res.data.data[1].attributes.image.data.attributes.url;
    thirdImgRef.current = res.data.data[2].attributes.image.data.attributes.url;

    // initial title
    setFirstTitle(sorted[0].attributes.title);
    setSecondTitle(sorted[1].attributes.title);
    setThirdTitle(sorted[2].attributes.title);

    // initial info
    setFirstMonth(sorted[0].attributes.date);
    setSecondMonth(sorted[1].attributes.date);
    setThirdMonth(sorted[2].attributes.date);
  };

  const scrollLeft = () => {
    const temp = data;
    temp.unshift(temp.pop());
    setData(temp);

    // change outer image
    firstImgRef.current = firstImg;
    secondImgRef.current = secondImg;
    thirdImgRef.current = thirdImg;

    // initial Image
    setFirstImg(data[0].attributes.image.data.attributes.url);
    setSecondImg(data[1].attributes.image.data.attributes.url);
    setThirdImg(data[2].attributes.image.data.attributes.url);
    animL2R();

    // initial title
    setFirstTitle(data[0].attributes.title);
    setSecondTitle(data[1].attributes.title);
    setThirdTitle(data[2].attributes.title);

    // initial info
    setFirstMonth(data[0].attributes.date);
    setSecondMonth(data[1].attributes.date);
    setThirdMonth(data[2].attributes.date);
  };

  const scrollRight = () => {
    const temp = data;
    temp.push(temp.shift());
    setData(temp);

    // Change Outer Image
    firstImgRef.current = firstImg;
    secondImgRef.current = secondImg;
    thirdImgRef.current = thirdImg;

    // initial Image
    setFirstImg(data[0].attributes.image.data.attributes.url);
    setSecondImg(data[1].attributes.image.data.attributes.url);
    setThirdImg(data[2].attributes.image.data.attributes.url);
    animR2L();

    // initial title
    setFirstTitle(data[0].attributes.title);
    setSecondTitle(data[1].attributes.title);
    setThirdTitle(data[2].attributes.title);

    // initial info
    setFirstMonth(data[0].attributes.date);
    setSecondMonth(data[1].attributes.date);
    setThirdMonth(data[2].attributes.date);
  };

  const getMonthName = (dateString) => {
    const date = new Date(dateString);
    const monthName = date.toLocaleString("default", { month: "long" });
    return monthName;
  };

  const getYearName = (dateString) => {
    const date = new Date(dateString);
    const yearNum = date.getFullYear();
    return yearNum;
  };

  useEffect(() => {
    getData();
  }, []);

  // Slides Transition

  const outerRef = useRef(null);
  const innerRef = useRef(null);

  // Second Outer Box Ref
  const outerRef2 = useRef(null);
  const innerRef2 = useRef(null);

  // Third Outer Box Ref
  const outerRef3 = useRef(null);
  const innerRef3 = useRef(null);

  const animR2L = () => {
    const outer = outerRef.current;
    const inner = innerRef.current;

    //first Box Animation
    TweenLite.set(outer, { xPercent: 100, autoAlpha: 1 });
    TweenLite.set(inner, { xPercent: -100, autoAlpha: 1 });

    var tl = new TimelineMax();
    // alert(tl)
    // console.log("jiff",tl);
    // console.log("jiff");

    tl.to(
      outer,
      1.5,
      { xPercent: 0, force3D: true, ease: Sine.easeInOut },
      0
    ).to(inner, 1.5, { xPercent: 0, force3D: true, ease: Sine.easeInOut }, 0);

    // 2nd Box Animation
    TweenLite.set(outerRef2.current, { xPercent: 100, autoAlpha: 1 });
    TweenLite.set(innerRef2.current, { xPercent: -100, autoAlpha: 1 });

    var tl = new TimelineMax();

    tl.to(
      outerRef2.current,
      1.5,
      { xPercent: 0, force3D: true, ease: Sine.easeInOut },
      0
    ).to(
      innerRef2.current,
      1.5,
      { xPercent: 0, force3D: true, ease: Sine.easeInOut },
      0
    );

    // 3rd Box Animation
    TweenLite.set(outerRef3.current, { xPercent: 100, autoAlpha: 1 });
    TweenLite.set(innerRef3.current, { xPercent: -100, autoAlpha: 1 });

    var tl = new TimelineMax();

    tl.to(
      outerRef3.current,
      1.5,
      { xPercent: 0, force3D: true, ease: Sine.easeInOut },
      0
    ).to(
      innerRef3.current,
      1.5,
      { xPercent: 0, force3D: true, ease: Sine.easeInOut },
      0
    );
  };

  const animL2R = () => {
    const outer = outerRef.current;
    const inner = innerRef.current;

    //first Box Animation
    TweenLite.set(outer, { xPercent: -100, autoAlpha: 1 });
    TweenLite.set(inner, { xPercent: 100, autoAlpha: 1 });

    var tl = new TimelineMax();

    tl.to(
      outer,
      1.5,
      { xPercent: 0, force3D: true, ease: Sine.easeInOut },
      0
    ).to(inner, 1.5, { xPercent: 0, force3D: true, ease: Sine.easeInOut }, 0);

    // 2nd Box Animation
    TweenLite.set(outerRef2.current, { xPercent: -100, autoAlpha: 1 });
    TweenLite.set(innerRef2.current, { xPercent: 100, autoAlpha: 1 });

    var tl = new TimelineMax();

    tl.to(
      outerRef2.current,
      1.5,
      { xPercent: 0, force3D: true, ease: Sine.easeInOut },
      0
    ).to(
      innerRef2.current,
      1.5,
      { xPercent: 0, force3D: true, ease: Sine.easeInOut },
      0
    );

    // 3rd Box Animation

    // if(outerRe)
    TweenLite.set(outerRef3.current, { xPercent: -100, autoAlpha: 1 });
    TweenLite.set(innerRef3.current, { xPercent: 100, autoAlpha: 1 });

    var tl = new TimelineMax();

    tl.to(
      outerRef3.current,
      1.5,
      { xPercent: 0, force3D: true, ease: Sine.easeInOut },
      0
    ).to(
      innerRef3.current,
      1.5,
      { xPercent: 0, force3D: true, ease: Sine.easeInOut },
      0
    );
  };

  return (
    <>
      <Box
        overflow={"hidden"}
        w={"100vw"}
        maxW={"100%"}
        display={["none", "none", "none", "block"]}
      >
        <Box
          position={"relative"}
          background={
            "linear-gradient(0deg, #00AFFF 0%, rgba(0, 175, 255, 0.00) 100%)"
          }
          padding={["135px 65px 0px 65px"]}
          h={"700px"}
        >
          <Flex
            flexDirection={["column", "column", "row"]}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={7}
          >
            <Text
              fontFamily={"Bossa-ExtendedBold"}
              fontWeight={700}
              fontSize={32}
            >
              Charting Triumph
            </Text>
            <Flex alignItems={"center"} gap={5}>
              <Flex
                onClick={scrollLeft}
                _hover={{ backgroundColor: "#00afff" }}
                alignItems={"center"}
                justifyContent={"center"}
                border={"1px solid black"}
                borderStyle={"dashed"}
                borderRadius={"50%"}
                cursor={"pointer"}
              >
                <BsArrowLeft
                  style={{
                    color: "black",
                    height: "52px",
                    width: "52px",
                    padding: "11px",
                    cursor: "pointer",
                  }}
                />
              </Flex>
              <Flex
                onClick={scrollRight}
                _hover={{ backgroundColor: "#00afff" }}
                alignItems={"center"}
                justifyContent={"center"}
                border={"1px solid black"}
                borderStyle={"dashed"}
                borderRadius={"50%"}
                cursor={"pointer"}
              >
                <BsArrowRight
                  style={{
                    color: "black",
                    height: "52px",
                    width: "52px",
                    padding: "11px",
                  }}
                />
              </Flex>
            </Flex>
          </Flex>

          {/* Slider  */}

          {/* container  */}
          <Flex
            position={"absolute"}
            bottom={["35px"]}
            left={"395px"}
            right={0}
          >
            {/* 1st Box  */}
            <Box
              zIndex={5}
              h={["256px", "256px", "364px"]}
              w={["318px", "318px", "452px"]}
              backgroundColor={"white"}
            >
              <Flex
                padding={"7.5px 24px 0px 21px"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Text
                  fontFamily={"Bossa-Regular"}
                  fontSize={"32px"}
                  fontWeight={400}
                  fontStyle={"normal"}
                >
                  {getMonthName(firstMonth)}
                </Text>
                <AddIcon
                  cursor={"pointer"}
                  color={"black"}
                  w={["27px"]}
                  h={["27px"]}
                  padding={"4.14px"}
                  border={"1px solid black"}
                  borderRadius={"50%"}
                />
              </Flex>

              {/* 1st box wrapper image */}
              <Box position={"relative"} id="wrapper">
                <Image
                  src={`${process.env.REACT_APP_BACKEND_URL}${firstImgRef.current}`}
                  alt="img1"
                  padding={"10px"}
                  width={"100%"}
                  height={["235px"]}
                  objectFit={"cover"}
                />

                <Box
                  id="outer"
                  ref={outerRef}
                  pos={"absolute"}
                  // top={14}
                  top={0}
                  overflow={"hidden"}
                  objectFit={"cover"}
                  h={["256px", "256px", "364px"]}
                  w={["318px", "318px", "452px"]}
                  visibility={"hidden"}
                  opacity={0}
                >
                  <Box
                    id="inner"
                    ref={innerRef}
                    h={["256px", "256px", "364px"]}
                    w={["318px", "318px", "452px"]}
                    objectFit={"cover"}
                    visibility={"hidden"}
                    opacity={0}
                  >
                    <Image
                      id={"top"}
                      padding={["10px"]}
                      w={["100%"]}
                      h={["236px"]}
                      maxW={"100%"}
                      maxH={"100%"}
                      objectFit={"cover"}
                      src={`${process.env.REACT_APP_BACKEND_URL}${firstImg}`}
                    />
                  </Box>
                </Box>
              </Box>

              <Text
                fontFamily={"Bossa-Regular"}
                padding={"0px 10px 10px 10px"}
                noOfLines={2}
                fontSize={"24px"}
                fontWeight={400}
                fontStyle={"normal"}
              >
                {firstTitle}
              </Text>
            </Box>

            {/* 2nd Box  */}
            <Box
              zIndex={4}
              marginLeft={"-4%"}
              mt={"8%"}
              h={["256px", "256px", "263px"]}
              w={["318px", "318px", "291px"]}
              backgroundColor={"white"}
            >
              <Flex
                padding={"7.5px 24px 0px 21px"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Text
                  fontFamily={"Bossa-Regular"}
                  color={"#747272"}
                  fontSize={"24px"}
                  fontWeight={400}
                  fontStyle={"normal"}
                >
                  {getMonthName(secondMonth)}
                </Text>
                <AddIcon
                  cursor={"pointer"}
                  color={"black"}
                  w={["27px"]}
                  h={["27px"]}
                  padding={"4.14px"}
                  border={"1px solid black"}
                  borderRadius={"50%"}
                />
              </Flex>

              {/* box2 animation  */}
              <Box position={"relative"} id="wrapper2">
                <Image
                  src={`${process.env.REACT_APP_BACKEND_URL}${secondImgRef.current}`}
                  alt="img1"
                  padding={"10px"}
                  width={"100%"}
                  height={["164px"]}
                  objectFit={"cover"}
                />

                <Box
                  id="outer2"
                  ref={outerRef2}
                  pos={"absolute"}
                  // top={14}
                  top={0}
                  overflow={"hidden"}
                  objectFit={"cover"}
                  w={["100%"]}
                  h={["256px", "256px", "364px"]}
                  visibility={"hidden"}
                  opacity={0}
                >
                  <Box
                    id="inner2"
                    ref={innerRef2}
                    h={["164px", "164px", "164px"]}
                    w={["100%"]}
                    objectFit={"cover"}
                    visibility={"hidden"}
                    opacity={0}
                  >
                    <Image
                      padding={["10px"]}
                      w={["100%"]}
                      h={["164px"]}
                      maxW={"100%"}
                      maxH={"164px"}
                      objectFit={"cover"}
                      src={`${process.env.REACT_APP_BACKEND_URL}${secondImg}`}
                    />
                  </Box>
                </Box>
              </Box>

              <Text
                fontFamily={"Bossa-Regular"}
                color={"#747272"}
                padding={"0px 10px 10px 10px"}
                noOfLines={2}
                fontSize={"18px"}
                fontWeight={400}
                fontStyle={"normal"}
              >
                {secondTitle}
              </Text>
            </Box>

            {/* 3rd Box  */}
            <Box
              zIndex={3}
              marginLeft={"-5%"}
              mt={"14%"}
              h={["256px", "256px", "164px"]}
              w={["318px", "318px", "182px"]}
              backgroundColor={"white"}
            >
              <Flex
                padding={"7.5px 8px 0px 21px"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Text
                  fontFamily={"Bossa-Regular"}
                  color={"#747272"}
                  fontSize={"16px"}
                  fontWeight={400}
                  fontStyle={"normal"}
                >
                  {getMonthName(thirdMonth)}
                </Text>
                <AddIcon
                  cursor={"pointer"}
                  color={"black"}
                  w={["18px"]}
                  h={["18px"]}
                  padding={"4.14px"}
                  border={"1px solid black"}
                  borderRadius={"50%"}
                />
              </Flex>

              {/* box3 image animation  */}
              <Box position={"relative"} id="wrapper3">
                <Image
                  src={`${process.env.REACT_APP_BACKEND_URL}${thirdImgRef.current}`}
                  alt="img3"
                  padding={"10px"}
                  width={"100%"}
                  h={["256px", "256px", "95px"]}
                  objectFit={"cover"}
                />

                <Box
                  id="outer3"
                  ref={outerRef3}
                  pos={"absolute"}
                  // top={14}
                  top={0}
                  overflow={"hidden"}
                  objectFit={"cover"}
                  w={["100%"]}
                  h={["256px", "256px", "95px"]}
                  visibility={"hidden"}
                  opacity={0}
                >
                  <Box
                    id="inner3"
                    ref={innerRef3}
                    h={["256px", "256px", "95px"]}
                    w={["100%"]}
                    objectFit={"cover"}
                    visibility={"hidden"}
                    opacity={0}
                  >
                    <Image
                      padding={["10px"]}
                      w={["100%"]}
                      h={["256px", "256px", "95px"]}
                      maxW={"100%"}
                      maxH={"95px"}
                      objectFit={"cover"}
                      src={`${process.env.REACT_APP_BACKEND_URL}${thirdImg}`}
                    />
                  </Box>
                </Box>
              </Box>


              <Text
                fontFamily={"Bossa-Regular"}
                color={"#747272"}
                padding={"0px 10px 10px 10px"}
                noOfLines={1}
                isTruncated
                overflow={"hidden"}
                fontSize={"14px"}
                fontWeight={400}
                fontStyle={"normal"}
              >
                {thirdTitle}
              </Text>
            </Box>
          </Flex>

          {/* year text  */}
          <Flex
            fontFamily={"Bossa-ExtendedBlack"}
            position={"absolute"}
            bottom={"242px"}
            left={"95px"}
            alignItems={"center"}
          >
            <Text color={"white"} fontSize={"60px"} fontWeight={"normal"}>
              {getYearName(firstMonth)}
            </Text>
            <Image w={"39px"} src={StrokeIcon} />
          </Flex>

          {/* year horizontal line  */}
          <Box
            position={"absolute"}
            bottom={"0px"}
            left={["182px"]}
            h={["228px"]}
            w={["5px"]}
            backgroundColor={"white"}
          ></Box>

          {/* active month horizontal line  */}
          <Box
            position={"absolute"}
            bottom={"0px"}
            left={["625px"]}
            h={["35px"]}
            w={["5px"]}
            backgroundColor={"white"}
          ></Box>

          {/* bottom line  */}
          <Box
            position={"absolute"}
            bottom={"0px"}
            right={"0px"}
            w={["92%"]}
            border={"3px solid white"}
          ></Box>
        </Box>

        <Box
          h={"106px"}
          background={
            "linear-gradient(180deg, #00AFFF 0%, rgba(0, 175, 255, 0.00) 100%)"
          }
          w={"100%"}
        ></Box>
      </Box>
    </>
  );
};

export default Charting_AU;
