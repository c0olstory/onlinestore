/*--------------------*/
function ibg(){

   let ibg=document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
   if(ibg[i].querySelector('img')){
   ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
   }
   }
   }
   
   ibg();
/*--------------------*/
/*--------Реализация поиска------------*/
let search = document.querySelector('.header__search-icon') ;
search.addEventListener("click", function(e) {
   let searchField = document.querySelector('.header__search');
   searchField.classList.add('_active');
});

document.documentElement.addEventListener("click", function(e) {
   if(!e.target.closest('.header__search-body') && !e.target.closest('.header__search-icon')) {
      let removeActive = document.querySelector('.header__search');
      removeActive.classList.remove('_active');
   }
});

// let closeButton = document.querySelector('.header__search-close') ;
// closeButton.addEventListener("click", function(e) {
//    let searchField = document.querySelector('.header__search');
//    searchField.classList.remove('_active');
// });

/*--------------------*/

/*--------Реализация меню------------*/

let menuIcon = document.querySelector('.header__menu-icon') ;
menuIcon.addEventListener("click", function(e) {
   let toggleActive = document.querySelector('.header__menu');
   toggleActive.classList.toggle('_active');
});

document.documentElement.addEventListener("click", function(e) {
   if(!e.target.closest('.main-menu__body') && !e.target.closest('.header__menu-icon')) {
      let removeActive = document.querySelector('.header__menu');
      removeActive.classList.remove('_active');
   }
});

closeObject('.header__search-close', '.header__search');
closeObject('.main-menu__close', '.header__menu');

function closeObject(classObject, classSelect) {
   let closeButton = document.querySelector(classObject);
   closeButton.addEventListener("click", function(e) {
      let removeActive = document.querySelector(classSelect);
      removeActive.classList.remove('_active');
   });
};



