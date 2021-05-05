const btnNext = document.querySelector('.fa-chevron-right');
const btnPrevious = document.querySelector('.fa-chevron-left');

const images = document.querySelectorAll('.navigation__chair');
let imagesCounter = 0;

const firstImage = images[0];
console.log(firstImage);

firstImage.classList.add('visible');

btnNext.addEventListener('click', function(){
    images[imagesCounter].classList.toggle('visible');
    if(imagesCounter === images.length-1) {
        imagesCounter = 0;
    } else {
        imagesCounter++;
    }
    images[imagesCounter].classList.toggle('visible');
});

btnPrevious.addEventListener('click', function () {
    images[imagesCounter].classList.toggle('visible');
    if (imagesCounter === 0) {
        imagesCounter = images.length -1;
    } else {
        imagesCounter--;
    }
    images[imagesCounter].classList.toggle('visible');
})


