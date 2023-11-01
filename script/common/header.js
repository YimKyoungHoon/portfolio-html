const btn = document.querySelector(".btn");
const menuMobile = document.querySelector(".menuMobile");

btn.addEventListener("click",(e) => {
    e.preventDefault();
    btn.classList.toggle("on");
    menuMobile.classList.toggle("on");
})