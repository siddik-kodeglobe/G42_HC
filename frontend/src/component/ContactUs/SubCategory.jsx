import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import emailIcon from "../../assets/contact_us/email_icon.svg";
import mapIcon from "../../assets/contact_us/map_icon.svg";

const SubCategory = ({name, email, dropemail, desc}) => {
  return (
    <div>
        <Box borderLeft={"1px solid #D9D9D9"}>
          <Box padding={["100px 60px 140px 98px"]}>
            <Text
            fontSize={["32px"]}
            fontWeight={[700]}
            fontStyle={"normal"}
            lineHeight={"normal"}
            color={"black"}
            >Looking to partner with {name}?</Text>
            <Text
            mt={["14px"]}
            fontSize={["24px"]}
            fontStyle={"normal"}
            fontWeight={700}
            lineHeight={"normal"}
            color={"var(--Emergent-Green, #00D2AA)"}
            >{email}</Text>
            <Text fontSize={["18px"]} fontStyle={"normal"} color={"#747272"} fontWeight={400} mt={"11px"}>
                {desc}  
            </Text>

            <hr style={{border: "1px solid #D9D9D9"}}/>

            <Flex gap={["85px"]} margin={["78px 0px 140px 0px"]}>

                {/* mail div  */}
              <Box>
                <Image mb={["14px"]} src={emailIcon} />
                <Text mb={["6px"]}>Email</Text>
                <Text
                  fontSize={["16px"]}
                  fontWeight={[400]}
                  lineHeight={["normal"]}
                  color={["#747272"]}
                >
                  Drop us a line for general enquiry:
                </Text>
                <Text
                  fontSize={["16px"]}
                  fontWeight={[400]}
                  lineHeight={["normal"]}
                  color={"var(--Emergent-Green, #00D2AA)"}
                >
                    {dropemail}
                </Text>
              </Box>

              {/* map div  */}

              <Box>
                <Image mb={["14px"]} src={mapIcon} />
                <Text mb={["6px"]}>Office</Text>
                <Text
                  fontSize={["16px"]}
                  fontWeight={[400]}
                  lineHeight={["normal"]}
                  color={["#747272"]}
                  w={["335px"]}
                >
                  G42, Capital Gate, 12 Floor Al Khaleej Al Arabi Street Abu
                  Dhabi, United Arab Emirates.
                </Text>
                <Text
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
  )
}

export default SubCategory