var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

// function currentDiv(n) {
//   showDivs(slideIndex = n);
// }

function showDivs(n) {
  var interval;
  var i;
  var x = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demodots");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" w3-white", "");
//   }
  x[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " w3-white";
}

function autonext() {
  clearInterval(interval);
  autoSlide();
}

autoSlide();

// autonext();
function autoSlide() {
  interval = setInterval(function () {
      plusDivs(1);
  }, 1500);
}

function stopslide() {
  clearInterval(interval);
}