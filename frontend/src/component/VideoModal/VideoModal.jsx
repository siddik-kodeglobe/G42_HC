import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Vimeo from "@u-wave/react-vimeo";
import ReactPlayer from "react-player";

const VideoModal = ({ url, isOpen, onOpen, onClose }) => {
  return (
    <>
      <Modal
        position="relative"
        onClose={onClose}
        size={"full"}
        isOpen={isOpen}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton backgroundColor={"green.400"} color={"white"} position={"absolute"} top={5} right={5} zIndex={5}/>
          <ModalBody position={"relative"} paddingTop={"56.25%"} h={"100vh"} maxH={"100%"} w={"100vw"} maxW={"100%"}>
            <ReactPlayer
          style={{ position: "absolute", top: 0, left: 0 }}

              width={"100%"}
              height={"100%"}
              url={url}
              controls={true}
              playing={true}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default VideoModal;
