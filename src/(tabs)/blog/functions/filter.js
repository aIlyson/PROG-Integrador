export const filterResults = (data, selectedCategory, searchText) => {
  let filteredData = data;

  if (selectedCategory !== "all") {
    filteredData = filteredData.filter(
      (item) => item.category === selectedCategory
    );
  }

  if (searchText) {
    filteredData = filteredData.filter((item) =>
      item.bairro.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  return filteredData.slice(0, 3);
};
