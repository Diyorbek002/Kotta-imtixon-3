var elHeader = document.querySelector(".header");
var elHeaderHamburgBtn = document.querySelector(".header__hamburg-btn");


elHeaderHamburgBtn.addEventListener('click', function(){
  elHeader.classList.toggle("header--open");
});