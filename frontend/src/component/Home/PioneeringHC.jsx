import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import style from "./pioneerHC.module.css";

const PioneeringHC = () => {
  return (
    <>
      <Box mt={["87px", "87px", "125px", "125px"]}>
        <Text fontFamily={"Bossa-ExtendedBold"} fontSize={["32px", "32px", "48px", "48px"]} className={style.heading}>
          Pioneering Healthcare
        </Text>
        <Box padding={["59px 20px 20px 20px", "20px", "56px 155px"]}>
          <Flex flexDirection={["column", "column", "row"]}>
            <Box w={"100%"} padding={"0px 0px"}>
              <Text className={style.text1}>1<sup>st</sup> COVID Lab</Text>
              <Text className={style.text2}>Biogenix</Text>
              
            </Box>
            <Box w={"100%"} padding={["0px", "0px", "0px 20px", "0px 20px"]}>
              <Text className={style.desc}>
                venenatis efficitur. elementum sollicitudin. ex. varius
                facilisis turpis Nullam vitae elit. vel quis sodales. risus
                massa volutpat nulla, non non nulla, lacus vel quis
              </Text>
            </Box>
          </Flex>
          <hr />
          <Flex flexDirection={["column", "column", "row"]} marginTop={"41px"}>
            <Box w={"100%"} padding={"0px 0px"}>
              <Text className={style.text1}>
                1<sup>st</sup> Omics Facility in the Region
              </Text>
              <Text className={style.text2}>Omics Center of Intelligence</Text>
            </Box>
            <Box w={"100%"} padding={["0px", "0px", "0px 20px", "0px 20px"]}>
              <Text className={style.desc}>
                venenatis efficitur. elementum sollicitudin. ex. varius
                facilisis turpis Nullam vitae elit. vel quis sodales. risus
                massa volutpat nulla, non non nulla, lacus vel quis
              </Text>
            </Box>
          </Flex>
          <hr />

          <Flex flexDirection={["column", "column", "row"]} marginTop={"41px"}>
            <Box w={"100%"} padding={"0px 0px"}>
              <Text className={style.text1}>1<sup>st</sup> Waste Water Lab</Text>
              <Text className={style.text2}>RASID</Text>
            </Box>
            <Box w={"100%"} padding={["0px", "0px", "0px 20px", "0px 20px"]}>
              <Text className={style.desc}>
                venenatis efficitur. elementum sollicitudin. ex. varius
                facilisis turpis Nullam vitae elit. vel quis sodales. risus
                massa volutpat nulla, non non nulla, lacus vel quis
              </Text>
            </Box>
          </Flex>
          <hr />

          <Flex flexDirection={["column", "column", "row"]} marginTop={"41px"}>
            <Box w={"100%"} padding={"0px 0px"}>
              <Text className={style.text1}>
                1<sup>st</sup> clinical trial pan MENA region
              </Text>
              <Text className={style.text2}>4Humanity trial Diagnostics</Text>
            </Box>
            <Box w={"100%"} padding={["0px", "0px", "0px 20px", "0px 20px"]}>
              <Text className={style.desc}>
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
