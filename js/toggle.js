const gridToggle = document.querySelector(".toggle-grid");
const listToggle = document.querySelector(".toggle-list");
const thumbnails = document.querySelectorAll("img.thumbnail");

// when clicked, if gridToggle not active:
// add active class to gridToggle
// remove active class from listToggle
// show img in thumbnail
gridToggle.addEventListener("click", () => {
  if (!gridToggle.classList.contains("active")) {
    gridToggle.classList.add("active");
    listToggle.classList.remove("active");
    thumbnails.forEach((thumbnail) => {
      thumbnail.classList.remove("hidden");
    });
  }
});

// when clicked, if listToggle not active:
// add active class to listToggle
// remove active class from gridToggle
// hide img in thumbnail
listToggle.addEventListener("click", () => {
  console.log("hello");
  if (!listToggle.classList.contains("active")) {
    console.log("hi");
    listToggle.classList.add("active");
    gridToggle.classList.remove("active");
    thumbnails.forEach((thumbnail) => {
      thumbnail.classList.add("hidden");
    });
  }
});
