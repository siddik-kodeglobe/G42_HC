import { Box, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import caretLeftIcon from "../../assets/icons/caretLeftIcon.svg";
// import { TweenLite, Sine, TimelineMax } from "gsap";
import { TweenLite, TimelineMax, Linear, Back, Sine } from "gsap";
import "./LatestInitiative.css";

const LatestInitiative = () => {
  const [data, setData] = useState([]);

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

  //showInfo
  const [firstInfo, setFirstInfo] = useState("");
  const [secondInfo, setSecondInfo] = useState("");
  const [thirdInfo, setThirdInfo] = useState("");

  const getData = async () => {
    // console.log(`${process.env.REACT_APP_BACKEND_URL}/api/teams?populate=*`);
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/latest-initiatives?populate=*`
    );
    // console.log("Latest Initiative:", res.data.data);
    setData(res.data.data);

    // initial Image
    setFirstImg(res.data.data[0].attributes.image.data.attributes.url);
    setSecondImg(res.data.data[1].attributes.image.data.attributes.url);
    setThirdImg(res.data.data[2].attributes.image.data.attributes.url);

    //outerImg
    firstImgRef.current = res.data.data[0].attributes.image.data.attributes.url;
    secondImgRef.current =
      res.data.data[1].attributes.image.data.attributes.url;
    thirdImgRef.current = res.data.data[2].attributes.image.data.attributes.url;

    // initial title
    setFirstTitle(res.data.data[0].attributes.name);
    setSecondTitle(res.data.data[1].attributes.name);
    setThirdTitle(res.data.data[2].attributes.name);

    // initial info
    setFirstInfo(res.data.data[0].attributes.info);
    setSecondInfo(res.data.data[1].attributes.info);
    setThirdInfo(res.data.data[2].attributes.info);
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
    animL2R()

    // initial title
    setFirstTitle(data[0].attributes.name);
    setSecondTitle(data[1].attributes.name);
    setThirdTitle(data[2].attributes.name);

    // initial info
    setFirstInfo(data[0].attributes.info);
    setSecondInfo(data[1].attributes.info);
    setThirdInfo(data[2].attributes.info);
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
    setFirstTitle(data[0].attributes.name);
    setSecondTitle(data[1].attributes.name);
    setThirdTitle(data[2].attributes.name);

    // initial info
    setFirstInfo(data[0].attributes.info);
    setSecondInfo(data[1].attributes.info);
    setThirdInfo(data[2].attributes.info);
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

    tl.to(outer, 1.5, { xPercent: 0, force3D: true, ease: Sine.easeInOut }, 0).to(
      inner,
      1.5,
      { xPercent: 0, force3D: true, ease: Sine.easeInOut },
      0
    );

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

    // if(outerRe)
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

    tl.to(outer, 1.5, { xPercent: 0, force3D: true, ease: Sine.easeInOut }, 0).to(
      inner,
      1.5,
      { xPercent: 0, force3D: true, ease: Sine.easeInOut },
      0
    );

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
      <Box display={["none", "none", "block"]} overflow={"hidden"} backgroundColor={"#174042"}>
        {/* heading  */}
        <Flex
          padding={["40px 15px 20px 15px", "95px 60px 20px 108px"]}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text
            color={"white"}
            fontFamily={"Bossa"}
            fontSize={"48px"}
            fontWeight={700}
            fontStyle={"normal"}
          >
            Latest <span style={{ color: "#00D2AA" }}>Initiatives</span>
          </Text>
          <Flex alignItems={"center"} gap={5}>
            <Flex
              onClick={scrollLeft}
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
              onClick={scrollRight}
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

        {/* slider  */}
        <Flex padding={"0px 30px 73px 108px"} w={"fit-content"} gap={"60px"}>
          {/* first container  */}
          <Box pos={"relative"} w={"406px"} mt={"136px"}>
            <Box id="wrapper">
              <Image
                src={`${process.env.REACT_APP_BACKEND_URL}${firstImgRef.current}`}
                alt=""
              />
            </Box>

            <Box id="outer" ref={outerRef}>
              <Box id="inner" ref={innerRef}>
                <Image
                  src={`${process.env.REACT_APP_BACKEND_URL}${firstImg}`}
                  id="top"
                />
              </Box>
            </Box>

            <Text
              mt={"0px"}
              color={"white"}
              fontFamily={"Bossa"}
              fontSize={["16px", "16px", "32px"]}
              fontWeight={700}
              lineHeight={"normal"}
              fontStyle={"normal"}
            >
              {firstTitle}
            </Text>
            <Text
              mt={"2.5px"}
              color={"white"}
              fontFamily={"Bossa"}
              fontSize={["8px", "8px", "16px"]}
              fontWeight={400}
              lineHeight={"normal"}
              fontStyle={"normal"}
            >
              {firstInfo}
            </Text>
            <Image
              position={"absolute"}
              top={2}
              right={2}
              backgroundColor={"white"}
              padding={"5px"}
              borderRadius={"50%"}
              src={caretLeftIcon}
            />
          </Box>

          {/* second container  */}
          <Box position={"relative"} mt={"56px"} w={"307px"}>
            <Box id="wrapper2">
              <Image
                src={`${process.env.REACT_APP_BACKEND_URL}${secondImgRef.current}`}
                alt=""
              />
            </Box>

            <Box id="outer2" ref={outerRef2}>
              <Box id="inner2" ref={innerRef2}>
                <Image
                  src={`${process.env.REACT_APP_BACKEND_URL}${secondImg}`}
                  id="top2"
                />
              </Box>
            </Box>

            <Text
              mt={"7px"}
              color={"white"}
              fontFamily={"Bossa"}
              fontSize={["16px", "16px", "32px"]}
              fontWeight={700}
              lineHeight={"normal"}
              fontStyle={"normal"}
            >
              {firstTitle}
            </Text>
            <Text
              mt={"2.5px"}
              color={"white"}
              fontFamily={"Bossa"}
              fontSize={["8px", "8px", "16px"]}
              fontWeight={400}
              lineHeight={"normal"}
              fontStyle={"normal"}
            >
              {firstInfo}
            </Text>
            <Image
              pos={"absolute"}
              top={2}
              right={2}
              backgroundColor={"white"}
              padding={"5px"}
              borderRadius={"50%"}
              src={caretLeftIcon}
            />
          </Box>

          {/* third container  */}
          <Box position={"relative"} mt={"247px"} w={"275px"}>
            <Box id="wrapper3">
              <Image
                src={`${process.env.REACT_APP_BACKEND_URL}${thirdImgRef.current}`}
                alt=""
              />
            </Box>

            <Box id="outer3" ref={outerRef3}>
              <Box id="inner3" ref={innerRef3}>
                <Image
                  src={`${process.env.REACT_APP_BACKEND_URL}${thirdImg}`}
                  id="top3"
                />
              </Box>
            </Box>

            <Text
              mt={"7px"}
              color={"white"}
              fontFamily={"Bossa"}
              fontSize={["16px", "16px", "32px"]}
              fontWeight={700}
              lineHeight={"normal"}
              fontStyle={"normal"}
            >
              {firstTitle}
            </Text>
            <Text
              mt={"2.5px"}
              color={"white"}
              fontFamily={"Bossa"}
              fontSize={["8px", "8px", "16px"]}
              fontWeight={400}
              lineHeight={"normal"}
              fontStyle={"normal"}
            >
              {firstInfo}
            </Text>
            <Image
              pos={"absolute"}
              top={2}
              right={2}
              backgroundColor={"white"}
              padding={"5px"}
              borderRadius={"50%"}
              src={caretLeftIcon}
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default LatestInitiative;
