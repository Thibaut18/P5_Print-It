const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const dots = document.querySelector('.dots');
const img = document.querySelector('.banner-img');
let positionSlide = 0;
const txt = document.querySelector('.banner-txt');

leftArrow.addEventListener('click', function() {
	positionSlide--;
	if (positionSlide === -1) {
		positionSlide = slides.length - 1;
	}
	img.src = slides[positionSlide].image;
	txt.innerHTML = slides[positionSlide].tagLine;
	console.log('On clique sur la flèche de gauche');
	updateDots();
});

rightArrow.addEventListener('click', function() {
	positionSlide++;
	if (positionSlide === slides.length) {
		positionSlide = 0;
	}
	img.src = slides[positionSlide].image;
	txt.innerHTML = slides[positionSlide].tagLine;
	console.log('On clique sur la flèche de droite');
	updateDots();
});

