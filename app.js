import { data } from "./data.js";

// dom elements

const title = document.querySelector(".project__video--title");
const description = document.querySelector(".project__description");
const video = document.querySelector(".project__video");
const navigateButton = document.querySelectorAll(".project-navigation__button");
const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
    const toggleDescription = project.querySelector(".project__button");
    const additionalInfo = project.querySelector(".project__more");

    toggleDescription.addEventListener("click", function () {
        additionalInfo.classList.toggle("is-visible");
        if (additionalInfo.classList.contains("is-visible")) {
            toggleDescription.textContent = "Minimize";
        } else {
            toggleDescription.textContent = "Read more";
        }
    });
});

// default value

let index = 0;

navigateButton.forEach((el) => {
    el.addEventListener("click", function () {
        index = this.dataset.index;
        title.innerHTML = data[index].title;
        video.src = data[index].videoSrc;
        description.innerHTML = data[index].description;
    });
});

// function swapProject() {}

// swapProject();
