// selectors

const englishButton = document.querySelector('.js-english');
const englishResume = document.querySelector('.english');
const dutchButton = document.querySelector('.js-dutch');
const dutchResume = document.querySelector('.dutch');


// show and hide logic

englishButton.addEventListener('click', () => {
    dutchResume.classList.add('hide');
    englishResume.classList.remove('hide');
});

dutchButton.addEventListener('click', () => {
    englishResume.classList.add('hide');
    dutchResume.classList.remove('hide')
});