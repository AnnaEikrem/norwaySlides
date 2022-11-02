//Variables
const mySlideshowCards = document.querySelectorAll('.slideshow__card');
const myButtonPrevious = document.querySelector('#previousButton');
const myButtonNext = document.querySelector('#nextButton');
const myButtonDots = document.querySelectorAll('.dot');

//Event Listeners
myButtonPrevious.addEventListener('click', handleButtonPreviousClick);
myButtonNext.addEventListener('click', handleButtonNextClick);

//Event handlers
function handleButtonPreviousClick(event) {
	decreaseCurrentSlideIndex();
	updateSlideshowHTML();
}

function handleButtonNextClick(event) {
	increaseCurrentSlideIndex();
	updateSlideshowHTML();
}

let currentSlideIndex = 0;

//Methods
function decreaseCurrentSlideIndex() {
	if (currentSlideIndex > 0) {
		 currentSlideIndex -= 1;
	} else {
		currentSlideIndex = mySlideshowCards.length -1;
	}
}

function increaseCurrentSlideIndex() {
	if (currentSlideIndex < mySlideshowCards.length -1) {
		currentSlideIndex += 1;
	} else {
		currentSlideIndex = 0;
	}
}	

function updateSlideshowHTML() {
	for (let index = 0; index < mySlideshowCards.length; index += 1) {
		mySlideshowCards[index].classList.remove('slideshow__card-visible');
	}

	for (let index = 0; index < myButtonDots.length; index += 1) {
		myButtonDots[index].classList.remove('dot-active');
	}

	mySlideshowCards[currentSlideIndex].classList.add('slideshow__card-visible');
	myButtonDots[currentSlideIndex].classList.add('dot-active');
}

window.addEventListener('keydown', handleWindowKeydown);

function handleWindowKeydown(event) {
	if (event.key === 'ArrowLeft') {
		decreaseCurrentSlideIndex();
		updateSlideshowHTML();

	} else if (event.key === 'ArrowRight') {
		increaseCurrentSlideIndex();
		updateSlideshowHTML();
	}
}




