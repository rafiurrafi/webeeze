const menuIcon = document.querySelector(".menu-icon");
const menuSection = document.querySelector(".section-menu");
const menuContent = document.querySelector(".menu-content");
const sections = document.querySelectorAll(".section");

//toggle sidebar menu
menuIcon.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (menuSection.classList.contains("menu-section-show")) {
    menuContent.style.opacity = 0;
    setTimeout(() => {
      menuSection.classList.remove("menu-section-show");
      menuSection.style.transition = ".5s";
    }, 200);
  } else {
    menuSection.classList.add("menu-section-show");
    menuSection.style.transition = ".5s";
    setTimeout(() => {
      menuContent.style.opacity = 1;
    }, 550);
  }
}
// function displaySections() {
//   for (let i = 0; i < sections.length; i++) {
//     sections[i].style.display = "block";
//   }
// }
// function hideSection() {
//   for (let i = 0; i < sections.length; i++) {
//     sections[i].style.display = "none";
//   }
// }
//change menu icon
function f(x) {
  x.classList.toggle("change");
}
//hide sidebar menu when click to nav menu
function hideSidebar() {
  menuIcon.classList.toggle("change");
  menuContent.style.opacity = 0;
  setTimeout(() => {
    menuSection.classList.remove("menu-section-show");
    menuSection.style.transition = ".5s";
  }, 200);
}
$(document).ready(function () {
  $("#section-about h2").waypoint(
    function (direction) {
      $("#section-about h2").addClass("animate__animated animate__fadeInUp");
      $("#section-about p").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "20%",
    }
  );
  $("#section-projects h2").waypoint(
    function (direction) {
      $("#section-projects h2").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "60%",
    }
  );
  $("#section-projects .single-content").waypoint(
    function (direction) {
      $("#section-projects .single-content").addClass(
        "animate__animated animate__fadeInUp"
      );
    },
    {
      offset: "60%",
    }
  );
  $("#section-team .container").waypoint(
    function (direction) {
      $("#section-team .container").addClass(
        "animate__animated animate__fadeInUp"
      );
    },
    {
      offset: "60%",
    }
  );
});
