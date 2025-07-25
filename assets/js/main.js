const tabs = document.querySelectorAll(".nav-link[data-bg]");
const section = document.querySelector(".featured-categories");



tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const bg = tab.getAttribute("data-bg");
    section.style.backgroundImage = `url('${bg}')`;
  });
});

if (document.querySelector(".nav-link.active")) {
  const initialBg = document
    .querySelector(".nav-link.active")
    .getAttribute("data-bg");
  document.querySelector(
    ".featured-categories"
  ).style.backgroundImage = `url('${initialBg}')`;
}

window.onscroll = (e)=>{
    const navbar = document.querySelector('.navbar-container');
    console.log(window.scrollY);
    if(window.scrollY >= 173){
        navbar.classList.add('navbar_Scroll');
    }else{
        navbar.classList.remove('navbar_scroll');
    }
}