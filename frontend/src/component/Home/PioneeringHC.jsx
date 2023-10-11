import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import style from "./pioneerHC.module.css";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GSDevTools } from "gsap/GSDevTools";
import FontFaceObserver from "fontfaceobserver";

const PioneeringHC = () => {
  gsap.registerPlugin(GSDevTools, SplitText, ScrollTrigger);

  const [isVisible, setIsVisible] = useState(false);

  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const sectionRef4 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(SplitText);

    let split;
    let tl;

    let split2;
    let t2;

    let split3;
    let t3;

    let split4;
    let t4;

    const sectionElement1 = sectionRef1.current;
    const sectionElement2 = sectionRef2.current;
    const sectionElement3 = sectionRef3.current;
    const sectionElement4 = sectionRef4.current;

    function init() {
      gsap.set(".box1_phc", { autoAlpha: 1 });

      if (split) {
        split.revert();
      }

      split = new SplitText(".text1_phc", {
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
          { duration: 0.3, yPercent: 75, stagger: 0.005, opacity: 0 },
          ">-40%"
        );
        tl.to(chars, { duration: 0.3, yPercent: 7, stagger: 0.005 }, ">-40%");
      });

      // text2
      gsap.set(".box2_phc", { autoAlpha: 1 });

      if (split2) {
        split2.revert();
      }

      split2 = new SplitText(".text2_phc", {
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
          { duration: 0.3, yPercent: 75, stagger: 0.005, opacity: 0 },
          ">-40%"
        );
        t2.to(chars2, { duration: 0.3, yPercent: 7, stagger: 0.005 }, ">-40%");
      });

      // text3
      gsap.set(".box3_phc", { autoAlpha: 1 });

      if (split3) {
        split3.revert();
      }

      split3 = new SplitText(".text3_phc", {
        charsClass: "chars",
        linesClass: "lines",
      });

      t3 = gsap.timeline({
        scrollTrigger: {
          trigger: sectionElement3,
          start: "bottom center+=50%",
          // end: 'bottom center',
          scrub: false, // Smoothly transition the animation
          markers: false, // Remove this in production
        },
      });

      split3.lines.forEach((line, index) => {
        const chars3 = line.querySelectorAll(".chars");
        t3.from(
          chars3,
          { duration: 0.3, yPercent: 75, stagger: 0.005, opacity: 0 },
          ">-40%"
        );
        t3.to(chars3, { duration: 0.3, yPercent: 7, stagger: 0.005 }, ">-40%");
      });

      // text4
      gsap.set(".box4_phc", { autoAlpha: 1 });

      if (split4) {
        split4.revert();
      }

      split4 = new SplitText(".text4_phc", {
        charsClass: "chars",
        linesClass: "lines",
      });

      t4 = gsap.timeline({
        scrollTrigger: {
          trigger: sectionElement4,
          start: "bottom center+=50%",
          // end: 'bottom center',
          scrub: false, // Smoothly transition the animation
          markers: false, // Remove this in production
        },
      });

      split4.lines.forEach((line, index) => {
        const chars4 = line.querySelectorAll(".chars");
        t4.from(
          chars4,
          { duration: 0.3, yPercent: 75, stagger: 0.005, opacity: 0 },
          ">-40%"
        );
        t4.to(chars4, { duration: 0.3, yPercent: 7, stagger: 0.005 }, ">-40%");
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
        gsap.set(".box1_phc", { autoAlpha: 0 });
        clearTimeout(timeout);
        timeout = setTimeout(init, delay);
      }, 250)
    );

    // Window resize event listener with debounce
    window.addEventListener(
      "resize",
      debounce(() => {
        gsap.set(".box2_phc", { autoAlpha: 0 });
        clearTimeout(timeout);
        timeout = setTimeout(init, delay);
      }, 250)
    );

    // Window resize event listener with debounce
    window.addEventListener(
      "resize",
      debounce(() => {
        gsap.set(".box3_phc", { autoAlpha: 0 });
        clearTimeout(timeout);
        timeout = setTimeout(init, delay);
      }, 250)
    );

    // Window resize event listener with debounce
    window.addEventListener(
      "resize",
      debounce(() => {
        gsap.set(".box4_phc", { autoAlpha: 0 });
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
      <Box w={"100vw"} maxW={"100%"} mt={["79px", "79px","79px", "81px", "105px", "125px"]}>
        <Text
          fontFamily={"Bossa-ExtendedBold"}
          fontSize={["32px", "32px","32px", "32px", "40px", "48px"]}
          lineHeight={"normal"}
          className={style.heading}
        >
          Pioneering Healthcare
        </Text>
        <Box  padding={["60px 20px 0px 20px","60px 20px 0px 20px","60px 20px 0px 20px", "60px 11.71% 0px 11.71%","50px 11.71% 0px 11.71%","60px 11.71% 0px 11.71%",]}>
          <Flex gap={["20px", "20px", "10px","0px"]} flexDirection={["column", "column", "row"]}>
            <Box w={["100%","100%","100%", "50%","50%","50%"]} padding={"0px 0px"}>
              <Text className={style.text1}>
                1<sup>st</sup> COVID Lab
              </Text>
              <Text className={style.text2}>Biogenix</Text>
            </Box>
            <Box
              ref={sectionRef1}
              className={`box1_phc demo ${isVisible ? "visible" : "hidden"}`}
              w={["100%","100%","100%", "50%","50%","50%"]}
              padding={["0px", "0px", "0px 20px", "0px 20px"]}
            >
              <Text className={`${style.desc} text1_phc`}>
                venenatis efficitur. elementum sollicitudin. ex. varius
                facilisis turpis Nullam vitae elit. vel quis sodales. risus
                massa volutpat nulla, non non nulla, lacus vel quis
              </Text>
            </Box>
          </Flex>
          <hr />
          <Flex gap={["20px", "20px", "10px","0px"]} flexDirection={["column", "column", "row"]} marginTop={"41px"}>
            <Box w={"100%"} padding={"0px 0px"}>
              <Text className={style.text1}>
                1<sup>st</sup> Omics Facility in the Region
              </Text>
              <Text className={style.text2}>Omics Center of Intelligence</Text>
            </Box>
            <Box
              ref={sectionRef2}
              className={`box2_phc demo ${isVisible ? "visible" : "hidden"}`}
              w={"100%"}
              padding={["0px", "0px", "0px 20px", "0px 20px"]}
            >
              <Text className={`${style.desc} text2_phc`}>
                venenatis efficitur. elementum sollicitudin. ex. varius
                facilisis turpis Nullam vitae elit. vel quis sodales. risus
                massa volutpat nulla, non non nulla, lacus vel quis
              </Text>
            </Box>
          </Flex>
          <hr />

          <Flex gap={["20px", "20px", "10px","0px"]} flexDirection={["column", "column", "row"]} marginTop={"41px"}>
            <Box w={"100%"} padding={"0px 0px"}>
              <Text className={style.text1}>
                1<sup>st</sup> Waste Water Lab
              </Text>
              <Text className={style.text2}>RASID</Text>
            </Box>
            <Box
              ref={sectionRef3}
              className={`box3_phc demo ${isVisible ? "visible" : "hidden"}`}
              w={"100%"}
              padding={["0px", "0px", "0px 20px", "0px 20px"]}
            >
              <Text className={`${style.desc} text3_phc`}>
                venenatis efficitur. elementum sollicitudin. ex. varius
                facilisis turpis Nullam vitae elit. vel quis sodales. risus
                massa volutpat nulla, non non nulla, lacus vel quis
              </Text>
            </Box>
          </Flex>
          <hr />

          <Flex gap={["20px", "20px", "10px","0px"]} flexDirection={["column", "column", "row"]} marginTop={"41px"}>
            <Box w={"100%"} padding={"0px 0px"}>
              <Text className={style.text1}>
                1<sup>st</sup> clinical trial pan MENA region
              </Text>
              <Text className={style.text2}>4Humanity trial Diagnostics</Text>
            </Box>
            <Box
              ref={sectionRef4}
              className={`box4_phc demo ${isVisible ? "visible" : "hidden"}`}
              w={"100%"}
              padding={["0px", "0px", "0px 20px", "0px 20px"]}
            >
              <Text className={`${style.desc} text4_phc`}>
                venenatis efficitur. elementum sollicitudin. ex. varius
                facilisis turpis Nullam vitae elit. vel quis sodales. risus
                massa volutpat nulla, non non nulla, lacus vel quis
              </Text>
            </Box>
          </Flex>
          {/* <hr /> */}
        </Box>
      </Box>
    </>
  );
};

export default PioneeringHC;
