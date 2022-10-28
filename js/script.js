//Variables
const mySlideshowCards = document.querySelectorAll('.slideshow__card');
const myButtonPrevious = document.querySelector('#previousButton');
const myButtonNext = document.querySelector('#nextButton');

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
	for (index = 0; index < mySlideshowCards.length; index += 1) {
		mySlideshowCards[index].classList.remove('slideshow__card-visible');
	}
	mySlideshowCards[currentSlideIndex].classList.add('slideshow__card-visible');
}







































////Variables
//const slideshowCards = document.querySelectorAll('.slideshow__card');
//const buttonPrevious = document.querySelector('#previousButton');
//const buttonNext = document.querySelector('#nextButton');
////const dots = document.querySelectorAll('.dot')

////Event listeners
//buttonPrevious.addEventListener('click', handleButtonPreviousClick);
//buttonNext.addEventListener('click', handleButtonNextClick);
////dots.addEventListener('keyup', handleButtonDotClick);

////Event handlers
//function handleButtonPreviousClick(event) {
//	decreaseCurrentSlideIndex();
//	updateSlideHTML();
//}

//function handleButtonNextClick(event) {
//	increaseCurrentSlideIndex();
//	updateSlideHTML();
//}

////Variables
//let currentSlideIndex = 0;

////Methods

//function decreaseCurrentSlideIndex() {
//	if (currentSlideIndex > 0) {
//		currentSlideIndex -= 1;
//	} else {
//		currentSlideIndex = slideshowCards.length - 1;
//	}
//	console.log(`go to slide index ${currentSlideIndex}`);
//}

//function increaseCurrentSlideIndex() {
//	if (currentSlideIndex < slideshowCards.length - 1) {
//		currentSlideIndex += 1;
//	} else {
//		currentSlideIndex = 0;
//	}
//	console.log(`go to slide index ${currentSlideIndex}`);
//}

//function changeCurrentSlideIndex(index) {
//	currentSlideIndex = index;
//}

////Argument changeCurrentSlideIndex(1)


//function updateSlideHTML() {
//	for(let index = 0; index < slideshowCards.length; index += 1) {
//		slideshowCards[index].classList.remove('slideshow__card-visible');
//	}

//	slideshowCards[currentSlideIndex].classList.add('slideshow__card-visible');
//}




