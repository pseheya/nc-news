import { Box, Flex, Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuItemCommand,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { wrap } from "framer-motion";
import { useState } from "react";

export default function Search({ setSearchItem }) {
  const [searchResult, setResult] = useState({
    search: "",
    category: "Categories",
  });

  const handleCategory = (value) => {
    setResult((prevResult) => {
      return { ...prevResult, category: value };
    });
  };

  const handleSearching = (e) => {
    setResult((prevResult) => {
      return { ...prevResult, search: e.target.value };
    });
  };

  return (
    <>
      <Flex
        gap="20px"
        justifyContent="flex-end"
        alignItems="center"
        margin={"auto"}
        flexWrap={{ base: "wrap", lg: "nowrap" }}
      >
        <Input
          placeholder="Search..."
          variant={"flushed"}
          color={"black"}
          width={"auto"}
          minwidth="200px"
          onChange={handleSearching}
        ></Input>

        <Flex gap="10px" flexWrap={wrap}>
          <MenuRoot>
            <MenuTrigger asChild>
              <Button variant="outline" size="sm" onChange={handleCategory}>
                {searchResult.category}
              </Button>
            </MenuTrigger>
            <MenuContent>
              <MenuItem
                onClick={() => {
                  handleCategory("All");
                }}
              >
                All
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCategory("Electronics");
                }}
              >
                Electronics
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCategory("Household");
                }}
              >
                Household
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCategory("Clothing");
                }}
              >
                Clothing
              </MenuItem>
            </MenuContent>
          </MenuRoot>
          <Button
            size="medium"
            color={"black"}
            onClick={() => {
              setSearchItem(searchResult);
            }}
          >
            Submit
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
