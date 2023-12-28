const menu = document.querySelector(".menu");
const navList = document.querySelector(".nav-list");
const navItem = document.querySelectorAll(".nav-item");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navList.classList.toggle("show");
});
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("active");
    navList.classList.remove("show");
  });
});
