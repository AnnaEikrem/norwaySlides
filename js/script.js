let index = 1;
showSlide(index);

const buttonPrevious = document.querySelector('#previousButton');
const buttonNext = document.querySelector('#nextButton');

buttonPrevious.addEventListener('click', handleButtonPreviousOnClick);
buttonNext.addEventListener('click', handleButtonNextOnClick);

function handleButtonPreviousOnClick() {
	changeSlides(-1);
}

function handleButtonNextOnClick() {
	changeSlides(1);
}

function changeSlides(direction) {
	showSlide(index += direction);
}

//reset all to inactive and show new active
function showSlide(newIndex) {
	let slidesCollection = document.querySelectorAll('.slideshow__card');
	let dots = document.querySelectorAll('.dot');	

	//if last picture - change to first
	if (newIndex > slidesCollection.length) {
		index = 1;
	} 

	//if first picture - change to last
	if (newIndex < 1) {
		index = slidesCollection.length;
	}
	
	//hide all slides
	for (let index = 0; index < slidesCollection.length; index += 1) {
		slidesCollection[index].style.display = "none"; 
	}

	//unselect all dots
	for (let index = 0; index < dots.length; index += 1) {
		dots[index].className = dots[index].className.replace(' dot-active', ''); 	
	}
	//show slide with active index
	slidesCollection[index-1].style.display = 'block'; 

	//show dot with active index
	dots[index -1].className += ' dot-active';	

	//change picture auto
	//setTimeout('changeSlides(1)', 3000);
}

//change picture with arrows on the keyboard
window.addEventListener('keydown', handleWindowKeydown);

function handleWindowKeydown(event) {
	if (event.key === 'ArrowLeft') {
		changeSlides(-1);

	} else if (event.key === 'ArrowRight') {
		changeSlides(1);
	}
}