let index = 1;
showSlides(index);

//const plusSlides = document.querySelector('.button__next');
//const minusSlides = document.querySelector('.button__previous');


// Next/previous controls


//function minusSlides(n) {
//	showSlides(index -= n);
//}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(index = n);
}

function plusSlides(n) {
	showSlides(index += n);
}

function showSlides(n) {
	let i;
	let slides = document.querySelectorAll('.slideshow__card');
	let dots = document.querySelectorAll('.dot');
	
	if (n > slides.length) {
		index = 1;
	} 

	if (n < 1) {
		index = slides.length;
	}
	
	for (i = 0; i < slides.length; i +=1) {
		slides[i].style.display = "none"; 
	}
	
	for (i = 0; i < dots.length; i +=1) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[index-1].style.display = " block"; 
	dots[index-1].className += " active";
}






// const dots = document.querySelectorAll('.dot');
// const slideImages = document.querySelectorAll('.slideshow__image');


// dots.addEventlistener('click', handleDotClick);

// function handleDotClick(event){
// 	if()
// }









