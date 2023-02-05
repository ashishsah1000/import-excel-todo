import React, { useEffect, useState } from "react";
import { Box } from "framer-motion";
import { useSelector } from "react-redux";
export default function Todos() {
  const [todos, setTodos] = useState([]);
  var tempTodos = useSelector((state) => state.todos.value);
  useEffect(() => {}, []);

  return <Box></Box>;
}
