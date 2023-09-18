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
          
            <Box w={"100%"} border={"4px"}>
            <ReactPlayer
          width={"100%"}
          height={"100%"}
          playing={true}
          loop={true}
          url={g42Video}
          muted
        />

            </Box>

          <DrawerBody>
            <Flex flexDirection={"column"}>
            <Link href="/about" fontSize={["30px"]} fontWeight={700} color={"black"}>About G42 Healthcare</Link>
            <Link href="/whatwedo" fontSize={["30px"]} fontWeight={700} color={"black"}>What we do</Link>
            <Link href="/" fontSize={["30px"]} fontWeight={700} color={"black"}>Partnerships</Link>
            <Link href="/resources" fontSize={["30px"]} fontWeight={700} color={"black"}>Resources</Link>
            <Link href="/news" fontSize={["30px"]} fontWeight={700} color={"black"}>News</Link>
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
