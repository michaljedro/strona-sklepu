const btnNext = document.querySelector('.fa-chevron-right');
const btnPrevious = document.querySelector('.fa-chevron-left');

const images = document.querySelectorAll('.slider__image--img');
let imagesCounter = 0;

const firstImage = images[0];

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


var container = document.querySelectorAll('.image');

var imgs = document.querySelectorAll('.image__caption');

container.forEach(function(item, index) {
    item.addEventListener('mouseover', function(e){
        imgs[index].classList.toggle('image__caption--hidden')
    })
})
container.forEach(function(item, index) {
    item.addEventListener('mouseout', function(e){
        imgs[index].classList.toggle('image__caption--hidden')
    })
})


