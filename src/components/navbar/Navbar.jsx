import { Box, Flex, Link, IconButton, useDisclosure } from "@chakra-ui/react";
import { RiMenu4Line } from "react-icons/ri";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="gray.800" color="white" position={"fixed"} top="0" width={"100vw"}>
      <Flex align="center" justify="space-between" p={4} maxW="xl" mx="auto">
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Contact</Link>

        <IconButton
          onClick={onToggle}
          display={{ base: "block", md: "none" }}
          aria-label="Toggle menu"
        >
          <RiMenu4Line />
        </IconButton>
      </Flex>
    </Box>
  );
}
