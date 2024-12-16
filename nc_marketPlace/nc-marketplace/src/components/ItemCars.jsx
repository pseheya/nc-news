import { Box, Button, Text, Image, Flex } from "@chakra-ui/react";

export default function ItemCard({ card }) {
  return (
    <Box
      padding={6}
      bg="white"
      borderRadius="lg"
      border="1px solid #e2e8f0"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="450px"
      boxShadow="sm"
      _hover={{
        boxShadow: "lg",
        transform: "scale(1.02)",
        transition: "all 0.2s",
      }}
    >
      <Image
        src={card.img_url}
        alt={card.item_name}
        mb={4}
        maxHeight="200px"
        objectFit="cover"
        borderRadius="md"
        mx="auto"
      />

      <Text
        fontSize="lg"
        fontWeight="bold"
        mb={2}
        textAlign="center"
        noOfLines={2}
      >
        {card.item_name}
      </Text>

      <Text mb={4} textAlign="center" fontSize="sm" noOfLines={3}>
        {card.description}
      </Text>

      {/* <Text fontSize="md" fontWeight="bold" mb={4} textAlign="center">
        ${card.price}
      </Text> */}

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        height="100%"
      >
        <Text fontSize="md" fontWeight="bold" mb={4} textAlign="center">
          Price: £{card.price}
        </Text>
      </Box>
      <Button
        colorScheme="teal"
        size="sm"
        width="full"
        mt="auto"
        color={"black"}
      >
        Add to Basket
      </Button>
    </Box>
  );
}
