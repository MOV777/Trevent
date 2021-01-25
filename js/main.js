//Selectors
window.onload = () => {
   // бургер меню
   const gamb = document.querySelector('.header__burger');
   const gambMob = document.querySelector('.menu__burger');
   const menu = document.querySelector('.menu');

   gamb.onclick = () => {
      menu.classList.add('active');
      gambMob.classList.add('active');
   }

   gambMob.onclick = () => {
      menu.classList.remove('active');
      gambMob.classList.remove('active');
   }

   //проверка на тип устройства

   let isMobile = {
      Android: function () { return navigator.userAgent.match(/Android/i); },
      BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
      iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
      Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
      Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
      any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
   };

   let body = document.querySelector('body');
   if (isMobile.any()) {
      body.classList.add('touch');
      let arrow = document.querySelectorAll('.menu__item-arrow');
      for (i = 0; i < arrow.length; i++) {
         let subMenu = arrow[i].nextElementSibling;
         arrow[i].addEventListener('click', function () {
            this.classList.toggle('open');
            subMenu.classList.toggle('open');
         });
      }
   } else {
      body.classList.add('mouse');
   }

   // реализация скролла страницы

   window.onscroll = () => {
      if (window.scrollY > 0) {
         scrollBtn.classList.remove('isShowBtn_hide');
      } else {
         scrollBtn.classList.add('isShowBtn_hide');
      }
   }

   var $page = $('html, body');
   const scrollBtn = document.querySelector('.isShowBtn');
   $('.isShowBtn').click(function () {
      $page.animate({
         scrollTop: 0
      }, 400);
      return false;
   });
}

// настройка слик слайдера

$(document).ready(function () {
   $('.slider__wrapper').slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
   }),
      $('.company__row').slick({
         arrows: true,
         slidesToShow: 4,
         slidesToScroll: 4,
         speed: 500,
         easing: 'ease',
         infinite: true,
         autoplay: true,
         autoplaySpeed: 3000,
         pauseOnHover: true,
         responsive: [
            {
               breakpoint: 1200,
               settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
               }
            },
            {
               breakpoint: 992,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
               }
            },
            {
               breakpoint: 767,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
               }
            }
         ]
      });
})