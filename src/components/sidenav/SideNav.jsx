import React from "react";
import "./style.scss";

import {
  Box,
  Flex,
  Text,
  Heading,
  Input,
  Button,
  List,
  ListItem,
  ListIcon,
  useToast,
  Stack,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { BiAbacus, BiChart, BiHomeAlt } from "react-icons/bi";
export default function SiveNav() {
  return (
    <Box
      width={"350px"}
      height={"100vh"}
      background={"white"}
      boxShadow={
        " rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
      }
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={"99"}
      className="dashboard"
    >
      <Text fontSize={"xs"}>Main Menu</Text>
      {/* <Badge colorScheme={"orange"}>Main Menu</Badge> */}
      <Box className="navpills" width={"100%"}>
        <Box
          className=" active"
          width={"100%"}
          display={"flex"}
          justifyContent={"flex-start"}
        >
          <Box padding={"3"} fontSize={"sm"} display="flex">
            <BiHomeAlt size={"24px"} style={{ marginTop: "-3px" }} /> &nbsp;
            Dashboard
          </Box>
        </Box>
        <Box
          className="inactive"
          width={"100%"}
          color={"black"}
          display={"flex"}
          justifyContent={"flex-start"}
        >
          <Box padding={"3"} fontSize={"sm"} display="flex">
            <BiAbacus size={"24px"} style={{ marginTop: "-3px" }} /> &nbsp;
            Create
          </Box>
        </Box>
        <Box
          className="inactive"
          width={"100%"}
          color={"black"}
          display={"flex"}
          justifyContent={"flex-start"}
        >
          <Box padding={"3"} fontSize={"sm"} display="flex">
            <BiChart size={"24px"} style={{ marginTop: "-3px" }} /> &nbsp; Rules
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
