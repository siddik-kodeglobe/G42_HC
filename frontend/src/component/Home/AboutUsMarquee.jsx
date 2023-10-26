import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import aboutImage from "../../assets/temp/about_HomePage.svg";
import Marquee from "react-fast-marquee";
import ReactPlayer from "react-player";
import homeVideo from "../../assets/logo/homeVideo.mp4";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GSDevTools } from "gsap/GSDevTools";
import FontFaceObserver from "fontfaceobserver";

import g42Video from "../../assets/temp/Video/G42 Video.mp4";
import BackgroundVideoContainer from "../BackgroundVideo/BackgroundVideoContainer";
import { isMobile, isTablet } from "react-device-detect";

const AboutUsMarquee = () => {
  gsap.registerPlugin(GSDevTools, SplitText, ScrollTrigger);

  const [isVisible, setIsVisible] = useState(false);

  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(SplitText);

    let split;
    let tl;

    let split2;
    let t2;

    const sectionElement1 = sectionRef1.current;
    const sectionElement2 = sectionRef2.current;

    function init() {
      gsap.set(".fullScreen", { autoAlpha: 1 });

      if (split) {
        split.revert();
      }

      split = new SplitText(".title", {
        charsClass: "chars",
        linesClass: "lines",
      });
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionElement1,
          start: "bottom center+=50%", // Adjust this as needed
          // end: 'bottom center', // Adjust this as needed
          scrub: false, // Smoothly transition the animation
          markers: false, // Remove this in production
        },
      });

      split.lines.forEach((line, index) => {
        const chars = line.querySelectorAll(".chars");
        tl.from(
          chars,
          { duration: 0.3, yPercent: 75, stagger: 0.007, opacity: 0 },
          ">-40%"
        );
        tl.to(chars, { duration: 0.3, yPercent: 7, stagger: 0.007 }, ">-40%");
      });

      // text2
      gsap.set(".aboutUsText2", { autoAlpha: 1 });

      if (split2) {
        split2.revert();
      }

      split2 = new SplitText(".text2", {
        charsClass: "chars",
        linesClass: "lines",
      });

      t2 = gsap.timeline({
        scrollTrigger: {
          trigger: sectionElement2,
          start: "bottom center+=50%",
          // end: 'bottom center',
          scrub: false, // Smoothly transition the animation
          markers: false, // Remove this in production
        },
      });

      split2.lines.forEach((line, index) => {
        const chars2 = line.querySelectorAll(".chars");
        t2.from(
          chars2,
          { duration: 0.3, yPercent: 75, stagger: 0.007, opacity: 0 },
          ">-40%"
        );
        t2.to(chars2, { duration: 0.3, yPercent: 7, stagger: 0.007 }, ">-40%");
      });
    }

    let timeout; // holder for timeout id
    const delay = 250; // delay after event is "complete" to run callback

    // Debounce function
    function debounce(func, wait) {
      let timeout;
      return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          func.apply(context, args);
        }, wait);
      };
    }

    // Window resize event listener with debounce
    window.addEventListener(
      "resize",
      debounce(() => {
        gsap.set(".fullScreen", { autoAlpha: 0 });
        clearTimeout(timeout);
        timeout = setTimeout(init, delay);
      }, 250)
    );

    // Window resize event listener with debounce
    window.addEventListener(
      "resize",
      debounce(() => {
        gsap.set(".aboutUsText2", { autoAlpha: 0 });
        clearTimeout(timeout);
        timeout = setTimeout(init, delay);
      }, 250)
    );

    const font = new FontFaceObserver("Bossa-Light");

    font
      .load()
      .then(() => {
        // Font is loaded, you can run your code here
        // Initial call to init
        init();
      })
      .catch((error) => {
        console.error("Font could not be loaded:", error);
      });
  }, []);

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Box
        w={"100vw"}
        maxW={"100%"}
        mt={["18px", "18px", "18px", "18px", "20px", "21px"]}
      >
        <Marquee autoFill>
          <Flex
            alignItems={"center"}
            gap={["29px", "29px", "29px", "34px", "34px", "34px"]}
          >
            <hr
              style={{
                width: "88px",
                border: "1px solid black",
                margin: "auto",
              }}
            />

            <Text
              fontFamily={"Bossa-ExtendedBold"}
              textAlign={"center"}
              fontSize={["32px", "32px", "32px", "39px", "50px", "60px"]}
              fontWeight={700}
            >
              About G42 Healthcare
            </Text>
            <hr
              style={{
                width: "88px",
                border: "1px solid black",
                margin: "auto",
              }}
            />
          </Flex>
        </Marquee>

        <Flex
          flexDirection={["column", "column", "column", "row", "row", "row"]}
          mt={["60px", "60px", "60px", "65px", "84px", "101px"]}
          padding={[
            "0px 20px",
            "0px 20px",
            "0px 20px",
            "0px 11.71%",
            "0px 11.71%",
            "0px 11.71%",
          ]}
          gap={["60px", "60px", "60px", "60px", "75px", "90px"]}
          alignItems={["self-start", "self-start", "start", "start"]}
        >
          <Box
            w={["100%", "100%", "100%", "50%", "50%", "50%"]}
            height={isMobile ? "214px" : isTablet ? "220px" : "337px"}
            position={"relative"}
          >
            <BackgroundVideoContainer videosrc={g42Video} height={"100%"} />
          </Box>
          <Flex
            w={["100%", "100%", "100%", "50%", "50%", "50%"]}
            // mt={["33px", "33px", "33px", "0px", "0px", "0px"]}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Box
              w={"100%"}
              ref={sectionRef1}
              className={`fullScreen demo ${isVisible ? "visible" : "hidden"}`}
            >
              <Text
                fontFamily={"Bossa-Light"}
                fontSize={["12px", "12px", "12px", "12px", "15px", "18px"]}
                fontStyle={"normal"}
                lineHeight={["18px", "18px", "18px", "24px", "24px", "24px"]}
                color={"#747272"}
                letterSpacing={"-0.42px"}
                className="title"

                // onClick={toggleVisibility}
              >
                G42 Healthcare, a leading health-tech company, is on a mission
                to develop a world-class healthcare sector in the UAE and
                beyond, by harnessing data and advanced medical technologies to
                unlock the potential of personalized and preventive care.
              </Text>
            </Box>

            <Box
              w={"100%"}
              ref={sectionRef2}
              className={`aboutUsText2 demo ${
                isVisible ? "visible" : "hidden"
              }`}
            >
              <Text
                mt={["15px"]}
                fontFamily={"Bossa-Light"}
                fontSize={["12px", "12px", "12px", "12px", "15px", "18px"]}
                fontStyle={"normal"}
                lineHeight={["18px", "18px", "18px", "24px", "24px", "24px"]}
                color={"#747272"}
                letterSpacing={"-0.42px"}
                // visibility={"hidden"}
                className="text2"
              >
                At the cutting edge of innovation, G42 Healthcare spearheads
                revolutionary healthcare at all stages of the value chain, from
                clinical research, drug discovery, omics, precision diagnostics
                to drug development and beyond. Our unwavering commitment to
                future technologies such as artificial intelligence, drives
                breakthrough therapies, cutting-edge diagnoses, and
                transformative health system strategies.
              </Text>
            </Box>
            <Link href="/about">
              <Button
                fontFamily={"Bossa-ExtendedMedium"}
                mt={"16px"}
                _hover={{ bgColor: "#00D2AA" }}
                bgColor={"#00D2AA"}
                borderRadius={"80px"}
                fontSize={["14px", "14px", "14px", "14px", "15px", "16px"]}
                fontStyle={"normal"}
                fontWeight={500}
                textTransform={"capitalize"}
                textAlign={"center"}
                color={"white"}
                w={["167px", "167px", "167px", "167px", "184px", "219px"]}
                h={["40px", "40px", "40px", "40px", "46px", "55px"]}
              >
                About Us
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default AboutUsMarquee;
