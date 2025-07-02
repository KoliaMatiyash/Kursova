const close_bar = document.getElementById("close_bar");
const burger_menu = document.getElementById("burger_menu");
const burger_bar = document.getElementById("burger_bar");
const allMainContant = document.getElementById("allMainContant");
console.log(close_bar);
burger_bar.addEventListener("click", () => {
  burger_menu.classList.remove("unvisible");
  allMainContant.classList.add("unvisible");
});

close_bar.addEventListener("click", (e) => {
  console.log(e);
  burger_menu.classList.add("unvisible");
  allMainContant.classList.remove("unvisible");
});
