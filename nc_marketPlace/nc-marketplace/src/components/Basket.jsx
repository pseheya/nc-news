import { fetchItemsBasketData } from "@/FetchData.jsx/fetchFromData";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ItemCard from "./ItemCars";

export default function Basket() {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    fetchItemsBasketData()
      .then((data) => {
        if (data && data.items) {
          setBasket(data.items);
        } else {
          console.error("Invalid data format:", data);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch basket data:", error);
      });
  }, []);

  console.log(basket);

  return (
    <Box>
      {basket.length > 0 ? (
        basket.map((item, index) => {
          return <ItemCard key={item.id || index} card={item}></ItemCard>;
        })
      ) : (
        <p>No items in the basket</p>
      )}
    </Box>
  );
}
