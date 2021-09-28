let navBar = document.querySelector("nav");
let closeBtn = document.querySelector("#menuBtn");

closeBtn.addEventListener("click", ()=> {
   navBar.classList.toggle("expanded");
   menuBtnChange();
});

function menuBtnChange() {
   if(navBar.classList.contains("expanded")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
   }else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
   }
}

let navLink = document.querySelectorAll('li');
for (let i=0; i<navLink.length; i++) {
   navLink[i].onclick = function() {
      let j = 0;
      while(j < navLink.length) {
         navLink[j++].className = 'list';
      }
      navLink[i].className = 'list active';
   }
}