import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import avatar from "../../assets/aboutUs/ceo_avatar.svg";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GSDevTools } from "gsap/GSDevTools";
import FontFaceObserver from "fontfaceobserver";

const CEO_msg_AU = () => {
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
      gsap.set(".box1_ceomsg", { autoAlpha: 1 });

      if (split) {
        split.revert();
      }

      split = new SplitText(".text1_ceomsg", {
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
          { duration: 0.3, yPercent: 75, stagger: 0.002, opacity: 0 },
          ">-40%"
        );
        tl.to(chars, { duration: 0.3, yPercent: 7, stagger: 0.002 }, ">-40%");
      });

      // text2
      gsap.set(".box2_ceomsg", { autoAlpha: 1 });

      if (split2) {
        split2.revert();
      }

      split2 = new SplitText(".text2_ceomsg", {
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
          { duration: 0.3, yPercent: 75, stagger: 0.002, opacity: 0 },
          ">-40%"
        );
        t2.to(chars2, { duration: 0.3, yPercent: 7, stagger: 0.002 }, ">-40%");
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
        gsap.set(".box1_ceomsg", { autoAlpha: 0 });
        clearTimeout(timeout);
        timeout = setTimeout(init, delay);
      }, 250)
    );

    // Window resize event listener with debounce
    window.addEventListener(
      "resize",
      debounce(() => {
        gsap.set(".box2_ceomsg", { autoAlpha: 0 });
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
      <Flex
        borderBottom={"1px solid rgba(0, 0, 0, 0.10)"}
        flexDirection={["column", "column", "column", "row"]}
        gap={9}
        margin={[
          "39px 0px 0px 0px",
          "39px 0px 0px 0px",
          "39px 100px 0px 100px",
          "0px 0px 0px 158px",
        ]}
        justifyContent={"space-between"}
        alignItems={["", "", "start"]}
      >
        <Box margin={[
          "39px 20px 0px 20px",
          "39px 20px 0px 20px",
          "39px 100px 0px 0px",
          "0px 0px 0px 0px",
        ]} w={["100%", "100%", "100%", "35%"]}>
          <Text
            fontFamily={"Bossa-ExtendedBold"}
            mt={["0px", "0px", "105px"]}
            fontWeight={700}
            fontSize={["24px", "24px", "30px"]}
            w={["90%", "90%", "100%"]}
          >
            Message from Our CEO
          </Text>

          <Box ref={sectionRef1} className={`box1_ceomsg demo ${isVisible ? "visible" : "hidden"}`}>
          <Text
            fontFamily={"Bossa-Light"}
            mt={["14px", "14px", "14px"]}
            fontWeight={300}
            fontSize={["12px", "12px", "14px"]}
            color={"#747272"}
            className={`text1_ceomsg`}
          >
            At G42, we are bound by a clear, common goal: to champion artificial
            intelligence to unleash innovation and progress for every industry
            and society worldwide.
          </Text>
          </Box>

          <Box ref={sectionRef2} className={`box2_ceomsg demo ${isVisible ? "visible" : "hidden"}`}>
          <Text
            fontFamily={"Bossa-Light"}
            mt={["14px", "14px", "14px"]}
            fontWeight={300}
            fontSize={["12px", "12px", "14px"]}
            color={"#747272"}
            className={`text2_ceomsg`}
          >
            The potential for artificial intelligence is only as big as the
            human imagination and as we explore new territories and unleash the
            full potential of AI, we look forward to delivering exponential
            value to our present and future clients and partners through our
            professional excellence, in-depth understanding of different
            industries, and unique combination of technological resources and
            investments expertise.
          </Text>
          </Box>
          <Text
            fontFamily={"Bossa-ExtendedBold"}
            color={"#00D2AA"}
            fontSize={"20px"}
            fontWeight={700}
            mt={7}
          >
            Ashish Koshy
          </Text>
          <Text fontFamily={"Bossa-Light"} fontWeight={300} fontSize={"14px"}>
            CEO, G42 Healthcare
          </Text>
        </Box>
        <Image
          src={avatar}
          w={["100%", "100%", "100%", "50%"]}
          alt="CEO Avatar"
        />
      </Flex>
    </>
  );
};

export default CEO_msg_AU;
