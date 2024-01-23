let toggle = document.querySelector(".nav__btn-1");
let menu = document.querySelector(".katalog");
let header = document.querySelector("header");
let isOpen = false;

toggle.addEventListener("click", () => {
  isOpen = !isOpen;
  if (isOpen) {
    menu.style.top = "70px";
    header.style.boxShadow = "none";
  } else {
    menu.style.top = "-250px";
    header.style.boxShadow = "0 0 5px 5px rgb(137, 137, 137)";
  }
});
