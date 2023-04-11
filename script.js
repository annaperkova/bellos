
const swiper = new Swiper('.swiper-container', {
   slidesPerView: 'auto',
   spaceBetween: 0,
   loop: true,
   slideToClickedSlide: true,
   freeMode: true,
   navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
   },
});
