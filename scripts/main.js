const btn = document.querySelector("#menubox");
const nav = document.querySelector(".navhead");
const links = document.querySelectorAll(".links");
const closebtn = document.querySelector("#closebox");
const menu = document.querySelector("#menubox");

btn.addEventListener("click", () => {
  nav.classList.toggle("navheadside");
  if (nav.classList.contains("navheadside")) {
    menu.style.display = "none";
  }
});

// closing nav box

const closeFunc = (btn) => {
    btn.addEventListener("click", () => {
        nav.classList.toggle("navheadside");
        menu.style.display = "block";
      }); 
};


closeFunc(closebtn);
// closebtn.addEventListener("click", () => {
//   nav.classList.toggle("navheadside");
//   menu.style.display = "block";
// });

links.forEach((link) => {
    closeFunc(link);
//   link.addEventListener("click", () => {
//     nav.classList.toggle("navheadside");
//     menu.style.display = "block";
//   });
});


