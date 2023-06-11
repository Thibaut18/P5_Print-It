/**
 * Tableau de diapositives définissant toutes les propriétés des diapositives.
 * @type {Array.<{image: string, tagLine: string}>}
 */
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

/**
 * Éléments DOM utilisés dans la navigation des diapositives.
 */
const $leftArrow = document.querySelector('.arrow_left');
const $rightArrow = document.querySelector('.arrow_right');
const $dotsContainer = document.querySelector('.dots');
const $img = document.querySelector('.banner-img');
const $txt = document.querySelector('.banner-txt');

/**
 * Index de la diapositive actuelle.
 * @type {number}
 */
let positionSlide = 0;

/**
 * Met à jour l'état des points qui indiquent la diapositive actuelle.
 * @param {NodeListOf<HTMLElement>} dotsList - La liste des éléments point.
 * @param {number} activeDotIndex - L'index du point actuellement actif.
 */
function updateDots(dotsList, activeDotIndex) {
	for (let i = 0; i < dotsList.length; i++) {
		if (i === activeDotIndex) {
			dotsList[i].classList.add('dot_selected');
		} else {
			dotsList[i].classList.remove('dot_selected');
		}
	}
}

/**
 * Passe à la diapositive précédente.
 */
$leftArrow.addEventListener('click', function() {
	positionSlide--;
	if (positionSlide === -1) {
		positionSlide = slides.length - 1;
	}
	$img.src = slides[positionSlide].image;
	$txt.innerHTML = slides[positionSlide].tagLine;
	updateDots(dots, positionSlide);
});

/**
 * Passe à la diapositive suivante.
 */
$rightArrow.addEventListener('click', function() {
	positionSlide++;
	if (positionSlide === slides.length) {
		positionSlide = 0;
	}
	$img.src = slides[positionSlide].image;
	$txt.innerHTML = slides[positionSlide].tagLine;
	updateDots(dots, positionSlide);
});

/**
 * Crée des points pour chaque diapositive et les ajoute au conteneur.
 */
for (let i = 0; i < slides.length; i++) {
	const newDot = document.createElement('div');
	newDot.classList = 'dot';
	$dotsContainer.appendChild(newDot);
	newDot.addEventListener('click', function() {
		positionSlide = i;
		$img.src = slides[positionSlide].image;
		$txt.innerHTML = slides[positionSlide].tagLine;
		updateDots(dots, positionSlide);
	});
}

/**
 * Tous les points dans le diaporama.
 * @type {NodeListOf<HTMLElement>}
 */
let dots = document.querySelectorAll('.dot');

// Marque le premier point comme sélectionné au début.
dots[0].classList.add('dot_selected');




