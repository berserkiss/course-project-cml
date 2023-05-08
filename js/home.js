import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

const getGoodButtonClassName = 'hero__button';
const offerButtonClassName = 'offer__button';

const getGoodButton = document.querySelector(`.${getGoodButtonClassName}`);
const offerButton = document.querySelector(`.${offerButtonClassName}`);

getGoodButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'tariffs.html';
});

offerButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'account.html';
});

const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
