import React from "react";
import "./style.scss";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Heading,
} from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";

export default function Login() {
  return (
    <form className="login-form">
      <Heading size={"md"}>Welcome Back</Heading>
      <FormControl marginTop={"8px"}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" type="email" placeholder="Enter your email" />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
        />
      </FormControl>

      <Button
        mt={4}
        leftIcon={<FaLock />}
        type="submit"
        colorScheme={"messenger"}
      >
        Login
      </Button>
    </form>
  );
}
