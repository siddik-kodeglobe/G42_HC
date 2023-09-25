import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
  Box,
  Link,
  Flex,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import ReactPlayer from "react-player";
import g42Video from '../../assets/temp/Video/G42 Video.mp4'

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button
        position={"fixed"}
        zIndex={2}
        top={"40%"}
        right={"36px"}
        borderRadius={"50%"}
        border={"1px solid #00D2AA"}
        ref={btnRef}
        height={["85px"]}
        width={["85px"]}
        // _hover={{ backgroundColor: "#00D2AA" }}
        backgroundColor="white"
        onClick={onOpen}
      >
        {onOpen ? (
          <HamburgerIcon boxSize={"35px"} color={"#00D2AA"} />
        ) : (
          <CloseIcon color={"black"} />
        )}
      </Button>
      <Drawer
        style={{margin: 0, padding: 0}}
        size={"lg"}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent padding={0} margin={0}>
          
          {/* fix the bug */}
            <Box w={"100%"} h={"294px"} border={"4px"}>
            <ReactPlayer
          width={"100%"}
          height={"100%"}
          playing={true}
          loop={true}
          url={g42Video}
          muted
        />

            </Box>

          <DrawerBody >
            <Flex gap={"22px"} flexDirection={"column"}>
            <Link fontFamily={"Bossa-ExtendedBold"} href="/about" fontSize={["20px", "20px", "30px", "30px"]} fontWeight={700} color={"black"}>About G42 Healthcare</Link>
            <Link fontFamily={"Bossa-ExtendedBold"} href="/whatwedo" fontSize={["20px", "20px", "30px", "30px"]} fontWeight={700} color={"black"}>What we do</Link>
            <Link fontFamily={"Bossa-ExtendedBold"} href="/collaborations" fontSize={["20px", "20px", "30px", "30px"]} fontWeight={700} color={"black"}>Partnerships</Link>
            <Link fontFamily={"Bossa-ExtendedBold"} href="/resources" fontSize={["20px", "20px", "30px", "30px"]} fontWeight={700} color={"black"}>Resources</Link>
            <Link fontFamily={"Bossa-ExtendedBold"} href="/news" fontSize={["20px", "20px", "30px", "30px"]} fontWeight={700} color={"black"}>News</Link>

            <Flex gap={"46px"}>
            <Link fontFamily={"Bossa-Regular"} href="/contactus" fontSize={["16px", "16px", "20px", "20px"]} fontWeight={400} color={"black"}>Contact</Link>
            <Link fontFamily={"Bossa-Regular"} href="/career" fontSize={["16px", "16px", "20px", "20px"]} fontWeight={400} color={"black"}>Careers</Link>
            </Flex>
            </Flex>
          </DrawerBody>

          <DrawerFooter margin={0} padding={0}>
            <Button
              w={"100%"}
              color={"white"}
              backgroundColor={"var(--Emergent-Green, #00D2AA)"}
              _hover={{ backgroundColor: "var(--Emergent-Green, #00D2AA)" }}
              fontSize={["25px"]}
              fontWeight={400}
              lineHeight={"68px"}
              padding={["21px 0px"]}
              borderRadius={0}
            >
              Make Enquiry
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
