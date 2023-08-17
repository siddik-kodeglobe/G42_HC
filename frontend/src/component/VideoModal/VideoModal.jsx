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
          <ModalBody>
            <ReactPlayer
              width={"100%"}
              height={"100vh"}
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
