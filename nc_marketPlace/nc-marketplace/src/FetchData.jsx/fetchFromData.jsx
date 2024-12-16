export const fetchItemsBasketData = async () => {
  try {
    const response = await fetch(
      "https://nc-marketplace-2-g51j.onrender.com/api/users/Alexandra14/listed_items"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
