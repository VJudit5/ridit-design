 /* Here the function mobileMenu() also adds an active class on our hamburger and our nav-menu 
 which makes our mobile menu open */


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

/* The closeMenu() function removes the active class from both 
the nav-menu and the hamburger which makes our mobile menu close. */

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}