const links = document.querySelector(".header__links");

// Toggle Hamburger Menu
function toggleMenu() {
  if (links.classList.contains("header__links--visible")) {
    links.classList.remove("header__links--visible");
  } else {
    links.classList.add("header__links--visible");
  }
}
// Remove Hamburger Menu when the window is resized
window.addEventListener("resize", function () {
  if (window.innerWidth >= 1024) {
    links.classList.remove("header__links--visible");
  }
});
