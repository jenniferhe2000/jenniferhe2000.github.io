sortSelect = document.getElementById("sort-select");
tileGroup = document.querySelector(".tile-group");
tiles = document.querySelectorAll(".tile");

// Listen for a change in the select element

// If the value is "curated"
// Sort by data-order, increasing

// If the value is "newest"
// Sort by data-year, decreasing

// If the value is "oldest"
// Sort by data-year, increasing

sortSelect.addEventListener("change", () => {
  let sortedTiles;
  const selectedValue = sortSelect.value;
  switch (selectedValue) {
    case "curated":
      sortedTiles = Array.from(tiles).sort((a, b) => {
        return a.dataset.order - b.dataset.order;
      });
      break;
    case "newest":
      sortedTiles = Array.from(tiles).sort((a, b) => {
        return b.dataset.year - a.dataset.year;
      });
      break;
    case "oldest":
      sortedTiles = Array.from(tiles).sort((a, b) => {
        return a.dataset.year - b.dataset.year;
      });
      break;
  }
  tileGroup.innerHTML = "";
  sortedTiles.forEach((tile) => tileGroup.appendChild(tile));
});
