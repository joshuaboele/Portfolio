import { data } from "./data.js";

// dom elements

const title = document.querySelector(".project__video--title");
const description = document.querySelector(".project__description");
const video = document.querySelector(".project__video");
const projectButton = document.querySelectorAll(".project-navigation__button");

console.log(video.src);

// default value

let index = 0;

projectButton.forEach((el) => {
    el.addEventListener("click", function () {
        index = this.dataset.index;
        title.innerHTML = data[index].title;
        video.src = data[index].videoSrc;
        description.innerHTML = data[index].description;
    });
});

// function swapProject() {}

// swapProject();
