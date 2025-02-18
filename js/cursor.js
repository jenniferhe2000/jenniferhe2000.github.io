const cursorBallLg = document.body.querySelector(".cursor-ball-lg");
const cursorBallSm = document.body.querySelector(".cursor-ball-sm");
const hoverables = document.body.querySelectorAll(".hoverable");

// Listeners

document.body.addEventListener("mousemove", (e) => {
  gsap.to(cursorBallLg, 0.4, {
    x: `${e.clientX - cursorBallLg.offsetWidth / 2}px`,
    y: `${e.clientY - cursorBallLg.offsetHeight / 2 - 128}px`,
  });
  gsap.to(cursorBallSm, 0.1, {
    x: `${e.clientX - cursorBallSm.offsetWidth / 2}px`,
    y: `${e.clientY - cursorBallSm.offsetHeight / 2 - 128}px`,
  });
});

hoverables.forEach((hoverable) => {
  hoverable.addEventListener("mouseenter", onMouseHover);
  hoverable.addEventListener("mouseleave", onMouseHoverOut);
});

function onMouseHover() {
  gsap.to(cursorBallLg, 0.3, {
    scale: 3,
  });
}
function onMouseHoverOut() {
  gsap.to(cursorBallLg, 0.3, {
    scale: 1,
  });
}
