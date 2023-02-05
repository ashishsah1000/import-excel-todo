import React, { useState } from "react";
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
import { SideNav } from "../../components";
import { ExcelReader } from "../../components";
import { FaHome, FaPlus } from "react-icons/fa";
import { BiAbacus, BiChart, BiHomeAlt } from "react-icons/bi";
import "./style.scss";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const toast = useToast();

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");
    toast({
      title: "Todo added!",
      description: "Your todo was added to the list",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Flex align="center" justify="center" height="100vh">
      <SideNav />
      <Box flex={1} padding={"6"}>
        <Routes>
          <Route exact path="/create" element={<ExcelReader />} />
        </Routes>
      </Box>
    </Flex>
  );
};

export default Home;
