let navbar = document.querySelector(".navbar");
let closeBtn = document.querySelector("#menuBtn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
   navbar.classList.toggle("open");
   menuBtnChange();
});

searchBtn.addEventListener("click", ()=>{
   navbar.classList.toggle("open");
   menuBtnChange();
});

function menuBtnChange() {
   if(navbar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
   }else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
   }
}