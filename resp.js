burger = document.querySelector(".burger");
navList = document.querySelector(".nav-list");
rightNav = document.querySelector(".btn1");
navbar = document.querySelector(".h-class");
ourclints = document.querySelector(".secondary_heading ");

burger.addEventListener("click", () => {
  navList.classList.toggle("v-class");
  rightNav.classList.toggle("v-class");
  navbar.classList.toggle("h-class");
  ourclints.classList.toggle("resp-class");
});
