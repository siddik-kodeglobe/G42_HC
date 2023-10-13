import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import emailIcon from "../../assets/contact_us/email_icon.svg";
import mapIcon from "../../assets/contact_us/map_icon.svg";

const SubCategory = ({ name, email, dropemail, desc }) => {
  return (
    <div>
      <Box  borderLeft={["0px", "1px solid #D9D9D9"]}>
        <Box
          padding={[
            "34px 20px 40px 20px",
            "34px 20px 40px 20px",
            "34px 20px 40px 20px",
            "86px 11.71% 91px 6.58%",
            "86px 11.71% 118px 6.58%",
            "86px 11.71% 140px 6.58%",
          ]}
        >
          <Text
            fontFamily={"Bossa-ExtendedBold"}
            fontSize={["24px", "24px", "24px", "26px", "28px", "32px"]}
            fontWeight={[700]}
            fontStyle={"normal"}
            lineHeight={"normal"}
            color={"black"}
          >
            Looking to partner with {name}?
          </Text>
          <Text
            fontFamily={"Bossa-Bold"}
            mt={["14px"]}
            fontSize={["24px"]}
            fontStyle={"normal"}
            fontWeight={700}
            lineHeight={"normal"}
            color={"var(--Emergent-Green, #00D2AA)"}
          >
            {email}
          </Text>
          <Text
            fontFamily={"Bossa-Regular"}
            fontSize={["12", "12", "12", "14", "16", "18px"]}
            fontStyle={"normal"}
            color={"#747272"}
            fontWeight={400}
            mt={"11px"}
          >
            {desc}
          </Text>

          <hr style={{ border: "1px solid #D9D9D9" }} />

          <Flex flexWrap={"wrap"} gap={["16px", "16px", "16px", "85px", "85px", "85px", ]} padding={["40px 0px 0px 0px", "40px 0px 0px 0px", "40px 0px 0px 0px", "78px 0px 0px 0px", "78px 0px 0px 0px", "78px 0px 0px 0px", ]}>
            {/* mail div  */}
            <Box w={["164px","164px","164px", "335px","335px","335px",]}>
              <Image mb={["14px"]} src={emailIcon} />
              <Text fontFamily={"Bossa-Regular"} mb={["6px"]}>
                Email
              </Text>
              <Text
                fontFamily={"Bossa-Regular"}
                fontSize={["16px"]}
                fontWeight={[400]}
                lineHeight={["normal"]}
                color={["#747272"]}
              >
                Drop us a line for general enquiry:
              </Text>
              <Text
                fontFamily={"Bossa-Bold"}
                fontSize={["16px"]}
                fontWeight={[400]}
                lineHeight={["normal"]}
                color={"var(--Emergent-Green, #00D2AA)"}
              >
                {dropemail}
              </Text>
            </Box>

            {/* map div  */}

            <Box w={["164px","164px","164px", "335px","335px","335px",]}>
              <Image mb={["14px"]} src={mapIcon} />
              <Text fontFamily={"Bossa-Regular"} mb={["6px"]}>
                Office
              </Text>
              <Text
                fontFamily={"Bossa-Regular"}
                fontSize={["16px"]}
                fontWeight={[400]}
                lineHeight={["normal"]}
                color={["#747272"]}
               
              >
                G42, Capital Gate, 12 Floor Al Khaleej Al Arabi Street Abu
                Dhabi, United Arab Emirates.
              </Text>
              <Text
                fontFamily={"Bossa-Regular"}
                fontSize={["16px"]}
                fontWeight={[400]}
                lineHeight={["normal"]}
                color={"var(--Emergent-Green, #00D2AA)"}
              >
                Get Directions
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default SubCategory;
