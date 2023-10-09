import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GSDevTools } from "gsap/GSDevTools";
import FontFaceObserver from 'fontfaceobserver';

const WhoWeAre_AU = () => {

  gsap.registerPlugin(GSDevTools, SplitText, ScrollTrigger);

  const [isVisible, setIsVisible] = useState(false);
  
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  

  useEffect(() => {
    gsap.registerPlugin(SplitText);

    let split;
    let tl;

    const sectionElement1 = sectionRef1.current;

    function init() {
      gsap.set(".box1_wwa", { autoAlpha: 1 });

      if (split) {
        split.revert();
      }

      split = new SplitText(".text1_wwa", {
        charsClass: "chars",
        linesClass: "lines",
      });
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionElement1,
          start: 'bottom center+=50%', // Adjust this as needed
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
        gsap.set(".box1_wwa", { autoAlpha: 0 });
        clearTimeout(timeout);
        timeout = setTimeout(init, delay);
      }, 250)
    );


    const font = new FontFaceObserver('Bossa-Light');
    
    font.load().then(() => {
      // Font is loaded, you can run your code here
      // Initial call to init
      init();
    }).catch((error) => {
      console.error('Font could not be loaded:', error);
    });
  }, []);

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Flex
        flexDirection={["column", "column", "column", "row", "row"]}
        alignItems={"start"}
        w={"100vw"}
        maxW={"100%"}
        padding={["0px 11.718% 0px 11.718%"]}
        // margin={["51px 56px 40px 56px", "51px 89px 40px 89px","51px 116px 0px 116px", "78px 148px 0px 148px", "78px 225px 0px 225px"]}
        mt={["45px"]}
        justifyContent={"space-between"}
        gap={["20px","20px","0px","20px","20px"]}
      >
        <Box w={["100%", "100%", "100%", "50%", "50%"]}>
          <Text fontFamily={"Bossa-ExtendedBold"} fontWeight={700} fontSize={["24px", "24px", "48px", "48px", "48px"]}>
            Who we are
          </Text>
        </Box>
        <Box w={["100%", "100%", "100%", "50%", "50%"]}>
          <Text fontFamily={"Bossa-ExtendedBold"} fontWeight={700} fontSize={["24px", "24px", "41px", "41px", "41px"]}>
            G42 Healthcare - Health Tech Company
          </Text>
          <Box ref={sectionRef1}
              className={`box1_wwa demo ${isVisible ? "visible" : "hidden"}`}>
          <Text className="text1_wwa" fontFamily={"Bossa-Light"} mt={5} fontSize={14} color={"#747272"} fontWeight={300}>
            G42 Healthcare, a leading AI-powered healthcare company, is on a
            mission to develop a world-class healthcare sector in the UAE and
            beyond, by harnessing data and emerging technologies in healthcare
            to unlock the potential of personalized and preventive care. Agile
            and futuristic, we have created a transformative shift in the
            traditional healthcare paradigm. 
            </Text>
            <Text className="text1_wwa" fontFamily={"Bossa-Light"} mt={5} fontSize={14} color={"#747272"} fontWeight={300}>
            As a visionary health tech company,
            we partner with governments, leading international entities,
            scientists and researchers and the wider medical community who
            subscribe to our values and our mission as we develop solutions to
            future-proof the health of nations. We have built Biogenix Labs,
            UAE’s first COVID-19 accredited large-scale throughput laboratory,
            and facilitated the 4Humanity clinical trials, the world’s first
            phase three trial for inactivated vaccine against COVID-19 with over
            43,000 volunteers from 125+ nationalities across the pan-Arab
            region.
          </Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default WhoWeAre_AU;
