import React from "react";
import Navbar from "../Navbar/Navbar";
import CollabBreadCrumb from "./CollabBreadCrumb";
import Partnership from "./Partnership";
import CollabImg from "./CollabImg";
import CollabHeading from "./CollabHeading";
import { Box } from "@chakra-ui/react";
import CollabPoints from "./CollabPoints";
import Collab_CP from "./Collab_CP";

const Collaborations = () => {
  return (
    <>
      <Box w={"100vw"} maxW={"99%"}>
        <Navbar />
        <CollabBreadCrumb />
        <Partnership />
        <CollabImg />
        <CollabHeading />
        <CollabPoints/>
        <Collab_CP/>
      </Box>
    </>
  );
};

export default Collaborations;
