import { Box, Flex } from "@chakra-ui/react";
import ItemsList from "./ItemsList";
import { useState } from "react";
import Search from "./Search";
import { Route } from "react-router";

export default function Main() {
  const [searchItem, setSearchItem] = useState({ search: "", category: "" });

  return (
    <>
      <Box>
        <Flex alignItems="center" width={300} margin={30}>
          <Search setSearchItem={setSearchItem} />
        </Flex>

        <ItemsList searchItem={searchItem} />
      </Box>
    </>
  );
}
