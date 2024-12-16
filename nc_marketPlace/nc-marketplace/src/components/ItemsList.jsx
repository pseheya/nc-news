import { Box, SimpleGrid, Stack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ItemCard from "./ItemCars";

export default function ItemsList({ searchItem }) {
  const [data, setData] = useState(null);
  const [filterData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://nc-marketplace-2-g51j.onrender.com/api/items"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result.items);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      let filteredData = [...data];

      if (searchItem.search) {
        filteredData = filterData.filter((item) =>
          item.item_name.toLowerCase().includes(searchItem.search.toLowerCase())
        );
      }

      if (searchItem.category && searchItem.category !== "All") {
        filteredData = filterData.filter(
          (item) =>
            item.category_name.toLowerCase() ===
            searchItem.category.toLowerCase()
        );
      }

      setFilteredData(filteredData);
    }
  }, [searchItem, data]);

  if (loading) {
    return <Box>Loading...</Box>;
  }

  if (error) {
    return <Box>Error: {error}</Box>;
  }

  return (
    <Stack spacing={6}>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={6} gap="40px" margin="auto">
        {filterData.map((el) => (
          <Box key={el.id} border="none" shadow="none" width="100%">
            <ItemCard card={el} />
          </Box>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
