let index = 1;
showSlide(index);

//change querySelector to getElementById and then 
const buttonPrevious = document.querySelector('#previousButton');
const buttonNext = document.querySelector('#nextButton');

buttonPrevious.addEventListener('click', handlebuttonPreviousOnClick);
buttonNext.addEventListener('click', handlebuttonNextOnClick);

function handlebuttonPreviousOnClick() {
	changeSlides(-1)
}

function handlebuttonNextOnClick() {
	changeSlides(1)
}

function changeSlides(direction) {
	showSlide(index += direction);
}





//const activeDot = document.querySelectorAll('.dot');
//activeDot.document.addEventListener('click', currentDot);

//function currentDot(currentIndexDot) {
//	currentIndexDot(" active");
//}




//reset all to inactive and show new active
function showSlide(newIndex) {
	let i;
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
	for (let index = 0; index < slidesCollection.length; index++) {
		slidesCollection[index].style.display = "none"; 
	}

	//unselect all dots
	for (let index = 0; index < dots.length; index += 1) {
		dots[index].className = dots[index].className.replace(" active", ""); 	
	}
	//show slide with active index
	slidesCollection[index-1].style.display = "block"; 

	//show dot with active index
	dots[index -1].className += " active";
}



//function dotImages () {
//	const dotImage = document.querySelectorAll('')
//}






//dots.document.addEventListener('click', currentDot)

//function currentDot


//for (i = 0; i < dots.length; i +=1) {									
//	dots[i].className = dots[i].className.replace(" active", ""); 
//}
//slides[index-1].style.display = "block"; 
//dots[index-1].className += ".active";


//let dotsWrapper = document.querySelectorAll('#dotsWrapper');
//let dots = dotsWrapper.querySelectorAll('.dot');

//function currentDot() {
//	togglePicture()
//}









