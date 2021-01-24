function toggleMenu() {
  const menu = document.querySelector("#header__menu");
  const links = document.querySelector(".header__links");

  if (links.classList.contains("header__links--visible")) {
    links.classList.remove("header__links--visible");
  } else {
    links.classList.add("header__links--visible");
  }
}
