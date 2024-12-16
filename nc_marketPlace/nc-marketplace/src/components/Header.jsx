import { Box, Flex, Spacer, Text, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { Avatar, AvatarGroup } from "@/components/ui/avatar";
import { Input } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      position="flex"
      top={0}
      left={0}
      width="100%"
      bg="teal.100"
      px={8}
      py={4}
      color="white"
      shadow="md"
      zIndex={10}
    >
      <Flex alignItems="center" justify="space-between">
        <Text fontSize="xl" fontWeight="bold">
          <ChakraLink as={Link} to="/api">
            MyShop
          </ChakraLink>
        </Text>

        <Flex alignItems="center">
          <ChakraLink
            as={Link}
            to="/api/users/:username/listed_items"
            display="flex"
            alignItems="center"
            ml={4}
            _hover={{ textDecoration: "none", color: "teal.300" }}
          >
            <FiShoppingCart />
            <Text ml={2} padding={2} margin={1}>
              Basket
            </Text>
          </ChakraLink>

          <Flex alignItems="center">
            <ChakraLink as={Link} to="/users/:username">
              <Avatar size="sm" ml={5} />
            </ChakraLink>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
