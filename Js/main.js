/*===== Resize Navbar on Scroll =====*/
let navbar = document.querySelector(".navbar");
//when the scroll is higher than 20 viewport height, add the sticky class to the tag with class navbar
window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};
/* Navbar Toggler */
const navMeun = document.querySelector(".menu");
navTogle = document.querySelector(".meun-btn");

if (navTogle) {
  navTogle.addEventListener("click", () => {
    navMeun.classList.toggle("active");
  });
}

/* Closing Menu when navlink is clicked */
const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
  const navMeun = document.querySelector(".menu");
  navMeun.classList.remove("active");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));
/* Product Colors */
let pic = document.querySelector("#main-shoe");
let cyan = document.querySelector(".cyan");
let purple = document.querySelector(".purple");
let blue = document.querySelector(".blue");
let pink = document.querySelector(".pink");
let green = document.querySelector(".green");
let red = document.querySelector(".red");
const colors = document.querySelectorAll(".color");
// store product info in object
let info = [
  {
    src: "img/cyan.png",
  },
  {
    src: "img/purple.png",
  },
  {
    src: "img/blue.png",
  },
  {
    src: "img/pink.png",
  },
  {
    src: "img/green.png",
  },
  {
    src: "img/red.png",
  },
];

// change color
cyan.addEventListener("click", function () {
  pic.src = info[0].src;
});
purple.addEventListener("click", function () {
  pic.src = info[1].src;
});
blue.addEventListener("click", function () {
  pic.src = info[2].src;
});
pink.addEventListener("click", function () {
  pic.src = info[3].src;
});
green.addEventListener("click", function () {
  pic.src = info[4].src;
});
red.addEventListener("click", function () {
  pic.src = info[5].src;
});

//active color
function color() {
  colors.forEach((e) => e.classList.remove("active"));
  this.classList.add("active");
}

colors.forEach((e) => e.addEventListener("click", color));
