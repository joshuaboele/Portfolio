import { data } from "./data.js";

// dom elements

const title = document.querySelector(".project__video--title");
const description = document.querySelector(".project__description");
const video = document.querySelector(".project__video");
const navigateButton = document.querySelectorAll(".project-navigation__button");
let link = document.querySelector(".project__link");

// default value

let index = 0;

navigateButton.forEach((el) => {
    el.addEventListener("click", function () {
        index = this.dataset.index;
        title.innerHTML = data[index].title;
        video.src = data[index].videoSrc;
        description.innerHTML = data[index].description;
        link.href = data[index].url;
    });
});
