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
      <Box mt={["0px", "0px", "21px", "21px"]}>
        <Marquee autoFill>
          <Flex alignItems={"center"} gap={["16px", "16px", "34px"]}>
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
              fontSize={["32px", "32px", "50px", "60px"]}
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
          flexDirection={["column", "column", "row"]}
          mt={["0px", "0px", "100px", "100px"]}
          padding={["0px 20px", "0px 20px", "0px 151px", "0px 225px"]}
          gap={["33px", "33px", "90px"]}
          alignItems={["self-start", "self-start", "start", "start"]}
        >
          <Box
          w={["100vw", "100vw", "50%", "50%", "50%"]}
            maxW={["100%", "100%", "100%", "100%", "100%"]}
             position={"relative"}>
            <BackgroundVideoContainer videosrc={g42Video} height={"377px"} />
          </Box>
          {/* <Box
            pos={"relative"}
            // paddingTop={"56.25%"}
            height={["214px", "214px", "377px"]}
            w={["352px", "352px", "50%"]}
          >
            <ReactPlayer
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                objectFit: "cover",
              }}
              width={"100%"}
              height={"377px"}
              playing={true}
              loop={true}
              url={g42Video}
              muted
            />
          </Box> */}
          <Flex
            mt={["50px", "50px", "25px"]}
            w={["100vw", "100vw", "50%", "50%", "50%"]}
            maxW={["100%", "100%", "100%", "100%", "100%"]}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Box
              w={"100%"}
              ref={sectionRef1}
              className={`fullScreen demo ${isVisible ? "visible" : "hidden"}`}
            >
              <Text
                // visibility={"hidden"}
                fontFamily={"Bossa-Light"}
                fontSize={["12px", "12px", "18px", "18px"]}
                fontStyle={"normal"}
                lineHeight={"24px"}
                color={"#747272"}
                letterSpacing={"-0.42px"}
                className="title"
                
                // onClick={toggleVisibility}
              >
                About G42 Healthcare in 2 paragraphs not more than 60-70 words.
                uses AI and data to create a world-class healthcare sector in
                the UAE and beyond. We partner with governments, scientists, and
                the medical community to future-proof nations' health.
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
                fontSize={["12px", "12px", "18px", "18px"]}
                fontStyle={"normal"}
                fontWeight={300}
                lineHeight={"24px"}
                color={"#747272"}
                letterSpacing={"-0.42px"}
                // visibility={"hidden"}
                className="text2"
              >
                We built Biogenix Labs, the first COVID-19 accredited
                large-scale throughput lab in the UAE, and facilitated the
                world's first phase three inactivated COVID-19 vaccine trial,
                4Humanity, with over 43,000 participants from 125+
                nationalities.
              </Text>
            </Box>
            <Link href="/about">
              <Button
                fontFamily={"Bossa-ExtendedMedium"}
                mt={"15px"}
                _hover={{ bgColor: "#00D2AA" }}
                bgColor={"#00D2AA"}
                borderRadius={"80px"}
                fontSize={["14px", "14px", "16px", "16px"]}
                fontStyle={"normal"}
                fontWeight={500}
                textTransform={"capitalize"}
                textAlign={"center"}
                color={"white"}
                w={["167px", "167px", "219px", "219px"]}
                h={["40px", "40px", "55px", "55px"]}
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
