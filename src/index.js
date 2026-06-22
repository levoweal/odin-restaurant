import "./styles.css";
import { homePage } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

const content = document.querySelector('#content');
const homeBtn = document.querySelector('.home-button');
const menuBtn = document.querySelector('.menu-button');
const aboutBtn = document.querySelector('.about-button');

homePage();
homeBtn.classList.add('active');

function update(func, button) {
    content.textContent = '';
    func();
    homeBtn.classList.remove('active');
    menuBtn.classList.remove('active');
    aboutBtn.classList.remove('active');
    button.classList.add('active');
}

homeBtn.addEventListener('click', () => update(homePage, homeBtn));
menuBtn.addEventListener('click', () => update(menu, menuBtn));
aboutBtn.addEventListener('click', () => update(about, aboutBtn));