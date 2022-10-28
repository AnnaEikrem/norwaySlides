//Variables
let currentSlideIndex = 0;
const slideshowCards = document.querySelectorAll('.slideshow__card');
const buttonPrevious = document.querySelector('#previousButton');
const buttonNext = document.querySelector('#nextButton');
const dots = document.querySelectorAll('.dot')

//Event listeners
buttonPrevious.addEventListener('click', handleButtonPreviousClick);
buttonNext.addEventListener('click', handleButtonNextClick);
//dots.addEventListener('keyup', handleButtonDotClick);

//Event handlers
function handleButtonPreviousClick(event) {
	decreaseCurrentSlideIndex();
	updateSlideHtml();
}

function handleButtonNextClick(event) {
	increaseCurrentSlideIndex();
	updateSlideHtml();
}

//Methods

function decreaseCurrentSlideIndex() {
	if (currentSlideIndex > 0) {
		currentSlideIndex -= 1;
	} else {
		currentSlideIndex = slideshowCards.length;
	}
	//console.log(`go to slide index ${currentSlideIndex}`);
}

function increaseCurrentSlideIndex() {
	if (currentSlideIndex < slideshowCards.length) {
		currentSlideIndex += 1;
	} else {
		currentSlideIndex = 0;
	}
	//console.log(`go to slide index ${currentSlideIndex}`);
}

function updateSlideHtml() {
	slideshowCards[currentSlideIndex].classList.add('slideshow__card-visible');

}




